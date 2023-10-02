
const Brands = () => {
    return (
        <div className="xl:block lg:block md:hidden sm:hidden">

            <div className="flex p-8 flex-col items-center justify-self-center gap-8 bg-gray-100 xl:mt-2 md:-mt-4 sm:mt-96">
                <h1 className="text-2xl font-medium text-gray-800 text-center">Empresas de Confianza</h1>
                <div className="flex flex-col md:flex-row items-center flex-wrap gap-20">
                    <img src="leop.png" alt="leo-producciones" className="w-18 h-18" />
                    <img src="tropic.jpg" alt="bebidas" className="w-[12rem] h-[8rem]" />
                </div>
            </div>
        </div>

    )
}

export default Brands
