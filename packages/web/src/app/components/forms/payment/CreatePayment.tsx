'use client';
import { useEffect, useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';
import AlertModalSucces from '../../modal/AlertModalSucces';
import AlertModalError from '../../modal/AlertModalError';
import Modal from '../../modal/Modal';
import PaymentForm from './PaymentForm';
import { usePayment } from '@/app/hooks/payment/PaymentInput';
import { optionspayment } from '@/lib/utils/payment/options';

const CREATE_PAYMENT_CREDIT = gql`
mutation($create:CreatePaymentInput!){
  createPaymentCredit(createPaymentInput:$create)
}`;
const CREATE_PAYMENT_CDT = gql`
mutation($create:CreatePaymentInput!){
  createPaymentCdt(createPaymentInput:$create)
}`;

const CREATE_PAYMENT_ACCOUNT = gql`
mutation($create:CreatePaymentInput!){
  createPaymentAccount(createPaymentInput:$create)
}`;
const GET_CLIENT = gql`
query{
  allClient{
    user{
      identification
      name
      lastName
    }
    
  }
}
`;
export function PaymentCreate({
  setShowModalCreate,
}: {
  setShowModalCreate: any;
}) {
  const [
    createPaymentCredit,
    { data: dataCreate, loading: loadingCreate, error: errorCreate },
  ] = useMutation(CREATE_PAYMENT_CREDIT);
   const [
    createPaymentCdt,
    { data: dataCdt, loading: loadingCdt, error: errorCdt },
  ] = useMutation(CREATE_PAYMENT_CDT);

   const [
    createPaymentSaving,
    { data: dataSaving, loading: loadingSaving, error: errorSaving},
   ] = useMutation(CREATE_PAYMENT_ACCOUNT);

  const { payment, handlePayment,handlePaymentSelect } = usePayment();
  const [ clients,setClients] = useState([]);
  const route = useRouter();
  const [showWarning, setShowWarning] = useState(false);
   const { data:dataClients, loading, error } = useQuery(GET_CLIENT,);

  const [indexForm, setIndexForm] = useState(0);
 


useEffect(() => {
  if (dataClients) {
    const mappedClients = dataClients.allClient.map((client:any) => {
      return { id: client.user.identification, name: `${client.user.name} ${client.user.lastName}` };
    });
    setClients(mappedClients);
  }
}, [dataClients]);

  useEffect(() => {
    if (dataCreate) {
      const timeout = setTimeout(() => {
        setShowWarning(false);
      }, 3000); // 3 seconds in milliseconds

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [dataCreate, errorCreate]);

  if (dataCreate?.createPayment && !showWarning) {
    setShowModalCreate(false);
    route.push('/dashboard/payments');
    route.refresh();
  }

  const handleCreatePayment = () => {
    setShowWarning(true);
    if(indexForm==1){
      createPaymentCredit ({
	 variables:{
	    create :{
	       id:payment.id,
	       credit:payment.idCredit ,
	       
	    }
	 }
    }) 
  }

  if(indexForm==2){
      createPaymentCdt ({
	 variables:{
	    create :{
	       id:payment.id,
	       value:payment.value
	       
	    }
	 }
    }) 
  }
if(indexForm==3){
      createPaymentSaving ({
	 variables:{
	    create :{
	       id:payment.id,
	       value: payment.value,
	       
	    }
	 }
    }) 
  }

}
 
  return (
    <Modal
      size="min-w-[550px] w-[600px]"
      title="Crear sucursal"
      onClick={() => {
        setShowModalCreate(false);
      }}
    >
      <div className="flex flex-col   w-full h-full">
      <div className="flex flex-row bg-[#F2F6F8] mt-3 p-2 rounded-lg ">
          {optionspayment.map((option) => (
            <div
              key={option.id}
              className="flex flex-row w-full items-center justify-center text-sm "
              onClick={() => {
                setIndexForm(option.id);
              }}
            >
              <div
                className={`h-5 w-5  rounded-[50%] border-2 border-[#054818] ${
                  option.id === indexForm ? 'bg-[#054818]' : 'bg-white'
                }`}
              />
              <label className="ml-2 mr-4">{option.name}</label>
            </div>
          ))}
        </div>

          {/* InputFields */}
	 <PaymentForm
	     payment={payment}
	     handlePayment={handlePayment}
	     handlePaymentSelect={handlePaymentSelect}
	     clients={clients}
	     onClickAccept={handleCreatePayment}
	     onClickCancel={() =>{}}
	     index={indexForm}
	 /> 
        {dataCreate?.createPayment && showWarning ? (
          <AlertModalSucces value={`El pago ha sido registrado`} />
        ) : (
          dataCreate?.createPayment === false &&
          showWarning &&
          errorCreate &&
          showWarning && <AlertModalError value="Error" />
        )}
      </div>
    </Modal>
  );
}

