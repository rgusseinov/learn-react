import React, { FC } from "react";


export enum CardVariant {
  outlined = 'outlined',
  primary = 'primary'
}

interface CardProps {
  width?: string;
  height?: string;
  children?: React.ReactNode;
  onClick: () => void,
  variant: CardVariant
}

const Card: FC<CardProps> = ({ width, height, variant, children, onClick }) => {
  return (
    <div
      className="box"
      style={{ width, height, border: variant === CardVariant.outlined ? 'border: 1px solid grey' : 'border: 1px solid green' }}
      onClick={onClick} >
      <h2>Title here</h2>
      <p>
        Some text here
      </p>
      {children}
    </div >
  )
}
export default Card;