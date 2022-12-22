import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';
import { useState } from 'react';
import Head from 'next/head';
import { FiChevronLeft, FiChevronRight, FiChevronsLeft, FiChevronsRight, FiSearch } from 'react-icons/fi'
import { GiPerspectiveDiceSixFacesRandom } from 'react-icons/gi'

const Index = (props) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const [sortOrder, setSortOrder] = useState('desc');

  const handleSearchInput = (event) => {
    setSearchQuery(event.target.value);
  };

  const sortPosts = (order) => {
    return props.posts.sort((a, b) => {
      if (order === 'asc') {
        return new Date(a.data.date).getTime() - new Date(b.data.date).getTime();
      } else {
        return new Date(b.data.date).getTime() - new Date(a.data.date).getTime();
      }
    });
  }

  const handleSearchSubmit = () => {
    let filteredPosts;
    if (searchQuery === '') {
      filteredPosts = sortPosts(sortOrder);
    } else {
      filteredPosts = props.posts.filter((post) =>
        post.data.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    const itemsPerPage = 5;
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentPagePosts = filteredPosts.slice(startIndex, endIndex);

    return (
      <div>
        <Head>
          <title>AIDevBlog - Page {page}</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
          <meta content="AIDevBlog" property="og:title" />
          <meta content="Our blog covers the latest trends and developments in coding and AI. From programming languages to machine learning, we share insights and experiences on a wide range of topics. Whether you're a seasoned developer or just starting out, we hope you'll find our blog a valuable resource." property="og:description" />
          <meta content="https://aidevblog.vercel.app/" property="og:url" />
          <meta content="https://aidevblog.vercel.app/favicon.jpg" property="og:image" />
          <meta name="twitter:card" content="https://aidevblog.vercel.app/favicon.jpg"></meta>
          <meta content="#8B5CF6" data-react-helmet="true" name="theme-color" />
        </Head>
        <h1 className='flex justify-between px-2 py-1 my-2 text-lg font-semibold text-white rounded-md shadow-lg bg-violet-500'>
          {currentPagePosts.length} Results • {props.posts.length} Posts
          <select value={sortOrder} onChange={(event) => setSortOrder(event.target.value)} className='bg-violet-500 active:border-none focus:outline-none hover:cursor-pointer'>
            <option value="asc" className='hover:cursor-pointer'>Oldest to Newest</option>
            <option value="desc" className='hover:cursor-pointer'>Newest to Oldest</option>
          </select>
        </h1>

        {currentPagePosts.map((post) => (
          <div key={post.slug} className="text-black" >
            <div className="container max-w-3xl px-10 py-6 mx-auto mb-3 bg-white rounded-lg shadow-xl ">
              <div className="flex items-center justify-between ">
                <span className="text-sm text-gray-400">{post.data.date} • {post.data.readTime}</span>
                <span className="px-2 py-1 font-bold rounded">
                  {post.data.tags.map((tag) => (
                    <div key={post.slug.tag} className="hidden px-2 py-1 ml-1 text-sm font-semibold text-white rounded-md shadow-lg md:inline-block bg-violet-500">{tag}</div>
                  ))}
                </span>
              </div>
              <div className="mt-3">
                <Link rel="noopener noreferrer" href="/[slug]" as={`/${post.slug}`} className="text-2xl font-bold transition ease-in-out bg-black bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-pink-500 hover:to-violet-500">{post.data.title}</Link>
                <p className="mt-2 overflow-hidden line-clamp-3">{post.data.desc}</p>
              </div>
            </div>
          </div >
        ))}
        <div className="flex justify-between mx-2 mt-6">
          <div>
            {/* First Page */}
            <button onClick={() => setPage(1)} disabled={page === 1} className='px-2 py-1 mr-3 text-lg font-semibold text-white rounded-md shadow-lg bg-violet-500 disabled:bg-gray-300 disabled:text-gray-400'>
              <FiChevronsLeft size={36} />
            </button>
            {/* Last Page */}
            <button onClick={() => setPage(page - 1)} disabled={page === 1} className='px-2 py-1 mr-3 text-lg font-semibold text-white rounded-md shadow-lg bg-violet-500 disabled:bg-gray-300 disabled:text-gray-400'>
              <FiChevronLeft size={36} />
            </button>
          </div>
          <div>
            {/* Next Page */}
            <button onClick={() => setPage(page + 1)} disabled={page * itemsPerPage >= filteredPosts.length} className='px-2 py-1 ml-3 text-lg font-semibold text-white rounded-md shadow-lg bg-violet-500 disabled:bg-gray-300 disabled:text-gray-400'>
              <FiChevronRight size={36} />
            </button>
            {/* Last Page */}
            <button onClick={() => setPage(Math.ceil(filteredPosts.length / itemsPerPage))} disabled={page * itemsPerPage >= filteredPosts.length} className='px-2 py-1 ml-3 text-lg font-semibold text-white rounded-md shadow-lg bg-violet-500 disabled:bg-gray-300 disabled:text-gray-400'>
              <FiChevronsRight size={36} />
            </button>
          </div>
        </div>
      </div >
    );
  };

  const goToRandomPost = () => {
    const randomIndex = Math.floor(Math.random() * props.posts.length);

    const randomPostUrl = `/${props.posts[randomIndex].slug}`;

    window.location.assign(randomPostUrl);
  };

  return (
    <div className="max-w-3xl mx-auto">
      <br />
      <div className="flex">
        <input type="text" placeholder="Search tags..." value={searchQuery} onChange={handleSearchInput} className="flex-grow h-10 px-5 pr-16 text-sm bg-white border-2 border-gray-300 rounded-lg focus:border-violet-500 focus:outline-none" />
        <button className='px-2 py-1 ml-2 text-lg font-semibold text-white rounded-md shadow-lg bg-violet-500' onClick={handleSearchSubmit}><FiSearch size={30} /></button>
        <button className='px-2 py-1 ml-2 text-lg font-semibold text-white rounded-md shadow-lg bg-violet-500' onClick={goToRandomPost}><GiPerspectiveDiceSixFacesRandom size={30} /></button>
      </div>
      {handleSearchSubmit()}
    </div>
  );
};

export async function getStaticProps() {
  const postsDirectory = path.join(process.cwd(), 'posts/blogs');
  const newsDirectory = path.join(process.cwd(), 'posts/blogs');
  const filenames = fs.readdirSync(postsDirectory);
  const filenamesNews = fs.readdirSync(newsDirectory);

  const news = filenamesNews.map((filename) => {
    const filePath = path.join(newsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    return {
      slug: filename.replace('.md', ''),
      data,
      content,
    };
  });

  const posts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    return {
      slug: filename.replace('.md', ''),
      data,
      content,
    };
  });

  return {
    props: {
      posts,
      news,
    },
  };
}

export default Index;