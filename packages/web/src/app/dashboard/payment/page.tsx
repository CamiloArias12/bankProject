import { gql } from '@apollo/client';
import { getClient } from '@/lib/graphql/apollo-client-server';
import { Payment } from '@/lib/utils/payment/type';
import Payments from './Payment';

export const revalidate = 0;

async function getPaymentes(): Promise<Payment[]> {
  const PAYMENTS= gql`
query {
  
  findAllPaymentCdt{
    id
    type
    value
    date
  }
  findAllPaymentCredit {
    id
    type
     value
    date
  }
  
  findAllPaymentAccount {
    id
    type
    value
    date
  }
}

`;
  const { data } = await getClient().query({ query: PAYMENTS});

  return data.findAllPaymentCdt.concat(data.findAllPaymentCredit,data.findAllPaymentAccount);
}

async function PagePayment() {
  console.log(getClient())
  const savings: Payment[] = await getPaymentes();

  return (
    <>
      <Payments payments={savings} />

    </>
  );
}

export default PagePayment;
