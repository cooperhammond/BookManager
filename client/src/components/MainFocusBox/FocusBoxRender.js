import React from 'react';

import DataDisplayTable from '../DataDisplayTable/DataDisplayTable';
import DataAddButton from '../DataAddButton/DataAddButton';

import "./focusbox.scss";

export default function (props, state) {

  return (
    <div className='focusbox floating'>
      <div className='header'>{state.displayName}</div>

      <DataAddButton itemType={state.itemType} />

      <DataDisplayTable labels={state.labels} rows={state.rows} />

    </div>
  );
}
