import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri'
const Reviews = () => {
    return (
        <div className="p-8 flex flex-col gap-8 leading-[3.6rem] bg-gray-100">
            <h1 className="text-[35px] text-center font-black">¡Veamos que dicen <br /> de Nosotros!</h1>
            <div className="flex justify-center gap-4">
                <span className='text-5xl text-primary'>
                    <RiDoubleQuotesL />
                </span>
                <p className="max-w-2xl text-center text-gray-600 font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate in exercitationem vero cumque? Perspiciatis minima corporis reprehenderit doloribus fuga, assumenda commodi repudiandae eum atque obcaecati quia. Harum labore asperiores hic.</p>
                <span className='text-5xl text-primary'>
                    <RiDoubleQuotesR />
                </span>
            </div>
            <div className='flex flex-col items-center justify-center gap-2'>
                <div className='flex items-center justify-center gap-8 md:gap-12'>
                    <img src="https://img.freepik.com/foto-gratis/mujer-atractiva-estado-animo-romantico-sonriendo-felicidad-sentada-mesa-chaqueta-rosa-ropa-elegante-esperando-novio-cita-cafe-bebiendo-capuchino-expresion-cara-salida_285396-4263.jpg" alt="person" className='w-6 h-6 md:w-14 md:h-14  rounded-full object-cover ring-gray-400 relative' />
                    <img src="https://img.freepik.com/foto-gratis/joven-brasileno-parado-sobre-pared-ladrillos-haciendo-gesto-italiano-mano-dedos-expresion-segura_839833-1656.jpg" alt="person" className='w-10 h-10 md:w-16 md:h-16  rounded-full object-cover ring-gray-400 relative' />
                    <img src="https://img.freepik.com/foto-gratis/mujer-bastante-joven-feliz-que-presenta-camara-parque-ciudad_1262-19158.jpg" alt="person" className=' w-12 h-12 md:w-20 md:h-20 ring-4 p-1 bg-white rounded-full object-cover ring-gray-400 relative' />
                    <img src="https://img.freepik.com/foto-gratis/alegre-mujer-mediana-edad-cabello-rizado_1262-20859.jpg" alt="person" className='w-10 h-10 md:w-16 md:h-16  rounded-full object-cover ring-gray-400 relative' />
                    <img src="https://img.freepik.com/foto-gratis/hombre-negocios-pie-junto-su-bicicleta-vintage-hablando-telefono-movil_657883-172.jpg" alt="person" className='w-8 h-8 md:w-14 md:h-14  rounded-full object-cover ring-gray-400 relative' />
                </div>
                <div>
                    <h3 className='text-center text-[22px] font-bold '>Patricia Salinas</h3>

                    <h5 className='text-center leading-[1.1rem] text-[18px] text-gray-500'>Dueña de la empresa</h5>
                </div>
                
            </div>

        </div>
    )
}

export default Reviews