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
        this.nextCategory = this.nextCategory.bind(this);
        this.catNameById = this.catNameById.bind(this);
        this.catParentIdById = this.catParentIdById.bind(this);
    }

    // componentDidUpdate() {
    //     this.props.handleCategory(this.state.selectedParentId)
    // }

    catNameById(id) {
            const name = categorysList.find((category) => category.id === id).name;
            return name
    }
    
    catParentIdById(id) {
        const parentId = categorysList.find((category) => category.id === id).parentId;
        return parentId
    }

    handleChange(e) {
        this.setState({
            selectedId: e.target.value,
        });
    }

    goBackCategory(e) {
        e.preventDefault();
        this.setState((prevState) => ({
                selectedParentId: this.catParentIdById(prevState.selectedParentId),
                selectedId: prevState.selectedParentId,
            })
        );
        this.props.handleCategory(this.catParentIdById(this.state.selectedParentId));
    } 
    
    nextCategory(e) {
        e.preventDefault();
        this.setState({
            selectedParentId: Number(this.state.selectedId),
            selectedId: "0",
        });
        this.props.handleCategory(Number(this.state.selectedId));
    }

    render() {
        const { selectedId, selectedParentId } = this.state;
        // this.props.handleCategory(this.state.selectedParentId)
        return(
            <div>
                <form>
                    {selectedParentId > 1 && <Button onClick={ this.goBackCategory } title="<" />}
                    <select className="Drop-btn" value={ selectedId } onChange={ this.handleChange } >
                        <option value="0"> select a category </option>
                        { categorysList.map((category) => (
                                selectedParentId === category.parentId &&
                                <option value={ category.id } key={ category.id }>{ category.name }</option>
                            ) 
                        )}
                        <option value="+"> + </option>
                    </select>
                    {selectedId > 1 && <Button onClick={ this.nextCategory } title=">" />}
                </form>
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