import React, { useState } from 'react';
import tableData from "../api/data";
import TableComponent from "../Components/TableComponent";
import InputComponent from '../Components/InputComponent';


const SearchComponent = () => {
    const additionalColumnName = "name";
    const tableColumns = Object.keys(tableData[0])
        .filter(column => column !== "id" && column !== additionalColumnName);
    const tableIconByColumn = [
        {column: "phone", icon: "fa fa-phone"},
        {column: "mail", icon: "fa fa-at"},
        {column: "policyNo", icon: "fa fa-sticky-note"}
    ];

    const [searchText, setSearchText] = useState("");
    const [data, setData] = useState(tableData);

    // exclude column list from filter
    const excludeColumns = ["id", "phone", "mail"];

    // handle change event of search input
    const handleChange = value => {
        setSearchText(value);
        filterData(value);
    };

    // filter records by search text
    const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") setData(tableData);
        else {
            const filteredData = tableData.filter(item => {
                return Object.keys(item).some(key =>
                    excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
                );
            });
            setData(filteredData);
        }
    }


    return (
        <form>
            <InputComponent
                name="search"
                placeholder="SEARCH (CLIENT NAME / POLICY Number)"
                type="text"
                icon="search"
                onChange={(e) => handleChange(e.target.value)}
                value={searchText}
            />
            <TableComponent
                tableData={data}
                tableColumns={tableColumns}
                additionalColumnName={additionalColumnName}
                additionalColumnIndex={0}
                tableIconByColumn={tableIconByColumn}
            />
        </form>
    )
}

export default SearchComponent;