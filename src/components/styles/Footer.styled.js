import styled from "styled-components"

export const StyledFooter = styled.footer`
  .page-footer {
    background-color: #006699;
  }

  .sagc {
    color: #f7f7f7;
    text-decoration: none;
  }

  @media screen and (max-width: 485px) {
    p {
      font-size: 14px;
    }
  }

  @media screen and (max-width: 385px) {
    p {
      font-size: 13px;
    }
  }

  @media screen and (max-width: 300px) {
    p {
      font-size: 12px;
    }
  }
`
