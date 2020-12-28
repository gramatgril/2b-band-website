// import React from "react";
// import styled from "styled-components";
// import { useForm } from "react-hook-form";
// import PropTypes from "prop-types";

// import { StyledButton } from "../../styles/StyledComponents/StyledButton";

// import { validators } from "../../utils";
// const {
//   nameValidation,
//   emailValidation,
//   messageValidation,
//   addressValidation,
// } = validators;

// const propTypes = {
//   setFormStatus: PropTypes.func.isRequired,
// };

// function encode(data) {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// }

// // "https://ggtrgovina.netlify.com/.netlify/functions/sendMail"
// // "http://localhost:9000/sendMail"
// const path = "http://localhost:9000/sendMail";
// // const path = "";

// const ContactForm = ({ setFormStatus }) => {
//   const { register, errors } = useForm({ mode: "onBlur" });

//   const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });

//   const onSubmit = async (data, e) => {

//     try {
//       // Sends data to server
//       const res = await fetch(path, {
//         method: 'POST',
//         headers: {
//           Accept: 'application/json'
//         },
//         body: JSON.stringify(data)
//       });

//       // Defaults input fields to empty
//       e.target.reset();

//       // Parses response
//       const { msg } = await res.json();

//       console.log(`Status: ${msg} - ${res.status}`);
//       setFormStatus({ statusCode: res.status, msg });
//     } catch (error) {
//       console.log(error);
//     }

//   return (
//     <Wrapper errors={errors}>
//       <form
//         className="form"
//         name="contact"
//         onSubmit={handleSubmit}
//         method="POST"
//         action="https://getform.io/f/bf7566a8-81d9-40c8-befd-6a3546b11b3f"
//         data-netlify="true"
//       >
//         <FormField>
//           <div className="top-line">
//             <label htmlFor="name">Ime</label>
//             {errors.name && <p className="error-text">{errors.name.message}</p>}
//           </div>
//           <input
//             autoComplete="off"
//             type="text"
//             name="name"
//             id="name"
//             className="input-field"
//             // placeholder="Jože Novak"
//             ref={register(nameValidation)}
//           />
//         </FormField>{" "}
//         <FormField>
//           <div className="top-line">
//             <label htmlFor="address">Naslov za dostavo</label>
//             {errors.address && (
//               <p className="error-text">{errors.address.message}</p>
//             )}
//           </div>
//           <input
//             autoComplete="off"
//             type="text"
//             name="address"
//             id="name"
//             className="input-field"
//             // placeholder="Jože Novak"
//             ref={register(addressValidation)}
//           />
//         </FormField>
//         <FormField>
//           <div className="top-line">
//             <label htmlFor="email">Email naslov</label>
//             {errors.email && (
//               <p className="error-text">{errors.email.message}</p>
//             )}
//           </div>
//           <input
//             autoComplete="off"
//             type="text"
//             name="email"
//             id="email"
//             className="input-field"
//             // placeholder="Jože.Novak@gmail.com"
//             ref={register(emailValidation)}
//           />
//         </FormField>
//         <FormField>
//           <div className="top-line">
//             <label htmlFor="message">Želim naročiti:</label>
//             {errors.message && (
//               <p className="error-text">{errors.message.message}</p>
//             )}
//           </div>
//           <textarea
//             autoComplete="off"
//             type="email"
//             rows="10"
//             name="message"
//             id="message"
//             className="input-field"
//             // placeholder="Sporočilo, mnenje, predlog, naročilo..."
//             ref={register(messageValidation)}
//           />
//         </FormField>
//         <FormField>
//           <StyledButton type="submit" className="submit-button">
//             Pošlji
//           </StyledButton>
//         </FormField>
//       </form>
//     </Wrapper>
//   );
// };

// ContactForm.propTypes = propTypes;

// export default ContactForm;

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

// const Wrapper = styled.div`
//   margin: 1.5rem 0;

//   #name {
//     border-color: ${({ errors, theme }) =>
//       errors.name ? theme.red : theme.grey[500]};
//   }

//   #email {
//     border-color: ${({ errors, theme }) =>
//       errors.email ? theme.red : theme.grey[500]};
//   }

//   #message {
//     border-color: ${({ errors, theme }) =>
//       errors.message ? theme.red : theme.grey[500]};
//   }
// `;
