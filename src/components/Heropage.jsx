import Header from "./Header";
import SimpleSlider from "./Crousel";
import Product from "./Product";
import Lastsec from "./lastsec";
function Heropage() {
    return (
        <>
            <div className="bg-[url('/images/gradient_layer.png')] bg-cover bg-center h-screen relative xs:h-[120vh] sm:h-[100vh]">
                <div><Header /></div>
                <div className="text-[#fff] mx-auto px-[4%] flex justify-between items-center py-12 overflow-hidden sm:text-black">
                    <div className="text-[#fff]">
                        <h4 className="text-[40px]">Welcome to</h4>
                        <h1 className="xs:text-[40px] sm:text-[64px] font-bold leading-[3.25rem]">Pop Rock Crystal Shop!</h1>
                        <p className="max-w-[420px] font-normal text-[#31546D] py-12 ">Here you will find unique phone accessories, crystals, jewelry and more. Free shipping inside the U.S. and our phone grips come with a limited warranty. Enjoy!
                        </p>
                        <div>
                            <button className="text-[#317189] bg-[#fff] px-12 py-4 rounded-2xl font-bold">SHOP NOW</button>
                            <button className="text-[#317189]  px-12 py-4 rounded-2xl ">about us</button>
                        </div>
                    </div>
                    {/* crousel */}
                    <div className="hidden md:block"><SimpleSlider /></div>
                </div>
                <div className="flex justify-center items-center gap-3 text-base text-[#317189] py-9"><svg width="18" height="24" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.99992 4.99998C8.6905 4.99998 8.39375 5.1229 8.17496 5.34169C7.95617 5.56048 7.83325 5.85723 7.83325 6.16665V8.49998C7.83325 8.8094 7.95617 9.10615 8.17496 9.32494C8.39375 9.54373 8.6905 9.66665 8.99992 9.66665C9.30934 9.66665 9.60609 9.54373 9.82488 9.32494C10.0437 9.10615 10.1666 8.8094 10.1666 8.49998V6.16665C10.1666 5.85723 10.0437 5.56048 9.82488 5.34169C9.60609 5.1229 9.30934 4.99998 8.99992 4.99998ZM8.99992 0.333313C6.83398 0.333313 4.75676 1.19373 3.22521 2.72527C1.69367 4.25682 0.833252 6.33405 0.833252 8.49998V15.5C0.833252 17.6659 1.69367 19.7431 3.22521 21.2747C4.75676 22.8062 6.83398 23.6666 8.99992 23.6666C11.1659 23.6666 13.2431 22.8062 14.7746 21.2747C16.3062 19.7431 17.1666 17.6659 17.1666 15.5V8.49998C17.1666 6.33405 16.3062 4.25682 14.7746 2.72527C13.2431 1.19373 11.1659 0.333313 8.99992 0.333313ZM14.8333 15.5C14.8333 17.0471 14.2187 18.5308 13.1247 19.6248C12.0307 20.7187 10.547 21.3333 8.99992 21.3333C7.45282 21.3333 5.96909 20.7187 4.87513 19.6248C3.78117 18.5308 3.16659 17.0471 3.16659 15.5V8.49998C3.16659 6.95288 3.78117 5.46915 4.87513 4.37519C5.96909 3.28123 7.45282 2.66665 8.99992 2.66665C10.547 2.66665 12.0307 3.28123 13.1247 4.37519C14.2187 5.46915 14.8333 6.95288 14.8333 8.49998V15.5Z" fill="#307189" />
                </svg>
                    <span>sroll down</span>
                </div>
                {/* products */}
                <Product/>
                {/* lastsec */}
                <Lastsec/>
            </div>
                
        </>
    )
}
export default Heropage;