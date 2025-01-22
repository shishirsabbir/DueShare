// imports
import Logo from "../assets/logo.png";
import { NavLink } from "react-router";

export default function HomeHeader() {
	return (
		<header class="flex justify-between w-[90%] max-w-[1536px] mx-auto mt-8">
			<div class="flex items-center gap-2">
				<img src={Logo} alt="DueShare Logo" class="w-12" />
				<h1 class="text-2xl font-bold text-white">DueShare</h1>
			</div>
			<nav>
				<ul class="flex items-center gap-8">
					<li class="text-lg text-white">
						<NavLink to="/auth/signup" end>
							Sign Up
						</NavLink>
					</li>
					<li class="text-lg px-8 py-3 rounded-3xl bg-white">
						<NavLink to="/auth/login" end>
							Login
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}
