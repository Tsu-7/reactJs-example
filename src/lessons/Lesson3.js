import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // tạo liên kết với redux
import { editState, deleteState } from '../redux/userReducer'; //gọi hàm từ reducer



export default function Lesson3() {
    const dispatch = useDispatch(); // gọi hàm xử lý

    const stateName = useSelector((state) =>state.authName);
    const [name, setName] = useState(stateName.value); // tạo giá trị ban đầu

    const onChangeHandler = event => { // nhập liệu cho input 
        setName(event.target.value);
      };

    console.log('state', stateName);

  return (
    <div style={{justifyContent: 'center', alignItems: 'center',display: 'flex' , flexDirection: 'column',}}>
        <p style={{fontSize: 20}}>giá trị của state là :  <b>{name}</b></p>
        <div style={{display: 'flex', flexDirection: 'column', width: '50%'}}>
            <input style={{marginTop: 10, height: 40}} value={name} onChange={onChangeHandler} />
            <button 
                style={{marginTop: 10, backgroundColor: 'lightblue'}} 
                onClick={()=> dispatch(editState({newName: name}))}
            >thay doi state</button>
            <button 
                style={{marginTop: 10, backgroundColor: 'tomato'}} 
                onClick={()=> dispatch(deleteState())}
            >xoa state</button>
        </div>
    </div>
  )
}
