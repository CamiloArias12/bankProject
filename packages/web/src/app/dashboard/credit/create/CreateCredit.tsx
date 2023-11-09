'use client';

import InputField from '@/app/components/input/InputField';
import { useEffect, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import Button from '@/app/components/input/Button';
import TableAmortization from '@/app/components/forms/credit/TableAmortization';
import { AmortizationTable } from '@/lib/utils/credit/types';
import { optionsCredit } from '@/lib/utils/credit/options';
import { useCredit } from '@/app/hooks/credit/CreditInput';
import { useRouter } from 'next/navigation';
import AlertModalSucces from '@/app/components/modal/AlertModalSucces';
import AlertModalError from '@/app/components/modal/AlertModalError';
import InputCalendar from '@/app/components/input/Calendar';
import InputNumber from '@/app/components/input/InputNumber';
import SelectClient from '@/app/components/input/SelectClient';

const GENERATE_TABLE_AMORTIZATION = gql`
  mutation (
    $date: Date!
    $creditValue: Float!
    $interest: Float!
    $installments: Int!
  ) {
    amortizationTableGenerate(
      Date: $date
      creditValue: $creditValue
      interest: $interest
      installments: $installments
    ) {
      installmentNumber
      paymentDate
      initialBalance
      scheduledPayment
      extraPayment
      totalPayment
      capital
      interest
      finalBalance
    }
  }
`;
const CREATE_CREDIT = gql`
  mutation ($create: CreateCreditInput!) {
    createCredit(createCreditInput: $create) {
      id
      startDate
      state
     }
  }
`;
export const revalidate = 0;
function FormCredit({
  clients,
  creditType,
}: {
  clients: any;
  creditType: any;
  accounts?: any;
}) {
  const { credit, handleCreditNumber, handleCreditSelect, handleCredit } =
    useCredit();

  const [data, setData] = useState<AmortizationTable[]>([]);
  const [
    generateAmortizationTable,
    {
      data: dataAmortization,
      loading: loadingAmortization,
      error: errorAmortization,
    },
  ] = useMutation(GENERATE_TABLE_AMORTIZATION);
   const [
    createCredit,
    { data: dataCreate, loading: loadingCreate, error: errorCreate },
  ] = useMutation(CREATE_CREDIT);
  const [showWarning, setShowWarning] = useState(false);
  const route = useRouter();

  const handleCreateCredit = () => {
    const create = {
      creditValue: credit.creditValue,
      interest: credit.interest,
      startDate: credit.startDate,
      clientId:Number( credit.identification),
      installments: data,
    };
    createCredit({
      variables: {
        create: create,
      }
    });

  };

  const handleGenerateTable = () => {
    setShowWarning(true);
      generateAmortizationTable({
        variables: {
          date: credit.startDate,
          creditValue: credit.creditValue,
          interest: credit.interest,
          installments: credit.installments,
        },
      })
     };


   
  useEffect(() => {
   if(dataAmortization){
      setData(dataAmortization.amortizationTableGenerate)
      handleCreditNumber('installments', data.length);
   }
   
  },[dataAmortization])
  
  useEffect(() => {
    if (data) {
      const timeout = setTimeout(() => {
        setShowWarning(false);
      }, 2000); // 3 seconds in milliseconds

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [dataCreate, errorCreate]);


  if (dataCreate?.createCredit && !showWarning) {
    route.push('/dashboard/credit');
    route.refresh();
  }

  console.log(credit)
  return (
    <div className=" flex-grow flex flex-col  ">
      <div className="flex justify-between ">
        <label className="font-bold px-4 item-center  bg-white pt-2">
          Crear crédito
        </label>
      </div>

      <div className="  flex flex-col bg-white p-4">
        <div className="flex flex-grow  flex-col  rounded-sm ">
          <div className=" flex-grow flex flex-row">
            <div className="flex-grow flex flex-col pr-2 ">
              <label className="text-center text-white  bg-[#054818] text-input font-bold mb-2">
               Cliente 
              </label>
              <div className=" flex flex-grow  flex-row">
                <SelectClient
                  label="Identificación"
                  name="identification"
                  value={credit.identification}
                  options={clients}
                  setValue={handleCreditSelect}
                />
		<InputField
		     label="Nombres"
		     name="name"
		     value={credit.nameClient}
		     onlyRead={true}

		     />

                             </div>
            
                         </div>
            </div>
          </div>
          <div className="flex-grow flex flex-col mt-2  ">
            <label className="text-center text-white  bg-[#054818]   text-input font-bold mb-2">
              Datos crédito
            </label>
            <div className="flex-grow flex flex-row">
               <InputCalendar
                name="discountDate"
                label="Fecha"
                value={credit.startDate}
                onChange={handleCreditSelect}
              />
	      <InputNumber
	        label="Interes"
                value={Number(credit.interest)}
                name="interest"
                handleChange={handleCreditSelect}
		/>
              <div className="flex flex-grow  flex-row">
	       <InputNumber
	        label="Valor"
                value={Number(credit.creditValue)}
                name="creditValue"
                handleChange={handleCreditSelect}
		/>

              <InputField
                label="Número de coutas"
                value={credit.installments}
                onBlur={handleCreditNumber}
                onChange={handleCredit}
                name="installments"
              />
              <InputField
                label="Valor couta"
                value={credit.scheduledPayment}
                onBlur={handleCreditNumber}
                onChange={handleCredit}
                name="scheduledPayment"
              />
            </div>
          </div>
        </div>
        <div className="pt-2 flex justify-end mr-4 ">
         <button
            className="flex flex-row rounded-sm bg-[#F2FFA5] p-2 "
            onClick={handleGenerateTable}
          >
            <img src="/generate.svg" height={20} width={20} />
            <label className="font-sans px-6 text-sm">Generar tabla</label>
          </button>
        </div>
        <>
          {data.length > 0 && (
            <div className="flex-grow flex-col">
              <TableAmortization
                data={data}
                setData={setData}
                setSelected={true}
              />

              <div className="py-4  flex flex-end">
                <Button
                  name="Aceptar"
                  background="bg-[#10417B] 
			   text-white"
                  onClick={handleCreateCredit}
                />
              </div>
            </div>
          )}
        </>
        {dataCreate?.createCredit && showWarning ? (
          <AlertModalSucces value="El  crédito ha sido registrado" />
        ) : dataCreate?.createCredit === false && showWarning ? (
          <AlertModalError value="El credit ya existe" />
        ) : (
          errorCreate && showWarning && <AlertModalError value="Error" />
        )}
      </div>
    </div>
  );
}

export default FormCredit;
