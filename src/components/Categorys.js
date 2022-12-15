import React, { Component } from "react";

class Categorys extends Component {
    render() {
        const { categorysList, selected } = this.props;
        return(
            <div>
                {/* <span className="Drop-btn">{ selected }</span>
                    <div className="Drop-content">
                        { categorysList.map((category) => (
                            <div key={ category } className="Drop-option">{ category }</div>
                        ) 
                        )}
                    </div> */}
                <select className="Drop-btn" value={ selected }>
                    { categorysList.map((category) => (
                            <option value={ category }>{ category }</option>
                        ) 
                    )}
                    <option value="0"> + </option>
                </select>
            </div>
        )
    }
}

export default Categorys;