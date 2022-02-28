import React, { useState } from 'react'

export default function ProductDetail(props) {
    const {item} = props;
    const [number, setNumber] = useState(0); // cách khởi tạo 1 biến thay đổi trong code

    const subNumber = ()=> { // hàm trừ
        if(number >0) {
            setNumber(number -1);
        }
    }

    const addNumber = ()=> { // hàm trừ
        setNumber(number +1);
    }

    const handleButton = (type) => { //hàm xử lý logic
        if(type === 'add') {
            addNumber();
        }
        if(type === 'sub') {
            subNumber();
        }
    }

  return (
    <div style={{padding: 5 , margin: "auto",  width: 240, marginTop: 20,  alignItems: 'center', justifyContent: 'center', backgroundColor: 'lightblue'}}>
        <img src={item.image} style={{maxHeight: 320, minHeight: 240, width: 200}} />
        <div style={{display: 'flex', flexDirection: 'row'}}>
            <p style={{fontSize: 20, fontWeight: 'bold'}}>name</p>
            <p style={{fontSize: 20, marginLeft: 10}}>{item.price}</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row',marginTop: 8}}>
            <p style={{fontSize: 20, fontWeight: 'bold'}}>price</p>
            <p style={{fontSize: 20, marginLeft: 10}}>{item.price}</p>
        </div>
        <div style={{display: 'flex', flexDirection: 'row', height: 30, justifyContent: 'center', alignItems: 'center'}}>
            <button onClick={()=>handleButton("sub")}>-</button>
            <p style={{padding: 10}}>{number}</p>
            <button onClick={()=>handleButton("add")}>+</button>
        </div>
    </div>
  )
}
