import React, { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';

const GoPages = () => {

let navigate = useNavigate();

const handleClick01 =()=>{
    navigate('/page-01');
}

const handleClick02 =()=>{
    navigate('/page-02');
}

const handleClick03 =()=>{
    navigate('/page-03');
}

  return (
    <Fragment>
        <h2>Go to Page No. 1</h2>
        <button onClick={handleClick01}>Go...</button>
        <br/>

        <h2>Go to Page No. 2</h2>
        <button onClick={handleClick02}>Go...</button>
        <br/>

        <h2>Go to Page No. 3</h2>
        <button onClick={handleClick03}>Go...</button>
        <br/>
    </Fragment>
  )
}

export default GoPages;