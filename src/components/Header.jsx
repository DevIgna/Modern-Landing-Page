// import { LuPartyPopper } from 'react-icons/lu'
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai'
import { useState } from 'react'



const Header = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <>
        
            <header className="flex items-center justify-between xl:justify-start w-full py-4 px-8  h-[12vh] z-50 bg-gray-800 text-white">
                <div className="xl:w-1/4 ">
                    {/* Title  */}
                    <a href='#' className="flex text-2xl font-semibold items-center p-2 gap-5 leading-[1.6rem]"><span className='xl:text-3xl md:text-4xl sm:text-md mr-8'>🎂</span>Santa Bárbara Eventos Sociales</a>
                </div>
                {/* Navigator */}
                <nav className={`fixed w-[80%] md:w-[40%] xl:w-full h-full ${showMenu ? 'left-0' : '-left-full'} top-0 xl:static flex-1 flex flex-col xl:flex-row items-center justify-center gap-32 transition-all duration-500 sm:font-semibold bg-gray-500 z-50 rounded-full`}>

                    {showMenu ? (
                        <>
                            <a href='#' className="flex flex-col text-2xl font-semibold items-center p-1 leading-[5rem]"><span className='xl:text-3xl md:text-4xl sm:text-4xl '>🎂</span>Santa Bárbara Eventos Sociales</a>
                            <a href="#" className='text-2xl mb-4 rounded-full border-white border-2 p-4'>Home</a>
                            <a href="#" className='text-xl'>About Us</a>
                            <a href="#" className='text-xl'>Services</a>
                            <a href="#" className='text-xl'>Products</a>
                        </>
                    ) :
                        <>
                            <a href="#">Home</a>
                            <a href="#" className=''>About Us</a>
                            <a href="#" className=''>Services</a>
                            <a href="#" className=''>Products</a>
                        </>
                    }



                </nav>
                <button onClick={() => setShowMenu(!showMenu)} className='xl:hidden text-2xl p-2'>
                    {showMenu ? <AiOutlineCloseCircle /> : <AiOutlineMenu />}
                </button>
            </header>
        </>

    )
}


export default Header
