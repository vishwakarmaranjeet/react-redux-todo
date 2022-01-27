import * as React from 'react';
import FormTodo from './containers/FormTodo';
import styles from './App.module.scss';
import sign from './undraw.svg';
//import { useSelector } from 'react-redux';
function App() {
  // const showHideStatus = useSelector((state) => state.show.show);
  return (
    <>
      <div className={styles.inner_container}>
        <div className={styles.container}>
          <div className={styles.right_content}>
            <FormTodo />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
