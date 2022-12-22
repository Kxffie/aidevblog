import Head from 'next/head';
import Link from 'next/link';

export default function About() {
	return (
		<div className='flex items-center justify-center h-screen '>
			<Head>
				<title>AIDevBlog - 404</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta content="AIDevBlog" property="og:title" />
				<meta content="Our blog covers the latest trends and developments in coding and AI. From programming languages to machine learning, we share insights and experiences on a wide range of topics. Whether you're a seasoned developer or just starting out, we hope you'll find our blog a valuable resource." property="og:description" />
				<meta content="https://aidevblog.vercel.app/" property="og:url" />
				<meta content="https://aidevblog.vercel.app/favicon.jpg" property="og:image" />
				<meta name="twitter:card" content="https://aidevblog.vercel.app/favicon.jpg"></meta>
				<meta content="#8B5CF6" data-react-helmet="true" name="theme-color" />
			</Head>
			<div className="flex items-center h-screen">
				<div className="container flex flex-col items-center justify-center mx-auto text-black md:flex-row">
					<div className="max-w-md">
						<div className="text-5xl font-bold font-dark text-violet-500">HTTP 404</div>
						<p className="text-2xl font-light leading-normal md:text-3xl">Sorry we couldn&apos;t find this page. </p>
						<p className="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>
						<Link href="/" className="inline px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 border border-transparent rounded-lg shadow focus:outline-none focus:shadow-outline-blue bg-violet-500">Back to Homepage</Link>
					</div>
				</div>
			</div>
		</div >
	)
};