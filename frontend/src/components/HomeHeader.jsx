// imports
import Logo from '../assets/logo.png';
import { NavLink } from 'react-router';

export default function HomeHeader() {
    return (
        <header>
            <div>
                <img src={Logo} alt="DueShare Logo" />
                <h1>DueShare</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/auth/signup" end>
                            Sign Up
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/auth/login" end>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
