import logo from '../../logo.svg'

const NavBar = () => {
    return (
        <div className="navbar w-screen px-12 mx-auto py-3 md:py-5 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0 absolute top-0 l-0 z-50">
            <img src={logo} alt='logo' className='hover:cursor-pointer w-16 md:w-24'></img>
            <ul className='flex justify-center items-center text-light gap-8 md:gap-10'>
                <li><a href="#plans">Premium</a></li>
                <li><a href="#discover">Discover</a></li>
                <li><a href="#">Join</a></li>
            </ul>
        </div>
    )  
}

export default NavBar