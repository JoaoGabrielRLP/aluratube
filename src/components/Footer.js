import styled from "styled-components";

export const StyledFooter = styled.footer`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 200px;
    background-color: white;
`

export default function Footer() {
    return (
      <StyledFooter>
        <div>
          <Logo />
        </div>
      </StyledFooter>
    );
  }