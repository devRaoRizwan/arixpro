export function LoadingState({ rows = 3 }: { rows?: number }) {
  return (
    <div className="w-full space-y-3" role="status" aria-label="Loading content">
      {Array.from({ length: rows }).map((_, i) => (
        <div
          key={i}
          className="h-[56px] w-full rounded-[8px] bg-[#F7F6FC] animate-pulse border border-[#E4DEF2]"
        />
      ))}
      <span className="sr-only">Loading...</span>
    </div>
  )
}

export default LoadingState
