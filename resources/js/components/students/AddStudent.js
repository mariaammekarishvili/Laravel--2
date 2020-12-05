import React, {useEffect, useState} from 'react';
import ContentHeader from "../dashboard/ContentHeader";
import  {Link,Redirect} from "react-router-dom";
import UseStudent from "./UseStudent";

export default function () {
    const {handleSubmit,setErrors,studentFields,setData} = UseStudent();
    const [redirect,setRedirect]=useState(false);

    useEffect(()=>{
        axios.get('/api/students/create',{}).then(res => {
            if(res.data.status === "success") setData(res.data.data);
        })
    },[]);

    const addStudent=data=>{
        axios.post('/api/students',data).then(res =>{
            if (res.data.status === "success") setRedirect(true);
            else setErrors(res.data);
        })
    }
    if (redirect)  return <Redirect to='/students'/>;

    return (
        <>
            <ContentHeader title="სტუდენტის დამატება"/>

            <section className="content">
                <div className="container-fluid">
                    <div className="card card-primary card-outline">
                        <div className="card-header">
                            <h3 className="card-title"><Link to="/students">სტუდენტები </Link> /
                                სტუდენტის დამატება</h3>
                        </div>
                        <form onSubmit={handleSubmit(addStudent)}>
                            <div className="card-body">
                                {studentFields}
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary">დამატება</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
