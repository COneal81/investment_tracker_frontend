import React from 'react'

class ItemsContainer extends React.Component {
    // because it is a class, you use the curley brackets and must have a render()
    render() {
        return (
            <div>
                Items Container
            </div>
        )
    }
}

export default ItemsContainer

// Container Components
// render other components and pass them data if they require data
// have other functions inside them, callback functions, componentDidMount
// typically class components b/c they may need a state or a componentDidMount