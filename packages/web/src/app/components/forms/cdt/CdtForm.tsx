'use client'
import InputField from '@/app/components/input/InputField'
import Button from '../../input/Button'
import InputNumber from '../../input/InputNumber'
import InputCalendar from '../../input/Calendar'
import SelectField from '../../input/SelectField'
import SelectClient from '../../input/SelectClient'

export function CdtForm({
  onClickAccept,
  onClickCancel,
  handleCdt,
  cdt,
  handleCdtSelect,
  clients
}: {
  onClickAccept: any
  onClickCancel: any
  cdt: any
  handleCdt: any
  handleCdtSelect: any
  clients?: any
}) {
  return (
    <>
      <div className="flex flex-col space-y-4 w-full max-w-3xl p-4">
        {clients && (
          <>
            <SelectClient
              label="Identificación"
              name="clientId"
              value={cdt.clientId}
              options={clients}
              setValue={handleCdtSelect}
            />
            <InputField
              label="Nombres"
              value={cdt.nameClient}
              onlyRead={true}
            />
          </>
        )}
        <InputNumber
          label="Valor"
          value={Number(cdt.depositAmount)}
          name="depositAmount"
          handleChange={handleCdtSelect}
        />
        <InputNumber
          label="Interes"
          value={Number(cdt.interestRate)}
          name="interestRate"
          handleChange={handleCdtSelect}
        />
        <InputCalendar
          name="startDate"
          label="Fecha de inicio"
          value={cdt.startDate}
          onChange={handleCdtSelect}
        />

        <InputCalendar
          name="maturityDate"
          label="Fecha de vencimiento"
          value={cdt.maturityDate}
          onChange={handleCdtSelect}
        />

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

export default CdtForm
