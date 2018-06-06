import React from "react";
import PropTypes from "prop-types";
import { EpisodePostTemplate } from "../../templates/episode-post";
import Link from "gatsby-link";

const EpisodePostPreview = ({ entry, widgetFor }) => (
  <div>
    <EpisodePostTemplate
      content={widgetFor("body")}
      description={entry.getIn(["data", "description"])}
      title={entry.getIn(["data", "title"])}
      episodeNumber={entry.getIn(["data", "episodeNumber"])}
    />
    <section>
      <h1 className="has-text-weight-bold is-size-2 has-text-centered">Episode view on homepage</h1>
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
              <circle r="50%" cx="50%" cy="50%" className="circle-back" fill="url(#grad1)" />
              <text x="50%" y="50%" textAnchor="middle" dy="0.3em">
                E{entry.getIn(["data", "episodeNumber"])}
              </text>
            </g>
          </svg>
          <span className="episodeDate">{entry.getIn(["data", "date"])}</span>
        </div>
        {/* <div className="episodeNumContainer">
                      <div className="episodeNum">E001</div>
                      <span className="episodeDate">{post.frontmatter.date}</span>
                    </div>
                      */}
        <div className="episodeContentContainer">
          <p>
            <Link className="has-text-primary has-text-bold is-size-4" to="">
              {entry.getIn(["data", "title"])}
            </Link>
          </p>
          <p className="is-clearfix episodeContent">
            {entry.getIn(["data", "description"])}
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
);

EpisodePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default EpisodePostPreview;
