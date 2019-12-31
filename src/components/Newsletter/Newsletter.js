import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const Newsletter = () => {
  return (
    <Wrapper>
      <Grid>
        <Title>
          <h1>želiš več informacij?</h1>
          <h2>Naroči se na novice in bodi na tekočem!</h2>
        </Title>
        <NewsletterForm>
          <Input>
            <InputField placeholder="E-mail naslov" />
            <Button type="submit">Naroči se</Button>
            <TermsLink to="/pravna-obvestila" className="link">
              <p>Pogoji</p>
            </TermsLink>
          </Input>
        </NewsletterForm>
      </Grid>
    </Wrapper>
  );
};

export default Newsletter;

const Grid = styled.div``;
const Title = styled.div``;
const NewsletterForm = styled.form``;
const Input = styled.div``;
const InputField = styled.input``;
const TermsLink = styled(Link)``;
const Button = styled.button``;

const Wrapper = styled.section`
  background: ${({ theme }) => theme.gold[500]};

  ${Grid} {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    margin: 0 auto;
    color: ${({ theme }) => theme.white};
    height: 100%;
    width: 90vw;

    ${Title} {
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        text-transform: uppercase;
        font-size: 1.5rem;
      }

      h2 {
        font-weight: 400;
        font-size: 1rem;
      }
    }

    ${NewsletterForm} {
      display: grid;
      justify-content: flex-start;
      align-items: center;

      ${TermsLink} {
        vertical-align: text-top;
        transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.75rem;

        & :hover {
          color: ${({ theme }) => theme.grey[900]};
        }
      }

      ${Input} {
        padding: 2rem 0 0 0;
        width: 100%;

        ${InputField} {
          background: transparent;
          font-size: 1rem;
          border: 2px solid rgba(248, 249, 250, 0.7);
          color: ${({ theme }) => theme.white};
          padding: 0.5rem 0.5rem;
          margin: 0 0.5rem 0 0;
          outline: none;
        }

        ${Button} {
          font-size: 1rem;
          padding: 0.5rem 1rem;
          cursor: pointer;
          font-weight: 600;
          text-transform: uppercase;
          background: transparent;
          color: ${({ theme }) => theme.white};
          text-align: center;
          position: relative;
          border: 2px solid;
          outline: 1px solid;
          outline-color: rgba(255, 255, 255, 0.5);
          outline-offset: 0px;
          text-shadow: none;
          transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);

          & :hover {
            border: 2px solid;
            box-shadow: inset 0 0 20px rgba(255, 255, 255, 0.5),
              0 0 20px rgba(255, 255, 255, 0.2);
            outline-color: rgba(255, 255, 255, 0);
            outline-offset: 15px;
          }
        }
      }
    }
  }

  @media (min-width: 375px) {
    ${Grid} {
      ${Title} {
        h1 {
          font-size: 2rem;
        }
        h2 {
          font-size: 1.5rem;
        }
      }
    }

    ${NewsletterForm} {
      ${Button} {
        padding: 0.5 1rem;
      }
    }
  }

  @media (min-width: 1200px) {
    height: 12rem;
    ${Grid} {
      width: 60vw;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    ${Input} {
      padding: 0;
    }
  }
`;
