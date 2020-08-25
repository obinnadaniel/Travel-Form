import React, { Component } from 'react';
import FormContainer from './FormContainer';
//import Conditional from './Conditional';
//import logo from './logo.svg'
//import './App.css'  

function App() {
  return(
    <FormContainer />
  )
}
export default App;

// form
/*class App extends Component {
  constructor() {
    super()
    this.state = {
      firstName: "",
      lastName: "",
      isFriendly: false,
      gender: "",
      favColor: "blue"
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const {name, value, type, checked} = event.target
    type === "checkedbox" ? this.setState({ [name]: checked }) : this.setState({ [name] : value })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
        type="text" 
         value={this.state.firstName}
         name="firstName" 
         placeholder="First Name"
          onChange={this.handleChange}
       />
          <br />
          <input
           type="text"
           value={this.state.lastName} 
           name="lastName" 
           placeholder="Last Name"
           onChange={this.handleChange}
         />
         <br />
         <textarea value={"Some default value"} 
         onChange={this.handleChange}
         />
         <br />
         <label>
           <input 
           type="checkbox"
           name="isFriendly"
           checked ={this.state.isFriendly}
           onChange={this.handleChange}
           /> Is friendly
         </label>
           <br />
         <label>
           <input 
           type="radio"
           name="gender"
           value="male"
           checked ={this.state.gender === "male"}
           onChange={this.handleChange}
           /> Male
         </label>
           <br />
         <label>
           <input 
           type="radio"
           name="gender"
           value="female"
           checked ={this.state.gender === "female"}
           onChange={this.handleChange}
           /> Female
         </label>
         <br />
         <label>Favorite Color:</label>
         <select
         value={this.state.favColor}
         onChange={this.handleChange}
         name="favColor"
         >
           <option value="blue">Blue</option>
           <option value="green">Green</option>
           <option value="red">Red</option>
           <option value="orange">Orange</option>
           <option value="yellow">Yellow</option>
         </select>

        <h1>{this.state.firstName} {this.state.lastName}</h1>
        <h2>You are a {this.state.gender}</h2>
        <h3>Your favorite color is {this.state.favColor}</h3>
        <button>Submit</button>
      </form>
    )
  }
}  */

/*
class App extends Component {
  constructor() {
    super()
    this.state = {
      loading: false,
      character: {}
    }
  }

  componentDidMount() {
    this.setState({loading: true})
    fetch("https://swapi.co/api/people/1")
    .then(response => response.json())
    .then(data => {
      this.setState({
        loading: false,
        character: data
      })
    })
  }

  render() {
    const text = this.state.loading ? "loading..." : this.state.character.name
    return(
      <div>
       <p>{text}</p> 
      </div>
    );
  }
}


 */


/* class App extends React.Component {
  constructor() {
    super()
    this.state = {
      isLoggedIn: true
     }
     this.handleClick = this.handleClick.bind(this)
     }

     handleClick() {
     this.setState(prevState => {
     return {
      isLoggedIn: !prevState.isLoggedIn
    }
  })
}

  render() {
    let buttonText = this.state.isLoggedIn ? "LOG OUT" : "LOG IN"
    let displayText = this.state.isLoggedIn ? "Logged in" : "logged out"
    return(
      <div>
        <button onClick={this.handleClick}>{buttonText}</button>
       <h1>{displayText}</h1>
      </div>
    )
  }
}*/

/*class App extends Component {
  constructor() {
    super()
    this.state = {
     unreadMessages: ["a", "d", "c"]
    }
  }
  // &&
  //false && false

  render() {
    return (
      <div>
        {
        this.state.unreadMessages.length > 0 && 
        <h2>You have {this.state.unreadMessages.length} unread messages!</h2>
        } 
      </div>

    );
  }
}
*/



/*class App extends Component {
  constructor() {
  super()
  this.state = {
    isLoading: true
  }
}
 componentDidMount() {
   setTimeout(() => {
     this.setState({
       isLoading: false
     })
   }, 1500)
 }
  render() {
    return (
      <div>
        {this.state.isLoading ? 
         <h1>Loading...</h1> :
         <Conditional />}
      </div>
    )
  }
}
 */

/*class App extends Component {
  constructor() {
    super()
    this.state={
      name: "Daniel",
      age: "32"
    }
  }
  render() {
    return(
      <div>
       <h1>{this.state.name}</h1>
       <h3>{this.state.age} years old</h3>
     </div>
    )
  }
} */

/*class App extends React.Component {
  constructor() {
    super()
    this.state = {
     isLoggedIn: true
    }
  }
 
  render() {
    let wordDisplay
    if (this.state.isLoggedIn === true) {
      wordDisplay="in"
    }else{
      wordDisplay="out"
    }
    return(
     <h1>You are currently logged {wordDisplay}</h1>
    )
  }
} */
/*
/*
/*function handleClick() {
  console.log("I was clicked")
}

/*class App extends React.Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
     this.handleClick = this.handleClick.bind(this)
  }
  handleClick() {
    this.setState(prevState => {
      return {
        count: prevState.count +1
      }
    })
  }
  
  render() {
    return(
      <div>
    <h1>{this.state.count}</h1>
    <button onClick={this.handleClick}>change!</button>
    </div>
    )
  }
} */

/*
function App() {
  return(
    <div className="benz">
      <img onMouseOver={() => console.log("Hovered")}src="img/brew.jpg" />
      <br />
      <br />
      <button onClick={handleClick}>Click me</button>
    </div>
  )
} */
