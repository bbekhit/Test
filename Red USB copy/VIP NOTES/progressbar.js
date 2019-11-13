// https://medium.com/@ItsMeDannyZ/how-to-build-a-progress-bar-with-react-8c5e79731d1f
// https://www.youtube.com/channel/UCu3XIztjOU2tJmeqk7xzU8A/videos
// https://codepen.io/DZuz14/pen/oqeMpY?editors=0010
// https://medium.com/@ItsMeDannyZ/build-an-image-slider-with-react-es6-264368de68e4

const Progrssbar = props => {
  return (
    <div className="progress-bar">
      <Filler percentage={props.percentage} />
    </div>
  )
}

const Filler = props => {
  return (
    <div className="filler" style={{ width: `${props.percentage}%` }}>

    </div>
  )
}

class ProgressbarContainer extends Component {
  state = {
    percentage: 0
  }
  render() {
    return (
      <div>
        <Progressbar percentage={this.state.percentage} />
      </div>
    )
  }
}


// .progress-bar{
//   width:320px;
//   height:20px;
//   border-radius:50px;
//   position:relative;
//   borde:1px solid #333
// }

// .filler{
//   border - radius: inheritance;
//   background:red;
//   height: 100 %;
// }

nextStep = () => {
  if (this.state.percentage === 100) return
  this.setState({ percentage: this.state.percentage + 20 })
}