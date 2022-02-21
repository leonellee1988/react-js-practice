import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

const GoProducts = () => {

    let navigate = useNavigate();

    const handleClick01 =()=>{
        navigate('/product-01');
    }

    const handleClick02 =()=>{
        navigate('/product-02');
    }

    const handleClick03 =()=>{
        navigate('/product-03');
    }

  return (  
    <Fragment>

        <h2>Go to the Product No. 1 section</h2>
        <button onClick={handleClick01}>Go...</button>
        <br/>

        <h2>Go to the Product No. 2 section</h2>
        <button onClick={handleClick02}>Go...</button>
        <br/>

        <h2>Go to the Product No. 3 section</h2>
        <button onClick={handleClick03}>Go...</button>
        <br/>

    </Fragment>
  )
}

export default GoProducts;