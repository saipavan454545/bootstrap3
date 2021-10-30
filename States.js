import React, { Component } from 'react'

export default class states extends Component {
    constructor(props){
        super(props)

        this.state ={
            name:"pavan"
        }
    }
        render (){
            setTimeout(() => {
            this.setState({name:"pavan kumar"})},2000)

        }
            <div>
            {this.state.name}
            </div>
        )
    }
}

