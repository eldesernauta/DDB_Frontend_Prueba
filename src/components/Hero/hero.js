import HeroSlider, { Slide, Nav } from "hero-slider";

const Hero = () => {

    return (
        <HeroSlider
            height={"100vh"}
            autoplay
            controller={{
                initialSlide: 1,
                slidingDuration: 500,
                slidingDelay: 100,
                onSliding: (nextSlide) =>
                    console.debug("onSliding(nextSlide): ", nextSlide),
                onBeforeSliding: (previousSlide, nextSlide) =>
                    console.debug(
                        "onBeforeSliding(previousSlide, nextSlide): ",
                        previousSlide,
                        nextSlide
                    ),
                onAfterSliding: (nextSlide) =>
                    console.debug("onAfterSliding(nextSlide): ", nextSlide)
            }}
        >
            <Slide
                navDescription="Hero Slider"
                className="hero-slider-item"
                background={{
                    backgroundImageSrc: "https://res.cloudinary.com/de9uql5fm/image/upload/v1680384349/hero-slider1_i9j8p4.jpg",
                    backgroundImageSizes: "contain",
                    backgroundImageClassName: "hero-slider-item"
                }}
            >
                <div className="container mx-auto h-full flex flex-col md:flex-row justify-center items-center text-light">
                    <div className="w-12/12 md:w-6/12"></div>
                    <div className="w-12/12 md:w-6/12 flex flex-col items-center md:items-start gap-5 text-center md:text-left">
                        <h1 className="text-6xl font-black uppercase">Feel the Music</h1>
                        <p className="text-xl">Discover million plus music streams at the biggest online Music Store</p>
                        <a href="#" className="btn w-3/6 md:w-auto">Start Listening</a>
                    </div>
                </div>
            </Slide>
            <Slide
                navDescription="Hero Slider"
                className="hero-slider-item"
                background={{
                    backgroundImageSrc: "https://res.cloudinary.com/de9uql5fm/image/upload/v1680384349/hero-slider2_zhdrvx.jpg",
                    backgroundImageSizes: "contain",
                    backgroundImageClassName: "hero-slider-item"
                }}
            >
                <div className="container mx-auto h-full flex flex-col md:flex-row justify-center items-center text-light">
                    <div className="w-12/12 md:w-6/12"></div>
                    <div className="w-12/12 md:w-6/12 flex flex-col items-center md:items-start gap-5 text-center md:text-left">
                        <h1 className="text-6xl font-black uppercase">Feel the Music</h1>
                        <p className="text-xl">Discover million plus music streams at the biggest online Music Store</p>
                        <a href="#" className="btn w-3/6 md:w-auto">Start Listening</a>
                    </div>
                </div>
            </Slide>
            <Slide
                navDescription="Hero Slider"
                className="hero-slider-item"
                background={{
                    backgroundImageSrc: "https://res.cloudinary.com/de9uql5fm/image/upload/v1680384349/hero-slider3_mwi1rm.jpg",
                    backgroundImageSizes: "contain",
                    backgroundImageClassName: "hero-slider-item"
                }}
            >
                <div className="container mx-auto h-full flex flex-col md:flex-row justify-center items-center text-light">
                    <div className="w-12/12 md:w-6/12"></div>
                    <div className="w-12/12 md:w-6/12 flex flex-col items-center md:items-start gap-5 text-center md:text-left">
                        <h1 className="text-6xl font-black uppercase">Feel the Music</h1>
                        <p className="text-xl">Discover million plus music streams at the biggest online Music Store</p>
                        <a href="#" className="btn w-3/6 md:w-auto">Start Listening</a>
                    </div>
                </div>
            </Slide>
            <Nav />
        </HeroSlider>
    );
};

export default Hero;
