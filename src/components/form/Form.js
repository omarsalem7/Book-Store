import React from 'react';

const Form = () => (
  <div>
    <h3>ADD NEW BOOk</h3>
    <form>
      <input type="text" placeholder="Book Title" />
      <select name="catagories" defaultValue="catagories" id="catagories">
        <option defaultValue="vision">vision</option>
        <option defaultValue="inteligance">inteligance</option>
        <option defaultValue="history">history</option>
        <option defaultValue="engineering">engineering</option>
      </select>
      <button type="button">ADD BOOK</button>
    </form>
  </div>
);

export default Form;
