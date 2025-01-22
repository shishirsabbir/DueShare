// imports
import Logo from '../assets/logo.png';
import { NavLink } from 'react-router';

export default function HomeHeader() {
    return (
        <header className="mx-auto mt-8 flex w-[90%] max-w-[1536px] select-none justify-between">
            <div className="flex items-center gap-2">
                <img src={Logo} alt="DueShare Logo" className="w-12" />
                <h1 className="text-2xl font-bold text-white">DueShare</h1>
            </div>
            <nav>
                <ul className="flex items-center gap-8">
                    <li className="text-lg text-white">
                        <NavLink to="/auth/signup" end>
                            Sign Up
                        </NavLink>
                    </li>
                    <li className="cursor-pointer rounded-3xl bg-white px-8 py-2 text-lg transition-all duration-300 ease-in-out hover:bg-[#535c72] hover:text-white active:bg-white active:text-black">
                        <NavLink to="/auth/login" end>
                            Login
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
