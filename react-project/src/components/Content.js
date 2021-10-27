import React from 'react'
import propTypes from 'prop-types'

const Content = (props) => {
    return (
        <div>
            <h1>{props.fname} {props.lname}</h1> <br/>

            <h2>marks: 
            {/* conditional applied if marks value is given then its yes else no */}
                {
                // props.marks?"yes":"no"
                props.marks >100 ?"yes":"no"
                }
            </h2>

            <table>
              <tr>
                <th>Name</th>
                <th>City</th>
              </tr>
              {/* //using map loop */}
              {props.item.map((data)=> 
                <tr>
                  <td>{data.Name}</td>
                  <td>{data.City}</td>
                </tr>
              )}
            
          </table>
        </div>
    )
}

// set default lname 'gurung'
Content.defaultProps = {
    lname: 'gurung'
}

//set default data-type string 
Content.propTypes = {
    lname: propTypes.string
}
export default Content
