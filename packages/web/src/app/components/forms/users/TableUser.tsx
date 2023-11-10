import {
  ColumnDef,
  SortingState,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import { useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useVirtual } from 'react-virtual'
import { gql, useMutation } from '@apollo/client'
import AlertModalSucces from '../../modal/AlertModalSucces'
import AlertModalError from '../../modal/AlertModalError'
import { UserUpdate } from './UpdateUser'
import { User } from '@/lib/utils/user/types'
import { CrossCircledIcon, Pencil1Icon, PlusIcon } from '@radix-ui/react-icons'
import { Button } from '@nextui-org/react'

const DELETE_USER = gql`
  mutation ($id: Int!) {
    deleteUser(identification: $id)
  }
`

function TableUser({
  users,
  setShowModalCreate
}: {
  users: User[]
  setShowModalCreate: any
}) {
  const columns = useMemo<ColumnDef<User>[]>(
    () => [
      {
        accessorKey: 'identification',
        cell: info => info.getValue(),
        header: () => <span>Identificacion</span>
      },
      {
        accessorFn: row => `${row.name} ${row.lastName}`,
        id: 'lastName',
        cell: info => info.getValue(),
        header: () => <span>Nombres</span>
      },
      {
        accessorKey: 'phone',
        cell: info => info.getValue(),
        header: () => 'Telefono'
      },
      {
        accessorKey: 'email',
        cell: info => info.getValue(),
        header: () => 'Correo'
      }
    ],
    []
  )

  const [data, setData] = useState<User[]>(users)
  const [showOptions, setShowOptions] = useState(false)
  const route = useRouter()
  const [sorting, setSorting] = useState<SortingState>([])

  useEffect(() => {
    setData(users)
  }, [users])
  const table = useReactTable({
    data,
    columns,
    state: {
      sorting
    },
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    debugTable: true
  })

  const tableContainerRef = useRef<HTMLDivElement>(null)

  const { rows } = table.getRowModel()

  const rowVirtualizer = useVirtual({
    parentRef: tableContainerRef,
    size: rows.length,
    overscan: 12
  })
  const { virtualItems: virtualRows } = rowVirtualizer

  const [idrow, setIdRow] = useState<string>('')
  const [expanded, setExpanded] = useState<boolean>(false)
  const [update, setUpdate] = useState<boolean>(false)
  const [
    deleteTypeCredit,
    { data: deleteData, loading: loadingDelete, error: errorDelete }
  ] = useMutation(DELETE_USER)
  const [selected, setSelected] = useState<number>(0)

  const [showWarning, setShowWarning] = useState(false)
  useEffect(() => {
    if (deleteData?.deleteUser) {
      route.refresh()
    }
  }, [deleteData])

  const deleteUserHandle = () => {
    setShowWarning(true)
    deleteTypeCredit({
      variables: {
        id: selected
      }
    })
  }

  useEffect(() => {
    if (deleteData) {
      if (deleteData?.deleteUser) {
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
        <UserUpdate selected={selected} setShowModalUpdate={setUpdate} />
      )}
      <div className="flex flex-col gap-10">
        <div className='flex flex-wrap gap-5 w-full bg-ski-500'>
          <Button className='w-36 h-36 bg-slate-800' onClick={() => setShowModalCreate(true)}>
            <PlusIcon color='white' />
          </Button>
          {
            users.map((user, index) => {
              return (
                <div>
                  {
                    user.identification === selected &&
                    <div className='flex flex-row flex-row-reverse gap-5 my-1'>
                      <CrossCircledIcon onClick={() => deleteUserHandle()} />
                      <Pencil1Icon onClick={() => setUpdate(true)} />
                    </div>
                  }
                  <Button key={index} onClick={() => { setSelected(user.identification) }} className='flex flex-col w-36 h-36 shadow p-2 hover:bg-sky-100 shadow rounded-xl'
                    style={{
                      background: user.identification === selected ? '#ecfeff' : '#ecfeff',
                      color: user.identification === selected ? '#020617' : '',
                      border: user.identification === selected ? '1px solid black' : 'none'
                    }}
                  >
                    <span className='font-bold text-xl'>{user.name}</span>
                    <span>{user.name}</span>
                    <span>{user.phone}</span>
                    <span>{user.email}</span>
                    <span>{user.lastName}</span>
                  </Button>
                </div>
              );
            })
          }


        </div>
      </div>
      {deleteData?.deleteUser && showWarning ? (
        <AlertModalSucces value="Se ha eliminado el usuario" />
      ) : deleteData?.deleteUser === false && showWarning ? (
        <AlertModalError value="El  usuario no se puede eliminar" />
      ) : (
        errorDelete && showWarning && <AlertModalError value="Error" />
      )}
    </>
  )
}

export default TableUser
