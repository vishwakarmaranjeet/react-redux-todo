import * as React from "react";
import FormTodo from "./containers/FormTodo";
import Counter from "./containers/Counter";
import ShowHide from "./containers/ShowHide";
import { useSelector } from "react-redux";
function App() {
  const showHideStatus = useSelector((state) => state.show.show);
  return (
    <>
      <div className="App">
        <Counter />
        {showHideStatus && <FormTodo />}
        <hr />
        <ShowHide showHideStatus={showHideStatus} />
      </div>
    </>
  );
}

export default App;
