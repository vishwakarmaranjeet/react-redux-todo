import * as React from 'react';
import CreateTodo from './containers/CreateTodo';
import styles from './App.module.scss';
// import ShowHide from './containers/ShowHide';
// import Counter from './containers/Counter';
//import { useSelector } from 'react-redux';

const App = () => {
  //const showHideStatus = useSelector((state) => state.show.show);
  return (
    <>
      <div className={styles.inner_container}>
        <div className={styles.container}>
          <div className={styles.right_content}>
            <CreateTodo />
            {/* <Counter />
            <ShowHide showHideStatus={showHideStatus} /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
