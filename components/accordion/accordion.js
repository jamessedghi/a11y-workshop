import { useState } from 'react'

export const Accordion = ({ title, show = false, children }) => {
  const [isOpen, setisOpen] = useState(show);

  const onClickHandler = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <h2 onClick={onClickHandler}>{title}</h2>
      {isOpen && 
        <div>
          {children}
        </div>
      }
    </>
  );
};