import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = props => {
  const [enteredValue, setEnteredValue] = useState('');
  const [valid, setIsValid]= useState(true);

  const goalInputChangeHandler = event => {
    setEnteredValue(event.target.value);
    if (event.target.value.trim().length !== 0) {
      setIsValid(true);
    }
  };

  const formSubmitHandler = event => {
    event.preventDefault();
    

    if (enteredValue.trim().length === 0) {
      //in this case trim is used to remove the excess whitespace before the comparison
      setIsValid(false)
      return;
    } else {
      props.onAddGoal(enteredValue);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!valid ? ` invalid` : `` }` /* this is added in order to concatenate the css class invalid to the classname based on the defined conditon; and even more classes can still be added using the syntax and the particular condition order*/}>
        
        <label> Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
