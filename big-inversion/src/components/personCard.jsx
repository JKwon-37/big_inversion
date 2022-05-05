import React from 'react'

// class PersonCard extends Component {
//     constructor(props) {
//         super(props);
//         // console.log(this.props.person);
//         this.state = {
//             ...this.props.x,
//             age: this.props.x.age
            
//         }
//         // console.log(JSON.stringify(this.props.age));
//     }

const PersonCard = props => {
    return (
        <div>
            <p>
                {console.log(JSON.stringify(props))}
            </p>
            <h1> {props.x.lastName}, {props.x.firstName} </h1>
            <p>Age: {props.x.age}</p>
            <p>Hair Color: {props.x.hair}</p>
        </div>
    );
}



    // happyBday() {
    //     // console.log('clicked');
    //     this.setState({
    //         age: this.state.age + 1
    //     }, () => console.log(this.state.age))
    // }
//     render() {
//         return (
//             <div>
//                 {/* <p>
//                     {console.log(this.props.people.lastName)}
//                 </p> */}
//                 <h1>{this.state.lastName}, {this.state.firstName}</h1>
//                 <p>Age: {this.state.age}
//                 </p>
//                 <p>Hair Color: {this.state.hair}</p>
//                 <button onClick={() => this.happyBday()}>Happy Birthday!</button>
//             </div>
//         );
//     }
// }

export default PersonCard