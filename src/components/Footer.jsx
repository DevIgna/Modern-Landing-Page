import { BsInstagram } from 'react-icons/bs'
import { AiOutlineGithub } from 'react-icons/ai'
import { ImLinkedin, ImFacebook2 } from 'react-icons/im'
import { FaTwitter } from 'react-icons/fa6'

const Footer = () => {
    return (
        <footer className="bg-footer p-8 xl:p-20">
            <div className='flex flex-col md:flex-row gap-4 items-center justify-between border-gray-500 border-b pb-8'>
                {/* Logo */}
                <div className='w-1/6'>
                    <a href='#' className="text-4xl p-2"><span className='absolute  text-primary'>🎂</span>
                    </a>

                </div>
                {/* Social Media */}
                <nav className='flex items-center gap-4 text-white '>
                    <a href="#" className='bg-primary rounded-full p-4 block'>
                        <BsInstagram />
                    </a>

                    <a href="#" className='bg-primary rounded-full p-4 block'>
                        <ImFacebook2 />
                    </a>

                    <a href="#" className='bg-primary rounded-full p-4 block'>
                        <FaTwitter />
                    </a>

                    <a href="#" className='bg-primary rounded-full p-4 '>
                        <AiOutlineGithub />
                    </a>

                    <a href="#" className='bg-primary rounded-full p-4 block'>
                        <ImLinkedin />
                    </a>
                </nav>

            </div>
            <div className='mt-10'>
                <h3 className='font-bold text-white text-lg text-center md:text-left'>Company</h3>
                <nav className='mt-4 flex  flex-col md:flex-row items-center gap-4 justify-between'>
                    <a href="#" className='text-gray-400 mt-4 hover:text-white transition-colors'>About Us</a>
                    <a href="#" className='text-gray-400 mt-4 hover:text-white transition-colors'>Press</a>
                    <a href="#" className='text-gray-400 mt-4 hover:text-white transition-colors'>Investors</a>
                    <a href="#" className='text-gray-400 mt-4 hover:text-white transition-colors'>Events</a>
                    <a href="#" className='text-gray-400 mt-4 hover:text-white transition-colors'>Terms of Uses</a>
                    <a href="#" className='text-gray-400 mt-4 hover:text-white transition-colors'>Privacy Policy</a>
                    <button type='button' className='font-semibold py-2 px-6 bg-primary text-white rounded-xl'>Contact Us</button>
                </nav>
            </div>
            <div className='mt-20'>
                <p className='text-gray-400 text-center'>© Santa Barbara 2023 - Todos los Derechos reservados</p>
            </div>
        </footer>
    )
}

export default Footer