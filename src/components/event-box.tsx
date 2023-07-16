import React, { FC } from "react";

const EventBox: FC = () => {
  const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value)
  }

  const clickHandler = (evt: React.MouseEvent<HTMLButtonElement>) => {
    evt.preventDefault();
    console.log(`clicked`)
  }
  return (
    <>
      <input onChange={handleChange} type="text" />
      <button onClick={clickHandler}> Click me </button>
    </>
  )
}
export default EventBox;
