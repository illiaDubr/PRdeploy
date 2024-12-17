import React from 'react';
import IconSvg from "../../components/IconSvg.jsx";


const TableWarning = ({children, id}) => {
    return (
        <div className="table__warning">
            <IconSvg width={24} height={24} id={id} />
            {children}
        </div>
    )
}

export default TableWarning;