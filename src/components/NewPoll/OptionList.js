import React from 'react';

// need some margin for the buttons
const marginStyle = {
  marginTop: '7px',
  marginBottom: '7px',
};


function OptionList(props) {
  const { items, deleteOption } = props;
  const listItem = items.map((item) => 
    <li key={item.id} style={marginStyle}>
      {item.text} <button 
        onClick={deleteOption.bind(this, item)} 
        className="btn btn-xs btn-danger pull-right">
         Delete 
         </button>
    </li>
  );
  return (
    <ul>{listItem}</ul>
  );
}


export default OptionList;
