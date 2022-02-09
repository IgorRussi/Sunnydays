import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Navbar = () => {
  return (
    <WrapperNav>
      <h1>
        <Link to="/">SunnyDays</Link>
      </h1>
      <ul>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </WrapperNav>
  );
};

const WrapperNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem 2rem;
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 0;
  /* border-bottom: solid 1px var(--primary-color); */
  opacity: 0.9;

  ul {
    display: flex;
    list-style: none;
  }

  a {
    color: white;
    padding: 0.45rem;
    margin: 0 0.25rem;
    text-decoration: none;

    :hover {
      color: var(--primary-color);
    }
  }
`;

//   .navbar ul {
//     display: flex;
//   }

//   .navbar a {
//     color: #fff;
//     padding: 0.45rem;
//     margin: 0 0.25rem;
//   }

//   .navbar a:hover {
//     color: var(--primary-color);
//   }

//   .navbar .welcome span {
//     margin-right: 0.6rem;
//   }
