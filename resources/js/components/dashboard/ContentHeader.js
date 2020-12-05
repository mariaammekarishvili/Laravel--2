import React from 'react';
import {Link} from "react-router-dom";

export default function ({title}) {

    return (
        <section className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-6">
                        <h4>{title}</h4>
                    </div>
                    <div className="col-sm-6">
                        <ol className="breadcrumb float-sm-right">
                            <li className="breadcrumb-item"><Link to="/admin/home">მთავარი</Link></li>
                            <li className="breadcrumb-item active">{title}</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    )
}
