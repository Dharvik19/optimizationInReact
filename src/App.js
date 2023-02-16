import React, { useState, useCallback } from 'react';
import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  console.log("App.js running");
  const [listTitle, setListTitle] = useState('My List');
  const [buttonName, setButtonName] = useState('Change to descending');
  const [list, setList] = useState([5, 3, 1, 10, 9]);
  const [ascend, setAscend] = useState(true);

  const changeTitleHandler = useCallback(() => {
    setListTitle('New List');
  }, []);

  const changeOrderHandler = useCallback(() =>{
    if(ascend){
        setListTitle('Ascending');
        setButtonName('Change to Descending');
        setList(list.sort((a, b)=>a-b));
        setAscend(false);
    }else{
        setListTitle('Descending');
        setButtonName('Change to Ascending');
        setList(list.sort((a, b)=> b-a));
        setAscend(true);
    }
  },[ascend, list]);
  return (
    <div className="app">
      <DemoList title={listTitle} items={list} />
      <Button onClick={changeTitleHandler}>Change List Title</Button>
      <Button data='sort button' onClick={changeOrderHandler}>{buttonName}</Button>
    </div>
  );
}

export default App;