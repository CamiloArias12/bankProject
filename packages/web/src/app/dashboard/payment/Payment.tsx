'use client'

import { PaymentCreate } from '@/app/components/forms/payment/CreatePayment'
import TablePayment from '@/app/components/forms/payment/TablePayment'
import { Payment } from '@/lib/utils/payment/type'
import { useState } from 'react'

export const revalidate = 0

function Payments({ payments }: { payments: Payment[] }) {
  const [showModalCreate, setShowModalCreate] = useState(false)
  return (
    <>
      {showModalCreate && (
        <PaymentCreate setShowModalCreate={setShowModalCreate} />
      )}
      <div className="flex flex-col flex-grow mx-4 ">
        <div className="flex flex-grow flex-col bg-white rounded-tr-[20px] rounded-b-[20px] ">
          <TablePayment
            paymentss={payments}
            setShowModalCreate={setShowModalCreate}
          />
        </div>
      </div>
    </>
  )
}

export default Payments
