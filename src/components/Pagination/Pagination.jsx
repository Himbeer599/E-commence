import '../Pagination/Pagination.module.css'

const Pagination =({totalPages,currentPage,onPageChange})=>(
    <div className="pagination">
        {[...Array(totalPages)].map((_,index)=> (
            <button key={index} onClick={()=>onPageChange(index+1)}>
                {index+1}
            </button>
        ))}
    </div>
);

export default Pagination;