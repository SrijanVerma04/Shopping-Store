import styled from "styled-components";

const Contact = () => {

  return <Wrapper>
      <h2 className="common-heading">Contact Page</h2>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.3322068246475!2d81.32027247525701!3d21.218671281228712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293d3c8e5399af%3A0xf75bba687e168639!2sSurya%20Treasure%20Island%20Mall%2C%20Bhilai!5e0!3m2!1sen!2sin!4v1692974146449!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

      <div className="container">
        <div className="contact-form">
          <form action="https://formspree.io/f/maygolzl" method="POST" className="contact-inputs">
            <input type="text" placeholder="Username" name="Username" required autoComplete="off" />

            <input type="email" name="Email" placeholder="Email" autoComplete="off" required />

            <textarea name="Message" placeholder="Enter Your Message" id="" cols="30" rows="10" required autoComplete="off" ></textarea>

            <input type="submit" value="Send" />
          </form>
        </div>
      </div>
  </Wrapper>;
};

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

export default Contact;
