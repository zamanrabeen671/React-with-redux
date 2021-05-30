import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import { GoogleLogout } from "react-google-login";
import { useDispatch, useSelector } from "react-redux";
import {
    selectSignedIn,
    selectUserData,
    setInput,
    setSignedIn,
    setUserData,
} from "../features/userSlice";

const NavbarBS = () => {

    const [inputValue, setInputValue] = useState("tech");
    const isSignedIn = useSelector(selectSignedIn);
    const userData = useSelector(selectUserData);

    const dispatch = useDispatch();

    const logout = (response) => {
        dispatch(setSignedIn(false));
        dispatch(setUserData(null));
    };

    const handleClick = (e) => {
        e.preventDefault();
        dispatch(setInput(inputValue));
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1>RedNews💬</h1>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse ml-3" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">

                    {
                        isSignedIn ? (
                            <>
                                <li className="nav-item">
                                    <span className="nav-link" >{userData?.givenName}</span>
                                </li>
                                <li className="nav-item">
                                    <GoogleLogout
                                        clientId="57529085775-fk8rn8hren1q8o5ja2idq4m7hug5aong.apps.googleusercontent.com"
                                        render={(renderProps) => (
                                            <span
                                                onClick={renderProps.onClick}
                                                disabled={renderProps.disabled}
                                                className="nav-link text-danger font-weight-bold"
                                                style={{ cursor: 'pointer' }}
                                            >
                                                Logout
                                            </span>
                                        )}
                                        onLogoutSuccess={logout}
                                    />
                                </li>
                                <li className="nav-item">
                                    <Avatar
                                        className="user nav-link"
                                        src={userData?.imageUrl}
                                        alt={userData?.name}
                                    />
                                </li>
                            </>
                        ) :
                            <li className="nav-item active">
                                <span className="nav-link" >User Not Available</span>
                            </li>
                    }




                </ul>
                <form className="form-inline my-2 my-lg-0">
                    {
                        isSignedIn && (
                            <>
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={handleClick}>Search</button>
                            </>
                        )
                    }
                </form>
            </div>
        </nav>
    );
};

export default NavbarBS;