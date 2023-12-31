import React from 'react';

import styled from 'styled-components';

import { useAuth0 } from '@auth0/auth0-react';

const Contact = () => {

const {isAuthenticated,user}=useAuth0();


  const Wrapper = styled.section`
  padding: 9rem 0 5rem 0;
  text-align: center;
  .container {
    margin-top: 6rem;
    .contact-form {
      max-width: 50rem;
      margin: auto;
      .contact-inputs {
        display: flex;
        flex-direction: column;
        gap: 3rem;
        input[type="submit"] {
          cursor: pointer;
          transition: all 0.2s;
          &:hover {
            background-color: ${({ theme }) => theme.colors.white};
            border: 1px solid ${({ theme }) => theme.colors.btn};
            color: ${({ theme }) => theme.colors.btn};
            transform: scale(0.9);
          }
        }
      }
    }
  }
`;
  return (
  
    <Wrapper>

      <h1> Contact Page</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.27689220455!2d85.
      29111332616576!3d27.7090319332826!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
      1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600!
      5e0!3m2!1sen!2snp!4v1668675984245!5m2!1sen!2snp"
       width="90%" height="550px" style={{border:0}} allowFullScreen=""
        loading="lazy" referrerPolicy="no-referrer-when-downgrade">
          
        </iframe>
    
    <div className="container">
      <div className="contact-form">

        <form action="https://formspree.io/f/maykvkok" method="POST" className="contact-inputs">
        <input
              type="text"
              placeholder="username"
              name="username"
              value={isAuthenticated ? user.name: " "}
              required
              autoComplete="off"
            />

            <input
              type="email"
              name="Email"
              value={isAuthenticated ? user.email: " "}
              placeholder="Email"
              autoComplete="off"
              required
/>
              <textarea
              name="Message"
              cols="30"
              rows="10"
              required
              autoComplete="off"
              placeholder="Enter you message"></textarea>

            <input type="submit" value="send" />
           
        </form>
      </div>

    </div>

    
    </Wrapper>
  )
}

export default Contact
