import { useState } from 'react'
import { HabitDays } from './libs/DataHabit'
import { ChevronRight } from 'lucide-react'

const MainPage = () => {
    const [absenButton, setAbsenButton] = useState(() => {
        const saveAbsen = localStorage.getItem('saveAbsen')
        return saveAbsen ? JSON.parse(saveAbsen) : false
    })

    function AbsenButton() {
        setAbsenButton(prev => {
            const newValue = !prev;
            localStorage.setItem('saveAbsen', JSON.stringify(newValue));
            return newValue;
        });
    }
    return (
        <div className='max-w-lg mx-auto w-full'>
            <div className='w-full h-screen flex flex-col justify-start pt-16 relative gap-16 px-4'>
                <h1 className='font-[inter] text-center text-lg font-[600]'>Daily Strike</h1>

                {/* Fire GIF */}
                <div className='w-full h-fit  flex items-center justify-center'>
                    {absenButton ? (
                        <img src="/assets/flame.gif" alt="Flame animation" width={'128px'} />
                    ) : (
                        <img src="/assets/flame2.png" alt="Flame" width={'128px'} className='grayscale' />
                    )}
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
                <div className='max-w-lg fixed left-[50%] translate-x-[-50%] bottom-4 w-full h-16 px-4'>
                    <button className={`${absenButton ? 'bg-blue-300' : 'hover:bg-blue-600'} w-full h-full rounded-full bg-blue-500  text-white font-bold font-[poppins]`} onClick={AbsenButton} disabled={absenButton && true}>{!absenButton ? 'Absen Hari ini' : 'Besok Lagi Yaa'} </button>
                </div>
            </div>
        </div>
    )
}

export default MainPage
