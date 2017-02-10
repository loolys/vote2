import React from 'react';

function OptionList(props) {
  console.log(props);
  const { items, deleteOption } = props;
  const listItem = items.map((item) => 
    <li key={item.id}>
      <span>{item.text}</span> <button 
        onClick={deleteOption.bind(this, item)}> Delete </button> 
    </li>
  );
  return (
    <ul>{listItem}</ul>
  );
}

export default OptionList;
