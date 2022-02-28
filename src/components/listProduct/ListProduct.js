import React, { Component } from 'react';
import ProductDetail from './ProductDetail';
export default class ListProduct extends Component {
  render() {
    const {data} = this.props;

    // const renderProduct = (e,i) => {
    //   return <ProductDetail item={e} key={i} />
    // }

    // function renderProduct(e,i){
    //     return 
    // }
    // const data = this.props.data;
    // console.log("data ", data);
    return (
      <div>
        <h1> ListProduct</h1> 
        <div style={{display: 'flex', flexDirection: 'row'}}>
        {
            data.map((e,i)=>(<ProductDetail item={e} key={i} />)) // hàm map() giống nhứ for
        }
        </div>
    </div>

    );
  }
}
