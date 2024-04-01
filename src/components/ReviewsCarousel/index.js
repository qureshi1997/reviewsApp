import {Component} from 'react'
import './index.css'

class ReviewsCarousel extends Component {
  state = {index: 0}

  prev = () => {
    const {index} = this.state
    if (!(index < 1)) {
      this.setState(pre => ({
        index: pre.index - 1,
      }))
    }
  }

  next = () => {
    const {index} = this.state
    const {reviewsList} = this.props
    if (!(index > reviewsList.length - 2)) {
      this.setState(pre => ({index: pre.index + 1}))
    }
  }

  render() {
    const {index} = this.state
    const {reviewsList} = this.props
    console.log(index)
    const userImage = reviewsList[index].imgUrl
    const userName = reviewsList[index].username
    const companyName = reviewsList[index].companyName
    const review = reviewsList[index].description
    return (
      <div className="bg-container">
        <h1>Reviews</h1>
        <div className="review-provided-by">
          <button data-testid="leftArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrow"
              onClick={this.prev}
            />
          </button>
          <div className="person-container">
            <img src={userImage} alt={userName} />
            <p>{userName}</p>
            <p>{companyName}</p>
            <p>{review}</p>
          </div>
          <button data-testid="rightArrow">
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrow"
              onClick={this.next}
            />
          </button>
        </div>
      </div>
    )
  }
}
export default ReviewsCarousel
