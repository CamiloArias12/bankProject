import { useQuery, gql } from '@apollo/client';
import Modal from '../../modal/Modal';
import SplashScreen from '../../splash/Splash';
import { useEffect, useState } from 'react';
import { AmortizationTable } from '@/lib/utils/credit/types';
import UpdateTableAmortization from './UpdateTableAmortization';
import { useCredit } from '@/app/hooks/credit/CreditInput';
import InputField from '../../input/InputField';
import InputCalendar from '../../input/Calendar';
import Button from '../../input/Button';

const GET_CREDIT = gql`
  query getCredit($id: Int!) {
    findOneCredit(id: $id) {
      id
      creditValue
      interest
      startDate
      state
      client {
        user {
          identification
          name
          lastName
        }
      }
      installments {
        installmentNumber
        paymentDate
        initialBalance
        scheduledPayment
        extraPayment
        totalPayment
        capital
        interest
        finalBalance
        state
      }
    }
  }`;

function UpdateCredit({
  idCredit,
  setShow,
}: {
  idCredit: number;
  setShow: any;
}) {
  const {
    credit,
    setCredit,
    handleCreditNumber,
    handleCreditSelect,
    handleCredit,
  } = useCredit();
  const {
    data: dataUser,
    loading,
    error,
  } = useQuery(GET_CREDIT, {
    variables: { id: idCredit },
  });

  const [data, setData] = useState<AmortizationTable[]>([]);

  useEffect(() => {
    if (dataUser) {
      setData(dataUser?.findOneCredit?.installments);
      setCredit({
        identification:dataUser?.findOneCredit?.client?.user?.identification,
        creditValue: dataUser?.findOneCredit?.creditValue,
        startDate: new Date(dataUser?.findOneCredit?.startDate),
        installments: (dataUser?.findOneCredit?.installments).length,
        interestAnual: String( dataUser?.findOneCredit?.interest * (12 / 100) * 100,),
        nameClient: `${dataUser?.findOneCredit?.client?.user?.name} ${dataUser?.findOneCredit?.client?.user?.lastName}`,
        scheduledPayment:dataUser?.findOneCredit?.installments[0].scheduledPayment,
        interest: dataUser?.findOneCredit?.interest
      });
    }
  }, [dataUser]);

  if (error) {
    return (
      <Modal
        size="h-[100px] w-[300px]"
        title="Error"
        onClick={() => setShow(false)}
      >asd</Modal>
    );
  }
  return (
    <Modal
      size="max-h-[90%] w-[90%]"
      title="Actualizar credito"
      onClick={() => setShow(false)}
    >
      {data.length > 0 && (
        <>
          <div className="flex flex-grow  flex-col   rounded-sm my-10 ">
            <div className=" flex-grow flex flex-row">
              <div className="flex-grow flex flex-col pr-2 ">
                <label className="text-center text-white  bg-[#054818] text-input font-bold mb-2">
                 Cliente 
                </label>
                <div className=" flex flex-grow  flex-row">
                  <InputField
                    label="Identificación"
                    name="identification"
                    value={credit.identification}
                    onlyRead={true}
                  />
                  <InputField
                    label="Nombres"
                    value={credit.nameClient}
                    onlyRead={true}
                  />
		 
                </div>
              </div>
                          </div>
            <div className="flex-grow flex flex-col mt-2  ">
              <label className="text-center text-white  bg-[#054818]   text-input font-bold mb-2">
                Datos credito
              </label>
              <div className="flex-grow flex flex-row">
                <InputCalendar
                  name="startDate"
                  label="Fecha de creación"
                  value={credit.startDate}
                  onChange={handleCreditSelect}
                />
		 <InputField
                    label="Interés"
                    value={credit.interest}
                    onlyRead={true}
                  />

               <InputField
                  label="Valor"
                  value={credit.creditValue}
                  onlyRead={true}
                />
                <InputField
                  label="Número de coutas"
                  value={credit.installments}
                  onBlur={handleCreditNumber}
                  onlyRead={true}
                />
                <InputField
                  label="Valor couta"
                  value={credit.scheduledPayment}
                  onlyRead={true}
                />
              </div>
            </div>

            <UpdateTableAmortization
              setData={setData}
              data={data}
              setSelected={true}
            />
                     </div>
        </>
      )}
    </Modal>
  );
}

export default UpdateCredit;
