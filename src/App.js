import React, { Component } from 'react'
import {
  View,
  FlatList,
  ScrollView
} from 'react-native'

import {
  Header
} from './style'

import Story from './components/Story'

export default class App extends Component {

  state = {
    stories: [
      {key: 0, nickname: 'Seu story'},
      {key: 1, nickname: 'imgus_', newStory: true},
      {key: 2, nickname: 'imgus_', newStory: true},
      {key: 3, nickname: 'imgus_', newStory: true},
      {key: 4, nickname: 'imgus_'},
      {key: 5, nickname: 'imgus_'},
      {key: 6, nickname: 'imgus_'},
      {key: 7, nickname: 'imgus_'},
      {key: 8, nickname: 'imgus_'},
      {key: 9, nickname: 'imgus_'}
    ]
  }

  render() {
    const renderItem = ({item}) => {
      return <Story nickname={item.nickname} newStory={item.newStory} />
    }

    return (
      <View>
        <Header />
          <ScrollView>
            <FlatList
              showsHorizontalScrollIndicator={false}
              horizontal={true}
              data={this.state.stories}
              extraData={this.state}
              renderItem={renderItem}
              keyExtractor={(_, index) => index.toString()} />
          </ScrollView>
      </View>
    )
  }
}