import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {AllReviews} from './AllReviews'

export class SingleProductPage extends Component {
  constructor() {
    super();
  }

  render() {
    const { addToCart, currentProduct } = props
    return (
      <div>
          <Link to='/products'>Back</Link> 
          <h3>{currentProduct.name}</h3>
          <img src={currentProduct.imageURL} />
          <h6>${currentProduct.price}</h6>
          <p>{currentProduct.description}</p>
          <button onClick={addToCart}>Add Item To Cart</button>
          <AllReviews />
      </div>
    )
  }
}

// const mapState = (state) => {
//   return {
//     currentProduct: state.currentProduct
//   }
// }

// const mapDispatch = (dispatch) => {
//   return {
//     addToCart (id) {
//         dispatch(addToCart(id))
//     }
//   }
// }

// export const AllReviewsContainer = connect(mapState, mapDispatch)(AllReviews);
