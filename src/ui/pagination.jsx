import ReactPaginate from 'react-paginate';

export default function Pagination({handlePageClick,pageCount}) {
  return (
    <ReactPaginate
      nextLabel={<><i className="fas fa-chevron-right"></i></>}
      onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      marginPagesDisplayed={2}
      pageCount={pageCount}
      previousLabel={<><i className="fas fa-chevron-left"></i></>}
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      containerClassName="pagination"
      activeClassName="active"
      renderOnZeroPageCount={null}
    />
  )
}
