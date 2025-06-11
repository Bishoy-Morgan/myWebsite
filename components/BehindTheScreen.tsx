import React from 'react'
// import PaymentAnimationSection from './ui/PaymentAnimationSection'

const BehindTheScreen:React.FC = () => {
    return (
        <section className='w-full flex justify-center py-16'>
            <div className='w-4/5 flex  '>
                <div className='w-1/2'>
                    <h2 className=' py-8'>
                        Behind the screen
                    </h2>
                    <p className='main-p text-paleWhite pt-6 px-2'>
                        Think of me as your backstage crew: invisible to the crowd, indispensable to the show.
                    </p>
                    <p className='main-p text-paleWhite pt-2 pb-6 px-2'>
                        I build digital solutions that stay out of the spotlight so your message can shine—fast-loading pages, intuitive flows, and multilingual reach that welcomes every visitor. No fluff, no detours—just the reliable foundation that lets you scale with confidence and see real-world returns.
                    </p>
                </div>
                <div className='w-1/2'>
                    {/* <PaymentAnimationSection /> */}
                </div>
            </div>
        </section>
    )
}

export default BehindTheScreen
