import React from 'react';
import Logo from './Logo';

function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900 mt-20">
            <div className="container px-6 py-8 mx-auto">
                <div className="flex flex-col items-center text-center">
                    <Logo />

                    <div className="flex flex-wrap justify-center mt-6 -mx-4">
                        <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Home</a>
                        <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">About</a>
                        <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Teams</a>
                        <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Privacy</a>
                        <a href="#" className="mx-4 text-sm text-gray-600 transition-colors duration-300 hover:text-blue-500 dark:text-gray-300 dark:hover:text-blue-400">Cookies</a>
                    </div>
                </div>

                <hr className="my-6 border-gray-200 md:my-10 dark:border-gray-700" />

                <div className="flex flex-col items-center sm:flex-row sm:justify-between">
                    <p className="text-sm text-gray-500 dark:text-gray-300">© Copyright 2024. All Rights Reserved.</p>

                    <div className="flex -mx-2">
                        <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                
                            </svg>
                        </a>
                        <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Facebook">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                
                            </svg>
                        </a>
                        <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Github">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
