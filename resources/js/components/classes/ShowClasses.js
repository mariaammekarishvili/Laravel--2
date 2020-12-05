import React, {useEffect, useState} from 'react';
import ContentHeader from "../dashboard/ContentHeader";
import {useParams} from "react-router";

export default function () {
    const [myClass,setMyClass] = useState({});

    const {id} = useParams();

    useEffect(()=> {
        axios.get(`/api/classes/${id}/show`,{}).then(res => {
            if(res.data.status === "success") {
               setMyClass(res.data.class);
            }
        });
    },[]);

    return (
        <>
            <ContentHeader title="classes"/>

            <section className="content">
                <div className="container-fluid">
                    <div className="card card-primary card-outline">
                        <div className="card-header">
                            <h3 className="card-title">classes</h3>
                        </div>

                    <div className="card-body">
                        <h3>class: {myClass?.name || ""}</h3>

                        <h4>სტუდენტები: </h4>
                        <ul className="list-group">
                            {myClass?.users?.map((item,key)=>{
                                return (
                                    <li key={key} className="list-group-item">
                                        <p>{item?.name}</p>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                </div>

            </section>
        </>
    );
}
