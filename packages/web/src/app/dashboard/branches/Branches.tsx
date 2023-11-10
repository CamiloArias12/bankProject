'use client'

import { BranchCreate } from '@/app/components/forms/branches/CreateBranch'
import TableBranch from '@/app/components/forms/branches/TableBranch'
import { Branch } from '@/lib/utils/branch/types'
import { useState } from 'react'

export const revalidate = 0

function Branches({ branchs }: { branchs: Branch[] }) {
  const [showModalCreate, setShowModalCreate] = useState(false)
  return (
    <>
      {showModalCreate && (
        <BranchCreate setShowModalCreate={setShowModalCreate} />
      )}
      <div className="flex flex-col flex-grow mx-4 ">
        <div className="flex flex-grow flex-col bg-white rounded-tr-[20px] rounded-b-[20px] ">
          <TableBranch
            branchs={branchs}
            setShowModalCreate={setShowModalCreate}
          />
        </div>
      </div>
    </>
  )
}

export default Branches
