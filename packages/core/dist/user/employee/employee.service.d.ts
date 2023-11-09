import { Employee } from './employee.entity';
import { Repository } from 'typeorm';
import { CreateUserInput } from '../dto/create-user-inupt';
export declare class EmployeeService {
    private readonly employeeRepository;
    constructor(employeeRepository: Repository<Employee>);
    create(userInput: CreateUserInput): Promise<Employee>;
    findAll(): Promise<Employee[]>;
}
