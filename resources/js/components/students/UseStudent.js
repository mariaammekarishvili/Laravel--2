import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import StudentFields from "./StudentFields";

export default function () {
    const {register, reset, handleSubmit, setValue} = useForm();

    const [errors,setErrors]=useState({});

    const [data,setData] = useState([]);

    const studentFields = <StudentFields register={register} errors={errors} data={data} setValue={setValue}/>;

    return ({
        register,
        reset,
        handleSubmit,
        setErrors,
        studentFields,
        setData,
    });
}
