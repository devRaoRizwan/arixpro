interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
}

export function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav
      aria-label="Pagination"
      className="flex items-center justify-center gap-2 py-6 font-sans text-[14px]"
    >
      <button
        type="button"
        disabled={currentPage <= 1}
        onClick={() => onPageChange(currentPage - 1)}
        className="px-3.5 h-[40px] rounded-[8px] border border-[#E4DEF2] text-[#241044] font-medium disabled:text-[#929292] disabled:border-[#EBEBEB] disabled:cursor-not-allowed hover:bg-[#F7F6FC] transition-colors"
      >
        Prev
      </button>

      {pages.map((p) => {
        const isCurrent = p === currentPage
        return (
          <button
            key={p}
            type="button"
            aria-current={isCurrent ? 'page' : undefined}
            onClick={() => onPageChange(p)}
            className={`size-[40px] rounded-full font-medium transition-colors ${
              isCurrent
                ? 'bg-[#241044] text-white'
                : 'text-[#241044] hover:bg-[#F7F6FC]'
            }`}
          >
            {p}
          </button>
        )
      })}

      <button
        type="button"
        disabled={currentPage >= totalPages}
        onClick={() => onPageChange(currentPage + 1)}
        className="px-3.5 h-[40px] rounded-[8px] border border-[#E4DEF2] text-[#241044] font-medium disabled:text-[#929292] disabled:border-[#EBEBEB] disabled:cursor-not-allowed hover:bg-[#F7F6FC] transition-colors"
      >
        Next
      </button>
    </nav>
  )
}

export default Pagination
