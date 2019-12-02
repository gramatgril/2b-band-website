import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import {
  FaYoutube,
  FaSoundcloud,
  FaApple,
  FaSpotify,
  FaBandcamp,
} from "react-icons/fa";

const DiscoItem = () => {
  return (
    <Wrapper>
      <ImageContainer>
        <img
          src="https://source.unsplash.com/random/300x300"
          alt=""
          className="img"
        />
      </ImageContainer>
      <Title>Morje z nami</Title>
      <Date>24.12.2019</Date>
      <Icons>
        <AnchorLink
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaYoutube className="icon" />
        </AnchorLink>
        <AnchorLink
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSoundcloud className="icon" />
        </AnchorLink>
        <AnchorLink
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaApple className="icon" />
        </AnchorLink>
        <AnchorLink
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaSpotify className="icon" />
        </AnchorLink>
        <AnchorLink
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaBandcamp className="icon" />
        </AnchorLink>
      </Icons>
    </Wrapper>
  );
};

export default DiscoItem;

const ImageContainer = styled.div``;
const Title = styled.div``;
const Date = styled.div``;
const Icons = styled.div``;
const AnchorLink = styled.a``;

const Wrapper = styled.article`
  margin: 0 auto;
  color: ${({ theme }) => theme.gold[500]};
  text-align: center;

  ${ImageContainer} {
    border: 2px solid ${({ theme }) => theme.gold[600]};
    border-radius: 8px;
    overflow: hidden;
  }

  ${Title} {
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 1px;
    margin-bottom: 0.25rem;
  }

  ${Date} {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.gold[600]};
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
          color: ${({ theme }) => theme.gold[300]};
        }
      }
    }
  }
`;
