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

    const episodes = posts.filter((post) => post.node.frontmatter.templateKey === "episode-post");
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
              <img src="" alt="" />
              <h1 className="has-text-weight-bold is-size-2 has-text-centered	">
                Philosophical Superheroes
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
                    <FontAwesome id="socialBtn" name="twitter" stack="1x" />
                  </a>
                </span>
                <span className="fa-stack fa-lg">
                  <a href="https://www.twitter.com/philosophicalHeroes">
                    ">
                    <FontAwesome className="socialBg" name="circle-o" stack="2x" />
                    <FontAwesome id="socialBtn" name="facebook" stack="1x" />
                  </a>
                </span>
                <span className="fa-stack fa-lg">
                  <a href="https://www.twitter.com/philosophicalHeroes">
                    <FontAwesome className="socialBg" name="circle-o" stack="2x" />
                    <FontAwesome id="socialBtn" name="spotify" stack="1x" />
                  </a>
                </span>
                <span className="fa-stack fa-lg">
                  <a href="https://www.twitter.com/philosophicalHeroes">
                    <FontAwesome className="socialBg" name="circle-o" stack="2x" />
                    <FontAwesome id="socialBtn" name="soundcloud" stack="1x" />
                  </a>
                </span>
              </div>
              <section>
                <h1 className="has-text-weight-bold is-size-2 has-text-centered">
                  Latest Episodes
                </h1>
                {episodes.map(({ node: post }) => (
                  <div
                    className="episode"
                    style={{
                      border: "1px solid #eaecee",
                      padding: "2em 4em",
                      margin: "2rem auto"
                    }}
                    key={post.id}
                  >
                    <div className="outer">
                      <svg viewBox="0 0 140 140" preserveAspectRatio="xMidYMin meet">
                        <defs>
                          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#42404A" fillOpacity={1} />
                            <stop offset="100%" stopColor="#2F65AD" fillOpacity={1} />
                          </linearGradient>
                        </defs>
                        <g>
                          <circle
                            r="50%"
                            cx="50%"
                            cy="50%"
                            className="circle-back"
                            fill="url(#grad1)"
                          />
                          <text x="50%" y="50%" textAnchor="middle" dy="0.3em">
                            E{post.frontmatter.episodeNumber}
                          </text>
                        </g>
                      </svg>
                      <span className="episodeDate">{post.frontmatter.date}</span>
                    </div>
                    {/* <div className="episodeNumContainer">
                      <div className="episodeNum">E001</div>
                      <span className="episodeDate">{post.frontmatter.date}</span>
                    </div>
                      */}
                    <div className="episodeContentContainer">
                      <p>
                        <Link
                          className="has-text-primary has-text-bold is-size-4"
                          to={post.fields.slug}
                        >
                          {post.frontmatter.title}
                        </Link>
                      </p>
                      <p className="is-clearfix episodeContent">
                        {post.frontmatter.description}
                        <br />
                        <br />
                        <Link className="listenBtn is-pulled-right " to={post.fields.slug}>
                          ▶ Listen
                        </Link>
                      </p>
                    </div>
                  </div>
                ))}
              </section>
              {episodes.length > 2 ? (
                <div className="showMoreContainer">
                  <Link to="/episodes">
                    <p className="showMore">
                      View Older <span>›</span>
                    </p>
                  </Link>
                </div>
              ) : null}
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
            episodeNumber
          }
        }
      }
    }
  }
`;
