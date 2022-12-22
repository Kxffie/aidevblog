import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Footer = () => {
	return (
		<footer className="bottom-0 left-0 py-3 text-white bg-violet-500">
			<div className="container max-w-3xl px-6 mx-auto">
				<div className="flex items-center justify-between">
					<div className="flex items-center">
						<Image width="500" height="500" src="/favicon.jpg" alt="Logo" className="w-8 h-8 rounded-full" />
						<p className="pl-3 text-sm leading-5">
							Copyright © 2022 AIDevBlog
						</p>
					</div>
					<div className="flex items-center">
						{/* <Link href="#" className="text-sm font-medium leading-5 transition duration-150 ease-in-out hover:text-gray-400">Contact</Link> */}
						{/* <Link href="#" className="ml-6 text-sm font-medium leading-5 transition duration-150 ease-in-out hover:text-gray-400">Terms</Link> */}
						{/* <Link href="#" className="ml-6 text-sm font-medium leading-5 transition duration-150 ease-in-out hover:text-gray-400">Privacy</Link> */}
						<Link href="https://github.com/Kxffie/The-AI-Frontier/blob/main/license" target="_blank" className="ml-6 text-sm font-medium leading-5 transition duration-150 ease-in-out hover:text-gray-400">License</Link>
						<Link href="https://discord.gg/2ZJfYspZEN" target="_blank" className="ml-6 text-sm font-medium leading-5 transition duration-150 ease-in-out hover:text-gray-400">Discord</Link>
					</div>
				</div>
			</div>
		</footer>
	);
};


export default Footer;
