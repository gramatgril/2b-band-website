import React, { useState } from "react";
import styled from "styled-components";
import useForm from "react-hook-form";

import { validators } from "../../utils";
import FormStatusMessage from "./FormStatusMessage";
import { StyledButton } from "../../styles/StyledComponents";
import { StyledTitle } from "./../../styles/StyledComponents";
import { StyledFrame } from "./../../styles/StyledComponents";
const { nameValidation, emailValidation, messageValidation } = validators;

const ContactForm = () => {
  const { register, handleSubmit, errors } = useForm({ mode: "onBlur" });
  const [formStatus, setFormStatus] = useState({
    statusCode: null,
    msg: "Sporočilo je bilo poslano uspešno. Hvala!",
  });

  const onSubmit = async (data, e) => {
    console.log(data);
  };

  return (
    <Wrapper errors={errors}>
      <Title>
        <h2>Kontakt</h2>
      </Title>
      <Form>
        {formStatus.statusCode ? (
          <FormStatusMessage message={formStatus.msg} />
        ) : (
          <FormField
            className="form"
            name="contact"
            onSubmit={handleSubmit(onSubmit)}
          >
            <FormField>
              <LabelRow className="top-line">
                <label htmlFor="name">Ime</label>
                {errors.name && <ErrorText>{errors.name.message}</ErrorText>}
              </LabelRow>
              <Input
                autoComplete="off"
                type="text"
                name="name"
                id="name"
                className="input-field"
                // placeholder="Jože Novak"
                ref={register(nameValidation)}
              />
            </FormField>
            <FormField>
              <LabelRow className="top-line">
                <label htmlFor="email">Email</label>
                {errors.email && <ErrorText>{errors.email.message}</ErrorText>}
              </LabelRow>
              <Input
                autoComplete="off"
                type="text"
                name="email"
                id="email"
                className="input-field"
                // placeholder="Jože.Novak@gmail.com"
                ref={register(emailValidation)}
              />
            </FormField>
            <FormField>
              <LabelRow className="top-line">
                <label htmlFor="message">Sporočilo</label>
                {errors.message && (
                  <ErrorText>{errors.message.message}</ErrorText>
                )}
              </LabelRow>
              <TextArea
                autoComplete="off"
                type="email"
                rows="10"
                name="message"
                id="message"
                className="input-field"
                // placeholder="Pustite nam sporočilo"
                ref={register(messageValidation)}
              />
            </FormField>
            <FormField>
              <TextArea
                autoComplete="off"
                type="text"
                name="phone"
                id="phone"
                className="form-control phone"
                placeholder="Telefon"
                ref={register}
              />
            </FormField>
            <FormField>
              <SubmitButton type="submit" className="submit-button">
                Pošlji sporočilo
              </SubmitButton>
            </FormField>
          </FormField>
        )}
      </Form>
    </Wrapper>
  );
};

export default ContactForm;

const Form = styled.form``;
const LabelRow = styled.div``;
const ErrorText = styled.p``;
const Input = styled.input``;
const TextArea = styled.textarea``;
const FormField = styled.div``;
const Title = styled(StyledTitle)``;
const SubmitButton = styled(StyledButton)``;

const Wrapper = styled(StyledFrame)`
  /* height: 100%; */
  margin: 0;
  /* border: 2px solid ${({ theme }) => theme.gold[300]}; */
  border-radius: 8px;
  padding: 1rem;
  /* background: ${({ theme }) => theme.blue[500]}; */

  ${Form} {
    /* display: flex;
    flex-direction: column;
    justify-content: space-between; */
  }

  ${FormField} {
    /* color: ${({ theme }) => theme.gold[300]}; */
    letter-spacing: 1px;
    font-weight: 500;

    ${LabelRow} {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 1rem;
      ${ErrorText} {
        font-weight: 400;
        font-size: 1rem;
        color: ${({ theme }) => theme.warning[500]};
      }
    }

    ${Input},
    ${TextArea} {
      background: transparent;
      width: 100%;
      outline: 0;
      border: 0;
      font-size: 1rem;
      font-weight: 400;
      color: ${({ theme }) => theme.gold[500]};
      border-bottom: 1px solid ${({ theme }) => theme.gold[500]};
    }

    .phone {
      display: none !important;
      opacity: 0;
    }
  }

  #name {
    border-color: ${({ errors, theme }) =>
      errors.name ? theme.red : theme.grey[500]};
  }

  #email {
    border-color: ${({ errors, theme }) =>
      errors.email ? theme.red : theme.grey[500]};
  }

  #message {
    border-color: ${({ errors, theme }) =>
      errors.message ? theme.red : theme.grey[500]};
  }
`;
