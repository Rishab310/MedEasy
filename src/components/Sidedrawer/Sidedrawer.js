import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    selectUserData,
    LOGOUT
} from '../../reduxSlices/authSlice';
import { useLocation } from 'react-router-dom';
import './Sidedrawer.css';
import Backdrop from '../Backdrop/Backdrop';
import Logo from '../../assets/images/Logo.PNG';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';

const Sidedrawer = ({show, closeSidedrawer}) => {
    const dispatch = useDispatch();
    const [closing, setClosing] = useState(false);
    const location = useLocation().pathname;
    const userData = useSelector(selectUserData);
    console.log(location);

    const closeSidedrawerUtil = () => {
        setClosing(true);
        setTimeout(() => closeSidedrawer(), 300);
    }

    useEffect(() => {
        return () => {
            setClosing(false);
        }
        
    }, [show])

    return (
        <>
            <Backdrop closeSidedrawer={closeSidedrawerUtil} />
            <div className={"Sidedrawer " + (closing ? "Sidedrawer_Close" : "Sidedrawer_Open")}>
                <div className="d-flex justify-content-between">
                    <div className="Sidedrawer_Logo">
                        <Link onClick={closeSidedrawerUtil} to="/" >
                            {
                                <img src={Logo} alt="Logo" />
                            }
                        </Link>
                    </div>
                    <div className="d-flex flex-column p-1 flex-end">
                        <IconButton onClick={closeSidedrawerUtil}>
                            <CloseIcon fontSize="large" />
                        </IconButton>
                    </div>
                </div>
                <ul className="d-flex flex-column mt-3 Sidedrawer_Links">
                    <li>
                        <Link className={location === "/" ? "active" : ""} onClick={closeSidedrawerUtil} to="/">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link className={location === "/about" ? "active" : ""} onClick={closeSidedrawerUtil} to="/about">
                            About
                        </Link>
                    </li>
                    <li onClick={closeSidedrawerUtil}>
                        <Link className={location === "/orders" ? "active" : ""} to="/orders">
                            Orders
                        </Link>
                    </li>
                    <li onClick={closeSidedrawerUtil}>
                        <Link className={location === "/profile" ? "active" : ""} to="/profile">
                            Profile
                        </Link>
                    </li>
                    {
                        userData.category === "customer" ? (
                            <li onClick={closeSidedrawerUtil}>
                                <Link className={location === "/createOrder" ? "active" : ""} to="/createOrder">
                                    Create Order
                                </Link>
                            </li>
                        ) : (
                            <li onClick={closeSidedrawerUtil}>
                                <Link className={location === "/dashboard" ? "active" : ""} to="/dashboard">
                                    Dashboard
                                </Link>
                            </li>
                        )
                    }
                    
                    <li>
                        {
                            !userData.token ? (
                                <Link to='/login'>
                                    <button className="Header_Login Green_Button mt-2 m-0">Login
                                    </button> 
                                </Link>
                            ) : 
                            <button onClick={() => dispatch(LOGOUT())} className="Header_Login mt-2 m-0 Green_Button">Logout</button>
                        }
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Sidedrawer;