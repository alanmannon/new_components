import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail.js'
import faker from 'faker';
import ApprovalCard from './ApprovalCard.js';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        Are you sure you want this?
      </ApprovalCard>

      <ApprovalCard>
        <CommentDetail
          author="Sam"
          timeAgo="Today at 4:45pm"
          avatar={faker.image.people()}
          text="nice"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Bretty"
          timeAgo="Today at 3:00pm"
          avatar={faker.image.people()}
          text="cool"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Sal"
          timeAgo="Today at 9:35am"
          avatar={faker.image.people()}
          text="okay"
        />
      </ApprovalCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));