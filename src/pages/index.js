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
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <img src="" alt="" />
              <h1 className="has-text-weight-bold is-size-2 has-text-centered	">
                Philosophical Heroes
              </h1>
              <div className="content">
                <p className="has-text-justified">
                  Here is the description of the podcast it’s about something and something and it
                  everynight at 9pm hosted by Stjepan Kraljic. Tune in live at youtube.com or catch
                  it after at soundcloud.com
                </p>
              </div>
              <div>
                <span className="fa-stack fa-lg">
                  <a href="https://www.twitter.com/philosophicalHeroes">
                    <FontAwesome className="socialBg" name="circle-o" stack="2x" />
                    <FontAwesome className="socialBtn" name="twitter" stack="1x" />
                  </a>
                </span>
                <span className="fa-stack fa-lg">
                  <a href="https://www.twitter.com/philosophicalHeroes">
                    ">
                    <FontAwesome className="socialBg" name="circle-o" stack="2x" />
                    <FontAwesome className="socialBtn" name="facebook" stack="1x" />
                  </a>
                </span>
                <span className="fa-stack fa-lg">
                  <a href="https://www.twitter.com/philosophicalHeroes">
                    <FontAwesome className="socialBg" name="circle-o" stack="2x" />
                    <FontAwesome className="socialBtn" name="spotify" stack="1x" />
                  </a>
                </span>
                <span className="fa-stack fa-lg">
                  <a href="https://www.twitter.com/philosophicalHeroes">
                    <FontAwesome className="socialBg" name="circle-o" stack="2x" />
                    <FontAwesome className="socialBtn" name="soundcloud" stack="1x" />
                  </a>
                </span>
              </div>
              <section className="section">
                <h1 className="has-text-weight-bold is-size-2 has-text-centered">
                  Latest Episodes
                </h1>
                {posts
                  .filter((post) => post.node.frontmatter.templateKey === "episode-post")
                  .map(({ node: post }) => (
                    <div
                      className="episode"
                      style={{
                        border: "1px solid #eaecee",
                        padding: "2em 4em",
                        margin: "2rem auto"
                      }}
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
                        <Link className="listenBtn" to={post.fields.slug}>
                          ▶ Listen
                        </Link>
                      </p>
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
