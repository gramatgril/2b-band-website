import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "gatsby";
import Img from "gatsby-image";
import {
  FaYoutube,
  FaSoundcloud,
  FaApple,
  FaSpotify,
  FaBandcamp,
} from "react-icons/fa";

const propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    youtubeLink: PropTypes.string,
    soundcloudLink: PropTypes.string,
    appleLink: PropTypes.string,
    spotifyLink: PropTypes.string,
    bandcampLink: PropTypes.string,
  }).isRequired,
};

const DiscoItem = ({ album }) => {
  const {
    title,
    date,
    image,
    youtubeLink,
    soundcloudLink,
    appleLink,
    spotifyLink,
    bandcampLink,
  } = album;

  return (
    <Wrapper>
      <ImageContainer>
        <Img
          fluid={image.fluid}
          alt={title}
          className="img"
          imgStyle={{ objectFit: "cover", objectPosition: "50% 50%" }}
        />
      </ImageContainer>
      <Title>{title}</Title>
      <Date>{date}</Date>
      <Icons>
        <AnchorLink
          href={youtubeLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="icon" />
        </AnchorLink>
        <AnchorLink
          href={soundcloudLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSoundcloud className="icon" />
        </AnchorLink>
        <AnchorLink href={appleLink} target="_blank" rel="noopener noreferrer">
          <FaApple className="icon" />
        </AnchorLink>
        <AnchorLink
          href={spotifyLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify className="icon" />
        </AnchorLink>
        <AnchorLink
          href={bandcampLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBandcamp className="icon" />
        </AnchorLink>
      </Icons>
    </Wrapper>
  );
};

DiscoItem.propTypes = propTypes;

export default DiscoItem;

const ImageContainer = styled.div``;
const Title = styled.div``;
const Date = styled.div``;
const Icons = styled.div``;
const AnchorLink = styled.a``;

const Wrapper = styled.article`
  margin: 0 auto;
  color: ${({ theme }) => theme.white};
  text-align: center;

  ${ImageContainer} {
    height: 256px;
    width: 256px;
    overflow: hidden;

    .img {
      border: 2px solid ${({ theme }) => theme.gold[300]};
      border-radius: 8px;
    }
  }

  ${Title} {
    font-size: 1.5rem;
    font-weight: 700;
    letter-spacing: 1px;
  }

  ${Date} {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.white};
  }

  ${Icons} {
    font-size: 1.5rem;

    ${AnchorLink} {
      margin: 0 0.25rem;
      cursor: pointer;

      .icon {
        color: ${({ theme }) => theme.gold[500]};
        transition: ${({ theme }) => theme.linear};

        &:hover {
          color: ${({ theme }) => theme.gold[700]};
        }
      }
    }
  }
`;
