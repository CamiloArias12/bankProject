import { TransactionService } from "./transaction.service";
import { CreateTransactionInput } from "./dto/create-transaction.input";
import { UpdateTransactionInput } from "./dto/update-transaction.input";
export declare class TransactionResolver {
    private readonly transactionService;
    constructor(transactionService: TransactionService);
    createTransaction(createTransactionInput: CreateTransactionInput): string;
    findAll(): string;
    findOne(id: number): string;
    updateTransaction(updateTransactionInput: UpdateTransactionInput): string;
    removeTransaction(id: number): string;
}
