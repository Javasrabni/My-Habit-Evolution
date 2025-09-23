import React from 'react'
import Lottie from 'lottie-react'
const Confeti = () => {
    return (
        <div className='absolute w-full h-full z-50 border-y-[240px] border-x-[60px] border-[#FEFDFF] flex items-center justify-center'>
            <Lottie
                autoplay
                
                path="/assets/aiload.json"
                style={{ width: "100%" }}
            />
        </div>
    )
}

export default Confeti
