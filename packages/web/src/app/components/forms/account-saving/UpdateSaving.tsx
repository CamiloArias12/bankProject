'use client';
import { useEffect, useState } from 'react';
import InputField from '@/app/components/input/InputField';
import { gql, useMutation, useQuery } from '@apollo/client';
import Button from '../../input/Button';
import { useRouter } from 'next/navigation';
import AlertModalSucces from '../../modal/AlertModalSucces';
import AlertModalError from '../../modal/AlertModalError';
import Modal from '../../modal/Modal';
import SavingForm from './SavingForm';
import { useSaving } from '@/app/hooks/saving/SavingInput';

const GET_BRANCH= gql`
 query getCredit($id: Int!) {
 	findOneSaving(id:$id){
  	depositAmount
    startDate
    maturityDate
    interestRate
  }
}
`;
const UPDATE_BRANCH= gql`
mutation ($data:UpdateSavingOfficeInput!){
  updateSavingOffice(updateSavingOfficeInput:$data)
  
}
`;

export function SavingUpdate({
  setShowModalUpdate,
  selected
}: {
  setShowModalUpdate: any,selected:number;
}) {
  const [
    updateSaving,
    { data: dataUpdate, loading: loadingUpdate, error: errorUpdate },
  ] = useMutation(UPDATE_BRANCH);
  const { saving, handleSaving,setSaving,handleSavingSelect } = useSaving();
  const route = useRouter();
  const [showWarning, setShowWarning] = useState(false);
  const {
    data: dataSaving,
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

  if (dataUpdate?.updateSavingOffice && !showWarning) {
    setShowModalUpdate(false);
    route.refresh();
  }

  const handleUpdateSaving = () => {
    setShowWarning(true);
        updateSaving({
      variables: {
        data:{... saving,id:selected},
      },
    });
  };

   useEffect (() => {
      if(dataSaving){
	 setSaving(dataSaving.findOneSaving)
      }
   },[dataSaving])
   
  
  return (
    <Modal
      size="min-w-[550px] w-[600px]"
      title="Actualizar saving"
      onClick={() => {
        setShowModalUpdate(false);
      }}
    >
      <div className="flex flex-col   w-full h-full">
          {/* InputFields */}
	 <SavingForm
	     saving={saving}
	     handleSaving={handleSaving}
	     onClickAccept={handleUpdateSaving}
	     onClickCancel={() =>{}}
	     handleSavingSelect={handleSavingSelect}

	 /> 
        {dataUpdate?.updateSavingOffice && showWarning ? (
          <AlertModalSucces value={`Los datos han sido actualizados`} />
        ) : (
          dataUpdate?.updateSavingOffice === false &&
          showWarning &&
          errorUpdate &&
          showWarning && <AlertModalError value="Error" />
        )}
      </div>
    </Modal>
  );
}

