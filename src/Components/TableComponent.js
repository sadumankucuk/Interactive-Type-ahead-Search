import React from 'react';

const TableComponent = ({ tableData }) => {

    const additionalColumnName = "name";
    const additionalColumnIndex = 0;

    const tableColumns = Object.keys(tableData[0])
        .filter(column => column !== "id" && column !== additionalColumnName);

    const setIconForColumn = (columnName) => {
        switch (columnName) {
            case "phone":
                return "fa fa-phone";
            case "mail":
                return "fa fa-at";
            case "no":
                return "fa fa-sticky-note";
            default:
                return "";
        }
    }

    return (

        <table>
            <tbody>
                {
                    tableData && tableData.length !== 0 && tableData.map(data => (
                        <tr key={data.id}>
                            {
                                tableColumns.map((column, key) => (
                                    <td data-label={key === additionalColumnIndex ? `${additionalColumnName} - ${column} ` : column} key={column}>
                                        {key === additionalColumnIndex && <p className='header'>{data[additionalColumnName]}</p>}
                                        <p><i className={setIconForColumn(column)}></i> {data[column]}</p>
                                    </td>
                                ))
                            }
                        </tr>
                    ))
                }
            </tbody>
        </table>

    )
}

export default TableComponent;