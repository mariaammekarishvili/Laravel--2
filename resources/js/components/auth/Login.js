import React, {useContext,useEffect, useState} from "react";
import {UserContext} from "../contexts/UserContext";

export default function () {
    const context = useContext(UserContext);

    const [logged, setLogged] = useState(false);

    const fields = {
        email: "",
        password: ""
    };

    const [login, setLogin] = useState(fields);
    const [loginErrors, setLoginErrors] = useState(fields);


    useEffect(()=>{
        document.body.className='login-page';
        if(context.user?.expireMinutes > new Date().getTime()) {
            setLogged(true);
            context.setUser(context.user);
        }
        return () =>  {
            document.body.className='sidebar-mini';
        }
    },[]);

    const enter = e => {
        e.preventDefault();

        axios.post("/api/login", login).then(res => {

            if (res.data.status === "success") {
                context.setUser(res.data);
                setLogged(true);
            } else {
                setLoginErrors({...fields, ...res.data});
            }
        });
    };

    if (logged)  window.location.replace("/home");

    return (
        <div className="login-box">
            <div className="login-logo">
                <b>classes</b>
            </div>
            <div className="card">
                <div className="card-body login-card-body">
                    <p className="login-box-msg">ავტორიზაცია</p>

                    <form onSubmit={enter}>
                        {loginErrors.email?
                            <div style={{color:'red'}}>{loginErrors.email}</div>
                            :""}
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="ელ. ფოსტა"
                                   onChange={e => setLogin({...login, email: e.target.value})}/>
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-user"></span>
                                </div>
                            </div>
                        </div>

                        {loginErrors.password?
                            <div style={{color:'red'}}>{loginErrors.password}</div>
                            :""}
                        <div className="input-group mb-3">
                            <input type="password" className="form-control" placeholder="პაროლი"
                                   onChange={e => setLogin({...login, password: e.target.value})}/>
                            <div className="input-group-append">
                                <div className="input-group-text">
                                    <span className="fas fa-lock"></span>
                                </div>
                            </div>
                        </div>
                        <div className="input-group">
                            <button type="submit" className="btn btn-success btn-block">ავტორიზაცია</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
