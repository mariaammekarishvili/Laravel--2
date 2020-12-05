import React, {useEffect, useState} from 'react';
import ContentHeader from "../dashboard/ContentHeader";
import {useParams} from "react-router";

export default function () {
    const [myClasses,setMyClasses] = useState([]);
    console.log('dd');
    useEffect(()=> {
        axios.get(`/api/my-classes`,{}).then(res => {
            if(res.data.status === "success") {
                setMyClasses(res.data.classes);
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
                            <ul className="list-group">
                                {myClasses?.map((item,key)=>{
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
