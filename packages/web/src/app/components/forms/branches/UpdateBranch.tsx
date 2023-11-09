'use client';
import { useEffect, useState } from 'react';
import InputField from '@/app/components/input/InputField';
import { gql, useMutation, useQuery } from '@apollo/client';
import Button from '../../input/Button';
import { useRouter } from 'next/navigation';
import AlertModalSucces from '../../modal/AlertModalSucces';
import AlertModalError from '../../modal/AlertModalError';
import Modal from '../../modal/Modal';
import { useBranch } from '@/app/hooks/branches/BranchInput';
import BranchForm from './BranchForm';

const GET_BRANCH= gql`
query ($id:Int!) {
  findOneBranch(id:$id) {
    name
    address
    phoneNumber
  }
  
}
`;
const UPDATE_BRANCH= gql`
mutation ($data:UpdateBranchOfficeInput!){
  updateBranchOffice(updateBranchOfficeInput:$data)
  
}
  
`;

export function BranchUpdate({
  setShowModalUpdate,
  selected
}: {
  setShowModalUpdate: any,selected:number;
}) {
  const [
    updateBranch,
    { data: dataUpdate, loading: loadingUpdate, error: errorUpdate },
  ] = useMutation(UPDATE_BRANCH);
  const { branch, handleBranch,setBranch } = useBranch();
  const route = useRouter();
  const [showWarning, setShowWarning] = useState(false);
  const {
    data: dataBranch,
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

  if (dataUpdate?.updateBranchOffice && !showWarning) {
    setShowModalUpdate(false);
    route.refresh();
  }

  const handleUpdateBranch = () => {
    setShowWarning(true);
        updateBranch({
      variables: {
        data:{... branch,id:selected},
      },
    });
  };

   useEffect (() => {
      if(dataBranch){
	 setBranch(dataBranch.findOneBranch)
      }
   },[dataBranch])
   
  
  return (
    <Modal
      size="min-w-[550px] w-[600px]"
      title="Actualizar sucursal"
      onClick={() => {
        setShowModalUpdate(false);
      }}
    >
      <div className="flex flex-col   w-full h-full">
          {/* InputFields */}
	 <BranchForm
	     branch={branch}
	     handleBranch={handleBranch}
	     onClickAccept={handleUpdateBranch}
	     onClickCancel={() =>{}}
	 /> 
        {dataUpdate?.updateBranchOffice && showWarning ? (
          <AlertModalSucces value={`Los datos han sido actualizados`} />
        ) : (
          dataUpdate?.updateBranchOffice === false &&
          showWarning &&
          errorUpdate &&
          showWarning && <AlertModalError value="Error" />
        )}
      </div>
    </Modal>
  );
}

