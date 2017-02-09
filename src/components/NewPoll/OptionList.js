import React from 'react';

function OptionList(props) {
  const items = props.items;
  const listItem = items.map((item) => 
    <li key={item}>
      {item}
    </li>
  );
  return (
    <ul>{listItem}</ul>
  );
}

export default OptionList;
