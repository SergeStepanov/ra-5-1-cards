import React from 'react'

export default function BtnLink({ children, ...props }) {
  return (
    <a {...props} class='btn btn-primary'>
      {children}
    </a>
  );
}
