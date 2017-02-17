import React from 'react';

function PollFormList(props) {
  const { poll, selectedOption, onChange } = props;

  const pollItem = poll.map((item) =>
    <div className="radio" key={item.id} >
      <label>
        <input 
          type="radio" 
          value={item.option}
          checked={selectedOption === item.option}
          onChange={onChange.bind(this, item.option)} />
         {item.option}
      </label>
    </div>
  );


  return <ul>{pollItem}</ul>

  /*const pollItem = polls.map((item) => 
    <li key={item.id} className="list-group-item">
      <Link to={"/poll/" + item.id}>{item.title}</Link>
    </li>
  );
  return (
    <ul className="list-group">{pollItem}</ul>
  );*/
}

export default PollFormList;
