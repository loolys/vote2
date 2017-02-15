import React from 'react';

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

// need some margin for the buttons
const marginStyle = {
  marginTop: '4px',
  marginBottom: '4px'
};

export default OptionList;
