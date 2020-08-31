import React from 'react'

class Liked extends React.Component {

    state = {
        liked: 0
    }

    increaseLike = () => {
        this.setState( {
            liked: this.state.liked + 1
        })
    }

    render() {
        return(
            <div>
                <button onClick={this.increaseLike}>{this.state.liked}  Likes! </button>
            </div>
        )
    }

}

export default Liked