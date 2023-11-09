'use client';
import { useEffect, useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';
import AlertModalSucces from '../../modal/AlertModalSucces';
import AlertModalError from '../../modal/AlertModalError';
import Modal from '../../modal/Modal';
import SavingForm from './SavingForm';
import { useSaving } from '@/app/hooks/saving/SavingInput';

const CREATE_SAVING = gql`
  mutation ($create:CreateSavingAccountInput!){
  	createSavingAccount(createSavingAccountInput:$create){
    id
  }	
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
export function SavingCreate({
  setShowModalCreate,
}: {
  setShowModalCreate: any;
}) {
  const [
    createSaving,
    { data: dataCreate, loading: loadingCreate, error: errorCreate },
  ] = useMutation(CREATE_SAVING);
  const { saving, handleSaving,handleSavingSelect } = useSaving();
  const [ clients,setClients] = useState([]);
  const route = useRouter();
  const [showWarning, setShowWarning] = useState(false);
   const { data:dataClients, loading, error } = useQuery(GET_CLIENT,);

 




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

  if (dataCreate?.createSavingAccount && !showWarning) {
    setShowModalCreate(false);
    route.push('/dashboard/savings');
    route.refresh();
  }

  const handleCreateSaving = () => {
    setShowWarning(true);
        createSaving({
      variables: {
        create: {openingDate:saving.openingDate,interestRate:saving.interestRate ,clientId:saving.clientId},
      },
    });
  };

 
  return (
    <Modal
      size="min-w-[550px] w-[600px]"
      title="Crear sucursal"
      onClick={() => {
        setShowModalCreate(false);
      }}
    >
      <div className="flex flex-col   w-full h-full">
          {/* InputFields */}
	 <SavingForm
	     saving={saving}
	     handleSaving={handleSaving}
	     handleSavingSelect={handleSavingSelect}
	     clients={dataClients?.allClient}
	     onClickAccept={handleCreateSaving}
	     onClickCancel={() =>{}}
	 /> 
        {dataCreate?.createSavingAccount && showWarning ? (
          <AlertModalSucces value={`La cuenta de ahorros ha sido creada`} />
        ) : (
          dataCreate?.createSavingAccount === false &&
          showWarning &&
          errorCreate &&
          showWarning && <AlertModalError value="Error" />
        )}
      </div>
    </Modal>
  );
}

