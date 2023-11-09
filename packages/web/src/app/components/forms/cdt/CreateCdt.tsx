'use client';
import { useEffect, useState } from 'react';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useRouter } from 'next/navigation';
import AlertModalSucces from '../../modal/AlertModalSucces';
import AlertModalError from '../../modal/AlertModalError';
import Modal from '../../modal/Modal';
import CdtForm from './CdtForm';
import { useCdt } from '@/app/hooks/cdt/CdtInput';

const CREATE_CDT = gql`
 mutation ($create:CreateCdtInput!){
  createCdt (createCdtInput:$create){
    id
  }
  		
}
`;

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
export function CdtCreate({
  setShowModalCreate,
}: {
  setShowModalCreate: any;
}) {
  const [
    createCdt,
    { data: dataCreate, loading: loadingCreate, error: errorCreate },
  ] = useMutation(CREATE_CDT);
  const { cdt, handleCdt,handleCdtSelect } = useCdt();
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

  if (dataCreate?.createCdt && !showWarning) {
    setShowModalCreate(false);
    route.push('/dashboard/cdts');
    route.refresh();
  }

  const handleCreateCdt = () => {
    setShowWarning(true);
        createCdt({
      variables: {
        create: {startDate:cdt.startDate,depositAmount:cdt.depositAmount,maturityDate:cdt.maturityDate, interestRate:cdt.interestRate ,clientId:cdt.clientId},
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
	 <CdtForm
	     cdt={cdt}
	     handleCdt={handleCdt}
	     handleCdtSelect={handleCdtSelect}
	     clients={dataClients?.allClient}
	     onClickAccept={handleCreateCdt}
	     onClickCancel={() =>{}}
	 /> 
        {dataCreate?.createCdt && showWarning ? (
          <AlertModalSucces value={`El cdt ha sido registrado`} />
        ) : (
          dataCreate?.createCdt === false &&
          showWarning &&
          errorCreate &&
          showWarning && <AlertModalError value="Error" />
        )}
      </div>
    </Modal>
  );
}

