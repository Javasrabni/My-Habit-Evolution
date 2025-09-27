const Confeti = () => {
    return (
        <div className='absolute w-full h-full z-50 bg-white flex flex-col items-center gap-32'>
            <h1>Kerenn, jangan lupa besok!</h1>
            <img src="/assets/spark.gif" alt="spark" width={'200px'} className='absolute top-1' />
            <img src="/assets/strike.gif" alt="strike" width={'200px'} />
        </div>
    )
}

export default Confeti
