import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";

export default class BlogPage extends Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;
    const blogPosts = posts.filter((post) => post.node.frontmatter.templateKey === "blog-post");
    return (
      <div>
        <div className="container">
          <div className="columns">
            <div
              className="column 
            is-8-desktop is-offset-2-desktop 
            is-8-tablet is-offset-2-tablet
            is-10-mobile is-offset-1-mobile "
            >
              <section>
                <h1 className="has-text-weight-bold is-size-2 has-text-centered">All Blog Posts</h1>
                {blogPosts.map(({ node: post }) => (
                  <div
                    className="episode"
                    style={{
                      border: "1px solid #eaecee",
                      padding: "2em 4em",
                      margin: "2rem auto"
                    }}
                    key={post.id}
                  >
                    <div className="episodeContentContainer">
                      <p>
                        <Link
                          className="has-text-primary has-text-bold is-size-4"
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}
                        </Link>
                      </p>
                      {post.frontmatter.date}
                      <p className="is-clearfix episodeContent">
                        {post.frontmatter.description}
                        <br />
                        <br />
                        <Link className="listenBtn is-pulled-right " to={post.fields.slug}>
                          Read ›
                        </Link>
                      </p>
                    </div>
                  </div>
                ))}
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query BlogQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMM DD YYYY")
            description
          }
        }
      }
    }
  }
`;
