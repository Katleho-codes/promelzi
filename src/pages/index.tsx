import Modal from "@/components/Modal";
import Navigation from "@/components/Navigation";
import AddJobContent from "@/components/Table/AddJobContent";
import { columns } from "@/components/Table/Columns";
import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import {
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { uuid } from 'uuidv4';
import { useFetchTableData } from "../../hooks/useFetch";


export default function Home() {

  const [fullname, setFullname] = useState("")
  const [jobTitle, setJobTitle] = useState("")
  const [email, setEmail] = useState("")
  const [role, setRole] = useState("")

  // Table sorting
  const [sorting, setSorting] = useState<SortingState>([]);

  // Table filtering
  const [filtering, setFiltering] = useState("");

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);

  const { tableData } = useFetchTableData()
  const router = useRouter();
  const table = useReactTable({
    data: tableData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
  });

  const submitData = async (e: React.SyntheticEvent) => {
    e.preventDefault()
    const id = uuid()
    const response = await fetch('http://localhost:8000/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        id,
        fullname,
        jobTitle,
        email,
        role
      })
    })
    const data = await response.json()
    if (response.ok) {
      setIsOpen(false)
    }
  }

  const goToUpdatePage = async (e: React.SyntheticEvent, id: string | number) => {
    e.preventDefault()
    router.push("/edit/" + id)

  }
  const deleteEntry = async (e: React.SyntheticEvent, id: string | number) => {
    const response = await fetch(`http://localhost:8000/users/${id}`, {
      method: 'DELETE'
    })
  }
  return (
    <>
      <Head>
        <title>ProSuite Risk</title>
      </Head>
      <Navigation filtering={filtering} setFiltering={e => setFiltering(e.target.value)} />
      <main>
        <div className="container mx-auto p-1">
          <div className="top_part flex justify-between items-center p-2 border  mt-2">
            <h1 className="border-l-2 border-l-lime-600 lg:text-3xl font-semibold p-3 text-gray-400">Risk Owner</h1>
            <button type="button" className="bg-blue-800 text-white font-medium px-3 py-2 rounded-sm text-sm outline-0 hover:bg-blue-700 focus:bg-blue-700" onClick={() => setIsOpen(true)}>Add Risk Owner</button>
          </div>

          <Modal isVisible={isOpen}
            title="Add task"
            content={
              <AddJobContent
                fullname={fullname}
                setFullname={(e) => setFullname(e.target.value)}
                jobTitle={jobTitle}
                setJobTitle={(e) => setJobTitle(e.target.value)}
                email={email}
                setEmail={(e) => setEmail(e.target.value)}
                role={role}
                setRole={(e) => setRole(e.target.value)}
                submitData={submitData}
              />
            }
            onClose={() => setIsOpen(false)}
          />

          <div className="h-2" />
          {/* <Pagination table={table} /> */}
          <div className="max-h-[540px] overflow-y-auto my-3">
            <table className="relative w-full max-w-full whitespace-nowrap text-sm text-left text-gray-500 table-auto">
              <thead className="sticky top-0 bg-[#eee] text-gray-900 text-sm uppercase font-semibold">
                {table.getHeaderGroups().map((headerGroup) => (
                  <tr key={headerGroup.id} className="font-semibold">
                    {headerGroup.headers.map((header) => {
                      return (
                        <th
                          key={header.id}
                          className="px-4 py-3 cursor-pointer font-semibold"
                        >
                          {header.isPlaceholder ? null : (
                            <div
                              {...{
                                className: header.column.getCanSort()
                                  ? "cursor-pointer select-none"
                                  : "",
                                onClick:
                                  header.column.getToggleSortingHandler(),
                              }}
                            >
                              {flexRender(
                                header.column.columnDef.header,
                                header.getContext()
                              )}
                              {{
                                asc: " ▽",
                                desc: " △",
                              }[header.column.getIsSorted() as string] ??
                                null}
                            </div>
                          )}
                        </th>
                      );
                    })}
                    <th className="px-4 py-3 cursor-pointer font-semibold">
                      Action
                    </th>
                  </tr>
                ))}
              </thead>
              <tbody className="z-0">
                {table.getRowModel().rows.map((row: any) => (
                  <tr
                    key={row.id}
                    onDoubleClick={(e) => goToUpdatePage(e, row.original.id)}
                    className="border-b cursor-pointer hover:bg-[#eee] hover:text-gray-900 focus:bg-[#eee] focus:text-gray-900 active:bg-[#eee] active:text-gray-900"
                  >

                    {row.getVisibleCells().map((cell: any) => (
                      <td
                        key={cell.id}
                        className="px-4 py-3 font-medium text-sm max-w-full"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                    <td className="px-4 py-3  font-medium text-sm max-w-full flex items-center gap-1">
                      <button
                        type="button"
                        role="button"
                        onClick={(e) => goToUpdatePage(e, row.original.id)}
                        className="font-medium text-blue-600hover:underline"
                      >
                        <PencilIcon className="h-4 w-4 text-green-700" />
                      </button>
                      <button
                        type="button"
                        role="button"
                        onClick={(e) => deleteEntry(e, row.original.id)}
                        className="font-medium text-blue-600hover:underline"
                      >
                        <TrashIcon className="h-4 w-4 text-red-700" />

                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

    </>
  )
}
