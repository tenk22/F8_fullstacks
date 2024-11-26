import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({
  totalProducts,
  productsPerPage,
  currentPage,
  onPageChange,
}) => {
  const pageCount = Math.ceil(totalProducts / productsPerPage);

  const handlePageClick = (data) => {
    onPageChange(data.selected + 1);
  };

  return (
    <div className="pagination">
      <ReactPaginate
        previousLabel={"← Previous"}
        nextLabel={"Next →"}
        pageCount={pageCount}
        onPageChange={handlePageClick}
        containerClassName={"pagination-buttons"}
        activeClassName={"active"}
        forcePage={currentPage - 1}
      />
    </div>
  );
};

export default Pagination;
