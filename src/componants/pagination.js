
import ReactPaginate from 'react-paginate';

const pagination = ({ handlePagination ,pageCount}) => {

    const handlePageClick = (e) => {
        handlePagination(e.selected + 1);
    }
    return (
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        pageRangeDisplayed={2}
        marginPagesDisplayed={2}
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null} 
        
containerClassName="pagination justify-content-center"
pageClassName="page-item"
pageLinkClassName="page-link"
previousClassName="page-item"
previousLinkClassName="page-link"
nextClassName="page-item"
nextLinkClassName="page-link"
breakClassName="page-item"
breakLinkClassName="page-link"
activeClassName="active"
      />

    )
}
export default pagination;