import { CreateTransactionInput } from "./dto/create-transaction.input";
import { UpdateTransactionInput } from "./dto/update-transaction.input";
export declare class TransactionService {
    create(createTransactionInput: CreateTransactionInput): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateTransactionInput: UpdateTransactionInput): string;
    remove(id: number): string;
}
