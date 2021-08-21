import 'core-js/stable'
import 'regenerator-runtime/runtime'
import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import Main from './components/main'
console.log('Hello Webpack!');

// export default class Main extends React.Component {
//     constructor(){
//       super();
//       this.state={
//         students: []
//       }
//     }
//     async componentDidMount() {  
//       try{
//         const result = await axios.get('/student');
//         console.log(result)
//         this.setState({students: result.data});
//       }catch(err){
//         console.log(err)
//       }
//   }
//     render () {
        
//       return (
//         <div>
//           <h1>Hello React!</h1>
//           {this.state.students.map(student => <Students key={student.id} info={student.fullName} />)}
//         </div>
        
//       )
//       }
//   }
  
  ReactDOM.render(<Main />, document.getElementById('app'));


