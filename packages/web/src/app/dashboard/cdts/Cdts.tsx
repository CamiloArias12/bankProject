'use client'

import { CdtCreate } from '@/app/components/forms/cdt/CreateCdt'
import TableCdt from '@/app/components/forms/cdt/TableCdt'
import { Cdt } from '@/lib/utils/cdt/types'
import { useState } from 'react'

export const revalidate = 0

function Cdts({ cdts }: { cdts: Cdt[] }) {
  const [showModalCreate, setShowModalCreate] = useState(false)
  return (
    <>
      {showModalCreate && <CdtCreate setShowModalCreate={setShowModalCreate} />}
      <div className="flex flex-col flex-grow mx-4 ">
        <div className="flex flex-grow flex-col bg-white rounded-tr-[20px] rounded-b-[20px] ">
          <TableCdt cdts={cdts} setShowModalCreate={setShowModalCreate} />
        </div>
      </div>
    </>
  )
}

export default Cdts
