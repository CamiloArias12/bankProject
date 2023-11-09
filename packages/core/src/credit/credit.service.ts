import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { Credit } from './credit.entity';
import { addMonths } from 'date-fns';
import { CreateInstallment} from './installments/dto/create-installment.input';
import { StateCredit } from './dto/enum-types';
import { CreateCreditInput } from './dto/create-credit.input';
import { ClientService } from 'src/user/client/client.service';
import { ViewCredit } from './credit-view.entity';
import { Client } from 'src/user/client/client.entity';
import { User } from 'src/user/user.entity';
@Injectable()
export class CreditService {
  constructor(
    @InjectRepository(Credit)
    private readonly creditRepository: Repository<Credit>,
    private readonly clientService:ClientService,
    private dataSource:DataSource
  ) { }

  async create (data:CreateCreditInput){
      const client=await this.clientService.findOne(data.clientId) 
      console.log(client)
      const credit=new Credit(data)
      credit.client=client
      console.log(client)
      return await this.creditRepository.save(credit);
  } 
  async updateState(id:number,state:StateCredit):Promise<Credit>{
      console.log(await this.creditRepository.update({id:id},{state:state}));
      return await this.findOne(id);
   }

  async findOne(id: number): Promise<Credit> {
    return this.creditRepository.findOne(
       {relations :{
	 client:{
	    user:true
	 },
	 installments:true
       },where:{id:id}})	 

  }
  async delete(id: number): Promise<Boolean> {
    try {
       await this.creditRepository.delete(id);
       return true;
    } catch (e) {
       return false;
    }
  }
  async findAllByClient(identification:number): Promise<ViewCredit[]> {
    const query= await this.dataSource
	  .createQueryBuilder()
	 .select("user.identification","identification")
	 .addSelect("user.name","name")
	 .addSelect("user.lastName","lastName")
	 .addSelect("credit.id","id")
	 .addSelect("credit.startDate","startDate")
	 .addSelect("credit.creditValue","creditValue")
	 .addSelect("credit.interest","interest")
	 .addSelect("credit.state","state")
	 .from(Credit,"credit")
         .leftJoin(Client, "client", "credit.clientIdClient= client.idClient")
         .leftJoin(User, "user", "client.idClient= user.identification")	 
	 .where("client.idClient= :idClient",{idClient:identification})
	 .getRawMany()
      
	 console.log(query)
	 return query

  } 

  async findAll(): Promise<ViewCredit[]> {
    return await this.dataSource.manager.find(ViewCredit) 

  } 
   async isRefinance(id:number):Promise<Boolean>{
     const query= await this.creditRepository.findOne(
	 {
	    where :{
	       id:id,
	       state:StateCredit.CURSO
	    },
	 }
      )
     return query ? true : false; 
   }
   
   async findAllCredit():Promise<Credit[]>{
      return this.creditRepository.find();
   }
  
  async amortizationTableGenerate(dateCredit:Date,valueLoan:number,interest:number,installments:number):Promise<CreateInstallment[]>{
     const array:CreateInstallment[]=[]
     let loanPartial=valueLoan
     const valueInstallment=this.pmt(valueLoan,((interest*(12/100))*100),installments)
    for (let i = 0; i < installments; i++) {
       const interestValue=loanPartial*(0.014)
       const finalBalance=loanPartial-(valueInstallment-interestValue)

       array.push({installmentNumber:i+1,paymentDate:addMonths( dateCredit,i),initialBalance:Math.round(loanPartial),
		  scheduledPayment:Math.round(valueInstallment),extraPayment:0,totalPayment:Math.round(valueInstallment),
		  capital:Math.round(valueInstallment-interestValue),
		  interest:Math.round(interestValue),finalBalance:Math.round(finalBalance)})

	 loanPartial=loanPartial-(valueInstallment-interestValue)

    }
     return array ;
  }

 
   pmt(principal: number, interestRate: number, numberOfPayments: number): number {
      const monthlyInterestRate = interestRate /( 12*100);
      console.log(monthlyInterestRate)
      const presentValueFactor = Math.pow(1 + monthlyInterestRate, numberOfPayments);
      console.log(presentValueFactor)
      return principal * monthlyInterestRate * presentValueFactor / (presentValueFactor - 1);
   }

  }

