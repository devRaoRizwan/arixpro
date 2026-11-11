import React from 'react'

interface Column<T> {
  key: string
  header: string
  render?: (item: T) => React.ReactNode
  align?: 'left' | 'right' | 'center'
}

interface TableProps<T> {
  columns: Column<T>[]
  data: T[]
  keyField: keyof T | ((item: T) => string)
}

export function Table<T>({ columns, data, keyField }: TableProps<T>) {
  return (
    <div className="w-full overflow-x-auto rounded-[14px] border border-[#E4DEF2] bg-white shadow-sm">
      <table className="w-full border-collapse text-left font-sans text-[14px]">
        <thead>
          <tr className="border-b border-[#E4DEF2] bg-[#F7F6FC]">
            {columns.map((col) => (
              <th
                key={col.key}
                className={`py-3 px-4 font-mono text-[12px] font-medium uppercase tracking-wider text-[#6B6578] ${
                  col.align === 'right'
                    ? 'text-right'
                    : col.align === 'center'
                    ? 'text-center'
                    : 'text-left'
                }`}
              >
                {col.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[#E4DEF2]">
          {data.map((item, index) => {
            const rowKey =
              typeof keyField === 'function'
                ? keyField(item)
                : String(item[keyField] ?? index)

            return (
              <tr
                key={rowKey}
                className="hover:bg-[#F7F6FC]/60 transition-colors"
              >
                {columns.map((col) => {
                  const val = (item as Record<string, unknown>)[col.key]
                  return (
                    <td
                      key={col.key}
                      className={`py-3 px-4 text-[#4A4458] ${
                        col.align === 'right'
                          ? 'text-right tabular-nums'
                          : col.align === 'center'
                          ? 'text-center'
                          : 'text-left'
                      }`}
                    >
                      {col.render ? col.render(item) : String(val ?? '')}
                    </td>
                  )
                })}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Table
