import React from 'react';

const EditExpensePage = (props) => {
  console.log(props);
  return (
    <div>
      Edit Expense page at {props.match.params.id}
    </div>
  );
};

export default EditExpensePage;