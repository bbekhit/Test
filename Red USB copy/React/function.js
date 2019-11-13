import React, { Component } from 'react';
import ImageLightBox from '../utils/lightbox';


class ProdImg extends Component {

    state = {
        lightbox: false,
        imagePos:0,
        lightboxImages:[]
    }



    componentDidMount(){
        if(this.props.detail.images.length > 0){
            let lightboxImages = [];

            this.props.detail.images.forEach(item=>{
                lightboxImages.push(item.url)
            })

            this.setState({
                lightboxImages
            })
        }
    }


    handleLightBox = (pos) => {
        if(this.state.lightboxImages.length > 0){
            this.setState({
                lightbox: true,
                imagePos: pos
            })
        }
    }

    handleLightBoxClose = () => {
        this.setState({
            lightbox: false
        })
    }


    showThumbs = () => (
        this.state.lightboxImages.map((item,i)=>(
            i > 0 ?
                <div
                    key={i}
                    onClick={()=> this.handleLightBox(i)}
                    className="thumb"
                    style={{background: `url(${item}) no-repeat`}}
                ></div>
            :null
        ))
    )


    renderCardImage = (images) => {
        if(images.length > 0){
            return images[0].url
        }else{
            return `/images/image_not_availble.png`
        }
    }

    render() {
        const {detail} = this.props;
        return (
            <div className="product_image_container">
                <div className="main_pic">
                    <div
                        style={{background:`url(${this.renderCardImage(detail.images)}) no-repeat`}}
                        // *************************************************************************** 
                        onClick={()=> this.handleLightBox(0)}
                    >
                    </div>
                </div>
                <div className="main_thumbs">
                {/* *************************************************************************************** */}
                    { this.showThumbs(detail)}
                </div>
                {
                    this.state.lightbox ?
                        <ImageLightBox
                            id={detail.id}
                            images={this.state.lightboxImages}
                            open={this.state.open}
                            pos={this.state.imagePos}
                            onclose={()=> this.handleLightBoxClose()}
                        />
                    :null
                }
            </div>
        );
    }
}



export default ProdImg;


// ******************************************************************************************
// Another Example
// *******************************************************************************************

import React from 'react';
import { Link } from 'react-router-dom';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faShoppingBag from '@fortawesome/fontawesome-free-solid/faShoppingBag';


const MyButton = (props) => {

    const buttons = () => {
        let template = '';

        switch(props.type){
            case "default":
                template = <Link
                    className={!props.altClass ? 'link_default': props.altClass }   
                    to={props.linkTo}
                    {...props.addStyles}
                >
                    {props.title}
                </Link>
            break;
            case "bag_link":
                template = 
                    <div className="bag_link"
                        onClick={()=>{
                            props.runAction();
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faShoppingBag}
                        />
                    </div>
            break;
            case "add_to_cart_link":
                template =   
                    <div className="add_to_cart_link"
                        onClick={()=>{
                            props.runAction();
                        }}
                    >
                        <FontAwesomeIcon
                            icon={faShoppingBag}
                        />
                        Add to cart
                    </div>
            break;
            default:
                template='';
        }
        return template
    }


    return (
        <div className="my_link">
             {buttons()}   
        </div>
    );
};

export default MyButton;




// ******************************************************************************************
// Another Example
// *******************************************************************************************


const UserProductBlock = ({products,removeItem}) => {

    const renderCartImage = (images) => {
        if(images.length > 0){
            return images[0].url
        } else {
            return '/images/image_not_availble.png'
        }
    }


    const renderItems = () => (
        products.cartDetail ?
            products.cartDetail.map(product=>(
                <div className="user_product_block" key={product._id}>
                    <div className="item">
                        <div
                            className="image"
                            style={{background:`url(${renderCartImage(product.images)}) no-repeat`}}
                        ></div>
                    </div>
                    <div className="item">
                        <h4>Product name</h4>
                        <div>
                            {product.brand.name} {product.name}
                        </div>
                    </div>
                    <div className="item">
                        <h4>Quantity</h4>
                        <div>
                            {product.quantity}
                        </div>
                    </div>
                    <div className="item">
                        <h4>Price</h4>
                        <div>
                           $ {product.price}
                        </div>
                    </div>
                    <div className="item btn">
                       <div className="cart_remove_btn" 

//    &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& //  i destructed from props &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&
                            onClick={()=> removeItem(product._id)}>
                            Remove
                       </div>
                    </div>
                </div>
            ))

        :null
    )


    return (
        <div>
            {renderItems()}
        </div>
    );
};