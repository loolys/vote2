import React from 'react';

function PollList(props) {
  const { polls } = props;
  const pollItem = polls.map((item) => 
    <li key={item.id}>
      {item.title}
    </li>
  );
  return (
    <ul>{pollItem}</ul>
  );
}

export default PollList;
