import { PaymentService } from './payment.service';
import { CreatePaymentInput } from './dto/create-payment.input';
export declare class PaymentResolver {
    private readonly paymentService;
    constructor(paymentService: PaymentService);
    createPaymentCredit(createPaymentInput: CreatePaymentInput): Promise<Boolean>;
    createPaymentCdt(createPaymentInput: CreatePaymentInput): Promise<Boolean>;
    createPaymentAccount(createPaymentInput: CreatePaymentInput): Promise<Boolean>;
    findAllPaymentCredit(): Promise<any>;
    findAllPaymentCdt(): Promise<any>;
    findAllPaymentAccount(): Promise<any>;
}
