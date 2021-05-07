import * as React from "react";

const Message = (props) => {
  const { message } = props;
  React.useEffect(() => {
    const id = setInterval(() => {
      console.log(message);
    }, 2000);
    return () => {
      clearInterval(id);
    };
  }, [message]);

  return (
    <>
      <h3>{message}</h3>
    </>
  );
};

export default Message;
