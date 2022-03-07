import BaseLayout from "components/layout/BaseLayout";
import NavBar from "components/NavBar";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import path from "path";
import styles from "../styles/Home.module.css";
import { remark } from "remark";
// @ts-ignore
import { mdx } from "remark-mdx";
import fs from "fs";
import Link from "next/link";

const postsDirectory = path.join(process.cwd(), "pages/posts/");
const fileNames = fs.readdirSync(postsDirectory);

export async function getStaticProps(ctx: any) {
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.mdx$/, "");
    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);

    // const content = fs.readFileSync(fullPath);

    const meta = require(`./posts/${fileName}`).meta;
    console.log("TGOMASS");
    console.log("THOMAS", { id, res: require(`./posts/${fileName}`).meta });
    return {
      id,
      title: meta.title,
      date: meta.date.toDateString(),
      abstract: meta.abstract,
    };
  });

  return {
    props: {
      postData: allPostsData,
    },
  };
}

interface HomeProps {
  postData: { id: string; title: any; date: string; abstract: string }[];
}

const POSTS_PATH = "/posts/";
const Home: NextPage<HomeProps> = (props: HomeProps) => {
  console.log("TOM", props);
  return (
    <BaseLayout className="md:px-[20%] px-4 pt-12">
      <h1
        className={
          "text-8xl text-neutral-300 font-heading font-bold tracking-wide"
        }
      >
        Thomas Chang
      </h1>
      <h2 className={"text-pink-400 text-2xl mt-10"}>Posts</h2>
      <div
        className={"grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mt-6"}
      >
        {props.postData.map((post) => {
          return (
            <Link key={post.id} href={`${POSTS_PATH}${post.id}`}>
              <a
                className={
                  "rounded-md bg-neutral-700 rounded-md px-6 py-4 flex flex-col"
                }
              >
                <div
                  className={
                    "text-neutral-400 font-heading font-medium text-sm tracking-tight"
                  }
                >
                  {post.date}
                </div>

                <div
                  className={
                    "text-neutral-200 font-semibold font-heading text-2xl tracking-wide mt-1"
                  }
                >
                  {post.title}
                </div>

                <div
                  className={"text-neutral-400 font-body tracking-wide mb-2"}
                >
                  {post.abstract}
                </div>

                <div
                  className={
                    "text-pink-500 font-medium tracking-wide font-body mt-auto"
                  }
                >
                  Read more
                </div>
              </a>
            </Link>
          );
        })}
      </div>
    </BaseLayout>
  );
};

export default Home;

// import type { ReactElement } from 'react'
// import Layout from '../components/layout'
// import NestedLayout from '../components/nested-layout'
//
// export default function Page() {
//   return {
//     /** Your content */
//   }
// }
//
// Page.getLayout = function getLayout(page: ReactElement) {
//   return (
//       <Layout>
//         <NestedLayout>{page}</NestedLayout>
//       </Layout>
//   )
// }
