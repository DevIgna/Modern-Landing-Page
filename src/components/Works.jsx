
const Works = () => {
    return (
        <div className="xl:p-20 sm:p-8">
            {/* Title */}
            <div className="mb-8">
                <h1 className="text-[40px] font-black">¡Hacemos Fiestas Inolvidables!</h1>
                <p className="text-xl text-gray-500">Con el trabajo de Santa Bárbara y el entusiasmo de los chicos</p>
            </div>
            {/* Works */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14">
                <div className="flex flex-col gap-2">
                    <img src="work1.jpg" alt="work1" className="w-full rounded-3xl" />
                    <p>Colegio ... - dd/mm/yyyy</p>

                </div>
                <div className="grid grid-cols-2 lg:font-normal lg:text-lg lg:gap-4  md:grid-cols-2 sm:gap-8 sm:font-bold sm:text-xl">
                    <div className="flex flex-col gap-4">
                        <img src="work2.jpg" alt="work2" className="w-48 object-cover rounded-3xl" />
                        <p>Colegio ... - dd/mm/yyyy</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img src="work3.jpg" alt="work2" className="w-48 object-cover rounded-3xl" />
                        <p>Colegio ... - dd/mm/yyyy</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img src="work4.jpg" alt="work2" className="w-48 object-cover rounded-3xl" />
                        <p>Colegio ... - dd/mm/yyyy</p>
                    </div>
                    <div className="flex flex-col gap-4">
                        <img src="work5.jpg" alt="work2" className="w-48 object-cover rounded-3xl" />
                        <p>Colegio ... - dd/mm/yyyy</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Works