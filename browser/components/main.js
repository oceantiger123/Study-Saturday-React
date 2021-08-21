import React from 'react'
import axios from 'axios'

export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      students: []
    }
  }
  async componentDidMount() {  
    try{
      const result = await axios.get('/student');
      console.log(result)
      this.setState({students: result.data});
    }catch(err){
      console.log(err)
    }
}
  render () {
      
    return (
        <table>
          <tbody>
            <tr>
              <th>Name</th>
            </tr>
            {this.state.students.map(student => {
              return (
                <tr key={student.id}>
                  <td>{student.fullName}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      
    )
    }
}