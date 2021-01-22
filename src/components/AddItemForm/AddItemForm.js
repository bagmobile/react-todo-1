import React from 'react';
import './AddItemForm.css'

export default class AddItemForm extends React.Component {

    state = {text: ``}

    onInputChange = (event) => {
        this.setState({text: event.target.value});
    }

    onSubmitForm = (event) => {
        event.preventDefault();
        this.props.onAddItem(this.state.text);
        this.setState({text: ``});
        //this.inputTextRef.value = '';
    }

    render() {
        return (
            <form className="add-item-form d-flex"
                  onSubmit={this.onSubmitForm}
            >
                <input type="text"
                       className="form-control"
                       placeholder="What needs to be done"
                       onChange={this.onInputChange}
                       value={this.state.text}
                    //ref={input => {this.inputTextRef = input}}
                />
                <button
                    className="btn btn-outline-secondary"
                    disabled={!this.state.text}
                >Add
                </button>
            </form>
        );
    }

}
