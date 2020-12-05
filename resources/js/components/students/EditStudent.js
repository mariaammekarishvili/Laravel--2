import React, {useEffect, useState} from 'react';
import ContentHeader from "../dashboard/ContentHeader";
import  {Link,Redirect} from "react-router-dom";
import {useParams} from "react-router";
import UseStudent from "./UseStudent";

export default function () {
    const {handleSubmit,reset,setErrors,studentFields,setData} = UseStudent();
    const [redirect,setRedirect]=useState(false);

    const {id} = useParams();

    useEffect(()=> {
        axios.get(`/api/students/${id}/edit`,{}).then(res => {
            if(res.data.status === "success") {
                setData(res.data.data);
                reset(res.data.student);
            }
        });
    },[]);

    const editStudent=data=>{
        axios.put('/api/students/' + id,data).then(res =>{
            if (res.data.status === "success") setRedirect(true);
            else setErrors(res.data);
        })
    }
    if (redirect)  return <Redirect to='/students'/>;

    return (
        <>
            <ContentHeader title="სტუდენტის რედაქტირება"/>

            <section className="content">
                <div className="container-fluid">
                    <div className="card card-primary card-outline">
                        <div className="card-header">
                            <h3 className="card-title"><Link to="/students">სტუდენტები</Link> /
                                სტუდენტის რედაქტირება</h3>
                        </div>
                        <form onSubmit={handleSubmit(editStudent)}>
                            <div className="card-body">
                                {studentFields}
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-primary">რედაქტირება</button>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </>
    );
}
