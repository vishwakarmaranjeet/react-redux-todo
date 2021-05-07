import * as React from "react";
import Form from "./containers/FormTodo";
import Counter from "./containers/Counter";
import Message from "./containers/Message";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const H1 = styled.h1`
  font-size: 24px;
  font-weight: 700;
`;

const Link = ({ className, red, text, ...props }) => (
  <a {...props} className={className}>
    {text}
  </a>
);

const StyledComp = styled(Link)`
  color: ${(props) => (props.red ? "red" : "blue")};
  text-decoration: none;
`;

function App() {
  const [message, setMessage] = React.useState("Hello World!");
  return (
    <>
      <Wrapper>
        <H1>Styled components...</H1>
        <StyledComp
          text="Styled component"
          href="https://www.styled-components.com/"
          green
          className="ranjeet"
        />
      </Wrapper>
      <div className="App">
        <Counter />
        <Form />
        <input type="text" onChange={(e) => setMessage(e.target.value)} />
        <Message message={message} />
      </div>
    </>
  );
}

export default App;
