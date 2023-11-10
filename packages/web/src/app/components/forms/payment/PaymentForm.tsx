'use client'
import Button from '../../input/Button'
import InputNumber from '../../input/InputNumber'

export function PaymentForm({
  onClickAccept,
  onClickCancel,
  handlePayment,
  payment,
  handlePaymentSelect,
  clients,
  index
}: {
  onClickAccept: any
  onClickCancel: any
  payment: any
  handlePayment: any
  handlePaymentSelect: any
  index: number
  clients?: any
}) {
  return (
    <>
      <div className="flex flex-col space-y-4 w-full max-w-3xl p-4">
        <InputNumber
          label={`${index === 1 ? 'Id credito' : 'Id'} `}
          value={Number(payment.id)}
          name="id"
          handleChange={handlePaymentSelect}
        />
        {index === 1 && (
          <InputNumber
            label="No couta"
            value={Number(payment.interestRate)}
            name="idCredit"
            handleChange={handlePaymentSelect}
          />
        )}

        {index !== 1 && (
          <InputNumber
            label="Valor"
            value={Number(payment.interestRate)}
            name="value"
            handleChange={handlePaymentSelect}
          />
        )}

        <div className="pt-10 flex justify-end">
          <div className="pr-4">
            <Button
              name="Cancelar"
              background="border border-[#054818] text-[#054818]"
              onClick={onClickCancel}
            />
          </div>
          <div className="pr-4">
            <Button
              name="Aceptar"
              background="bg-[#054818] text-white"
              onClick={onClickAccept}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentForm
