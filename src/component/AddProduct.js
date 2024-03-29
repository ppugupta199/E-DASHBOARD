import React from 'react';
const AddProduct = () => {
  const [name, setName] = React.useState('');
  const [price, setPrice] = React.useState('');
  const [category, setCategory] = React.useState('');
  const [company, setCompany] = React.useState('');
  const [error, setError] = React.useState(false);

  const addproduct = async () => {
    console.log(name);
    if (!name || !price || !category || !company) {
      setError(true);
      return false;
    }
    const userId = JSON.parse(localStorage.getItem('user'))._id;
    let result = fetch('http://localhost:5000/add-product', {
      method: 'post',
      body: JSON.stringify({ name, price, category, company, userId }),
      headers: {
        'Content-Type': 'application/json',

        authorization: `bearer ${JSON.parse(localStorage.getItem('token'))}`,
      },
    });
    result = (await result).json();
    console.log(result);
  };
  return (
    <div className='product'>
      <h1>Add Product</h1>
      <input
        type='name'
        placeholder='Enter product name'
        className='inputBox'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      {error && !name && (
        <span className='invalid-input'>Enter valid name</span>
      )}
      <input
        type='price'
        placeholder='Enter product price'
        className='inputBox'
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      {error && !price && (
        <span className='invalid-input'>Enter valid price</span>
      )}
      <input
        type='category'
        placeholder='Enter product category'
        className='inputBox'
        value={category}
        onChange={(e) => {
          setCategory(e.target.value);
        }}
      />
      {error && !category && (
        <span className='invalid-input'>Enter valid category</span>
      )}
      <input
        type='company'
        placeholder='Enter product company'
        className='inputBox'
        value={company}
        onChange={(e) => {
          setCompany(e.target.value);
        }}
      />
      {error && !company && (
        <span className='invalid-input'>Enter valid company</span>
      )}
      <button onClick={addproduct} className='appbutton'>
        AddProduct
      </button>
    </div>
  );
};
export default AddProduct;
