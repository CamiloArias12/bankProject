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
import { optionsUser } from '@/lib/utils/user/options';

const CREATE_CLIENT = gql`
 mutation ($create:CreateUserInput!){
  createClient(inputClient:$create) {
    user {
      name
    }
  }
  
}
`;

const CREATE_EMPLOYEE = gql`
mutation($create:CreateUserInput!){
 createEmployee (inputEmployee:$create){
  user{
    identification
  }
}  
}
`
export function UserCreate({
  setShowModalCreate,
}: {
  setShowModalCreate: any;
}) {
  const [
    createClient,
    { data: dataCreate, loading: loadingCreate, error: errorCreate },
  ] = useMutation(CREATE_CLIENT);
 const [
    createEmployee,
    { data: dataEmployee, loading: loadingEmployee, error: errorEmployee },
  ] = useMutation(CREATE_EMPLOYEE);
  const { user, handleUser,handleUserSelect } = useUser();
  const route = useRouter();
  const [showWarning, setShowWarning] = useState(false);
  const [indexForm, setIndexForm] = useState(0);

  useEffect(() => {
    if (dataCreate) {
      const timeout = setTimeout(() => {
        setShowWarning(false);
      }, 3000); // 3 seconds in milliseconds

      return () => {
        clearTimeout(timeout);
      };
    }
  }, [dataCreate, errorCreate,dataEmployee,errorEmployee]);

  if ((dataCreate?.createClient ||dataEmployee?.createEmployee)&& !showWarning) {

    setShowModalCreate(false);
    route.push('/dashboard/users');
    route.refresh();
  }

  const handleCreateUser = () => {
    setShowWarning(true);

    if(indexForm==2){
        createClient({
      variables: {
        create: user,
      },
    });
   }else {
   createEmployee({
      variables: {
        create: user,
      },
    });
    }

  };

  return (
    <Modal
      size="min-w-[550px] w-[600px]"
      title="Crear usuario"
      onClick={() => {
        setShowModalCreate(false);
      }}
    >
      <div className="flex flex-col   w-full h-full">

      <div className="flex flex-row bg-[#F2F6F8] mt-3 p-2 rounded-lg ">
          {optionsUser.map((option) => (
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
	 <UserForm
	     user={user}
	     handleUser={handleUser}
	     onClickAccept={handleCreateUser}
	     onClickCancel={() =>{}}
	     handleChange={handleUserSelect}
	 /> 
        {dataCreate?.createClient&& showWarning ? (
          <AlertModalSucces value={`El cliente ha sido creado`} />
        ) : (
          (errorCreate &&
          showWarning) && <AlertModalError value="Error" />
        )}
       {dataEmployee?.createEmployee&& showWarning ? (
          <AlertModalSucces value={`El empleado ha sido creado`} />
        ) : (
          (errorCreate &&
          showWarning) && <AlertModalError value="Error" />
        )}

      </div>
    </Modal>
  );
}

