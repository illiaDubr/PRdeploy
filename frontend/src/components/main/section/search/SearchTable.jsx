import React, { useState, useEffect, useRef } from "react";
import TableLoader from "@/components/main/section/search/TableLoader";
import TableWarning from "@/components/main/section/search/TableWarning";

const SearchTable = ({ results, isLoading, isSearchPerformed }) => {
    const tableRef = useRef(null);
    const [tableWidth, setTableWidth] = useState(0);

    const updateTableWidth = () => {
        if (tableRef.current) {
            const parentWidth = tableRef.current.parentElement.offsetWidth;
            setTableWidth(parentWidth);
        }
    };

    useEffect(() => {
        updateTableWidth();
        window.addEventListener("resize", updateTableWidth);

        return () => {
            window.removeEventListener("resize", updateTableWidth);
        };
    }, []);

    let content;
    if (isLoading) {
        content = <TableLoader />;
    } else if (!isSearchPerformed) {
        content = (
            <TableWarning id="notification">
                Для отображения результата поиска заполните поля
            </TableWarning>
        );
    } else if (results.length === 0) {
        content = (
            <TableWarning id="red_notification">Данные отсутствуют</TableWarning>
        );
    } else {
        content = (
            <table className="table">
                <thead className="table__header">
                <tr>
                    <th className="table__header-name">Фамилия</th>
                    <th className="table__header-name">Имя</th>
                    <th className="table__header-name">Отчество</th>
                    <th className="table__header-name">Discord</th>
                    <th className="table__header-name">Почта</th>
                    <th className="table__header-name">Ник в руме</th>
                    <th className="table__header-name">Номер телефона</th>
                </tr>
                </thead>
                <tbody className="table__body">
                {results.map((result, index) => (
                    <tr key={index}>
                        <td className="table__body-name">{result.surname || "—"}</td>
                        <td className="table__body-name">{result.name || "—"}</td>
                        <td className="table__body-name">{result.middle_name || "—"}</td>
                        <td className="table__body-name">{result.discord || "—"}</td>
                        <td className="table__body-name">{result.Email || "—"}</td>
                        <td className="table__body-name">{result.nickname || "—"}</td>
                        <td className="table__body-name">{result.phonenumber || "—"}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }

    return (
        <div className="table__container" ref={tableRef} style={{ width: `${tableWidth}px` }}>
            {content}
        </div>
    );
};

export default SearchTable;