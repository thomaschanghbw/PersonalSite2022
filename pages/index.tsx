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
  const allPostsData = fileNames.reduce(
    (
      curPostData: Array<{
        id: string;
        title: string;
        date: string;
        abstract: string;
      }>,
      fileName
    ) => {
      const id = fileName.replace(/\.mdx$/, "");
      // Read markdown file as string
      const fullPath = path.join(postsDirectory, fileName);

      // const content = fs.readFileSync(fullPath);

      const meta = require(`./posts/${fileName}`).meta;
      console.log("TGOMASS");
      console.log("THOMAS", { id, res: require(`./posts/${fileName}`).meta });
      if (!meta.draft) {
        curPostData.push({
          id,
          title: meta.title,
          date: meta.date.toDateString(),
          abstract: meta.abstract,
        });
      }

      return curPostData;
    },
    []
  );

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
      <h1 className={"text-6xl text-black font-heading flex justify-center"}>
        Thomas Chang
      </h1>
      <div
        className={"grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 mt-8"}
      >
        {props.postData.map((post) => {
          return (
            <Link key={post.id} href={`${POSTS_PATH}${post.id}`}>
              <a
                className={
                  " px-6 py-4 flex flex-col hover:bg-[#D1C8B9] rounded-md"
                }
              >
                <div
                  className={
                    "text-black font-heading font-medium text-sm tracking-tight"
                  }
                >
                  {post.date}
                </div>

                <div
                  className={
                    "text-black font-extrabold font-heading text-3xl leading-tight tracking-wide mt-1"
                  }
                >
                  {post.title}
                </div>

                <div className={"text-black font-body tracking-wide mt-3 mb-2"}>
                  {post.abstract}
                </div>

                <div className={"text-pink-500 font-medium  font-body mt-auto"}>
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
