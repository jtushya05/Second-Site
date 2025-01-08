import React from 'react';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/404.jpg')" }}>
            <div className="absolute inset-0 bg-blue-800 opacity-50"></div>
            <div className="relative z-10 text-white text-center">
                <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
                <p className="mt-4 text-lg">Sorry, the page you are looking for does not exist.</p>
                <Link href="/" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
                    Go to Homepage
                </Link>
                <div className="mt-4">
                    <a href="tel:+919894018848" className="mr-4 px-4 py-2 bg-green-500 text-white rounded">Call Now</a>
                    <a href="https://wa.me/919894018848" className="px-4 py-2 bg-green-500 text-white rounded">WhatsApp</a>
                </div>
            </div>
        </div>
    );
};

export default Custom404;