
import styles from '../styles/styles'
import ToDoList from './ToDoList'
import ToDoEdit from './Edit'
import React from 'react'
import { Text, View, ListView, TouchableHighlight, AlertIOS, Button,TouchableOpacity } from 'react-native'

export default class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: [
                {txt: 'active', complete: false},
                {txt: ' complete ', complete: true}
            ]
        }
        this.updateItem = this.updateItem.bind(this)
        this.openItem = this.openItem.bind(this)

    }

    updateItem(item, index) {
        var items = this.state.items
        if (index) {
            items[index] = item
        }
        else {
            items.push(item)
        }
        this.setState({items: items})
        this.props.navigator.pop()
    }

    openItem(rowData, rowID) {
        this.props.navigator.push({
            title: rowData && rowData.txt || 'New Item',
            component: ToDoEdit,
            passProps: {item: rowData, id: rowID, update: this.updateItem}
        })
    }

    render() {
        return (
            <View style={{flex:1}}>
                <ToDoList
                    items={this.state.items}
                    onPressItem={this.openItem}
                />

                <TouchableHighlight
                    style={[styles.button, styles.newButton]}
                    underlayColor='#99d9f4'
                    onPress={this.openItem}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableHighlight>

            </View>
        )
    }
}
