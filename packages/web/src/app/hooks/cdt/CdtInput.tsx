import { useState } from 'react'

export function useCdt() {
  //@ts-ignore
  const [cdt, setCdt] = useState({
    depositAmount: '',
    startDate: new Date(),
    maturityDate: new Date(),
    interestRate: '',
    clientId: ''
  })

  const handleCdt = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target
    setCdt(prevData => ({ ...prevData, [name]: value }))
  }
  const handleCdtSelect = (name: string, value: any) => {
    setCdt(prevData => ({ ...prevData, [name]: value }))
  }

  const handleCdtNumber = (name: string, value: any) => {
    if (!isNaN(Number(value))) {
      setCdt(prevData => ({ ...prevData, [name]: Number(value) }))

      return true
    }
    return false
  }

  return {
    cdt,
    handleCdt,
    handleCdtSelect,
    handleCdtNumber,
    setCdt
  }
}
