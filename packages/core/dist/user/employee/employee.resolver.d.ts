import { Employee } from './employee.entity';
import { EmployeeService } from './employee.service';
import { CreateUserInput } from '../dto/create-user-inupt';
export declare class EmployeeResolver {
    private readonly employeeService;
    constructor(employeeService: EmployeeService);
    allEmployees(): Promise<Employee[]>;
    createEmployee(inputEmployee: CreateUserInput): Promise<Employee>;
}
