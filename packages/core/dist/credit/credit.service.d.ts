import { DataSource, Repository } from 'typeorm';
import { Credit } from './credit.entity';
import { CreateInstallment } from './installments/dto/create-installment.input';
import { StateCredit } from './dto/enum-types';
import { CreateCreditInput } from './dto/create-credit.input';
import { ClientService } from 'src/user/client/client.service';
import { ViewCredit } from './credit-view.entity';
export declare class CreditService {
    private readonly creditRepository;
    private readonly clientService;
    private dataSource;
    constructor(creditRepository: Repository<Credit>, clientService: ClientService, dataSource: DataSource);
    create(data: CreateCreditInput): Promise<any>;
    updateState(id: number, state: StateCredit): Promise<Credit>;
    findOne(id: number): Promise<Credit>;
    delete(id: number): Promise<Boolean>;
    findAllByClient(identification: number): Promise<ViewCredit[]>;
    findAll(): Promise<ViewCredit[]>;
    isRefinance(id: number): Promise<Boolean>;
    findAllCredit(): Promise<Credit[]>;
    amortizationTableGenerate(dateCredit: Date, valueLoan: number, interest: number, installments: number): Promise<CreateInstallment[]>;
    pmt(principal: number, interestRate: number, numberOfPayments: number): number;
}
