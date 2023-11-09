import { Resolver,Query, Mutation, Args } from '@nestjs/graphql';
import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';
import { CreateUserInput } from '../dto/create-user-inupt';

@Resolver()
export class EmployeeResolver {

   constructor(
      private readonly employeeService:EmployeeService,

   ){}

    @Query(() => [Employee])
    async allEmployees(): Promise<Employee[]> {
        return await this.employeeService.findAll();
    }
/*
    @Query(() => User, { nullable: true })
    async employee(@Args('id') id: number): Promise<User> {
        return await this.employeeService.findOne(id);
    }

*/
 @Mutation(() => Employee)
    async createEmployee(@Args('inputEmployee')inputEmployee:CreateUserInput): Promise <Employee>{
	    return await  this.employeeService.create(inputEmployee)
	 
    }


}
