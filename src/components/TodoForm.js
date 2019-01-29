import React, {Component} from 'react';

    export default class TodoForm extends  Component {

    constructor () {
        super();

        // ** State son los datos del imput y todo es  la variable que irá cambaindo
        this.state = {
            todo: ''
        };
    }


        // ** UpdateTodo es el evento que irá cambiando los datos del input
        updateTodo (evt) {
        this.setState({
           todo : evt.target.value
         });
        }




}