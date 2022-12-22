import Link from 'next/link';
import Image from 'next/image';
import { Info } from 'akar-icons';

const Header = () => (
	<div className='py-3 bg-violet-500 '>
		<header className="flex items-center justify-between max-w-3xl mx-auto">
			<div className="flex items-center">
				<Image width="500" height="500" src="/favicon.jpg" alt="Logo" className="w-10 h-10 rounded-full" />
				<Link legacyBehavior href="/">
					<a className="pl-3 text-2xl font-bold tracking-tight text-white transition duration-150 ease-in-out hover:underline">AIDevBlog</a>
				</Link>
			</div>
			{/* <Link legacyBehavior href="/about" >
				<a className="pr-3 text-lg font-bold tracking-tight text-white transition duration-150 ease-in-out hover:underline">About</a>
			</Link> */}
		</header>
	</div>
);



export default Header;
