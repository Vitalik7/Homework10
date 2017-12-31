var React = require('react-native');
var { StyleSheet } = React;

var styles = StyleSheet.create({

    navigator: {flex: 1},

    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
        backgroundColor: '#ffffff',
    },

    buttonText: {
        fontSize: 25,
        color: 'white',
        alignSelf: 'center'
    },

    button: {
        height: 36,
        backgroundColor: '#48BBEC',
        alignSelf: 'stretch',
        justifyContent: 'center'
    },

    saveButton: {
        borderColor: '#48BBEC',
        borderWidth: 1,
        borderRadius: 8,
    },

    newButton: {
        marginBottom: 0,
        borderRadius: 0,
    },

    todo: {
        marginTop: 100,
        flex: 1,
        padding: 10,
        backgroundColor: '#ffffff',
    },

    txt: {
        fontSize: 18,
        marginLeft: 5,
        marginTop: 2,
        color: '#222222',
    },

    completed: {
        color: '#cccccc',
        textDecorationLine: 'line-through'
    },

    hr: {
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
        height: 1,
        marginLeft: 0,
        marginRight: 0,
    },
    remove: {
        fontSize: 25,
        color: 'red',
        position: 'absolute',
        left: '95%'
    },
    container1: {
      justifyContent: 'center'
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center'
    },
    photoButton: {
      flex: 0,
      padding: 20,
      marginBottom: 10,
      backgroundColor: 'blue',
      justifyContent: 'center'
    },
    photoButtonText: {
      color: 'white',
      textAlign: 'center'
    },
    uploadAvatar: {
      width: '100%',
      height: 190,
      backgroundColor: 'grey'
    },
    date: {
      flex: 0,
      width: 350,
      padding: 20,
      marginBottom: 10,
      marginTop: 10,
      justifyContent: 'center'
    }
});


module.exports = styles;
