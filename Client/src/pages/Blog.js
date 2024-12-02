import React, { useState } from 'react';
import Header from '../components/Header';
import './blog.css';
import { Link } from 'react-router-dom';
import Demo from '../components/Navbar';

const Blog = () => {
    const blogs = [
        {
            title: "Data: A Strategic Asset Enabling Value Creation for Insurers",
            author: "Suzanne J. Dann",
            date: "March 24, 2023",
            featured: true,
            image: "/blog2.png",
            link: "/technology " // Add unique link
        },
        {
            title: "Technology and Client Ambition",
            author: "Soaman Faruqi",
            date: "Oct 26, 2024",
            image: "/blog3.png",
            link: "/technology" // Add unique link
        },
        {
            title: "The Future Of Technology and Networking in The Hospitality Industry",
            author: "Soaman Faruqi",
            date: "Oct 20, 2024",
            image: "/blog4.png",
            link: "/futureoftechnology" // Add unique link
        },
        {
            title: "Reimagining Information Services with Generative AI",
            author: "Soaman Faruqi",
            date: "Oct 15, 2024",
            image: "/blog2.png",
            link: "/insight-report" // Add unique link
        }
    ];

    const [searchQuery, setSearchQuery] = useState("");
    const [filterCategory, setFilterCategory] = useState("All category");
    const [filterIndustry, setFilterIndustry] = useState("Industries/Services");
    const [filterYear, setFilterYear] = useState("All year");

    const handleSearch = (query) => {
        setSearchQuery(query);
    };

    const filteredBlogs = blogs.filter(blog => {
        if (searchQuery === "") return true;
        const queryWords = searchQuery.toLowerCase().split(" ").slice(0, 3).join(" ");
        return blog.title.toLowerCase().startsWith(queryWords);
    });

    return (
        <div>
            <Header />
            <section id="heros" className="heros1 section dark-background">
                <img src="/blog.png" alt="" />
                <div className="container text-center">
                    <div className="row justify-content-center">
                        <div className="col-lg-8">
                            <h2 className='profh2'>Blog</h2>
                        </div>
                    </div>
                </div>
            </section>
            <div className="blog-page">
                <aside className="sidebar">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                    />
                    <div className="filters">
                        <label>Filter</label>
                        <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)}>
                            <option>All category</option>
                            <option>Category 1</option>
                            <option>Category 2</option>
                        </select>
                        <select value={filterIndustry} onChange={(e) => setFilterIndustry(e.target.value)}>
                            <option>Industries/Services</option>
                            <option>Service 1</option>
                            <option>Service 2</option>
                        </select>
                        <select value={filterYear} onChange={(e) => setFilterYear(e.target.value)}>
                            <option>All year</option>
                            <option>2024</option>
                            <option>2023</option>
                        </select>
                    </div>
                </aside>
                <main className="content">
                    {/* <div className="featured-blog">
                        {filteredBlogs.filter(blog => blog.featured).map(blog => (
                            <div key={blog.title} className="featured-card">
                                <h3>{blog.title}</h3>
                                <p>{blog.author}</p>
                                <p>{blog.date}</p>
                            </div>
                        ))}
                    </div> */}
                    <div className="blog-grid">
                        {filteredBlogs.filter(blog => !blog.featured).map(blog => (
                            <div key={blog.title} className="blog-card">
                                <img src={blog.image} alt={blog.title} />
                                <h3>{blog.title}</h3>
                                <p>{blog.author}</p>
                                <p>{blog.date}</p> <br />
                                <Link to={blog.link} className=" btns1 ml-3 text-light   text-center w-50  mx-none" >Read More</Link> {/* Direct link */}
                                <br /><br /><br />
                            </div>
                        ))}
                    </div>
                </main>
            </div>
            <Demo />
        </div>
    );
};

export default Blog;
