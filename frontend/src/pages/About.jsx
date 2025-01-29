import Footer from '../components/Footer';
import ContentImage from './../assets/aboutPage/about_page_img.jpg';

import HomeHeader from './../components/HomeHeader';

export default function About() {
    return (
        <>
            <HomeHeader />
            <main className="mx-auto mt-11 grid w-[90%] max-w-[1536px] grid-cols-2">
                <section className="justify-self-start">
                    <h1 className="text-7xl font-bold text-[#FBFBFB]">
                        This is DueShare
                    </h1>
                    <p className="mt-5 text-lg text-white">
                        At DueShare, we believe in simplifying financial
                        management for everyone. Our platform is designed to
                        help you effortlessly track your expenses, manage shared
                        costs, and stay on top of your financial goals. We are a
                        team of passionate individuals dedicated to creating a
                        user-friendly tool that empowers you to take control of
                        your finances. Our mission is to make money management
                        simple, transparent, and accessible to all.
                    </p>
                    <p className="mt-4 text-lg text-white">
                        With DueShare, you can easily split bills, manage group
                        expenses, and keep a clear record of all your financial
                        activities. Whether you’re sharing costs with friends,
                        family, or colleagues, our platform ensures fairness and
                        clarity, helping you avoid the hassle of complex
                        calculations.
                    </p>
                    <p className="mt-4 text-lg text-white">
                        Join us on this journey to better financial health.
                        Discover how DueShare can transform the way you manage
                        your money, one transaction at a time.
                    </p>
                </section>
                <section className="justify-self-end">
                    <div>
                        <img
                            className="block aspect-square h-[32rem] rounded-3xl object-cover"
                            src={ContentImage}
                            alt="A girl explaining to other colleagues"
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
