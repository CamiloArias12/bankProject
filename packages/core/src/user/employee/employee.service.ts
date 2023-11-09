import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Employee } from './employee.entity';
import { QueryRunner, Repository } from 'typeorm';
import { InputEmployeeCreate } from './dto/createEmployee.dto';
import { User } from '../user.entity';
import { CreateUserInput } from '../dto/create-user-inupt';

@Injectable()
export class EmployeeService {
   constructor (
      @InjectRepository(Employee)
      private readonly employeeRepository:Repository<Employee>,
   ){}

   async create(userInput:CreateUserInput): Promise<Employee> {
	const user:User=new User(userInput)
	const employee:Employee=new Employee()
	employee.user=user
      return await this.employeeRepository.save(employee)
    }
 

    async findAll(): Promise<Employee[]> {
        return await this.employeeRepository.find();
    }

      
  
}
