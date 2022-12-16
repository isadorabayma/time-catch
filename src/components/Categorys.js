import React, { Component } from "react";
import categorysList from "../data/categorys"
import Button from "./Button";

class Categorys extends Component {
    constructor() {
        super();
        this.state = {
            categorysList: categorysList,
            selectedId: "1",
            selectedParentId: 1,
        }

        this.handleChange = this.handleChange.bind(this);
        this.goBackCategory = this.goBackCategory.bind(this);
        this.submitCategory = this.submitCategory.bind(this);
    }

    handleChange(event) {
        this.setState({
            selectedId: event.target.value
        });
    }

    goBackCategory(e) {
        e.preventDefault();
        this.setState((prevState) => ({
                selectedParentId: prevState.selectedParentId > 1 && prevState.selectedParentId - 1,
            })
        );
    } 
    
    submitCategory(e) {
        e.preventDefault();
        this.setState({
            selectedParentId: Number(this.state.selectedId)
        });
    }

    render() {
        const { categorysList, selectedId, selectedParentId } = this.state;
        return(
            <div>
                <form>
                    <select className="Drop-btn" value={ selectedId } defaultValue="Select a category" onChange={ this.handleChange } >
                        { categorysList.map((category) => (
                                selectedParentId === category.parentId &&
                                <option value={ category.id } key={ category.id }>{ category.name }</option>
                            ) 
                        )}
                        <option value="0"> + </option>
                    </select>
                </form>
                <Button onClick={ this.goBackCategory } title="<" />
                <Button onClick={ this.submitCategory } title=">" />
            </div>
        )
    }
}

export default Categorys;