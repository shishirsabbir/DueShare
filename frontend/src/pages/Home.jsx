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
            <main>
                {/* total top */}
                <section>
                    {/* left part */}
                    <div>
                        <h2>Unlock the Power of Financial Clarity</h2>
                        <p>
                            Take charge of your finances with ease. Track spending, set goals, and plan for your
                            future—all in one place. Simplify your financial journey and start building a secure future
                            today.
                        </p>
                        <div>
                            <button
                                onClick={() => {
                                    navigate('/auth/signup');
                                }}
                            >
                                Get Started
                            </button>
                            <button
                                onClick={() => {
                                    navigate('/about');
                                }}
                            >
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* right part */}
                    <div>
                        <div>
                            <div>
                                <img src={BarGraph} alt="Bar Graph Image" />
                                <img src={PieChart} alt="Pie Chart Graph Image" />
                            </div>
                            <div>
                                <img src={CurveGraph} alt="Curve Graph Image" />
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
                            <img src={MicrosoftIcon} alt="Microsoft Company Logo" />
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
