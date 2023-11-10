import { useState } from 'react'

export function usePayment() {
  //@ts-ignore
  const [payment, setPayment] = useState({
    id: '',
    idCredit: '',
    value: ''
  })

  const handlePayment = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target
    setPayment(prevData => ({ ...prevData, [name]: value }))
  }
  const handlePaymentSelect = (name: string, value: any) => {
    setPayment(prevData => ({ ...prevData, [name]: value }))
  }

  const handlePaymentNumber = (name: string, value: any) => {
    if (!isNaN(Number(value))) {
      setPayment(prevData => ({ ...prevData, [name]: Number(value) }))

      return true
    }
    return false
  }

  return {
    payment,
    handlePayment,
    handlePaymentSelect,
    handlePaymentNumber,
    setPayment
  }
}
