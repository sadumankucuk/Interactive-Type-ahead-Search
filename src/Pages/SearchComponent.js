import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import tableData from "../api/data";
import TableComponent from "../Components/TableComponent";
import InputComponent from '../Components/InputComponent';

const createValidationSchema = () => {
    const schema = Yup.object().shape({
    });
    return schema;
};



const SearchComponent = () => {

    const formik = useFormik({
        initialValues: {
            searchText: ""
        },
        validationSchema: createValidationSchema(),
        onSubmit: (values) => {
        },
    });

    const { values } = formik;


    return (
        <form>
            <InputComponent
                name="search"
                placeholder="SEARCH (CLIENT NAME / POLICY Number)"
                type="text"
                icon="search"
                onChange={(e) => console.log("search", e.target.value)}
            />
            <TableComponent tableData={tableData} />
        </form>
    )
}

export default SearchComponent;