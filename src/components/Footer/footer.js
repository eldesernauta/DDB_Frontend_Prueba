import FooterMenu from "../FooterMenu/footerMenu";
import logo from '../../logo.svg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebookF, faYoutube, faInstagram
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {

    const menu1 = [
        { url: "/about", text: "About" },
        { url: "/jobs", text: "Jobs" },
        { url: "/ftr", text: "For The Record" },
    ];

    const menu2 = [
        { url: "/artist", text: "For Artists" },
        { url: "/developers", text: "Developers" },
        { url: "/advertisign", text: "Advertising" },
        { url: "/investors", text: "Investors" },
        { url: "/vendors", text: "Vendors" },
    ];

    const menu3 = [
        { url: "/support", text: "Support" },
        { url: "/web-player", text: "Web Player" },
        { url: "/app", text: "Free Mobile App" },
    ];
    return (
        <div>
            <div className="w-100 bg-gradient-to-r from-gray-950 to-gray-900 py-10 md:py-20">
                <div className="container mx-auto flex flex-col md:flex-row justify-center items-start px-5 md:px-0 text-white gap-5 md:gap-0">
                    <div className="w-12/12 md:w-3/12 mt-5 md:mt-0 order-4 md:order-1 flex flex-col self-center justify-center items-center gap-5 text-accent">
                        <img src={logo} alt='logo' width="150px"></img>
                        <div className="flex gap-3 text-light">
                            <a href="#" className="hover:text-accent">
                                <FontAwesomeIcon
                                    icon={faFacebookF}
                                    style={{ fontSize: 20 }} />
                            </a>
                            <a href="#" className="hover:text-accent">
                                <FontAwesomeIcon
                                    icon={faYoutube}
                                    style={{ fontSize: 20 }} />
                            </a>
                            <a href="#" className="hover:text-accent">
                                <FontAwesomeIcon
                                    icon={faInstagram}
                                    style={{ fontSize: 20 }} />
                            </a>
                        </div>
                    </div>
                    <div className="w-12/12 md:w-3/12 order-1 md:order-2 md:mt-0">
                        <h4 className="font-bold uppercase text-lg">Company</h4>
                        <FooterMenu links={menu1} />
                    </div>
                    <div className="w-12/12 md:w-3/12 order-2 md:order-3">
                        <h4 className="font-bold uppercase text-lg">Communities</h4>
                        <FooterMenu links={menu2} />
                    </div>
                    <div className="w-12/12 md:w-3/12 order-3 md:order-4">
                        <h4 className="font-bold uppercase text-lg">Useful Links</h4>
                        <FooterMenu links={menu3} />
                    </div>
                </div>
            </div>
            <div className="w-100 bg-gray p-5">
                <div className="container mx-auto text-center">
                    <p className="text-xs">We and our partners use cookies to personalize your experience, to show you ads based on your interests, and for measurement
                        and analytics purposes. By using our website and services, you agree to our use of cookies as described in ourCookie Policy.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer