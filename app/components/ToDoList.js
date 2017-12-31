import styles from '../styles/styles'
import Item from './Item'
import React from 'react'
import {
    ListView
} from 'react-native'

export default class ToDoList extends React.Component {
    constructor(props){
        super(props)
    }
    componentWillMount() {
        this.dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2
        })
    }

    render() {
        var dataSource = this.dataSource.cloneWithRows(this.props.items)
        return (
          <ListView
            dataSource={dataSource}
            renderRow={(rowData, sectionID, rowID) =>
            <Item item={rowData}
              onPress={() => this.props.onPressItem(rowData, rowID)}
            />
        }
                style={styles.listView}/>
        )
    }

}
