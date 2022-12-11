import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";
import { ReactComponent as  ZeybekLogo} from '../../assests/zeybek_logo.svg';
import './navigation.styles.css';

const Navigation = () => {
    return(
    <Fragment>
        <div>
            <Link className='logo-container' to='/'>
                <ZeybekLogo className='logo' />
            </Link>
            
            <div className='nav-links-container'> 
                <Link className='nav-link' to='/hotelinfo'>
                    HOTELINFO
                </Link>
                <Link className='nav-link' to='/buchungen'>
                    BUCHUNGEN
                </Link>
                <Link className='nav-link' to='/checkin'>
                    CHECKIN
                </Link>
                <Link className='nav-link' to='/anmelden'>
                    ANMELDEN
                </Link>
            </div>
       
        </div>
        <Outlet />
        </Fragment>
    )
}

export default Navigation;