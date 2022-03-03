import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import { useDispatch } from 'react-redux';
import TextField from '@mui/material/TextField';
import { addBook } from '../../redux/books/books';
import './form.css';

const Form = () => {
  const [data, setData] = useState({
    item_id: '',
    title: '',
    category: 'other',
  });
  const uniqueId = uuid();
  const changeHandler = (e) => {
    setData({ ...data, item_id: uniqueId, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();

  const addHandler = (e) => {
    e.preventDefault();
    if (data.title) {
      fetch(
        'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4D7y39UkNgaQrWvdHrKq/books',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );
      dispatch(addBook(data));
    }
    setData({ ...data, title: '' });
  };

  const selectHandleChange = (e) => {
    setData({ ...data, category: e.target.value });
  };
  return (
    <div>
      <h3>ADD NEW BOOk</h3>
      <form>
        <TextField
          value={data.title}
          onChange={changeHandler}
          label="Book Title"
          name="title"
          size="small"
          fullWidth
        />
        <select
          defaultValue={data.category}
          onChange={selectHandleChange}
          required
        >
          <option value="other" className="hello" disabled hidden>
            Select your category
          </option>
          <option value="Engineering">Engineering</option>
          <option value="Fiction">Fiction</option>
          <option value="Literal">Literature</option>
          <option value="History">History</option>
          <option value="Programming">Programming</option>
          <option value="Drama">Drama</option>
        </select>
        <button className="add-btn" type="submit" onClick={addHandler}>
          ADD BOOK
        </button>
      </form>
    </div>
  );
};

export default Form;
