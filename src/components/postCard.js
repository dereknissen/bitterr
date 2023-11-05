import React from 'react'

import { GetBitData } from '../firebase'

function postCard(msg) {
  return (
    <div class = "postCard">
        <div class = "postHeading">
            <h4 class = "userName">Anonymous User</h4>
            <p class = "postTime">4hr</p>
        </div>
        <p class = "contentText">{msg.msg}</p>
        <a href = "">
          <div class = "voteButton" id = "upvote">
              <img src = "../images/arrow.svg"></img>
          </div>
          <div class = "voteButton" id = "downvote">
              <img src = "../images/arrow.svg"></img>
          </div>
        </a>
    </div>
  );
}

export default postCard