import React from 'react';


export const Card =({name, selected, onClickSelect}) => (
  !selected? (
    <div onClick={() => onClickSelect(name)} style={{height: 200, width: 200, backgroundColor: '#555555'}}>
      {name}
    </div>
    ) : (
    <div onClick={() => onClickSelect(name)} style={{height: 200, width: 200, backgroundColor: '#555555', border: '2px solid #000000'}}>
      {name}
    </div>
    )
);