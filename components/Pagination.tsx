import PaginationButton from "./PaginationButton"

type PaginationProps = {
  totalPages: number
  setCurrentPage: (page: number) => void
  currentPage: number
  handlePrevPage: () => void
  handleNextPage: () => void
}
export default function Pagination({
  totalPages,
  setCurrentPage,
  currentPage,
  handlePrevPage,
  handleNextPage,
}: PaginationProps) {
  const pagesMapped = Array.from({ length: totalPages }, (_, i) => i + 1)

  const isPrevButtonDisabled = currentPage === 1
  const isNextButtonDisabled = currentPage === totalPages

  return (
    <nav aria-label='Page navigation example' className='p-10 w-full'>
      <ul className='inline-flex -space-x-px text-base h-10 justify-center w-full'>
        <PaginationButton
          text='Previous'
          onClick={handlePrevPage}
          disabled={isPrevButtonDisabled}
        />
        {pagesMapped.map((page) => (
          <PaginationButton
            key={page}
            text={page.toString()}
            onClick={() => setCurrentPage(page)}
            disabled={currentPage === page}
          />
        ))}

        <PaginationButton
          text='Next'
          onClick={handleNextPage}
          disabled={isNextButtonDisabled}
        />
      </ul>
    </nav>
  )
}
