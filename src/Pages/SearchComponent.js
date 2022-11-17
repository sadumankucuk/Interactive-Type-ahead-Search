import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';


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
        <div>
            SearchComponent
        </div>
    )
}

export default SearchComponent;