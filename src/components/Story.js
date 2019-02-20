import React from 'react'

import {
  StoryContainer,
  OutlinePhoto,
  Photo,
  Nickname
} from './style'

export default props => {
  return (
    <StoryContainer>
      <OutlinePhoto newStory={props.newStory}>
        <Photo></Photo>
      </OutlinePhoto>
      <Nickname newStory={props.newStory}>
        {props.nickname}
      </Nickname>
    </StoryContainer>
  )
}