import styled from "styled-components"
// import "normalize.css"
// import "../../assets/css/main.css"

export const StyledNavbar = styled.nav`
  background-color: #c9edff;
  width: 100%;

  .navbar {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-center {
    width: 100vw;
    max-width: 960px;
    white-space: nowrap;
    margin: auto;
  }
  .nav-header {
    height: 5rem;
    display: flex;
    flex: 1;
    gap: 1rem;
    justify-content: space-between;
    align-items: center;
  }
  .nav-header-logo {
    width: 300px;
    margin-left: -9px;
    margin-bottom: -12px;

    &:hover {
      transform: scale(0.98);
      transition: 0.3s ease-in-out all;
    }
  }
  .nav-logo-img {
    display: none;
  }
  .nav-btn {
    &:hover {
      transform: scale(0.98);
      transition: 0.3s ease-in-out all;
    }
  }
  .nav-btn-img {
    background-color: white;
    border-radius: 0.25rem;
    width: 3rem;
    display: flex;
    justify-content: center;
  }
  .nav-links {
    height: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: 0.3s ease-in-out all;
  }
  .show-links {
    height: 23.9375rem;
  }

  .nav-link {
    display: block;
    text-align: center;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: #333538;
    letter-spacing: 1px;
    padding: 1rem 0;
    border-top: 1px solid #cbd3e1;
    transition: 0.3s ease-in-out all;

    &:hover {
      color: "#47C2FF";
      font-weight: bold;
      transform: scale(0.98);
    }
  }
  .active-link {
    color: #006699;
    font-weight: bold;
  }
  .contact-link {
    display: flex;
    justify-content: center;
  }
  .contact-link a {
    padding: 0.5rem 1rem;
  }

  @media screen and (min-width: 992px) {
    .navbar {
      height: 5rem;
    }
    .nav-center {
      display: flex;
      align-items: center;
    }
    .nav-header {
      padding: 0;
      height: auto;
    }

    .nav-logo-img {
      display: initial;
      width: 6rem;
      padding-right: 1rem;
    }

    .nav-btn {
      display: none;
    }
    .nav-links {
      height: auto !important;
      flex-direction: row;
      align-items: center;
      width: 100%;
    }
    .nav-link {
      padding: 0;
      border-top: none;
      margin-right: 1rem;
      font-size: 1rem;
    }
    .contact-link {
      width: 100%;
      justify-content: flex-end;
      align-items: center;
      margin-right: 0;
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    .nav-header-logo {
      width: 250px;
      margin-left: -8px;
      margin-right: 0;
      margin-bottom: -15px;

      @media (max-width: 360px) {
        width: 200px;
      }

      @media (max-width: 280px) {
        width: 170px;
        margin-left: -5px;
      }
    }
  }
`
