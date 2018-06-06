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
    <section className="section">
      {helmet || ""}
      <div className="container content">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <h1 className="title is-size-2 has-text-weight-bold is-bold-light">{title}</h1>
            <p>{description}</p>
            <PostContent content={content} />
            <h1>episode number: {episodeNumber}</h1>
            <h2>SoundCloud Link: {soundCloudLink}</h2>
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameborder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/353421854&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
            />
          </div>
        </div>
      </div>
      {/* <Player resolveUrl="https://soundcloud.com/ksmtk/chronemics" clientId="" backgroundImage="" /> */}
    </section>
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
        episodeNumber
      }
    }
  }
`;
