import styled from 'styled-components'

export const StoryContainer = styled.View`
  width: 80px;
  border-bottom-color: #efefef;
  border-style: solid;
  border-bottom-width: 0.5px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding-top: 7px;
  padding-bottom: 5px;
`
export const OutlinePhoto = styled.View`
  width: 61px;
  height: 61px;
  border-radius: 50px;
  border-color: ${props => props.newStory ? "#e20951": "#cccccc"};
  border-style: solid;
  border-width: ${props => props.newStory ? "2px": "1px"};
  background-color: #ffffff;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Photo = styled.View`
  width: 53px;
  height: 53px;
  border-radius: 50;
  background-color: #cccccc;
`
export const Nickname = styled.Text`
  font-size: 12px;
  color: ${props => props.newStory ? "#000000": "#aaaaaa"};
`