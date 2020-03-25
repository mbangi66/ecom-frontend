import React, { Component } from 'react';

//import axios to call your backend.
import axios from 'axios';

import ProductCard from '../../presentational/ProductCards/productCard';
import Loader from '../../presentational/Loader/loader';

import './home.css';


export default class Home extends Component {
    constructor(){
        super();
        this.state = {
            product : [],
            loading : true
        }
    }
    componentDidMount(){
        axios.get('/api/products').then(res => {
            //always have console.logs for debugging
            console.log('res.data products-----------', res.data);
            /////Set your loading to false, and products to the res.data, since we are doing res.send in our backend.
            this.setState({products: res.data, loading: false});
            //Each .then must have a .catch to catch errors.
        }).catch(err => console.log('Read all products Error-------', err));
    }
    render(){
        const { products, loading } = this.state;
        //If it is done loading return html else return the loading indicator.
        if(!loading) {
            return (
                <div className='home container'>
                    <div className='home-products container'>
                        {/* If hte products have data return products else return nothing using terinary statement */}
                        {products.length ? products.map(product => <ProductCard key={product.id} {...product} />) : null}
                    </div>
                </div>
            );
        } else {
            return <Loader />
        }
    }
}