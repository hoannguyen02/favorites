import * as React from 'react';

function HeartIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={28}
      height={25}
      viewBox="0 0 28 25"
      fill="none"
      {...props}
    >
      <path
        d="M12.74 21.967l-.002-.001c-3.453-3.132-6.238-5.66-8.172-8.024-1.923-2.35-2.9-4.417-2.9-6.609C1.667 3.78 4.447 1 8 1c2.017 0 3.969.944 5.239 2.435l.76.894.762-.894C16.031 1.944 17.983 1 20 1c3.554 0 6.333 2.779 6.333 6.333 0 2.192-.976 4.258-2.9 6.61-1.933 2.367-4.718 4.898-8.172 8.036 0 0 0 0 0 0l-1.259 1.138-1.262-1.15z"
        stroke="#3074C8"
        strokeWidth={2}
      />
    </svg>
  );
}

export default HeartIcon;
