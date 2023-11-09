'use client';

import { SavingCreate } from "@/app/components/forms/account-saving/CreateSaving";
import TableSaving from "@/app/components/forms/account-saving/TableSaving";
import { Saving } from "@/lib/utils/savings/types";
import { useState } from "react";



export const revalidate = 0;

function Savings({ savings }: { savings: Saving[] }) {
   const [showModalCreate,setShowModalCreate]=useState(false)
  return (
   <>
     {showModalCreate &&<SavingCreate setShowModalCreate={setShowModalCreate}/>}
    <div className="flex flex-col flex-grow mx-4 ">
      <div className="flex flex-grow flex-col bg-white rounded-tr-[20px] rounded-b-[20px] ">
        <TableSaving savings={savings}  setShowModalCreate={setShowModalCreate}/>
      </div>
    </div>
    </>
  );
}

export default Savings;
