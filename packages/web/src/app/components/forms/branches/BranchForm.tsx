'use client'
import InputField from '@/app/components/input/InputField'
import Button from '../../input/Button'

export function BranchForm({
  onClickAccept,
  onClickCancel,
  handleBranch,
  branch
}: {
  onClickAccept: any
  onClickCancel: any
  branch: any
  handleBranch: any
}) {
  return (
    <>
      <div className="flex flex-col space-y-4 w-full max-w-3xl p-4">
        <InputField
          name="name"
          label="Nombre"
          value={branch.name}
          onChange={handleBranch}
        />
        <InputField
          name="address"
          label="Direccion"
          value={branch.address}
          onChange={handleBranch}
        />
        <InputField
          name="phoneNumber"
          label="Telefono"
          value={branch.phoneNumber}
          onChange={handleBranch}
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

export default BranchForm
