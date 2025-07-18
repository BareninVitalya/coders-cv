import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'
import rehypePrismPlus from 'rehype-prism-plus'
import remarkCodeTitles from './src/lib/remark-code-title.mjs'
import rehypePresetMinify from 'rehype-preset-minify'
import nextI18NextConfig from './next-i18next.config.js'
import remarkFrontmatter    from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'
const { i18n } = nextI18NextConfig
/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n,
  trailingSlash: true,
  pageExtensions: ['js', 'jsx', 'mdx'],
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    newNextLinkBehavior: true,
    scrollRestoration: true,
  },
  images: {
    unoptimized: true,
  }
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, remarkFrontmatter, remarkMdxFrontmatter],
    rehypePlugins: [rehypePrismPlus, rehypePresetMinify],
        providerImportSource: '@mdx-js/react',
  },
})

export default withMDX(nextConfig)
