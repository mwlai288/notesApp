import styled from 'styled-components';

export const BackgroundStyle = styled.div`
  align-items: center;
  background: #fafafa;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export const BoxLink = styled.div`
  background: #f9f9f9;
  border: #a9a9a9 solid 0.2px;
  margin: 0;
  margin-bottom: 1rem;
  padding: 1rem;
`;

export const BoxWarning = styled.div`
  background: #f9f9f9;
  border: #a9a9a9 solid 0.2px;
  color: #777777;
  font-style: italic;
  margin: 0;
  margin-bottom: 1rem;
  padding: 1rem;
  text-align: center;
`;
export const BoxView = styled.div`
  background-color: white;
  border: 1px solid #777777;
  padding: 2.4rem;
  text-align: center;
  width: 24rem;
`;
export const ButtonStyle = styled.button`
  background-color: #397ab1;
  border: none;
  color: white;
  cursor: pointer;
  font-size: 1.6rem;
  line-height: 1.2;
  margin-bottom: 1rem;
  padding: 1rem;
  text-transform: uppercase;
`;
export const CancelButton = styled.button`
  background: #777777;
  border: 1px solid #800000;
  color: white;
  padding: 0.2rem 0.5rem;
  text-transform: uppercase;
`;

export const CheckBox = styled.label`
  display: block;
  margin-bottom: 1.2rem;
`;

export const ContentMain = styled.div`
  display: flex;
  width: calc(100rem - 30rem);
`;
export const ContentSideBar = styled.div`
  display: flex;
  width: 30rem;
`;
export const CheckBoxInput = styled.input`
  margin-right: 0.7rem;
`;

export const EditorStyle = styled.div`
  background-color: white;
  border: 1px solid grey;
  width: 100%;
`;

export const FormView = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  background: #800000;
  color: white;
  display: flex;
  height: 6rem;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 100vw;
  padding: 1.4rem;
`;

export const LogoutButton = styled.button`
  background: none;
  border: none;
  color: inherit;
  font-size: 1.4rem;
  margin: 0;
  padding: 0;
  text-decoration: underline;
`;

export const PageContent = styled.div`
  display: flex;
  height: calc(100vh - 6rem);
  margin: 0 auto;
  max-width: 100rem;
  padding: 1.4rem;
`;
export const PillButton = styled.button`
  background-color: transparent;
  border: 1px solid #800000;
  color: #800000;
  cursor: pointer;
  font-size: 1.6rem;
  margin: 0 0.5rem 0 0;
  padding: 0.3rem 0.8rem;
`;

export const NoteListStyle = styled.div`
  background-color: white;
  border: 1px solid grey;
  overflow-y: scroll;
  width: 100%;
`;

export const UrlData = styled.p`
  color: #777777;
`;
export const Title = styled.h1`
  margin: 0;
`;
