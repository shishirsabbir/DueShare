import { useNavigate } from "react-router";
import HomeHeader from "../components/HomeHeader";
import BarGraph from "./../assets/landingPage/image_one.jpg";
import PieChart from "./../assets/landingPage/donut_chart.webp";
import CurveGraph from "./../assets/landingPage/landing_img3.jpg";

// uncomment before use
// import BgImage from './../assets/landingPage/landing_bg.jpg';

import GoogleIcon from "./../assets/colaborations/google.svg";
import MicrosoftIcon from "./../assets/colaborations/microsoft.svg";
import SamsungIcon from "./../assets/colaborations/samsung.svg";
import TeslaIcon from "./../assets/colaborations/tesla.svg";
import VercelIcon from "./../assets/colaborations/vercel.svg";

export default function Home() {
	let navigate = useNavigate();

	return (
		<>
			<HomeHeader />
			<main class="w-[90%] max-w-[1536px] mx-auto">
				{/* total top */}
				<section class="grid grid-cols-2 gap-32">
					{/* left part */}
					<div class="text-white">
						<h2 class="text-6xl font-bold">
							Unlock the Power of Financial Clarity
						</h2>
						<p class="font-normal">
							Take charge of your finances with ease. Track
							spending, set goals, and plan for your future—all in
							one place. Simplify your financial journey and start
							building a secure future today.
						</p>
						<div>
							<button
								onClick={() => {
									navigate("/auth/signup");
								}}
							>
								Get Started
							</button>
							<button
								onClick={() => {
									navigate("/about");
								}}
							>
								Learn More
							</button>
						</div>
					</div>

					{/* right part */}
					<div>
						<div class="bg-[#373737] p-4 w-[480px] rounded-3xl h-full ml-auto">
							<div class="grid grid-cols-2 grid-rows-1 gap-4 ">
								<img
									src={BarGraph}
									alt="Bar Graph Image"
									class="rounded-3xl h-[180px]"
								/>
								<img
									src={PieChart}
									alt="Pie Chart Graph Image"
									class="rounded-3xl h-[180px]"
								/>
							</div>
							<div class="mt-4">
								<img
									src={CurveGraph}
									alt="Curve Graph Image"
									class="rounded-3xl"
								/>
							</div>
						</div>
					</div>
				</section>

				{/* total bottom */}
				<section>
					<ul>
						<li>
							<img src={GoogleIcon} alt="Google Company Logo" />
						</li>
						<li>
							<img
								src={MicrosoftIcon}
								alt="Microsoft Company Logo"
							/>
						</li>
						<li>
							<img src={SamsungIcon} alt="Samsung Company Logo" />
						</li>
						<li>
							<img src={TeslaIcon} alt="Tesla Company Logo" />
						</li>
						<li>
							<img src={VercelIcon} alt="Vercel Company Logo" />
						</li>
					</ul>
				</section>
			</main>
			<footer>
				<p>@Copyright 2025</p>
			</footer>
		</>
	);
}
