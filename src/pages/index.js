import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

import Bio from '../components/Bio'
import { rhythm } from '../utils/typography'
import HeaderImg from '../../static/facecake.jpg'

class BlogIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allMarkdownRemark.edges')

    return (
      <div
        style={{
          backgroundImage: `url(${HeaderImg})`,
          height: '100vh',
          width: '100vw',
          position: 'fixed',
          backgroundSize: 'contain',
          backgroundPositionX: '75%',
          left: 0,
          right: 0,
          backgroundRepeat: 'no-repeat',
          height: '100%',

          /* Center and scale the image nicely */
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      >
        <Helmet title={siteTitle} />
        <div itemscope itemtype="http://schema.org/Person" style={{visibility: 'hidden'}}>
<span itemprop="name" content="Dan Woodson"></span>
<span itemprop="jobTitle" content="Software Architect"></span>
<div itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
<span itemprop="addressLocality" content="Denver"></span>
<span itemprop="addressRegion" content="CO"></span>
</div>
<span itemprop="url" content="https://danwoodson.com"></span>
<span itemprop="knowsAbout" content="JavaScript, Software Architecture, Web Development, React"></span>
<span itemprop="worksFor" content="Rachio"></span>
</div>
        {/* <Bio /> */}
        {/* {posts.map(({ node }) => {
          const title = get(node, 'frontmatter.title') || node.fields.slug
          return (
            <div key={node.fields.slug}>
              <h3
                style={{
                  marginBottom: rhythm(1 / 4),
                }}
              >
                <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
                  {title}
                </Link>
              </h3>
              <small>{node.frontmatter.date}</small>
              <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
            </div>
          ) */}
        {/* })} */}
      </div>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
