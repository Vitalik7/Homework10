
import styles from '../styles/styles'
import React from 'react'
import {
    Text, View, TouchableHighlight, Button, TouchableOpacity, AlertIOS
} from 'react-native'

export default class Item extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            items: [
                {txt: 'active', complete: false},
                {txt: ' complete ', complete: true}
            ]
        }
        this.alertMenu = this.alertMenu.bind(this)
        this.deleteItem = this.deleteItem.bind(this)

    }

    alertMenu(rowID) {
        AlertIOS.alert(
            'You are sure?',
            null,
            [
                {text: 'Yes', onPress: () => this.deleteItem(rowID)},
                {text: 'Cancel'}
            ]
        )
    }

    deleteItem(index) {
       var items = this.state.items
       items.splice(index, 1)
       this.setState({items: items})
   }

    render() {
        var item = this.props.item
        return (
            <View>
              <TouchableHighlight
                onPress={this.props.onPress}>
                <View style={styles.container}>

                  <TouchableOpacity onPress={this.alertMenu}>
                    <Text style={styles.remove} >X</Text>
                  </TouchableOpacity>

                  <Text
                    style={[styles.txt, item.complete && styles.completed]}>
                    {item.txt}
                  </Text>

                </View>
              </TouchableHighlight>
                <View style={styles.hr}/>
            </View>
        )
    }
}
