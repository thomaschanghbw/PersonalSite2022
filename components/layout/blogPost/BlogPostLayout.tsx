import { MDXProvider } from "@mdx-js/react";
import BaseLayout from "components/layout/BaseLayout";
import NavBar from "components/NavBar";
import { log } from "util";
import {
  Blockquote,
  Code,
  H1,
  H2,
  Img,
  Li,
  P,
} from "components/layout/blogPost/PostComponents";
import { ReactNode } from "react";

const components = {
  h1: H1,
  h2: H2,
  p: P,
  code: Code,
  img: Img,
  li: Li,
  blockquote: Blockquote,
};
//
// const componenthomats = {
//     h1: Headi'ng.H1,
//     h2: Heading.H2,
//     p: Text,
//     code: Pre,
//     inlineCode: Code,
// }

export default function BlogPostLayout({ children }: { children: ReactNode }) {
  return (
    <MDXProvider components={components}>
      <BaseLayout className={"md:px-[25%] px-12 px-4"}>
        <NavBar />
        <div className={"mb-12 max-w-[55rem] mx-auto"}>{children}</div>
      </BaseLayout>
    </MDXProvider>
  );
}
