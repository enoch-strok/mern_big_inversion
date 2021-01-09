import React, { Component } from 'react';

const PersonCard = props => {
    return(
        <div>
            <h1>{ props.lastName }, { props.firstName }</h1>
            <p>Age: { props.age }</p>
            <p>Hair Color: { props.hairColor }</p>
        </div>
    );
}
export default PersonCard;


// class PeopleInfo extends Component {
//     constructor(props) {
//         super(props);

//         this.state = {                    
//             age: this.props.age
//         };
//     }
//     changeAge = () => {
//         let newAge = this.state.age +1;   
//         this.setState({age: newAge});      
        
//     }

//     render(){
//         const { firstName, lastName, hairColor } = this.props;
//         return(
//             <fieldset>
//                 <section>
//                 <h1>My name is {lastName}, { firstName}  </h1>
//                 <p>Age:  {this.state.age}</p>      

//                 <p>Hair Color: { hairColor }</p>
//                 </section>
//                 <button onClick={this.changeAge}>Birthday Button for {firstName} {lastName} </button>
//             </fieldset>
//         );
//     }
// }
// export default PeopleInfo;

