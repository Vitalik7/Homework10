import styles from './app/styles/styles'
import ToDoListContainer from './app/components/Container'
import React from 'react'
import {
  NavigatorIOS
} from 'react-native'

class ToDoApp extends React.Component {
    render() {
        return (
            <NavigatorIOS
                style={styles.navigator}
                initialRoute={{component: ToDoListContainer, title: 'TO DOs'}}
            />
        )
    }
}

export default ToDoApp
