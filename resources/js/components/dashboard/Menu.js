import React, {useContext} from 'react';
import {Link,useLocation} from "react-router-dom";
import {UserContext} from "../contexts/UserContext";


export default function () {
    const context=useContext(UserContext);

    const location = useLocation();
    const currentLocation=location.pathname.split("/")[1] || "home";

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to="#" className="brand-link">
                    <span className="brand-text font-weight-light">classes</span>
            </Link>

            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="info">
                        <a href="#" className="d-block">{context?.user?.name || ""}</a>
                    </div>
                </div>

                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu"
                        data-accordion="false">

                        <li className="nav-item">
                            <Link to="/home" className={`nav-link ${currentLocation==="home"? " active" : ""}`}>
                                <i className="nav-icon fas fa-home"></i>
                                <p style={{fontSize:'15px'}}>
                                    მთავარი
                                </p>
                            </Link>
                        </li>
                        {context?.user?.isAdmin == 1 ?
                            <>
                                <li className="nav-item">
                                    <Link to="/students" className={`nav-link ${currentLocation==="students"? " active" : ""}`}>
                                        <i className="nav-icon fas fa-question"></i>
                                        <p style={{fontSize:'15px'}}>
                                            students
                                        </p>
                                    </Link>
                                </li>

                                <li className="nav-item">
                                    <Link to="/classes" className={`nav-link ${currentLocation==="classes"? " active" : ""}`}>
                                        <i className="nav-icon fas fa-question"></i>
                                        <p style={{fontSize:'15px'}}>
                                            classes
                                        </p>
                                    </Link>
                                </li>
                            </> :
                        <li className="nav-item">
                            <Link to="/my_class" className={`nav-link ${currentLocation==="my_class"? " active" : ""}`}>
                                <i className="nav-icon fas fa-question"></i>
                                <p style={{fontSize:'15px'}}>
                                    my_class
                                </p>
                            </Link>
                        </li>
                        }
                    </ul>
                </nav>
            </div>
        </aside>
    )
}
