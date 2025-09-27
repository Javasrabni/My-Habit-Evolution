import { useEffect, useState } from 'react'
import { HabitDays } from './libs/DataHabit'
import { ChevronRight } from 'lucide-react'
import Confeti from './components/confeti'

const MainPage = () => {
    const [absenButton, setAbsenButton] = useState(() => {
        const saveAbsen = localStorage.getItem('saveAbsen')
        return saveAbsen ? JSON.parse(saveAbsen) : false
    })

    // CONFETI
    const [ConfetiState, setConfeti] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            setConfeti(false)
        }, 4000)
    }, [ConfetiState])

    function AbsenButton() {
        setAbsenButton(prev => {
            const newValue = !prev;
            localStorage.setItem('saveAbsen', JSON.stringify(newValue));
            return newValue;
        });
        setConfeti(prev => !prev)
    }

    // PROGRESS BAR
    const [progressBar, setProgressBar] = useState(40)

    return (
        <div className='max-w-lg mx-auto w-full'>
            <div className='w-full h-[100svh] flex flex-col justify-start pt-16 relative px-4 gap-4'>
                <h1 className='font-[inter] text-center text-lg font-[600] mb-8'>Daily Strike</h1>

                {/* Confeti absen */}
                {ConfetiState && <Confeti />}

                {/* Fire GIF */}
                <div className='w-full h-fit py-4 flex items-center justify-center bg-blue-50 rounded-xl flex flex-col px-4'>
                    {absenButton ? (
                        <img src="/assets/flame.gif" alt="Flame animation" width={'128px'} />
                    ) : (
                        <img src="/assets/flame2.png" alt="Flame" width={'128px'} className='grayscale' />
                    )}

                    <div className='w-full h-fit flex gap-4 items-center mt-8'>
                        <p className='text-sm'>40%</p>
                        <div className='w-full h-2 bg-gray-200 rounded-full relative'>

                            {/* SEKAT PROGRESS BAR */}
                            <div className={`${progressBar >= 33 ? 'bg-white' : 'bg-gray-400'} w-[2px] h-2 absolute left-[33.5%]`} />
                            <div className={`${progressBar >= 33 ? 'bg-white' : 'bg-gray-400'} w-[2px] h-2 absolute left-[66.5%]`} />

                            {/* PROGRESS BAR */}
                            <div className={`${progressBar <= 33 ? "bg-red-400" : progressBar <= 66 ? "bg-orange-400" : "bg-blue-400"} w-[40%] h-full rounded-full`} />
                        </div>
                        <p className='text-sm'>100%</p>
                    </div>
                </div>

                {/* DAY LIST */}
                <span className='absolute invisible sm:visible sm:right-[-32px] flex items-center h-full'><ChevronRight /></span>
                <div className='w-full h-fit flex flex-col gap-2'>
                    <ul className='w-full overflow-x-auto flex gap-4'>
                        {HabitDays && HabitDays.map((day, idx) =>
                            <li key={idx} className='w-24 h-16 bg-blue-50 shrink-0 flex flex-col items-center justify-center gap-0 rounded-lg'>
                                <h1 className='text-lg'>{idx + 1}</h1>
                                <p className='text-xs'>{day}</p>
                            </li>
                        )}
                    </ul>
                </div>

                {/* BUTTON ON FIRE */}
                <div className='max-w-lg fixed z-40 left-[50%] translate-x-[-50%] bottom-4 w-full h-16 px-4'>
                    <button className={`${absenButton ? 'bg-blue-200' : 'hover:bg-blue-600'} w-full h-full rounded-full bg-blue-500  text-white font-bold font-[poppins]`} onClick={AbsenButton} disabled={absenButton && true}>{!absenButton ? 'Absen Hari ini' : 'Besok Lagi Yaa'} </button>
                </div>
            </div>
        </div>
    )
}

export default MainPage
