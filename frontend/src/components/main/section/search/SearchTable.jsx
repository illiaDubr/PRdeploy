import React from "react";
import TableLoader from "./TableLoader.jsx";
import TableWarning from "./TableWarning.jsx";
import { observer } from "mobx-react-lite";
import {Context} from "../../../../api/store/storeContext.js";


const SearchTable = observer(() => {
    const {store} = React.useContext(Context);
    const { results, isLoading } = store;

    let content;

    if (isLoading) {
        content = <TableLoader />;
    } else if (results.length === 0) {
        content = (
            <TableWarning id="notification">
                Данные отсутствуют
            </TableWarning>
        );
    } else {
        content = (
            <table className="table">
                <thead className="table__header">
                <tr>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Отчество</th>
                    <th>Discord</th>
                    <th>Почта</th>
                    <th>Ник в руме</th>
                    <th>Номер телефона</th>
                </tr>
                </thead>
                <tbody>
                {results.map((result, index) => (
                    <tr key={index}>
                        <td>{result.last_name || "—"}</td>
                        <td>{result.first_name || "—"}</td>
                        <td>{result.middle_name || "—"}</td>
                        <td>{result.discord || "—"}</td>
                        <td>{result.Email || "—"}</td>
                        <td>{result.nickname || "—"}</td>
                        <td>{result.phonenumber || "—"}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }

    return (
        <div className="table__container" >
            {content}
        </div>
    );
});

export default SearchTable;