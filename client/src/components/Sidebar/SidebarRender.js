import React from 'react';

import FocusButton from '../FocusButton/FocusButton';
import "./sidebar.scss";

export default function () {
  return (
    <div className='sidebar floating'>
      <FocusButton
        icon="assets/icons/student.svg"
        focusName="Students"
        focusScope="general"
      />
      <hr className="sidebar-line" />
      <FocusButton
        icon="assets/icons/book.svg"
        focusName="Books"
        focusScope="general"
      />
      <hr className="sidebar-line" />
      <FocusButton
        icon="assets/icons/code.svg"
        focusName="Codes"
        focusScope="general"
      />
    </div>
  );
}