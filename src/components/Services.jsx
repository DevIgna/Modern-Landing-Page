import { GrMailOption } from 'react-icons/gr'
import { FiSmartphone } from 'react-icons/fi'
import { LuMonitorSmartphone } from 'react-icons/lu'

const NewSletter = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-20 p-8 xl:p-20">
      {/* Newsletter */}
      <div className='flex flex-col items-center justify-center gap-4'>
        <h1 className="text-[30px] font-bold">Como podemos ayudarte</h1>
        <p className="text-[18px] text-gray-500 ">Siguenos en nuestro NewSletter. Actualizamos regularmente los ultimos cambios.</p>
        <form className='w-full'>
          <div className='relative'>
            <GrMailOption className='absolute top-1/2 -translate-y-1/2 left-2 text-gray-500 text-lg' />
            <input type="text" className='bg-gray-200 w-full py-4 pl-10 pr-36 rounded-xl outline-none ' placeholder='Escribe tu Email' />
            <button type='submit' className='absolute rounded-lg font-semibold py-2 px-6 bg-primary text-white right-0 top-1/2 -translate-y-1/2'>Suscribe</button>
          </div>
        </form>
      </div>
      {/* Services */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div className='flex flex-col gap-2'>
          <FiSmartphone className='text-4xl p-2 bg-secondary text-primary box-content rounded-xl' />
          <h3 className='text-[20px] font-bold'>UI/UX Desing</h3>
          <p className='text-gray-500'>Sometimes Features require a short description</p>
        </div>
        <div className='flex flex-col gap-2'>
          <LuMonitorSmartphone className='text-4xl p-2 bg-secondary text-primary box-content' />
          <h3 className='text-[20px] font-bold'>Logo Branding</h3>
          <p className='text-gray-500'>Sometimes Features require a short description</p>
        </div>
        <div className='flex flex-col gap-2'>
          <FiSmartphone className='text-4xl p-2 bg-secondary text-primary box-content' />
          <h3 className='text-[20px] font-bold'>App Desing</h3>
          <p className='text-gray-500'>Sometimes Features require a short description</p>
        </div>
        <div className='flex flex-col gap-2'>
          <FiSmartphone className='text-4xl p-2 bg-secondary text-primary box-content' />
          <h3 className='text-[20px] font-bold'>Website Desing</h3>
          <p className='text-gray-500'>Sometimes Features require a short description</p>
        </div>

      </div>
    </div>
  )
}

export default NewSletter