import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/tag'
// import { injectGlobal } from 'styled-components';

import mdxComponents from './mdx'
import { Global } from './common/Layout/styles'
import { Footer } from './theme/Footer'

// injectGlobal`
//   html, body {
//     margin: 0;
//     padding: 0;
//   }
//
//   ${() => {
//   /* Override PrismJS Defaults */ return null;
// }}
//
//   pre {
//     background-color: #2f1e2e !important;
//     border-radius: 4px;
//     font-size: 14px;
//   }
//
//   .gatsby-highlight-code-line {
//     background-color: #4f424c;
//     display: block;
//     margin-right: -1em;
//     margin-left: -1em;
//     padding-right: 1em;
//     padding-left: 1em;
//   }
// `;

const NAVIGATION = [
  { to: '/#about', label: 'About' },
  { to: '/#projects', label: 'Projects' },
  { to: '/#contact', label: 'Contact' },
  { to: '/blog', label: 'Blog' },
]

export default ({ site, frontmatter = {}, children }: any) => {
  const {
    title,
    description: siteDescription,
    keywords: siteKeywords,
  } = site.siteMetadata

  const {
    keywords: frontmatterKeywords,
    description: frontmatterDescription,
  } = frontmatter

  const keywords = (frontmatterKeywords || siteKeywords).join(', ')
  const description = frontmatterDescription || siteDescription

  return (
    <>
      <Global/>
      <MDXProvider components={mdxComponents}>
        {children}
      </MDXProvider>
      <Footer/>
    </>
  )
};

export const pageQuery = graphql`
  fragment site on Site {
    siteMetadata {
      title
      description
      author
      keywords
    }
  }
`
