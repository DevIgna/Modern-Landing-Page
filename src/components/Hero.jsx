// import React from 'react'
import { FiPlay } from 'react-icons/fi'
import { AiFillStar } from 'react-icons/ai'

const Hero = () => {
  return (
    <section className="h-[90vh] grid grid-cols-1 md:grid-cols-8">
      {/* Informacion */}
      <div className="md:col-span-5 flex items-center justify-center p-12">
        <div className="flex flex-col gap-5">
          <h1 className="text-[2.9rem] font-bold leading-[3rem]">¡Santa Bárbara Eventos hace tu Baile de Egresados, Boda, Cumpleaños de 15 y 18 <span className="text-primary  border-primary border-[0.6rem] border-r-2 leading-[6rem]">Realidad</span>!🥳</h1>
          <p className='text-gray-600 font-medium text-[1.2rem] leading-[2.1rem]'>Santa Bárbara Eventos tiene un equipo y personal profesional encargado de hacer que pasés la <span className='text-primary font-semibold text-[1.4rem]'>mejor</span> fiesta de tu vida <span className='text-2xl'>🎉</span>, la mejor atención y organización sin comparación.</p>
          <div className='flex items-center gap-8'>
            <button className="text-white text-[1.12rem] bg-primary rounded-full py-2 px-8 mt-8">Contáctanos</button>
            <button className="text-[1.12rem] py-2 px-8 mt-4 flex items-center gap-2 text-left"><FiPlay className='bg-gray-300 text-primary p-4 box-content rounded-full' />¡Mirá nuestro <br /> video de Introducción!</button>
          </div>
        </div>
      </div>
      {/* Imagen */}
      <div className=" md:col-span-3 flex items-center justify-center relative">
        {/* Imagenes */}
        <div>
          <img src="../../public/Hero.png" alt="peopleHero.png" className=' w-[350px] h-[350px] object-cover -mt-19 -mb-7' />
          <div className='flex justify-center max-w-[250px] bg-white mx-auto rounded-lg shadow-xl p-4 flex-col gap-1'>
            <div className='flex rounded-full border-white object-cover '>
              {/* Puedo poner -ml-4 en vez de relative, right y lefts */}
              <img src="https://img.freepik.com/foto-gratis/chico-guapo-seguro-posando-contra-pared-blanca_176420-32936.jpg" alt="person" className=' w-8 h-8  rounded-full object-cover ring-2 ring-gray-400 -ml-4' />
              <img src="https://img.freepik.com/foto-gratis/apuesto-joven-brazos-cruzados-sobre-fondo-blanco_23-2148222620.jpg" alt="person" className=' w-8 h-8 rounded-full ring-2 ring-gray-400 -ml-4' />
              <img src="https://img.freepik.com/psd-gratis/hombre-sonriendo_1154-473.jpg" alt="person" className=' w-8 h-8 rounded-full ring-2 ring-gray-400 -ml-4' />
              <img src="https://img.freepik.com/foto-gratis/cierrese-encima-retrato-tipo-caucasico-maduro-camiseta-azul-buen-peinado-barba-que-sonrie-levemente-tres-cuartos-3-4-close-up-retrato_176420-10336.jpg" alt="person" className=' w-8 h-8 object-cover rounded-full ring-2 ring-gray-400 -ml-4' />
              <span className='font-bold text-xl -ml-6 mt-2 flex justify-center items-center '>...</span>
              </div>
              

            <h2 className='font-semibold text-[1.2rem] tracking-[1.1px] text-gray-800' >+120 Empleados</h2>
            <div className='flex items-center gap-2 text-lg text-gray-500'>
              <AiFillStar className='text-primary' /> 5.0 (3.1k Reviews)
            </div>
          </div>
        </div>
        {/* Circulo */}
        <div className='absolute top-[44%] -translate-y-1/2 left-1/2 -translate-x-1/2 w-[350px] h-[350px] border-primary border-[8px] rounded-full -z-10' />

        {/* Logos */}
          <img src="../../public/robot.jpg" alt="robot" className='w-[6.2rem] h-[6.2rem] object-cover rounded-full border-l-8 border-black absolute top-[8%] right-[5%] ' />
          <img src="../../public/baileegre.jpg" alt="baile" className='w-[5.9rem] h-[5.9rem] object-cover rounded-full border-l-[0.5rem] border-x-violet-900 absolute top-[2%] left-[12%] -rotate-[17deg]' />
          <img src="../../public/santabe.jpg" alt="santabarbara" className='w-20 h-20 object-cover rounded-full border-l-8 border-pink-600 absolute bottom-[20%] right-[2%] rotate-[19deg]' />

      </div>
    </section>
  )
}

export default Hero