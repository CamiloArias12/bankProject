'use client';
import { useEffect, useState } from 'react';
import InputField from '@/app/components/input/InputField';
import { gql, useMutation, useQuery } from '@apollo/client';
import Button from '../../input/Button';
import { useRouter } from 'next/navigation';
import AlertModalSucces from '../../modal/AlertModalSucces';
import AlertModalError from '../../modal/AlertModalError';
import Modal from '../../modal/Modal';
import CdtForm from './CdtForm';
import { useCdt } from '@/app/hooks/cdt/CdtInput';

const GET_BRANCH= gql`
 query getCredit($id: Int!) {
 	findOneCdt(id:$id){
  	depositAmount
    startDate
    maturityDate
    interestRate
  }
}
`;
const UPDATE_CDT= gql`
mutation($id:Float!,$data:CreateCdtInput!){
  updateCdt(inputCdt:$data,id:$id)
}

`;

export function CdtUpdate({
  setShowModalUpdate,
  selected
}: {
  setShowModalUpdate: any,selected:number;
}) {
  const [
    updateCdt,
    { data: dataUpdate, loading: loadingUpdate, error: errorUpdate },
  ] = useMutation(UPDATE_CDT);
  const { cdt, handleCdt,setCdt,handleCdtSelect } = useCdt();
  const route = useRouter();
  const [showWarning, setShowWarning] = useState(false);
  const {
    data: dataCdt,
    loading,
    error,
  } = useQuery(GET_BRANCH,{variables:{id:selected}});
  useEffect(() => {
    if (dataUpdate) {
      const timeout = setTimeout(() => {
        setShowWarning(false);
      }, 3000); // 3 seconds in milliseconds

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [dataUpdate, errorUpdate]);

  if (dataUpdate?.updateCdt&& !showWarning) {
    setShowModalUpdate(false);
    route.refresh();
  }

  const handleUpdateCdt = () => {
    setShowWarning(true);
        updateCdt({
      variables: {
	 id:selected,
	 data: {startDate:cdt.startDate,depositAmount:cdt.depositAmount,maturityDate:cdt.maturityDate, interestRate:cdt.interestRate ,clientId:0},
      },
    });
  };

   useEffect (() => {
      if(dataCdt){
	 setCdt(dataCdt.findOneCdt)
      }
   },[dataCdt])
   
  
  return (
    <Modal
      size="min-w-[550px] w-[600px]"
      title="Actualizar cdt"
      onClick={() => {
        setShowModalUpdate(false);
      }}
    >
      <div className="flex flex-col   w-full h-full">
          {/* InputFields */}
	 <CdtForm
	     cdt={cdt}
	     handleCdt={handleCdt}
	     onClickAccept={handleUpdateCdt}
	     onClickCancel={() =>{}}
	     handleCdtSelect={handleCdtSelect}

	 /> 
        {dataUpdate?.updateCdt&& showWarning ? (
          <AlertModalSucces value={`Los datos han sido actualizados`} />
        ) : (
          (errorUpdate &&
          showWarning )&& <AlertModalError value="Error" />
        )}
      </div>
    </Modal>
  );
}

