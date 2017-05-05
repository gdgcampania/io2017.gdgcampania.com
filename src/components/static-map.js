import React from "react";

const getStaticImageURL = props => {
  const defaults = {
    zoom: 14,
    width: 400,
    height: 400,
    query: "",
    key: "AIzaSyD_6uPbPjudlHYZ7iL3uPkPiNxzQ2d8HLk",
    markers: "",
    scale: 1
  };

  const config = {};

  for (const key of Object.keys(defaults)) {
    config[key] = props[key] || defaults[key];
  }

  config.size = `${config.width}x${config.height}`;
  config.center = config.query;

  delete config.width;
  delete config.height;
  delete config.query;

  const query = Object.entries(config)
    .filter(([key, value]) => !!value)
    .map(([key, value]) => `${key}=${encodeURIComponent(value)}`)
    .join("&");

  return `https://maps.googleapis.com/maps/api/staticmap?${query}`;
};

export default ({ className, ...props }) => (
  <img className={className} src={getStaticImageURL(props)} />
);
