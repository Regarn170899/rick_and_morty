import React, {ReactElement, useState} from 'react';
import {Outlet, Route, Routes} from 'react-router-dom';
import Loader from '../../pages/Loader/Loader';
import Layout from "../Layout/Layout";

const isLoading:boolean=true;

const RouterConfig = () : ReactElement => {
    const [isLoading,setLoading]=useState(true)
    return (
        <>
            <React.Suspense fallback={<Loader/>}>
                <Routes>
                    <Route path={'/'}
                        element={<Layout>{isLoading ? <Loader />: <Outlet/> }</Layout>}
                    />
                </Routes>
            </React.Suspense>
        </>
    );
};

export default RouterConfig;