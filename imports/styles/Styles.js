import styled from 'styled-components';

export const BackgroundStyle = styled.div`
  align-items: center;
  background: #fafafa;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
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

export const ContentMain = styled.div`
  display: flex;
  width: calc(100rem - 30rem);
`;

export const ContentSideBar = styled.div`
  display: flex;
  padding-right: 2.8rem;
  width: 30rem;
`;

export const EditorStyle = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 2.8rem;
  width: 100%;
`;
export const EditorStyleBody = styled.textarea`
  flex-grow: 1;
  font-weight: 300;
  margin-bottom: 2.8rem;
  outline: none;
  padding: 1.4rem;
  resize: none;
`;

export const EditorStyleMessage = styled.p`
  border: 1px solid grey;
  display: flex;
  background-color: white;
  flex-direction: column;
  font-style: italic;
  margin: 2.8rem;
  outline: none;
  padding: 2.8rem;
  text-align: center;
  width: 100%;
`;

export const EditorStyleTitle = styled.input`
  border: none;
  border-bottom: 2px solid grey;
  font-size: 2.2rem;
  margin-bottom: 2.8rem;
  outline: none;
  padding: 1rem;
`;

export const FormView = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  background: #397ab1;
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
  padding: 1.4rem 2.8rem;
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
