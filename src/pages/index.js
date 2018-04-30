import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "gatsby-link";
import FontAwesome from "react-fontawesome";

export default class IndexPage extends Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    function episodeNumberFormat(num) {
      if (num < 10) {
        return <h1> E00{num} </h1>;
      } else if (num >= 10 && num < 100) {
        return <h1> E0{num} </h1>;
      } else {
        return <h1> E{num} </h1>;
      }
    }

    return (
      <div>
        <div className="container">
          <img src="" alt="" />
          <h1 className="has-text-weight-bold is-size-2 has-text-centered	">Philosophical Heroes</h1>
          <div className="content">
            <p>
              Here is the description of the podcast it’s about something and something and it
              everynight at 9pm hosted by Stjepan Kraljic. Tune in live at youtube.com or catch it
              after at soundcloud.com
            </p>
          </div>
          <div>
            <FontAwesome
              className="super-crazy-colors"
              name="spotify"
              size="2x"
              style={{ color: "black" }}
            />
            <FontAwesome
              className="super-crazy-colors"
              name="twitter"
              size="2x"
              style={{ color: "black" }}
            />
            <FontAwesome
              className="super-crazy-colors"
              name="facebook"
              size="2x"
              style={{ color: "black" }}
            />
            <FontAwesome
              className="super-crazy-colors"
              name="soundcloud"
              size="2x"
              fixedWidth
              style={{ color: "black" }}
            />
          </div>
        </div>
        <section className="section">
          <div className="container">
            <div className="content">
              <h1 className="has-text-weight-bold is-size-2">Latest Stories</h1>
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
                    {/* <h1> {episodeNumberFormat(post.frontmatter.episodeNumber)}</h1> */}
                    <Link className="button is-small" to={post.fields.slug}>
                      Listen
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

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
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
