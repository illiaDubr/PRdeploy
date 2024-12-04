import React from "react";
import TableWarning from "@/components/main/section/search/TableWarning";
import TableLoader from "@/components/main/section/search/TableLoader";

const SearchTable = () => {
    return (
       <>
           <div className="table">
           </div>
           <TableWarning />
           <TableLoader />
       </>
    );
}

export default SearchTable;