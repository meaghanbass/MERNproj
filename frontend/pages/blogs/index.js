import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/Layout';
import { useState } from 'react';
import { listBlogsWithCategoriesAndTags } from '../../actions/blog';
// import { API, DOMAIN, APP_NAME } from "../../config";

import PreviewCardLg from "../../components/Blog/PreviewCardLg";

const Blogs = ({ blogs, categories, tags, size }) => {

    // const head = () => (
    //     <Head>
    //         <title>Test this title | {APP_NAME}</title>
    //     </Head>
    // )

    const showAllBlogs = () => {
        return blogs.map((blog, i) => {
            return (
                <article key={i}>
                    <PreviewCardLg blog={blog} />
                </article>
            );
        });
    };

    const showAllCategories = () => {
        return categories.map((c, i) => (
            <Link href={`/categories/${c.slug}`} key={i}>
                <a className="btn btn-success mr-1 ml-1 mt-3">{c.name}</a>
            </Link>
        ))
    };

    const showAllTags = () => {
        return tags.map((t, i) => (
            <Link href={`/tags/${t.slug}`} key={i}>
                <a className="btn btn-primary mr-1 ml-1 mt-3">{t.name}</a>
            </Link>
        ))
    };

    return (
        <Layout>
            <main>
                <div className="container-fluid">
                    <header>
                        <div className="col-md-12 pt-3">
                            <h1 className="display-4 font-weight-bold text-center">Blogs</h1>
                        </div>
                        <section>
                            {showAllCategories()}
                            {showAllTags()}
                        </section>
                    </header>
                </div>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">{showAllBlogs()}</div>
                    </div>
                </div>
            </main>
        </Layout>
    );
};

Blogs.getInitialProps = () => {
    return listBlogsWithCategoriesAndTags().then(data => {
        if (data.error) {
            console.log(data.error);
        } else {
            return {
                blogs: data.blogs,
                categories: data.categories,
                tags: data.tags,
                size: data.size
            };
        }
    });
};

export default Blogs;