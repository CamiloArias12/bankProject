'use client'
import { Button, Input } from '@nextui-org/react'

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
      <div className="flex flex-col space-y-4 w-full">
        <Input
          name="name"
          label="Nombre"
          value={branch.name}
          onChange={handleBranch}
        />
        <Input
          name="address"
          label="Direccion"
          value={branch.address}
          onChange={handleBranch}
        />
        <Input
          name="phoneNumber"
          label="Telefono"
          value={branch.phoneNumber}
          onChange={handleBranch}
        />

        <div className="flex justify-end gap-2">
          <Button
            onClick={onClickCancel}
          >Cancelar</Button>
          <Button
            onClick={onClickAccept}
          >Aceptar</Button>
        </div>
      </div>
    </>
  )
}

export default BranchForm
