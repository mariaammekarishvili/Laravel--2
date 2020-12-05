import React, {createContext, useState} from 'react';
import context from "react-router/modules/RouterContext";

export const UserContext = createContext({
    user: localStorage.getItem("user"),
    setUser: () => {}
});

export const UserContextProvider = (props) => {
    const setUser = (user) => {
        let expireMinutes = (new Date()).setMinutes((new Date()).getMinutes() + 30);

        setState({...state, user: {...user, expireMinutes: expireMinutes}});

        localStorage.setItem('user', JSON.stringify({...user, expireMinutes: expireMinutes}));
    };

    const resetUser = () => {
        setState({...state, user: null});

        localStorage.removeItem('user');
    };

    const hasRole = roles => {
        const user = JSON.parse(localStorage.getItem("user"));
        const permissions = user?.roles || [];

        return permissions.some(r=> roles.indexOf(r) >= 0);
    };

    const [state, setState] = useState({
        user: JSON.parse(localStorage.getItem("user")),
        setUser: setUser,
        resetUser: resetUser,
        hasRole: hasRole,
    });

    return (
        <UserContext.Provider value={state}>
            {props.children}
        </UserContext.Provider>
    );
}
