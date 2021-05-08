import * as React from "react";
import Form from "./containers/FormTodo";
import Counter from "./containers/Counter";
import Message from "./containers/Message";

function App() {
  const [message, setMessage] = React.useState("Hello World!");
  return (
    <>
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
