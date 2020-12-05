import React, {useContext, useState} from 'react';
import {Link} from "react-router-dom";
import {UserContext} from "../contexts/UserContext";

export default function () {
    const [show,setShow] = useState(false);

    const handleClick = e => {
        e.preventDefault();
        setShow(!show);
    }
    const context = useContext(UserContext);
    return (
        <nav className="main-header navbar navbar-expand navbar-dark navbar-lightblue">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i
                        className="fas fa-bars"></i></a>
                </li>
            </ul>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="#" onClick={e => e.preventDefault()}>
                        {context?.user?.name || ""}
                    </a>
                </li>
                <li className={`nav-item dropdown ${show? "show" : ""}`}>
                    <a className="nav-link" href="#"  onClick={e=>handleClick(e)}>
                        <i className="fas fa-cog"></i>
                    </a>
                    <div className={`dropdown-menu dropdown-menu-sm dropdown-menu-right ${show? "show" : ""}`}>
                        {/*<Link to="/admin/profile/edit" className="dropdown-item">*/}
                        {/*    <i className="fas fa-user"></i>*/}
                        {/*    &nbsp;&nbsp;პროფილი*/}
                        {/*</Link>*/}

                        {/*<Link to="/admin/change-password" className="dropdown-item">*/}
                        {/*    <i className="fas fa-lock"></i>*/}
                        {/*    &nbsp;&nbsp;პაროლის შეცვლა*/}
                        {/*</Link>*/}

                        <Link to="/logout" className="dropdown-item">
                            <i className="fas fa-sign-out-alt"></i>
                            &nbsp;&nbsp;გამოსვლა
                        </Link>
                    </div>
                </li>
            </ul>
        </nav>

    )
}
