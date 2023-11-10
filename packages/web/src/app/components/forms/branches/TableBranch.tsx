import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { gql, useMutation } from '@apollo/client'
import AlertModalSucces from '../../modal/AlertModalSucces'
import AlertModalError from '../../modal/AlertModalError'
import { useBranch } from '@/app/hooks/branches/BranchInput'
import { Branch } from '@/lib/utils/branch/types'
import { BranchUpdate } from './UpdateBranch'
import { Button } from '@nextui-org/react'
import { CrossCircledIcon, Pencil1Icon, PlusIcon } from '@radix-ui/react-icons'

const DELETE_BRANCH = gql`
  mutation ($id: Int!) {
    deleteBranch(id: $id)
  }
`

function TableBranch({
  branchs,
  setShowModalCreate
}: {
  branchs: Branch[]
  setShowModalCreate: any
}) {


  const [data, setData] = useState<Branch[]>(branchs)
  const route = useRouter()

  useEffect(() => {
    setData(branchs)
  }, [branchs])


  const [update, setUpdate] = useState<boolean>(false)
  const [
    deleteTypeCredit,
    { data: deleteData, loading: loadingDelete, error: errorDelete }
  ] = useMutation(DELETE_BRANCH)
  const [selected, setSelected] = useState<number>(0)

  const [showWarning, setShowWarning] = useState(false)
  useEffect(() => {
    if (deleteData?.deleteBranch) {
      route.refresh()
    }
  }, [deleteData])

  const deleteBranchHandle = () => {
    setShowWarning(true)
    deleteTypeCredit({
      variables: {
        id: selected
      }
    })
  }

  useEffect(() => {
    if (deleteData) {
      if (deleteData?.deleteBranch) {
        route.refresh()
      }

      const timeout = setTimeout(() => {
        setShowWarning(false)
      }, 5000) // 3 seconds in milliseconds

      return () => {
        clearTimeout(timeout)
      }
    }
  }, [deleteData, errorDelete])

  return (
    <>
      {update && (
        <BranchUpdate selected={selected} setShowModalUpdate={setUpdate} />
      )}
      <div className="flex flex-col gap-10">
        <div className='flex flex-wrap gap-5 w-full bg-ski-500'>
          <Button className='w-36 h-36 bg-slate-800' onClick={() => setShowModalCreate(true)}>
            <PlusIcon color='white' />
          </Button>
          {
            branchs.map((branch, index) => {
              return (
                <div>
                  {
                    branch.id === selected &&
                    <div className='flex flex-row flex-row-reverse gap-5 my-1'>
                      <CrossCircledIcon onClick={() => deleteBranchHandle()} />
                      <Pencil1Icon onClick={() => setUpdate(true)} />
                    </div>
                  }
                  <Button key={index} onClick={() => { setSelected(branch.id) }} className='flex flex-col w-36 h-36 shadow p-2 hover:bg-sky-100 shadow rounded-xl'
                    style={{
                      background: branch.id === selected ? '#ecfeff' : '#ecfeff',
                      color: branch.id === selected ? '#020617' : '',
                      border: branch.id === selected ? '1px solid black' : 'none'
                    }}
                  >
                    <span className='font-bold text-xl'>{branch.name}</span>
                    <span>{branch.address}</span>
                    <span>{branch.phoneNumber}</span>
                  </Button>
                </div>
              );
            })
          }
        </div>

      </div>

      {deleteData?.deleteBranch && showWarning ? (
        <AlertModalSucces value="Se han eliminado el tipo de ahorro" />
      ) : deleteData?.deleteBranch === false && showWarning ? (
        <AlertModalError value="La sucursal no se puede eliminar" />
      ) : (
        errorDelete && showWarning && <AlertModalError value="Error" />
      )}
    </>
  )
}

export default TableBranch


