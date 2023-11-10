'use client'
import { useEffect, useState } from 'react'
import InputField from '@/app/components/input/InputField'
import { gql, useMutation, useQuery } from '@apollo/client'
import Button from '../../input/Button'
import { useRouter } from 'next/navigation'
import AlertModalSucces from '../../modal/AlertModalSucces'
import AlertModalError from '../../modal/AlertModalError'
import Modal from '../../modal/Modal'
import { useBranch } from '@/app/hooks/branches/BranchInput'
import BranchForm from './BranchForm'

const CREATE_TYPE_SAVING = gql`
  mutation ($create: CreateBranchOfficeInput!) {
    createBranchOffice(createBranchOfficeInput: $create) {
      id
      name
      address
      phoneNumber
    }
  }
`

export function BranchCreate({
  setShowModalCreate
}: {
  setShowModalCreate: any
}) {
  const [accounts, setAccounts] = useState<number[]>([])
  const [
    createBranch,
    { data: dataCreate, loading: loadingCreate, error: errorCreate }
  ] = useMutation(CREATE_TYPE_SAVING)
  const { branch, handleBranch } = useBranch()
  const route = useRouter()
  const [showWarning, setShowWarning] = useState(false)

  useEffect(() => {
    if (dataCreate) {
      const timeout = setTimeout(() => {
        setShowWarning(false)
      }, 3000) // 3 seconds in milliseconds

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [dataCreate, errorCreate])

  if (dataCreate?.createBranchOffice && !showWarning) {
    setShowModalCreate(false)
    route.refresh()
  }

  const handleCreateBranch = () => {
    setShowWarning(true)
    createBranch({
      variables: {
        create: branch
      }
    })
  }

  return (
    <Modal
      size="min-w-[550px] w-[600px]"
      title="Create branch"
      onClick={() => {
        setShowModalCreate(false)
      }}
    >
      <div className="flex flex-col   w-full h-full">
        {/* InputFields */}
        <BranchForm
          branch={branch}
          handleBranch={handleBranch}
          onClickAccept={handleCreateBranch}
          onClickCancel={() => {}}
        />
        {dataCreate?.createBranchOffice && showWarning ? (
          <AlertModalSucces value={`The branch has been created successfuly`} />
        ) : (
          dataCreate?.createBranch === false &&
          showWarning &&
          errorCreate &&
          showWarning && <AlertModalError value="Error" />
        )}
      </div>
    </Modal>
  )
}
