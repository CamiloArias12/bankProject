'use client';
import { useEffect, useState } from 'react';
import InputField from '@/app/components/input/InputField';
import { gql, useMutation, useQuery } from '@apollo/client';
import Button from '../../input/Button';
import { useRouter } from 'next/navigation';
import AlertModalSucces from '../../modal/AlertModalSucces';
import AlertModalError from '../../modal/AlertModalError';
import Modal from '../../modal/Modal';
import UserForm from './UserForm';
import { useUser } from '@/app/hooks/user/UserInput';

const GET_USER= gql`
query($id:Int!) {
  getUser (id:$id){
  	identification
    name
    lastName
    email
    phone
    password
  }
  
}
`;
const UPDATE_USER= gql`
mutation ($id:Float!,$data:CreateUserInput!){
  updateUser(identification:$id,inputUser:$data)
}
`
;

export function UserUpdate({
  setShowModalUpdate,
  selected
}: {
  setShowModalUpdate: any,selected:number;
}) {
  const [
    updateUser,
    { data: dataUpdate, loading: loadingUpdate, error: errorUpdate },
  ] = useMutation(UPDATE_USER);
  const { user, handleUser,setUser ,handleUserSelect} = useUser();
  const route = useRouter();
  const [showWarning, setShowWarning] = useState(false);
  const {
    data: dataUser,
    loading,
    error,
  } = useQuery(GET_USER,{variables:{id:selected}});
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

  if (dataUpdate?.updateUser && !showWarning) {
    setShowModalUpdate(false);
    route.refresh();
  }

  const handleUpdateUser = () => {
    setShowWarning(true);
        updateUser({
      variables: {
        data:user,
	id:selected
      },
    });
  };

   useEffect (() => {
      if(dataUser){
	 setUser(dataUser.getUser)
      }
   },[dataUser])
   
  
  return (
    <Modal
      size="min-w-[550px] w-[600px]"
      title="Actualizar usuario"
      onClick={() => {
        setShowModalUpdate(false);
      }}
    >
      <div className="flex flex-col   w-full h-full">
          {/* InputFields */}
	 <UserForm
	     user={user}
	     handleChange={handleUserSelect}
	     handleUser={handleUser}
	     onClickAccept={handleUpdateUser}
	     onClickCancel={() =>{}}
	 /> 
        {dataUpdate?.updateUser && showWarning ? (
          <AlertModalSucces value={`Los datos han sido actualizados`} />
        ) : (
          (errorUpdate &&
          showWarning) && <AlertModalError value="Error" />
        )}
      </div>
    </Modal>
  );
}

