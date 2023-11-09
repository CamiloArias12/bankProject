'use client';

import { User } from '@/lib/utils/user/types';
import { useState } from 'react';
import { UserCreate } from '@/app/components/forms/users/CreateUser';
import TableUser from '@/app/components/forms/users/TableUser';

export const revalidate = 0;

function Users({ users }: { users: User[] }) {
   const [showModalCreate,setShowModalCreate]=useState(false)
  return (
   <>
     {showModalCreate &&<UserCreate setShowModalCreate={setShowModalCreate}/>}
    <div className="flex flex-col flex-grow mx-4 ">
      <div className="flex flex-grow flex-col bg-white rounded-tr-[20px] rounded-b-[20px] ">
        <TableUser users={users}  setShowModalCreate={setShowModalCreate}/>
      </div>
    </div>
    </>
  );
}

export default Users;
