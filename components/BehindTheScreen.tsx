import React from 'react'

const BehindTheScreen:React.FC = () => {
    return (
        <section className='w-full flex justify-center py-32'>
            <div className='w-2/5 flex flex-col items-center justify-center gap-y-8 '>
                <h2 className='text-center px-0 py-8'>
                    Behind the screen
                </h2>
                <p className='main-p text-paleWhite text-center px-0'>
                    Think of me as your backstage crew<br/>invisible to the crowd, <br/>indispensable to the show.
                </p>
                {/* <p className='main-p text-paleWhite text-center px-0'>
                    I build digital solutions that stay out of the spotlight so your message can shine—fast-loading pages, intuitive flows, and multilingual reach that welcomes every visitor. No fluff, no detours—just the reliable foundation that lets you scale with confidence and see real-world returns.
                </p> */}
            </div>
        </section>
    )
}

export default BehindTheScreen
