import { useState } from 'react';

export const Form = () => {
  const [count, setCount] = useState<number>(0);
  const onClick = () => setCount(count + 1);
  return (
    <>
      <p>Login Form</p>
      <form onClick={() => onClick()}>
        <button type='button'>Login</button>
      </form>
      <p>{count}</p>
    </>
  );
};
