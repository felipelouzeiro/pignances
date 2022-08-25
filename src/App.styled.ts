import styled from 'styled-components';

export const Container = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Header = styled.div`
  background-color: #7cb490;
  height: 9rem;
  text-align: center;
  text-shadow: 1px 1px #fff2af;

  display: flex;
  justify-content: center;
  gap: 1rem;

  svg {
    font-size: 3rem;
    margin-top: 30px;
    color: #fff2af;
  }
`;

export const HeaderTitle = styled.h1`
  margin-top: 30px;
  font-size: 2.5rem;
  padding: 0;
  color: #7cb490;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: #fff;
`;

export const Body = styled.div`
  margin: auto;
  max-width: 980px;
  margin-bottom: 50px;
`;
