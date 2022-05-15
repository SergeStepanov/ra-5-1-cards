import React from 'react'

export default function BtnLink({ children, ...props }) {
  return (
    <a {...props} className='btn btn-primary'>
      {children}
    </a>
  );
}
