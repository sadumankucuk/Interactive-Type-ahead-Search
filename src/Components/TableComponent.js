import React from 'react';

const TableComponent = ({
    tableData,
    tableColumns,
    additionalColumnName,
    additionalColumnIndex,
    tableIconByColumn
}) => {

    return (

        <table>
            <tbody>
                {
                    tableData && tableData.length !== 0 && tableData.map(data => (
                        <tr key={data.id}>
                            {
                                tableColumns.map((column, key) => (
                                    <td data-label={key === additionalColumnIndex
                                        ? `${additionalColumnName} - ${column} `
                                        : column} key={column}>

                                        {key === additionalColumnIndex &&
                                            <p className='header'>{data[additionalColumnName]}</p>}
                                        <p>
                                            <i className={tableIconByColumn
                                                .find(c => c.column === column)?.icon}></i> {data[column]}
                                        </p>

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