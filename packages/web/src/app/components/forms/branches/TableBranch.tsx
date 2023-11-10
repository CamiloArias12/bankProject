import {
  ColumnDef,
  Row,
  SortingState,
  flexRender,
  getCoreRowModel,
  getSortedRowModel,
  useReactTable
} from '@tanstack/react-table'
import { useEffect, useMemo, useRef, useState } from 'react'
import { AddSvg } from '../../logo/Add'
import { useRouter } from 'next/navigation'
import { useVirtual } from 'react-virtual'
import { motion } from 'framer-motion'
import { gql, useMutation } from '@apollo/client'
import InputField from '../../input/InputField'
import AlertModalSucces from '../../modal/AlertModalSucces'
import AlertModalError from '../../modal/AlertModalError'
import { useBranch } from '@/app/hooks/branches/BranchInput'
import { Branch } from '@/lib/utils/branch/types'
import { BranchUpdate } from './UpdateBranch'

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
  const columns = useMemo<ColumnDef<Branch>[]>(
    () => [
      {
        accessorKey: 'id',
        cell: info => info.getValue(),
        header: () => <span>Id</span>
      },
      {
        accessorKey: 'name',
        cell: info => info.getValue(),
        header: () => 'Nombre'
      },
      {
        accessorKey: 'address',
        cell: info => info.getValue(),
        header: () => 'Direccion'
      },
      {
        accessorKey: 'phoneNumber',
        cell: info => info.getValue(),
        header: () => 'Telefono'
      }
    ],
    []
  )

  const [data, setData] = useState<Branch[]>(branchs)
  const [showOptions, setShowOptions] = useState(false)
  const route = useRouter()
  const [sorting, setSorting] = useState<SortingState>([])

  useEffect(() => {
    setData(branchs)
  }, [branchs])
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
  ] = useMutation(DELETE_BRANCH)
  const { branch, handleBranch, setBranch } = useBranch()
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

      console.log('delete')
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
      <div className="flex fleCuentasx-grow flex-col bg-white rounded-tr-[20px] rounded-b-[20px] ">
        <div className="flex items-center justify-between m-3  ">
          <div>
            {showOptions && (
              <div className="flex flex-row p-2 rounded-[40px] bg-[#F2F5FA] ">
                <button
                  className="flex flex-row"
                  onClick={() => {
                    setUpdate(true)
                  }}
                >
                  <img src="/edit.svg" />
                  <label className="font-sans px-6 text-sm">Editar</label>
                </button>
                <button
                  className="flex flex-row"
                  onClick={() => {
                    deleteBranchHandle()
                  }}
                >
                  <img src="/delete.svg" />
                  <label className="font-sans px-6 text-sm">Eliminar</label>
                </button>
              </div>
            )}
          </div>

          <div
            className="flex flex-row items-center justify-between hover:bg-[#F5F2F2] hover:rounded-[20px] group p-1"
            onClick={() => {
              setShowModalCreate(true)
            }}
          >
            <div className="flex group-hover:text-blue items-center justify-center rounded-[50%] h-8 w-8 bg-[#054818] ">
              <AddSvg color="#ffffff" />
            </div>
            <label className="pl-2 hidden group-hover:block text-[12px]">
              Crear
            </label>
          </div>
        </div>

        <div className="mx-4 my-2 flex-grow text-sm">
          <table className="w-full table-fixed table ">
            <thead className="font-medium border-b-2 bg-[#054818] border-b-[#054818]">
              {table.getHeaderGroups().map(headerGroup => (
                <tr className="rounded-lg" key={headerGroup.id}>
                  {headerGroup.headers.map(header => {
                    return (
                      <th
                        className="text-start font-light pl-3 p-2 font-medium "
                        key={header.id}
                        colSpan={header.colSpan}
                        style={{ width: header.getSize() }}
                      >
                        {header.isPlaceholder ? null : (
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? 'cursor-pointer select-none'
                                : '',
                              onClick: header.column.getToggleSortingHandler()
                            }}
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                            {{
                              asc: ' 🔼',
                              desc: ' 🔽'
                            }[header.column.getIsSorted() as string] ?? null}
                          </div>
                        )}
                      </th>
                    )
                  })}
                </tr>
              ))}
            </thead>
            <tbody className=" ">
              {virtualRows.map(virtualRow => {
                const row = rows[virtualRow.index] as Row<any>
                return (
                  <>
                    <motion.tr
                      key={row.id}
                      className=" hover:border-l-4  hover:border-l-[#3C7AC2] "
                    >
                      {row.getVisibleCells().map(cell => {
                        return (
                          <>
                            <td
                              onClick={() => {
                                setShowOptions(true)
                                if (!update) {
                                  setSelected(Number(row._valuesCache.id))
                                }
                                if (update === false) {
                                  if (idrow == row.id) {
                                    setIdRow(row.id)
                                    setExpanded(!expanded)
                                  } else {
                                    setExpanded(false)
                                    setIdRow(row.id)
                                    setExpanded(!true)
                                  }
                                }
                              }}
                              className="font-light px-2 py-2"
                              key={cell.id}
                            >
                              {flexRender(
                                cell.column.columnDef.cell,
                                cell.getContext()
                              )}
                            </td>
                          </>
                        )
                      })}
                    </motion.tr>
                  </>
                )
              })}
            </tbody>
          </table>
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
