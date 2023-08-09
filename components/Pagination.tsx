import { useRouter, usePathname, useSearchParams } from "next/navigation"
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
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const sortBySearchParams = searchParams.get("sortBy")

  const pagesMapped = Array.from({ length: totalPages }, (_, i) => i + 1)

  const isPrevButtonDisabled = currentPage === 1
  const isNextButtonDisabled = currentPage === totalPages

  const handleOnClick = (page: number) => {
    setCurrentPage(page)
    router.push(
      pathname +
        `?page=${page}${
          sortBySearchParams ? "&sortBy=" + sortBySearchParams : ""
        }`
    )
  }

  return (
    <nav aria-label='Page navigation example' className='p-10 w-full'>
      <ul className='inline-flex -space-x-px text-base h-10 justify-center w-full'>
        <PaginationButton
          text='<<'
          onClick={() => handleOnClick(1)}
          disabled={isPrevButtonDisabled}
        />
        <PaginationButton
          text='<'
          onClick={handlePrevPage}
          disabled={isPrevButtonDisabled}
        />
        {pagesMapped.map((page) => (
          <PaginationButton
            key={page}
            text={page.toString()}
            onClick={() => handleOnClick(page)}
            disabled={currentPage === page}
          />
        ))}

        <PaginationButton
          text='>'
          onClick={handleNextPage}
          disabled={isNextButtonDisabled}
        />
        <PaginationButton
          text='>>'
          onClick={() => handleOnClick(totalPages)}
          disabled={isNextButtonDisabled}
        />
      </ul>
    </nav>
  )
}
