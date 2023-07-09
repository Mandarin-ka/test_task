import React from 'react';

function Button({
  className,
  onClick,
  children,
}: {
  className: string;
  onClick?: () => void;
  children?: React.ReactNode;
}) {
  return (
    <button
      className={className}
      onClick={
        onClick
          ? () => onClick()
          : () => {
              return;
            }
      }
    >
      {children}
    </button>
  );
}

export default Button;
