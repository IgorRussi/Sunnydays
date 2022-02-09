import "../../../src/App.css";
import React, { Fragment } from "react";
import styled from "styled-components";
import search from "../../static/images/icons/search.svg";
import sun from "../../static/images/sun.svg";

const Landing = () => (
  <Fragment>
    <Wrapper>
      <Title>
        <h1> Where's the Sun?</h1>
      </Title>
      <InputWrapper>
        <input placeholder="Type your City"></input>
        <a href="https://www.w3schools.com">
          <img src={search} alt="search" className="icon" />
        </a>
      </InputWrapper>
    </Wrapper>
    <WrapperSun>
      <img src={sun} alt="sun" className="svg" />
    </WrapperSun>
  </Fragment>
);

export default Landing;

const Wrapper = styled.div`
  position: relative;
  margin-top: 11rem;
`;

const WrapperSun = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  width: 100%;

  img {
    width: 50%;
    margin-left: auto;
    margin-right: auto;
  }
`;

const Title = styled.div`
  font-size: 34px;
  letter-spacing: 5px;
  text-align: center;
  color: white;
  font-family: Annie Use Your Telescope;
`;
const InputWrapper = styled.div`
  position: relative;
  text-align: center;
  input {
    border: none;
    border-bottom: 1px solid #ffffff;
    background: transparent;
    color: white;
    width: 400px;
    text-align: center;
    margin-bottom: 1rem;
    outline: none;

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: white;
      opacity: 0.5; /* Firefox */
    }
  }

  img {
    width: 20px;
    height: 20px;
    filter: invert(1);
  }
`;
