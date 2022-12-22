import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import Head from 'next/head';
import GoBackButton from '../components/GoBack';

const Post = (props) => {
	return (
		<div className="max-w-3xl py-4 mx-auto font-bold prose text-gray-800 prose-slate">
			<Head>
				<title>AIDevBlog - {props.post.data.title}</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<meta content={props.post.data.title} property="og:title" />
				<meta content={props.post.data.desc} property="og:description" />
				<meta content={props.post.slug} property="og:url" />
				<meta content="https://aidevblog.vercel.app/favicon.jpg" property="og:image" />
				<meta content="#8B5CF6" data-react-helmet="true" name="theme-color" />
			</Head>
			<GoBackButton />

			<p className="p-8 text-6xl font-bold text-center text-white rounded-3xl bg-gradient-to-r from-pink-500 to-violet-500">{props.post.data.title}</p>
			<div className='flex justify-between'>
				<p className="text-gray-500">{props.post.data.date} • {props.post.data.readTime}</p>
				<p className="text-gray-500">
					{props.post.data.tags.map((tag) => (
						<span key={tag} className="px-2 py-1 mr-2 text-sm font-medium leading-5 text-gray-800 bg-gray-200 rounded-full">{tag}</span>
					))}
				</p>
			</div>
			<div className="text-gray-700" dangerouslySetInnerHTML={{ __html: marked(props.post.content) }} />
		</div>
	);
};

export async function getStaticPaths() {
	const postsDirectory = path.join(process.cwd(), 'posts/blogs');
	const filenames = fs.readdirSync(postsDirectory);

	return {
		paths: filenames.map((filename) => ({
			params: {
				slug: filename.replace('.md', ''),
			},
		})),
		fallback: false,
	};
}

export async function getStaticProps({ params }) {
	const postsDirectory = path.join(process.cwd(), 'posts/blogs');
	const filePath = path.join(postsDirectory, `${params.slug}.md`);
	const fileContent = fs.readFileSync(filePath, 'utf8');
	const { data, content } = matter(fileContent);

	return {
		props: {
			post: {
				data,
				content,
			},
		},
	};
}

export default Post;