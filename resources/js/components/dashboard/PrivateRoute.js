import React, {useContext, useEffect} from "react";
import {UserContext} from "../contexts/UserContext";
import {Redirect, Route, useHistory} from "react-router-dom";
import Navbar from "./Navbar";
import Menu from "./Menu";

export default function ({component: Component, ...rest}) {
    const context = useContext(UserContext);
    const history = useHistory();

    useEffect(() => {
        checkExpire();
    }, []);

    useEffect(() => {
        return history.listen(() => {
            checkExpire();
        });
    }, [history]);

    const checkExpire = () => {
            if(context.user?.expireMinutes>(new Date()).getTime()) context.setUser(context.user);
            else  context.resetUser();
    };

    axios.interceptors.request.use(function (config) {
        const bearer = context?.user?.apiToken || "";

        config.headers.Authorization = 'Bearer ' + bearer;

        return config;
    });

    axios.interceptors.response.use(function (response) {
        return response;
    }, function (error) {
        if(error.response.status===401) {
            context.resetUser();
        } else return Promise.reject(error);
    });

    return (
        <Route {...rest}
            render={(props) => context.user ?
                <div className="wrapper">
                    <Navbar />
                    <Menu />
                <div className="content-wrapper">
                    <Component {...props} />
                </div>
                </div>
            :
                <Redirect to='/login' />} />
    )
}
