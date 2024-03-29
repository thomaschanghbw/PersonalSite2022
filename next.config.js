// import frontmatter from "remark-frontmatter";
// const remarkFrontmatter = require("remark-frontmatter");
// import nextMdx from "@next/mdx"
// import { remarkMdxFrontmatter } from 'remark-mdx-frontmatter';

/** @type {import('next').NextConfig} */
const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
  },
});
module.exports = withMDX({
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
});

// import remarkFrontmatter from 'remark-frontmatter'
// import nextMdx from "@next/mdx"
//
// const withMDX = nextMdx({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [remarkFrontmatter],
//     rehypePlugins: [],
//   },
// });
// export default withMDX({
//   pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
// });

//
// const withMDX = require("@next/mdx")({
//   extension: /\.mdx?$/,
//   options: {
//     remarkPlugins: [frontmatter],
//     rehypePlugins: [],
//   },
// });
// module.exports = withMDX({
//   pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
// });
