import styles from '../styles/styles'
import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native'

import ImagePicker from 'react-native-image-picker'
import RNFS from 'react-native-fs'
import DatePicker from 'react-native-datepicker'

export default class Main extends Component {
  constructor (props) {
    super(props)
    this.state = {
      avatarSource: {},
      date: "2017-12-30"
    }
    this.selectImage = this.selectImage.bind(this)
  }


  selectImage () {
    let options = {
      title: 'Select Avatar',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response)

      if (response.didCancel) {
        console.log('User cancelled image picker')
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error)
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton)
      }
      else {
        let filePath = RNFS.DocumentDirectoryPath + '/test-image.jpeg'
        console.log('response', response)
        RNFS.writeFile(filePath, response.data, 'base64')
          .then(() => {
            console.log('saved file', filePath)
          })
          .catch(err => {
            console.log('error save file', err)
          })
        this.setState({
          avatarSource: { uri: response.uri }
          // avatarSource: { uri: 'file://' + filePath }
        }, () => { console.log('avatar', this.state.avatarSource) })
      }
    })
  }

  render () {
    return (
      <View style={styles.container1}>
        <DatePicker
        style={styles.date}
         date={this.state.date}
         mode="date"
         placeholder="select date"
         format="YYYY-MM-DD"
         minDate="2015-01-01"
         maxDate="2021-01-01"
         confirmBtnText="Confirm"
         cancelBtnText="Cancel"
         customStyles={{
           dateIcon: {
             position: 'absolute',
             left: 0,
             top: 4,
             marginLeft: 0
           },
           dateInput: {
             marginLeft: 36
           }
         }}
         onDateChange={(date) => {this.setState({date: date})}}
        />

        <TouchableOpacity
          style={styles.photoButton}
          onPress={this.selectImage}>
          <Text style={styles.photoButtonText}>
            Take photo
          </Text>
        </TouchableOpacity>
        <View>
          <Image source={this.state.avatarSource} style={styles.uploadAvatar} />
        </View>

      </View>

    )
  }
}
