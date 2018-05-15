import React, { Component } from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import Link from "gatsby-link";
import Content, { HTMLContent } from "../components/Content";
import Player from "../components/BackgroundSoundPlayer";

export const EpisodePostTemplate = ({
  content,
  contentComponent,
  description,
  episodeNumber,
  soundCloudLink,
  date,
  title,
  helmet
}) => {
  const PostContent = contentComponent || Content;

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
              <h1 className="has-text-weight-bold is-size-2 has-text-centered">All Episodes</h1>
              <div
                className="episode"
                style={{
                  border: "1px solid #eaecee",
                  padding: "2em 4em",
                  margin: "2rem auto"
                }}
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
                        E{episodeNumber}
                      </text>
                    </g>
                  </svg>
                  <span className="episodeDate">{date}</span>
                </div>
                <div className="episodeContentContainer">
                  <p>
                    <Link className="has-text-primary has-text-bold is-size-4" to="">
                      {title}
                    </Link>
                  </p>
                  <p className="is-clearfix episodeContent">
                    {description}
                    <br />
                    <br />
                    <Link className="listenBtn is-pulled-right " to="">
                      ▶ Listen
                    </Link>
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>

    //   <section className="section">
    //   {helmet || ""}
    //   <div className="container content">
    //     <div className="columns">
    //       <div className="column is-10 is-offset-1">
    //         <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
    //         <p>{description}</p>
    //         <PostContent content={content} />
    //         <h1>episode number: {episodeNumber}</h1>
    //         <h2>SoundCloud Link: {soundCloudLink}</h2>
    //         <iframe
    //           width="100%"
    //           height="166"
    //           scrolling="no"
    //           frameborder="no"
    //           allow="autoplay"
    //           src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/353421854&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
    //         />
    //       </div>
    //     </div>
    //   </div>
    //   {/* <Player resolveUrl="https://soundcloud.com/ksmtk/chronemics" clientId="" backgroundImage="" /> */}
    // </section>
  );
};

EpisodePostTemplate.propTypes = {
  content: PropTypes.string.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.instanceOf(Helmet),
  episodeNumber: PropTypes.string,
  soundCloudLink: PropTypes.string
};

const EpisodePost = ({ data }) => {
  const { markdownRemark: post } = data;

  return (
    <EpisodePostTemplate
      content={post.html}
      contentComponent={HTMLContent}
      description={post.frontmatter.description}
      helmet={<Helmet title={`${post.frontmatter.title} | Blog`} />}
      tags={post.frontmatter.tags}
      title={post.frontmatter.title}
      date={post.frontmatter.date}
      episodeNumber={post.frontmatter.episodeNumber}
      soundCloudLink={post.frontmatter.soundCloudLink}
    />
  );
};

EpisodePost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default EpisodePost;

export const pageQuery = graphql`
  query EpisodePostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
      }
    }
  }
`;
