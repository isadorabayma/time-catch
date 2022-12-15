import React, { Component } from "react";
import categorysList from "../data/categorys"

class Categorys extends Component {
    constructor() {
        super();
        this.state = {
            categorysList: categorysList,
            selectedId: "1",
            selectedParentId: 1,
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({
            selectedId: event.target.value
        });
    }

    render() {
        const { categorysList, selectedId, selectedParentId } = this.state;
        return(
            <div>
                <select className="Drop-btn" value={ selectedId } defaultValue="Select a category" onChange={ this.handleChange } >
                    { categorysList.map((category) => (
                            selectedParentId === category.parentId &&
                            <option value={ category.id } key={ category.id }>{ category.name }</option>
                        ) 
                    )}
                    <option value="0"> + </option>
                </select>
            </div>
        )
    }
}

export default Categorys;