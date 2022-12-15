import React, { Component } from "react";

class Categorys extends Component {
    constructor() {
        super();
        this.state = {
            categorysList: ["Casa", "Programação", "Obra", "Lazer"],
            selected: "Select a category",
        }

        this.handleOnchange = this.handleOnchange.bind(this);
    }

    handleOnchange(event) {
        this.setState({
            selected: event.target.value
        });
    }

    render() {
        const { categorysList, selected, handleOnchange } = this.state;
        return(
            <div>
                <select className="Drop-btn" value={ selected } onChange={ handleOnchange() } >
                {/* <select className="Drop-btn" value={ selected }> */}
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