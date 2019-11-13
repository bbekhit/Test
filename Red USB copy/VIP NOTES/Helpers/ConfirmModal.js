state = {
  imageKey:null,
  deleteModalShown:false
}

renderImages = () => {
  const { images} = this.props;
  return images.length ? 
   <Card>
     <cardBody>
       <Button onClick={() => this.toggleConfirmModal(image.id)}></Button>
     </cardBody>
   </Card>
  :null;
}

toggleConfirmModal = (imageKey) => {
  this.setState({
    deleteModalShown:!this.state.deleteModalShown,
    imageKey
  })
}

handleDelete = () => {
  const { imageKey} = this.state;
  this.props.deleteImage(imageKey)
  this.setState({
    imageKey:null
  })
  this.toggleConfirmModal("")
}

<ConfirmModal>
  <Button onClick={this.toggleConfirmModal}></Button>
  <Button onClick={this.handleDelete}>Delete</Button>
</ConfirmModal>