import React, {ReactElement, useState} from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';
import Loader from '@pages/Loader/Loader';
import Layout from "../Layout/Layout";
import Home from "@pages/Home/Home";
import {PathRouter} from "@constants/index";

    const isLoading:boolean=true;

const RouterConfig = () : ReactElement => {
    const [isLoading,setLoading]=useState(true)
    return (
        <>
            <React.Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path={PathRouter.Home}
                        element={<Layout>{isLoading ? <Home />: <Outlet/> }</Layout>}
                    />
                </Routes>
            </React.Suspense>
        </>
    );
};

export default RouterConfig;