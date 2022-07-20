import React, { Component } from 'react'

class Cerbot extends React.Component {


    render() {

        let a = window.location.href
        let len = a.split("/").length
        let long_string = a.split("/")[len - 1]
        return <div>{long_string}</div>;
    }
}

export default Cerbot;