import React, { Component } from "react";

class Categorys extends Component {
    render() {
        const { categorysList, selected } = this.props;
        return(
            <div className="Dropdown">
                <span className="Drop-btn">{ selected }</span>
                    <div className="Drop-content">
                        { categorysList.map((category) => (
                            <div key={ category } className="Drop-option">{ category }</div>
                        ) 
                        )}
                    </div>
            </div>
        )
    }
}

export default Categorys;