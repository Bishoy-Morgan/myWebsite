import React from 'react'
import RedLines from './ui/RedLines'

const BehindTheScreen:React.FC = () => {
    return (
        <section className='relative w-4/5 mx-auto flex justify-center py-32'>
            <RedLines lines={['topRight', 'middleRight','bottomLeft']} />
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
