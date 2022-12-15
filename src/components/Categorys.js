import React, { Component } from "react";

class Categorys extends Component {
    constructor() {
        super();
        this.state = {
            categorysList: ["Casa", "Programação", "Obra", "Lazer"],
            selected: "",
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            selected: event.target.value
        });
    }

    render() {
        const { categorysList, selected } = this.state;
        return(
            <div>
                <select className="Drop-btn" value={ selected } defaultValue="Select a category" onChange={ this.handleChange } >
                    { categorysList.map((category) => (
                            <option value={ category } key={ category }>{ category }</option>
                        ) 
                    )}
                    <option value="0"> + </option>
                </select>
            </div>
        )
    }
}

export default Categorys;