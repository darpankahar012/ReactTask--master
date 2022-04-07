import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const loaction = useLocation()

    const [routeLocation, setRouteLocation] = useState("/")

    useEffect(() => {
        if (loaction.pathname) setRouteLocation(loaction.pathname)
    }, [loaction]);

    return (
        <>
            <ul className="nav nav-tabs ">
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={routeLocation == "/" ? { color: '#FFA500' } : { color: '#ffffff' }}
                        to={{
                            pathname: "/",
                        }}
                    >Login</Link>
                </li>
                <li className="nav-item">
                    <Link
                        className="nav-link"
                        style={routeLocation === "/gallery" ? { color: '#FFA500' } : { color: '#ffffff' }}
                        to={{
                            pathname: "/gallery",
                        }}
                    >Gallery</Link>
                </li>
            </ul>
        </>
    )
}
