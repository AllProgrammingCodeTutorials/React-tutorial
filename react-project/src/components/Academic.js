import React from 'react'

// const Academic = () => {
//     return (
//         <div>
//             <h1>Academic</h1>
//         </div>
//     )
// }

// export default Academic
const brand = "BMW";

class Academic extends React.Component {

    render() {
      return <h2>I am a {this.props.brand} Car!</h2>;
    }
  }
  export default Academic