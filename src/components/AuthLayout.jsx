import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

function Protected({children, authentication = true}) {
    console.log("AuthLayout component rendered");
    const navigate = useNavigate();
    const [loader, setLoader] = useState(true);
    const authStatus = useSelector((state) => {
        console.log("Authentication status : ", state.auth.status);
        return state.auth.status
    });

    useEffect(() => {
        if (authentication && authStatus !== authentication) {
            console.log("Redirecting to login");
            navigate("/login");
        }
        else if (!authentication && authStatus !== authentication) {
            console.log("Redirecting to Home");
            navigate("/");
        }
        setLoader(false);
    }, [authentication, authStatus, navigate]);

    return loader ? <h1>Loading....</h1> : <>{children}</>
}

export default Protected;