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
          label="Branch name"
          value={branch.name}
          onChange={handleBranch}
        />
        <Input
          name="address"
          label="Address"
          value={branch.address}
          onChange={handleBranch}
        />
        <Input
          name="phoneNumber"
          label="Phone number"
          value={branch.phoneNumber}
          onChange={handleBranch}
        />

        <div className="flex justify-end gap-2">
          <Button
            onClick={onClickCancel}
          >Cancel</Button>
          <Button
            onClick={onClickAccept}
          >Done</Button>
        </div>
      </div>
    </>
  )
}

export default BranchForm
