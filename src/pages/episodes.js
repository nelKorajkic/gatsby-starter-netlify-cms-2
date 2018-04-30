import React from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
//the real one

export default class EpisodesPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <div>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Episodes</h1>
            </div>
            {posts
              .filter((post) => post.node.frontmatter.templateKey === "episode-post")
              .map(({ node: post }) => (
                <div
                  className="content"
                  style={{ border: "1px solid #eaecee", padding: "2em 4em" }}
                  key={post.id}
                >
                  <p>
                    <Link className="has-text-primary" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                    <span> &bull; </span>
                    <small>{post.frontmatter.date}</small>
                  </p>
                  <p>
                    {post.frontmatter.description}
                    <br />
                    <br />
                    <Link className="listenBtn" to={post.fields.slug}>
                      ▶ Listen
                    </Link>
                  </p>
                </div>
              ))}
          </div>
        </section>
      </div>
    );
  }
}

EpisodesPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query EpisodesQuery {
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
            date(formatString: "MMMM DD, YYYY")
            description
          }
        }
      }
    }
  }
`;
