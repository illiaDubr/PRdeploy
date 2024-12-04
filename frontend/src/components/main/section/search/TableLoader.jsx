import React from 'react';
import Video from "@/assets/video/video";

const TableLoader = () => {
    return (
        <div className="table__loader">
            <img className="loader" src={Video.loader} alt="video" />
        </div>
    )
}

export default TableLoader;