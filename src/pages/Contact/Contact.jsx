import React from 'react';
import contactLogo from "../../assets/logo-contact.svg"
import { Link } from 'react-router-dom';

const Contact = () => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen text-gray-900 font-sans relative">

            {/* FIXED LOGO SECTION */}
            <div className="fixed top-14 left-10 lg:left-16 z-50">
                <Link to={"/"}>
                    <img loading='lazy' className='w-20 md:w-24' src={contactLogo} alt="Logo" />
                </Link>
            </div>

            {/* LEFT COLUMN: Contact Information */}
            <div className="w-full md:w-1/2 p-10 lg:px-60 pt-52 pb-16 bg-white flex flex-col">
                <div className="max-w-xl w-full ml-auto">
                    <h1 className="text-5xl md:text-[68px] leading-none font-semibold text-[#222222] mb-16 tracking-tight">Contact</h1>

                    {/* Decorative Line */}
                    <div className="w-[180%] h-[3px] bg-[#8F6573] mb-20"></div>

                    {/* Contact Details */}
                    <div className="space-y-14">
                        <section>
                            <h2 className="font-bold text-xl mb-2">General Enquiries</h2>
                            <p className="text-xl">info@knightjames.co.uk</p>
                            <p className="text-xl">+44 (0)20 8142 9177</p>
                        </section>

                        <section>
                            <h2 className="font-bold text-xl mb-2">Press Enquiries</h2>
                            <p className="text-xl">press@knightjames.co.uk</p>
                            <p className="text-xl">+44 (0)20 8142 9177</p>
                        </section>

                        <section>
                            <h2 className="font-bold text-xl mb-2">Registered Address</h2>
                            <div className="leading-relaxed">
                                <p className="text-xl">The Knight James Group Limited</p>
                                <p className="text-xl">39 Hendon Lane</p>
                                <p className="text-xl">Finchley</p>
                                <p className="text-xl">N3 1RY</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN: Contact Form */}
            <div className="w-full md:w-1/2 p-10 lg:px-24 pt-80 pb-16 bg-[#ebebeb] flex flex-col relative">
                {/* The Form */}
                <form className="w-full max-w-md mx-auto md:mx-0 mt-20 md:mt-32">
                    <div className="mb-8">
                        <label className="block text-xl font-medium mb-2" htmlFor="name">Your Name</label>
                        <input
                            type="text"
                            id="name"
                            className="w-full md:w-[80%] bg-white border-none p-4 outline-none focus:ring-1 focus:ring-gray-400"
                        />
                    </div>

                    <div className="mb-8">
                        <label className="block text-xl font-medium mb-2" htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full md:w-[80%] bg-white border-none p-4 outline-none focus:ring-1 focus:ring-gray-400"
                        />
                    </div>

                    <div className="mb-10">
                        <label className="block text-xl font-medium mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            rows="6"
                            className="w-full md:w-[80%] bg-white border-none p-4 outline-none resize-none focus:ring-1 focus:ring-gray-400"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full md:w-[80%] bg-black text-white py-4 text-[13px] font-bold uppercase tracking-[0.3em] transition-all duration-300 cursor-pointer hover:bg-gray-800"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;