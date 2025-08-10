'use client'

import React, { useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion, AnimatePresence } from 'framer-motion'
import Button from './ui/Button'
import Image from 'next/image'
import closeIcon from '@/public/icons/close.svg'

    type Props = {
        isOpen: boolean
            onClose: () => void
    }

    const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ''
    const NOTIFICATION_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_NOTIFICATION_TEMPLATE_ID || ''
    const USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || ''


    const backdropVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    }

    const modalVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.3, ease: 'easeOut' } },
        exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2, ease: 'easeIn' } },
    }

const ContactForm: React.FC<Props> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('sending')

        try {
        await emailjs.send(SERVICE_ID, NOTIFICATION_TEMPLATE_ID, {
            from_name: name,
            from_email: email,
            message: message,
        }, USER_ID)

        setStatus('success')
        setName('')
        setEmail('')
        setMessage('')

        setTimeout(() => {
            onClose()
            setStatus('idle')
        }, 3000)

        } catch (error) {
        console.error(error)
        setStatus('error')
        }
    }


    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm "
                variants={backdropVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                onClick={onClose}
                >
                    <motion.div
                        className="bg-background shadow-lg shadow-[#1a1a1a] max-w-md w-full p-10 relative "
                        variants={modalVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                        onClick={onClose}
                        aria-label="Close popup"
                        className="absolute top-4 right-4 rounded-full bg-transparent hover:bg-red p-1"
                        >
                            <Image 
                            src={closeIcon}
                            alt=''
                            width={24}
                            height={24}
                            />
                        </button>

                        <h3 className="font-semibold my-4 text-center">Direct Contact</h3>

                        <form onSubmit={handleSubmit} className="space-y-4 ">
                            {status === 'success' && (
                                <p className="text-green-600 text-sm text-center mt-2">Message sent successfully!</p>
                            )}
                            {status === 'error' && (
                                <p className="text-darkRed text-sm text-center mt-2">Failed to send message. Try again.</p>
                            )}
                            <label className="block">
                                <span className="text-white font-medium">Name</span>
                                <input
                                type="text"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your name"
                                />
                            </label>

                            <label className="block">
                                <span className="text-white font-medium">Email</span>
                                <input
                                type="email"
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Your email"
                                />
                            </label>

                            <label className="block">
                                <span className="text-white font-medium">Message</span>
                                <textarea
                                required
                                rows={4}
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Your message goes here, I&rsquo;m all ears!"
                                />
                            </label>

                            <Button
                                type="submit"
                                disabled={status === 'sending'}
                                className='w-full !ml-0 '
                            >
                                {status === 'sending' ? 'Sending...' : 'Send Message'}
                            </Button>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default ContactForm
