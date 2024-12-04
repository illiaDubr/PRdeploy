import React from 'react';
import IconSvg from "@/components/main/section/components/IconSvg";

const TableWarning = () => {
    return (
        <div className="table__warning">
            <IconSvg width={24} height={24} id="notification" />
            Для отображения результата поиска заполните поля
        </div>
    )
}

export default TableWarning;