import Footer from "../Footer/footer"
import Hero from "../Hero/hero"
import NavBar from "../NavBar/navBar"
import PlansTable from "../PlansTable/plansTable"

const discoveryImg = "https://res.cloudinary.com/de9uql5fm/image/upload/v1680384473/discovery-section_obghxx.jpg"
const playlists = "https://res.cloudinary.com/de9uql5fm/image/upload/v1680384473/playlists_bg_afgp5u.png"

const LandingPage = () => {

    return (
        <div>
            <NavBar />
            <Hero />
            {/* Discovery Section */}
            <div className="w-100 bg-[url('https://res.cloudinary.com/de9uql5fm/image/upload/v1680316005/hero_slider1_lpbyre.jpg')] bg-right-top bg-300% px-5 md:px-0">
                <div id="discover" className="container mx-auto py-20 flex flex-col md:flex-row justify-center items-center gap-5">
                    <div className="w-12/12 md:w-6/12">
                        <img src={discoveryImg} alt="discovery" className="aspect-square object-cover w-12/12 w-8/12 mx-auto" />
                    </div>
                    <div className="w-12/12 md:w-6/12 flex flex-col justify-center items-center md:items-start gap-5 text-light">
                        <h2 className="font-bold text-2xl md:text-6xl uppercase">Get Millions</h2>
                        <p className="w-12/12 md:w-8/12 text-xl text-center md:text-left">Of Music Streams Produced by Original
                            Artists Select the package and Enjoy
                            Premium  access</p>
                        <a className="btn btn-primary" href="#plans">Choose Plans</a>
                    </div>
                </div>
            </div>

            {/* Playlists Section */}

            <div className="w-100 bg-gray px-5 md:px-0">
                <div id="discover" className="container mx-auto py-20 flex flex-col md:flex-row justify-center items-center gap-5">
                    <div className="w-12/12 md:w-6/12">
                        <h3 className="text-2xl md:text-5xl font-bold text-center">Play any song, no interruptions<br /> Hear the music you love without ads on mobile.</h3>
                    </div>
                    <div className="w-12/12 md:w-6/12 flex flex-col justify-center items-start gap-5 text-light">
                        <img src={playlists} alt="discovery" className="mx-auto mix-blend-multiply" />
                    </div>
                </div>
            </div>

            {/* Plans Section */}

            <div id="plans" className="w-100 bg-light px-5 md:px-0">
                <div id="discover" className="container mx-auto py-20 flex flex-col justify-center items-center gap-5">
                    <h2 className="text-2xl md:text-5xl font-black text-center">WHAT IS PREMIUM MINI</h2>
                    <p className="text-lg w-12/12 md:w-4/12 mx-auto text-center">30 song downloads and unlimited ad-free music, on 1 mobile device. Free experience on non-mobile devices</p>
                    <PlansTable />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default LandingPage