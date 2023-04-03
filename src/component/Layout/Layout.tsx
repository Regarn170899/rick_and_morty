import React, { ReactElement} from 'react';
import {Link} from "react-router-dom";
import {arrMenu, footerText} from '../../Constans';


type Props = {
    children: JSX.Element,
};
const Layout = ({children}:Props) => {
    return (
        <div>
            <header >
                {arrMenu.map((itemMenu) :ReactElement =>{
                     return (<Link  to ='/'>{itemMenu}</Link>)
                })
                }
            </header>
            {children}
            <footer>
                {footerText}
            </footer>

        </div>
    );
};

export default Layout;