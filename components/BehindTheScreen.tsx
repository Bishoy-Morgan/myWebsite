import React from 'react'

const BehindTheScreen:React.FC = () => {
    return (
        <section className='relative w-4/5 mx-auto flex justify-center py-32'>
            <div className="absolute top-0 right-0 w-1/4 h-10 border-r border-red" />
            <div className="absolute bottom-1/2 right-0 w-1/4 h-14 border-l border-red" />
            <div className="absolute bottom-1/4 left-0 w-1/4 h-44 border-l border-red" />
            <div className='w-2/5 flex flex-col items-center justify-center gap-y-8 '>
                <h2 className='text-center px-0 py-8 uppercase'>
                    Behind the screen
                </h2>
                <p className='main-p text-paleWhite text-center px-0'>
                    Think of me as your backstage crew<br/>invisible to the crowd, <br/>indispensable to the show.
                </p>
            </div>
        </section>
    )
}

export default BehindTheScreen
