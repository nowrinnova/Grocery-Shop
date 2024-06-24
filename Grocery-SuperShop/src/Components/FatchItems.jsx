import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { itemsActions } from '../store/itemsSlice';

function FatchItems() {
  const fatching = useSelector((state) => {return state.fatchStatus});
  console.log(fatching)
  const dispatch= useDispatch()
  useEffect(() => {
    if(fatching.fatchDone) return;

    fetch("http://localhost:8080/items", )
      .then((res) => res.json())
      .then(({items}) => {
        dispatch(itemsActions.addInitialStore(items[0]))       
      })
      
  }, []);
  return (
    <div>
      fatching done:{fatching.fatchDone}
      currently fatching:{fatching.currentlyFatching}
    </div>
  )
}

export default FatchItems
