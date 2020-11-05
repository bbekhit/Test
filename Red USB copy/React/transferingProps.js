
onClick = () => {
    // ...
}

// onDeleteClick(postId, commentId) {
//     this.props.deleteComment(postId, commentId);
//   }

<div>
<input 
   onClick={this.onClick}
/>
 <i
 onClick={this.onDeleteClick.bind(this, postId, comment._id)}
 />

{/* ************************************************************************************* */}
 
 {/* button dispaly */}
 <div className="add_to_cart_link"
      onClick={()=>{
      props.runAction();
             }}
     >
 {/* button component */}
      <MyButton
            type="add_to_cart_link"
            runAction={()=>{
                props.addToCart(detail._id)
            }}
        />
 {/* where we trigger the button  */}
      <ProdNfo
        addToCart={(id)=> this.addToCartHandler(id)}
        detail={this.props.products.prodDetail}
    />

{/* ********************************************************************************************** */}

{/* just for showing */}

<div className="main_thumbs">
                    { this.showThumbs(detail)}
                </div>

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

{/* ********************************************************************************************** */}






 </div>