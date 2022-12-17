import React, { Component } from "react";
import categorysList from "../data/categorys"
import Button from "./Button";

class Categorys extends Component {
    constructor() {
        super();
        this.state = {
            selectedId: "1",
            selectedParentId: 1,
        }

        this.handleChange = this.handleChange.bind(this);
        this.goBackCategory = this.goBackCategory.bind(this);
        this.submitCategory = this.submitCategory.bind(this);
        this.catNameById = this.catNameById.bind(this);
        this.catParentIdById = this.catParentIdById.bind(this);
    }

    catNameById(id) {
            const name = categorysList.find((category) => category.id === id).name;
            return name
    }
    
    catParentIdById(id) {
        const parentId = categorysList.find((category) => category.id === id).parentId;
        return parentId
    }

    handleChange(event) {
        this.setState({
            selectedId: event.target.value
        });
    }

    goBackCategory(e) {
        e.preventDefault();
        this.setState((prevState) => ({
                selectedParentId: this.catParentIdById(prevState.selectedParentId),
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
        const { selectedId, selectedParentId } = this.state;
        return(
            <div>
                <form>
                    <select className="Drop-btn" value={ selectedId } defaultValue="Select a category" onChange={ this.handleChange } >
                        <option value="0"> select a category </option>
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
                { this.catParentIdById(selectedParentId) > 1 &&
                <div>
                    { this.catNameById(this.catParentIdById(selectedParentId)) }
                    {" > "}{ this.catNameById(selectedParentId) }
                </div> 
                }
                {this.catParentIdById(selectedParentId) === 1 && <div>{ this.catNameById(selectedParentId) }</div>}
            </div>
        )
    }
}

export default Categorys;