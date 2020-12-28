import React, { useState } from "react";
import axios from "axios";
import { Link } from "gatsby";
import styled from "styled-components";
import { StyledButton } from "../../styles/StyledComponents/StyledButton";

const MerchForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  });
  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    });
    if (ok) {
      form.reset();
    }
  };
  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: "https://getform.io/f/bf7566a8-81d9-40c8-befd-6a3546b11b3f",
      data: new FormData(form),
    })
      .then(r => {
        handleServerResponse(
          true,
          "Naročilo je bilo uspešno oddano. V kratkem dobite predračun po emailu in vaše naročilo bo kmalu na poti!",
          form
        );
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };
  return (
    <Wrapper>
      <div className="form-wrapper">
        <form onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="name" required="required">
              Ime in Priimek
            </label>
            <input
              type="text"
              name="name"
              className="form-control"
              id="name"
              aria-describedby="name"
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email naslov</label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="email"
              autoComplete="off"
              required="required"
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefon</label>
            <input
              type="number"
              name="phone"
              className="form-control"
              id="phone"
              autoComplete="off"
              required="required"
            />
          </div>
          <div className="form-group">
            <label htmlFor="address">Naslov</label>
            <input
              type="text"
              name="address"
              className="form-control"
              id="address"
              autoComplete="off"
              required="required"
              placeholder="Naslov, poštna številka, mesto"
            />
          </div>
          <div className="form-group">
            <label htmlFor="order">Naročilo</label>
            <textarea
              rows="5"
              type="text"
              name="order"
              className="form-control"
              id="prder"
              autoComplete="off"
              required="required"
              placeholder="1x XL Moška majica, 1x S Ženska majica, 2x značka, ali 1X paket"
            />
          </div>

          {/* <button
            type="submit"
            className="btn btn-primary"
            disabled={serverState.submitting}
          >
            Submit
          </button> */}
          <StyledButton
            type="submit"
            className="submit-button"
            disabled={serverState.submitting}
          >
            Pošlji
          </StyledButton>
          {serverState.status && (
            <p className={!serverState.status.ok ? "errorMsg" : ""}>
              {serverState.status.msg}
            </p>
          )}
        </form>
      </div>
    </Wrapper>
  );
};

// const FormField = styled.div`
//   margin-bottom: 0.5rem;
//   width: 100%;

//   .top-line {
//     color: ${({ theme }) => theme.gold[500]};
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     .error-text {
//       color: ${({ theme }) => theme.red};
//     }
//   }

//   .input-field,
//   .submit-button {
//     width: 100%;
//     font-size: 1rem;
//     padding: 0.25rem 0.5rem;
//     border: 1px solid;
//     border-radius: 6px;
//   }

//   .submit-button {
//     text-transform: uppercase;
//     transition: ${({ theme }) => theme.linear};
//     cursor: pointer;
//   }

//   .phone {
//     display: none !important;
//     opacity: 0;
//   }
// `;

export default MerchForm;

const Wrapper = styled.div`
  .form-wrapper {
    .form-group {
      text-align: left;
      display: flex;
      flex-direction: column;
      color: ${({ theme }) => theme.gold[500]};
    }

    .submit-button {
      width: 100%;
      font-size: 1rem;
      padding: 0.25rem 0.5rem;
      border: 1px solid;
      border-radius: 6px;
      text-transform: uppercase;
      transition: ${({ theme }) => theme.linear};
      cursor: pointer;
    }
  }
`;
