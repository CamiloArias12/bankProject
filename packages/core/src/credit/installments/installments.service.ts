import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DataSource, Repository } from 'typeorm';
import { } from './dto/update-installment.input';
import { Installment } from './installment.entity';
import { StateInstallment } from './dto/enum-types';

@Injectable()
export class InstallmentsService {
  constructor(
   @InjectRepository(Installment)
    private installmentRepository: Repository<Installment>,
    private dataSource:DataSource
  ) { }

 
  async finOneByCreditAndNumberInstallment(idCredit:number,numberInstallment:number):Promise<Installment>{
     return await this.installmentRepository.findOne(
	{where :{ id_credit:idCredit ,
		  installmentNumber:numberInstallment
	}})

  }
  
  async updateState(installmentNumber:number,credit:number,state:StateInstallment){
      await this.installmentRepository.update({installmentNumber:installmentNumber,id_credit:credit},{state:state});
   }


}

