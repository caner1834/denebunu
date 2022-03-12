import React, { useState } from 'react';
import _ from 'lodash';
import HomePage from './Home.styled';
import { Checkbox, Button } from 'antd';
import { MdFavoriteBorder } from "react-icons/md";
import { FiSave } from "react-icons/fi";
import { BsBox } from "react-icons/bs";
import { GrCodeSandbox } from "react-icons/gr";
const CheckboxGroup = Checkbox.Group;

const Home = () => {
  const [productList, setProductList] = useState([{ label: 'Product 1', value: 1 },
  { label: 'Product 2', value: 2 },
  { label: 'Product 3', value: 3 },
  { label: 'Product 4', value: 4 },
  { label: 'Product 5', value: 5 },
  { label: 'Product 6', value: 6 },
  { label: 'Product 7', value: 7 },
  { label: 'Product 8', value: 8 },
  { label: 'Product 9', value: 9 },
  { label: 'Product 10', value: 10 }]);
  const [checkedList, setCheckedList] = useState([]);
  const [checkedCategoryProductsList, setCheckedProductsList] = useState([]);
  const [categoryList, setCategoryList] = useState([{ id: 1, name: `Category 1`, products: [] }]);

  const onChange = (list) => {
    setCheckedList(list);
  };

  const onChangeCategoryProducts = (list) => {
    setCheckedProductsList(list);
  };

  const addProduct = (categoryId) => {
    let tempProductList = [...productList]
    let tempCategoryList = [...categoryList]

    let selectedProducts = []
    checkedList.forEach((value) => {
      selectedProducts.push(_.find(tempProductList, ['value', value]));
      _.remove(tempProductList, product => product.value === value);
    })

    tempCategoryList.forEach((category) => {
      if (category.id === categoryId) {
        let newCategoryProducts = _.concat(category.products, selectedProducts);
        category.products = newCategoryProducts;
      }
    })

    setCategoryList(tempCategoryList)
    setProductList(tempProductList);
    setCheckedList([])
    setCheckedProductsList([])
  };

  const removeProduct = (categoryId) => {
    let tempCategoryList = [...categoryList];
    let tempProductList = [...productList];
    let selectedCategoryProducts = []

    tempCategoryList.forEach((category) => {
      if (categoryId === category.id) {
        if (category.products.length > 0) {
          checkedCategoryProductsList.forEach((value) => {
            selectedCategoryProducts.push(_.find(category.products, ['value', value]));
            _.remove(category.products, product => product.value === value);
          })
        }
      }
    })

    setProductList(tempProductList.concat(selectedCategoryProducts));
    setCheckedProductsList([]);
    setCheckedList([])
  }

  const removeCategory = (categoryId) => {
    let tempCategoryList = [...categoryList];
    let categoryProduts = [];
    tempCategoryList.forEach((category) => {
      if (categoryId === category.id) {
        _.forEach(category.products, (products) => {
          categoryProduts.push(products)
        })
      }
    })
    _.remove(tempCategoryList, category => category.id === categoryId);

    setCategoryList(tempCategoryList);
    setProductList(productList.concat(categoryProduts));
    setCheckedList([]);
    setCheckedProductsList([]);
  }

  const addNewCategory = () => {
    const tempCategoryList = [...categoryList];

    const newId = 1 + tempCategoryList.length;
    let newCategory = {
      id: newId, name: `Category ${newId}`, products: []
    }
    tempCategoryList.push(newCategory);
    setCategoryList(tempCategoryList)
  }

  return (
    <HomePage>
      <div className='left-side'>
        <div className='left-side__products'>
          <div className='title'>
            <BsBox size={18} />
            <span>Available Products</span>
          </div>
          <CheckboxGroup className='left-side__products__list' value={checkedList} onChange={onChange} options={productList} />
        </div>
        <div className='left-side__review'>
          <div className='title'>
            <FiSave size={18} />
            <span>Review</span>
          </div>
          <div>
            <div>Available Products: {productList.length}</div>
            <div>Categories: {categoryList.length}</div>
          </div>
          <div>
            {categoryList.map((category, i) => {
              return (
                <div key={i}>{category.name}: {category.products.length} Products </div>
              )
            })}
          </div>
        </div>
      </div>
      <div className='right-side'>
        {categoryList.length > 0 && (
          <div className='right-side__categories'>
            {categoryList.map((category, i) => {
              return (
                <div key={i} className='right-side__categories__item'>
                  <div className='right-side__categories__item__top'>
                    <div className='title'>
                      <GrCodeSandbox size={18} />
                      <span>{category.name}</span>
                    </div>
                    <div className='right-side__categories__item__products'>
                      {category.products.length === 0 ? <div className='right-side__categories__item__products__no-products'>
                        <MdFavoriteBorder size={22} />
                        <span>Select products to add here</span>
                      </div> :
                        <CheckboxGroup className='left-side__products__list' value={checkedCategoryProductsList} onChange={onChangeCategoryProducts} options={category.products} />
                      }
                    </div>
                  </div>
                  <div className='right-side__categories__item__buttons'>
                    <div className='right-side__categories__item__buttons__left'>

                      <Button onClick={() => addProduct(category.id)} disabled={checkedList.length >= 1 ? false : true} type="primary">Add {checkedList.length >= 1 ? checkedList.length : " "} Product</Button>

                      <Button onClick={() => removeProduct(category.id)} disabled={checkedCategoryProductsList.length >= 1 && category.products.some(value => checkedCategoryProductsList.includes(value.value)) ? false : true} type="primary">Remove {checkedCategoryProductsList.length >= 1 && category.products.some(value => checkedCategoryProductsList.includes(value.value)) ? checkedCategoryProductsList.length : " "}  Product</Button>

                    </div>
                    <div className='right-side__categories__item__buttons__right'>
                      <Button onClick={() => removeCategory(category.id)} type="primary" danger>Remove  Category</Button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        )}
        <Button onClick={addNewCategory} type="primary">Add Category</Button>
      </div>
    </HomePage >
  );
};

export default Home;
