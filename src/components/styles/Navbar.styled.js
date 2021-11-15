import styled from "styled-components"

export const StyledNavbar = styled.nav`
  /* background-color: ${({ theme }) => theme.colors.navbar}; */
  background-color: "#C9EDFF";
  width: 100%;

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .nav-center {
    width: 90vw;
    max-width: 960px;
    white-space: nowrap;
  }
  .nav-header {
    height: 6rem;
    display: flex;
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
    }
  }
  .nav-logo-img {
    width: 6rem;
    padding-right: 2rem;
  }
  .nav-btn {
    transition: var(--transition);
  }
  .nav-btn-img {
    background-color: white;
    border-radius: var(--borderRadius);
    width: 3rem;
    display: flex;
    justify-content: center;
  }
  .nav-links {
    height: 0;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: var(--transition);
  }
  .show-links {
    height: 23.9375rem;
  }

  .nav-link {
    display: block;
    text-align: center;
    font-size: 1.5rem;
    text-transform: capitalize;
    color: var(--grey-1000);
    letter-spacing: var(--letterSpacing);
    padding: 1rem 0;
    border-top: 1px solid var(--grey-500);
    transition: var(--transition);

    &:hover {
      color: ${({ theme }) => theme.colors.navlinkHover};
      font-weight: bold;
      transform: scale(0.98);
    }
  }
  .active-link {
    color: ${({ theme }) => theme.colors.navlink};
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

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;

    .nav-header-logo {
      width: 250px;
      margin-left: 0;
      margin-right: 0;
      margin-bottom: -7px;

      @media (max-width: 320px) {
        width: 170px;
      }
    }
  }
`
