import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import categorysList from '../data/categorys';
import Button from './Button';

class Categorys extends Component {
  constructor() {
    super();
    this.state = {
      selectedId: '1',
      selectedParentId: 1,
      categorys: categorysList,
      showNewCategory: false,
      newCategory: 'New category name',
    };

    this.handleChange = this.handleChange.bind(this);
    this.goBackCategory = this.goBackCategory.bind(this);
    this.nextCategory = this.nextCategory.bind(this);
    this.catNameById = this.catNameById.bind(this);
    this.catParentIdById = this.catParentIdById.bind(this);
    this.createNewCategory = this.createNewCategory.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  catParentIdById(id) {
    const { categorys } = this.state;
    const { parentId } = categorys.find((category) => category.id === id);
    return parentId;
  }

  catNameById(id) {
    const { categorys } = this.state;
    const { name } = categorys.find((category) => category.id === id);
    return name;
  }

  goBackCategory(e) {
    e.preventDefault();
    const { handleCategory } = this.props;
    const { selectedParentId } = this.state;
    this.setState((prevState) => ({
      selectedParentId: this.catParentIdById(prevState.selectedParentId),
      selectedId: prevState.selectedParentId,
    }));
    handleCategory(this.catParentIdById(selectedParentId));
  }

  nextCategory(e) {
    e.preventDefault();
    const { handleCategory } = this.props;
    const { selectedId } = this.state;
    if (selectedId === '+') {
      this.setState({ showNewCategory: true });
    } else {
      this.setState({
        selectedParentId: Number(selectedId),
        selectedId: '0',
      });
      handleCategory(Number(selectedId));
    }
  }

  createNewCategory() {
    const { newCategory, categorys, selectedParentId } = this.state;
    const newId = categorys.slice(-1)[0].id + 1;
    const newCategoryData = {
      id: newId,
      name: newCategory,
      parentId: selectedParentId,
    };
    this.setState({
      categorys: [...categorys, newCategoryData],
      showNewCategory: false,
      selectedId: '0',
      selectedParentId: newId,
    });
  }

  render() {
    const {
      selectedId, selectedParentId, categorys, showNewCategory, newCategory,
    } = this.state;
    return (
      <div>
        <form>
          {selectedParentId > 1 && <Button onClick={this.goBackCategory} title="<" />}
          <select className="Drop-btn" value={selectedId} onChange={this.handleChange} name="selectedId">
            <option value="0"> select a category </option>
            { categorys.map((category) => (
              selectedParentId === category.parentId
              && <option value={category.id} key={category.id}>{ category.name }</option>
            ))}
            <option value="+"> + </option>
          </select>
          { (selectedId > 1 || selectedId === '+') && <Button onClick={this.nextCategory} title=">" /> }
        </form>
        { showNewCategory
          && (
          <section>
            <input type="text" name="newCategory" value={newCategory} onChange={this.handleChange} />
            <Button onClick={this.createNewCategory} title="+" />
          </section>
          )}
        { this.catParentIdById(selectedParentId) > 1
          && (
          <div>
            { this.catNameById(this.catParentIdById(selectedParentId)) }
            {' > '}
            { this.catNameById(selectedParentId) }
          </div>
          )}
        { this.catParentIdById(selectedParentId) === 1
        && <div>{ this.catNameById(selectedParentId) }</div> }
      </div>
    );
  }
}

Categorys.propTypes = {
  handleCategory: PropTypes.func.isRequired,
};

export default Categorys;
