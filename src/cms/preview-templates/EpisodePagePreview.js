import React from "react";
import PropTypes from "prop-types";
import { EpisodePostTemplate } from "../../templates/episode-post";

const EpisodePostPreview = ({ entry, widgetFor }) => (
  <EpisodePostTemplate
    content={widgetFor("body")}
    description={entry.getIn(["data", "description"])}
    title={entry.getIn(["data", "title"])}
    EpisodeNumber={entry.getIn(["data", "episodeNumber"])}
  />
);

EpisodePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func
  }),
  widgetFor: PropTypes.func
};

export default EpisodePostPreview;
