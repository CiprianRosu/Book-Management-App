import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';


const Book = ({
  id,
  bookname,
  author,
  price,
  quantity,
  date,
  handleRemoveBook
}) => {
    const navigate = useNavigate();
  return (
    <Card style={{ width: '18rem' }} className="book">
      <Card.Body>
        <Card.Title className="book-title">{bookname}</Card.Title>
        <div className="book-details">
          <div>Author: {author}</div>
          <div>Quantity: {quantity} </div>
          <div>Price: {price} </div>
          <div>Date: {new Date(date).toDateString()}</div>
        </div>
        
        <button className='button button1' onClick={() => navigate(`/edit/${id}`)}>
  Edit
</button>{' '}
        <button className='button button2' onClick={() => handleRemoveBook(id)}>
          Delete
        </button>
        
      </Card.Body>
    </Card>
  );
};

export default Book;