import "./App.css";
import React, { Fragment } from "react";
import styled from "styled-components";
import search from "./static/images/icons/search.svg";

const App = () => (
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
  </Fragment>
);

export default App;

const Wrapper = styled.div`
  position: relative;
  margin-top: 11rem;
`;

const Title = styled.div`
  font-size: 18px;
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
    width: 200px;
    text-align: center;

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: white;
      opacity: 0.5; /* Firefox */
    }
  }

  img {
    width: 30px;
    height: 30px;
    fill: red;
  }
`;
