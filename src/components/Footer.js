import React from 'react'
import styled from 'styled-components';
import { Button } from '../styles/Button';
import { NavLink } from 'react-router-dom';
import {FaLinkedin, FaTwitter, FaGithub} from "react-icons/fa"

const Footer = () => {
  return (
    <Wrapper>
        <section className="contact-short">
            <div className="grid grid-two-column">
                <div>
                    <h3>Ready To Get Started</h3>
                    <h3>Talk to us today</h3>
                </div>
                <div>
                    <NavLink to="/contact">
                      <Button>
                        Get Started
                      </Button>
                    </NavLink>
                </div>
            </div>
        </section>

        {/* main footer */}
        <footer>
            <div className="container grid grid-four-column">
                <div className="footer-about">
                    <h3>Thapa Technical</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, odit?</p>
                </div>

                <div className="footer-subscribe">
                    <h3>Subscribe to get important updates</h3>
                    <form action="#">
                        <input type="email" placeholder='Your E-mail' />
                        <input type="submit" value="subscribe" />
                    </form>
                </div>

                <div className="footer-social">
                    <h3>Follow Us</h3>
                    <div className="footer-social--icons">
                        <div>
                        <a href="https://www.linkedin.com/in/srijan-verma-0407sv" target={"blank"} >
                           <FaLinkedin className="icons" />
                        </a>
                        </div>
                        <div>
                        <a href="https://twitter.com/Srijan__verma" target={"blank"}>
                            <FaTwitter className='icons' />
                        </a>    
                        </div>
                        <div>
                        <a href="https://github.com/SrijanVerma04" target={"blank"} >
                            <FaGithub className='icons' />
                        </a>    
                        </div>
                    </div>
                </div>

                <div className="footer-contact">
                    <h3>Call Us</h3>
                    {/* <a href="tel:123456789">+91 123456789</a> */}
                    <h3>+91 123456789</h3>
                </div>
            </div>

            {/* bottom footer  */}
            <div className="footer-bottom--section">
                <hr/>
                <div className="container grid grid-two-column">
                    <p>@{new Date().getFullYear()} ThapaTechnical. All Rights Reserved</p>

                    <div>
                        <p>Privacy Policy</p>
                        <p>TERMS & CONDITIONS</p>
                    </div>
                </div>
            </div>
        </footer>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    .iSIFGq {
        margin: 0;
    }

  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);

    .grid div:last-child {
      justify-self: end;
      align-self: center;
    }
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};
    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }
    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }
  }

  .footer-bottom--section {
    padding-top: 9rem;

    hr {
      margin-bottom: 2rem;
      color: ${({ theme }) => theme.colors.hr};
      height: 0.1px;
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 80vw;
      margin: 4.8rem auto;
      transform: translateY(0%);
      text-align: center;

      .grid div:last-child {
        justify-self: center;
      }
    }

    footer {
      padding: 9rem 0 9rem 0;
    }

    .footer-bottom--section {
      padding-top: 4.8rem;
    }
  }
`;

export default Footer