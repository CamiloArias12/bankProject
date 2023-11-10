'use client'
import { useEffect, useState } from 'react'
import { gql, useMutation } from '@apollo/client'
import { useRouter } from 'next/navigation'
import AlertModalSucces from '../../modal/AlertModalSucces'
import AlertModalError from '../../modal/AlertModalError'
import Modal from '../../modal/Modal'
import UserForm from './UserForm'
import { useUser } from '@/app/hooks/user/UserInput'
import { optionsUser } from '@/lib/utils/user/options'
import { Radio, RadioGroup } from '@nextui-org/react'

const CREATE_CLIENT = gql`
  mutation ($create: CreateUserInput!) {
    createClient(inputClient: $create) {
      user {
        name
      }
    }
  }
`

const CREATE_EMPLOYEE = gql`
  mutation ($create: CreateUserInput!) {
    createEmployee(inputEmployee: $create) {
      user {
        identification
      }
    }
  }
`
export function UserCreate({
  setShowModalCreate
}: {
  setShowModalCreate: any
}) {
  const [
    createClient,
    { data: dataCreate, loading: loadingCreate, error: errorCreate }
  ] = useMutation(CREATE_CLIENT)
  const [
    createEmployee,
    { data: dataEmployee, loading: loadingEmployee, error: errorEmployee }
  ] = useMutation(CREATE_EMPLOYEE)
  const { user, handleUser, handleUserSelect } = useUser()
  const route = useRouter()
  const [showWarning, setShowWarning] = useState(false)
  const [indexForm, setIndexForm] = useState(0)

  useEffect(() => {
    if (dataCreate) {
      const timeout = setTimeout(() => {
        setShowWarning(false)
      }, 3000) // 3 seconds in milliseconds

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [dataCreate, errorCreate, dataEmployee, errorEmployee])

  if (
    (dataCreate?.createClient || dataEmployee?.createEmployee) &&
    !showWarning
  ) {
    setShowModalCreate(false)
    route.push('/dashboard/users')
    route.refresh()
  }

  const handleCreateUser = () => {
    setShowWarning(true)

    if (indexForm == 2) {
      createClient({
        variables: {
          create: user
        }
      })
    } else {
      createEmployee({
        variables: {
          create: user
        }
      })
    }
  }

  return (
    <Modal
      size="min-w-[550px] w-[600px]"
      title="Create user"
      onClick={() => {
        setShowModalCreate(false)
      }}
    >
      <div className="flex flex-col w-full h-full">
        <div className="flex flex-row gap-2 py-2">
              <RadioGroup onValueChange={(d) => setIndexForm(d)}>
          {optionsUser.map(option => (
                <Radio value={option.id}>{option.name}</Radio>
          ))}
              </RadioGroup>
        </div>
        <UserForm
          user={user}
          handleUser={handleUser}
          onClickAccept={handleCreateUser}
          onClickCancel={() => { }}
          handleChange={handleUserSelect}
        />
        {dataCreate?.createClient && showWarning ? (
          <AlertModalSucces value={`The client has been created`} />
        ) : (
          errorCreate && showWarning && <AlertModalError value="Error" />
        )}
        {dataEmployee?.createEmployee && showWarning ? (
          <AlertModalSucces value={`The admin has been created`} />
        ) : (
          errorCreate && showWarning && <AlertModalError value="Error" />
        )}
      </div>
    </Modal>
  )
}
