import { useState } from 'react'

export function useCredit() {
  //@ts-ignore
  const [credit, setCredit] = useState({
    nameClient: '',
    identification: '',
    creditValue: '',
    typeCredit: '',
    startDate: new Date(),
    interest: '',
    interestAnual: '',
    installments: '',
    scheduledPayment: ''
  })

  const handleCredit = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target
    setCredit(prevData => ({ ...prevData, [name]: value }))
  }
  const handleCreditSelect = (name: string, value: any) => {
    setCredit(prevData => ({ ...prevData, [name]: value }))
  }

  const handleCreditNumber = (name: string, value: any) => {
    if (!isNaN(Number(value))) {
      setCredit(prevData => ({ ...prevData, [name]: Number(value) }))
      return true
    }
    return false
  }

  return {
    credit,
    handleCredit,
    handleCreditSelect,
    handleCreditNumber,
    setCredit
  }
}
