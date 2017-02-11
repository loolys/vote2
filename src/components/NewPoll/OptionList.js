import React from 'react';

function OptionList(props) {
  console.log(props);
  const { items, deleteOption } = props;
  const listItem = items.map((item) => 
    <li key={item.id}>
      {item.text} <span><button 
        onClick={deleteOption.bind(this, item)} 
        className="btn btn-sm btn-danger pull-right">
         Delete 
         </button></span>
    </li>
  );
  return (
    <ul>{listItem}</ul>
  );
}

export default OptionList;
