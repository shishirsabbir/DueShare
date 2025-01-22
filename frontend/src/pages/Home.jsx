import { useNavigate } from 'react-router';
import HomeHeader from '../components/HomeHeader';
import BarGraph from './../assets/landingPage/image_one.jpg';
import PieChart from './../assets/landingPage/donut_chart.webp';
import CurveGraph from './../assets/landingPage/landing_img3.jpg';

// uncomment before use
// import BgImage from './../assets/landingPage/landing_bg.jpg';

import GoogleIcon from './../assets/colaborations/google.svg';
import MicrosoftIcon from './../assets/colaborations/microsoft.svg';
import SamsungIcon from './../assets/colaborations/samsung.svg';
import TeslaIcon from './../assets/colaborations/tesla.svg';
import VercelIcon from './../assets/colaborations/vercel.svg';

export default function Home() {
    let navigate = useNavigate();

    return (
        <>
            <HomeHeader />
            <main className="mx-auto mt-11 w-[90%] max-w-[1536px]">
                {/* total top */}
                <section className="grid grid-cols-2 items-center gap-32">
                    {/* left part */}
                    <div className="text-white">
                        <h2 className="text-6xl font-bold">
                            Unlock the Power of Financial Clarity
                        </h2>
                        <p className="mt-6 font-normal">
                            Take charge of your finances with ease. Track
                            spending, set goals, and plan for your future—all in
                            one place. Simplify your financial journey and start
                            building a secure future today.
                        </p>
                        <div className="mt-12 flex items-center gap-8">
                            <button
                                className="rounded-3xl bg-white px-8 py-3 text-lg text-black transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-[#535c72] hover:text-white active:-translate-y-[2px] active:bg-white active:text-black"
                                onClick={() => {
                                    navigate('/auth/signup');
                                }}
                            >
                                Get Started
                            </button>
                            <button
                                className="flex items-center gap-1 text-lg transition-all hover:gap-3"
                                onClick={() => {
                                    navigate('/about');
                                }}
                            >
                                Learn More
                                <svg
                                    width="25"
                                    height="15"
                                    viewBox="0 0 25 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M24.7071 8.20711C25.0976 7.81658 25.0976 7.18342 24.7071 6.79289L18.3431 0.428932C17.9526 0.0384078 17.3195 0.0384078 16.9289 0.428932C16.5384 0.819457 16.5384 1.45262 16.9289 1.84315L22.5858 7.5L16.9289 13.1569C16.5384 13.5474 16.5384 14.1805 16.9289 14.5711C17.3195 14.9616 17.9526 14.9616 18.3431 14.5711L24.7071 8.20711ZM0 8.5H24V6.5H0V8.5Z"
                                        fill="white"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* right part */}
                    <div>
                        <div className="ml-auto h-full w-[480px] rounded-3xl bg-[#373737] p-4">
                            <div className="grid grid-cols-2 grid-rows-1 gap-4">
                                <img
                                    src={BarGraph}
                                    alt="Bar Graph Image"
                                    className="h-[180px] rounded-3xl"
                                />
                                <img
                                    src={PieChart}
                                    alt="Pie Chart Graph Image"
                                    className="h-[180px] rounded-3xl"
                                />
                            </div>
                            <div className="mt-4">
                                <img
                                    src={CurveGraph}
                                    alt="Curve Graph Image"
                                    className="rounded-3xl"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* total bottom */}
                <section className="mt-10">
                    <ul className="flex items-center justify-between">
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
            <footer className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 py-3 text-center">
                <p className="inline-block rounded-3xl bg-[#373737] px-8 py-2 text-white">
                    @Copyright 2025
                </p>
            </footer>
        </>
    );
}
