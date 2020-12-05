import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import addToMailchimp from "gatsby-plugin-mailchimp";

const Newsletter = () => {
  const [newsletterStatus, setNewsletterStatus] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormSubmit = async e => {
    e.preventDefault();

    const res = await addToMailchimp(email);

    if (res.result === "success") {
      setMessage("Prijava je bila uspešna!");
    } else {
      setMessage("Prišlo je do napake, poskusi znova!");
    }

    setNewsletterStatus(true);
  };

  return (
    <Wrapper>
      <Grid>
        <Title>
          <h1>te kaj zanima?</h1>
          <h2>Naroči se na novice in bodi na tekočem!</h2>
        </Title>
        {newsletterStatus ? (
          <SuccessMessage onClick={() => setNewsletterStatus(false)}>
            <h2>{message}</h2>
          </SuccessMessage>
        ) : (
          <NewsletterForm onSubmit={e => handleFormSubmit(e)}>
            <Input>
              <InputField
                placeholder="E-mail naslov"
                onChange={e => setEmail(e.target.value)}
                type="email"
              />
              <Button type="submit">Naroči se</Button>
            </Input>
            <TermsLink>
              <StyledLink to="/pravna-obvestila" className="link">
                Pogoji
              </StyledLink>
            </TermsLink>
          </NewsletterForm>
        )}
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
const TermsLink = styled.div``;
const Button = styled.button``;
const StyledLink = styled(Link)``;
const SuccessMessage = styled.div``;

const Wrapper = styled.section`
  background: ${({ theme }) => theme.gold[500]};

  ${SuccessMessage} {
    margin: 2rem 0 0 0;
  }

  ${Grid} {
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
    margin: 0 auto;
    color: ${({ theme }) => theme.white};
    height: 100%;
    width: 90vw;

    ${Title} {
      letter-spacing: 2px;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1 {
        text-transform: uppercase;
        font-size: 1.5rem;
      }

      h2 {
        font-weight: 400;
        font-size: 1.25rem;
        color: rgba(255, 255, 255, 0.9);
      }
    }

    ${NewsletterForm} {
      ${TermsLink} {
        ${StyledLink} {
          vertical-align: text-top;
          transition: all 1250ms cubic-bezier(0.19, 1, 0.22, 1);
          color: rgba(255, 255, 255, 0.8);
          font-size: 0.75rem;

          & :hover {
            color: ${({ theme }) => theme.grey[900]};
          }
        }
      }

      ${Input} {
        max-width: 500px;
        padding: 2rem 0 0 0;
        display: flex;
        justify-content: space-between;

        ${InputField} {
          width: 100%;
          background: transparent;
          font-size: 1rem;
          border: 2px solid rgba(248, 249, 250, 0.7);
          color: ${({ theme }) => theme.white};
          padding: 0.5rem 0.25rem;
          margin: 0 0.5rem 0 0;
          outline: none;
        }

        ${Button} {
          white-space: nowrap;
          font-size: 1rem;
          padding: 0.5rem 0.5rem;
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

  @media (min-width: 576px) {
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
        padding: 0.5rem 1rem;
      }
    }
  }

  @media (min-width: 1200px) {
    ${Grid} {
      width: 60vw;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    ${NewsletterForm} {
      display: grid;
      justify-content: flex-start;
      align-content: center;

      ${Input} {
        width: 400px;
      }
    }
  }
`;
