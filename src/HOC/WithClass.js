// import React from "React";
// const WithClass = (WrappedComponent, className) => {
//     return (
//         <div className={className} >
//             <WrappedComponent {...props}/>
//         </div>
//     )
// }
// export default WithClass
// this is the a different approach to the HOCs .
// different approach for the HOCs .. 
import React , {Component}from "react";
const WithClass = (WrappedComponent, className) => {
    return class extends Component{
            render(props) {
                return (
                    <div className={className}>
                        <WrappedComponent {...this.props}/>
                    </div>
                )
            }
        }
}
export default WithClass; 
