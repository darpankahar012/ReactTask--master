import React, { useEffect, useState } from 'react'
import { userService } from "../services";
import { useDispatch, useSelector } from "react-redux";
import { resetState } from "../store/actions";
import { toast } from 'react-toastify';
import Login from './pages/Login/login';

function DashBoard(props) {
    const dispatch = useDispatch();

    const {
        clientsList,
        createUserSuccess,
        userDetailsSuccess,
        deleteUserSuccess,
        updateUserSuccess,
    } = useSelector(state => state.client)


    const onSubmit = () => {
        console.log("call function !")
    }


    return (
        <>
            <Login onSubmit={onSubmit} />
        </>
    )
}

export default DashBoard;