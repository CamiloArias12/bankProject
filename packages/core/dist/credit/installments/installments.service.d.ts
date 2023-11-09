import { DataSource, Repository } from 'typeorm';
import { Installment } from './installment.entity';
import { StateInstallment } from './dto/enum-types';
export declare class InstallmentsService {
    private installmentRepository;
    private dataSource;
    constructor(installmentRepository: Repository<Installment>, dataSource: DataSource);
    finOneByCreditAndNumberInstallment(idCredit: number, numberInstallment: number): Promise<Installment>;
    updateState(installmentNumber: number, credit: number, state: StateInstallment): Promise<void>;
}
