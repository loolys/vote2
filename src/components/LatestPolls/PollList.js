import React from 'react';
import { Link } from 'react-router';

function PollList(props) {
  const { polls } = props;
  const pollItem = polls.map((item) => 
    <li key={item.id} className="list-group-item the-table">
      <Link to={"/poll/" + item.id}>{item.title}</Link>
    </li>
  );
  return (
    <ul className="list-group">{pollItem}</ul>
  );
}

export default PollList;
