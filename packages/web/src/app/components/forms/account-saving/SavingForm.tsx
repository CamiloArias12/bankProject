'use client'
import InputField from '@/app/components/input/InputField'
import Button from '../../input/Button'
import InputNumber from '../../input/InputNumber'
import InputCalendar from '../../input/Calendar'
import SelectField from '../../input/SelectField'
import SelectClient from '../../input/SelectClient'

export function SavingForm({
  onClickAccept,
  onClickCancel,
  handleSaving,
  saving,
  handleSavingSelect,
  clients
}: {
  onClickAccept: any
  onClickCancel: any
  saving: any
  handleSaving: any
  handleSavingSelect: any
  clients?: any
}) {
  return (
    <>
      <div className="flex flex-col space-y-4 w-full max-w-3xl p-4">
        <>
          <SelectClient
            label="Identificación"
            name="clientId"
            value={saving.clientId}
            options={clients}
            setValue={handleSavingSelect}
          />
          <InputField
            label="Nombres"
            value={saving.nameClient}
            onlyRead={true}
          />
        </>
        <InputNumber
          label="Interes"
          value={Number(saving.interestRate)}
          name="interestRate"
          handleChange={handleSavingSelect}
        />
        <InputCalendar
          name="startDate"
          label="Fecha de inicio"
          value={saving.openingDate}
          onChange={handleSavingSelect}
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

export default SavingForm
