'use client';

type PaginationProps = {
  pagesMapped: number[];
  currentPage: number;
  prevPage: number;
  setCurrentPage: (page: number) => void;
};
export default function Pagination({
  pagesMapped,
  currentPage,
  prevPage,
  setCurrentPage,
}: PaginationProps) {
  const handleClick = (page: number) => {
    if (page !== currentPage) setCurrentPage(page);
  };

  const handlePrevPage = () => {
    if (currentPage === 1) return;
    setCurrentPage(prevPage);
  };

  const handleNextPage = () => {
    if (currentPage === pagesMapped.length) return;
    setCurrentPage(currentPage + 1);
  };

  return (
    <nav aria-label='Page navigation example' className='p-10 w-full'>
      <ul className='inline-flex -space-x-px text-base h-10 justify-center w-full'>
        <li>
          <span
            onClick={handlePrevPage}
            className='flex items-center justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            Previous
          </span>
        </li>
        {pagesMapped.map((page) => (
          <li key={page}>
            <span
              className='cursor-pointer flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              onClick={() => handleClick(page)}
            >
              {page}
            </span>
          </li>
        ))}

        <li>
          <span
            onClick={handleNextPage}
            className='flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          >
            Next
          </span>
        </li>
      </ul>
    </nav>
  );
}
