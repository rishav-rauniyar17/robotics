import React,{Component} from "react";
//..leave the folder container go to the components
import Cardlist from "../components/Cardlist";

import SearchBox from '../components/SearchBox';
import './App.css';
import { robots } from "../robots";
import Scroll from '../components/Scroll'

// STATE>>PROPS state means an object that describes our application
// const state={
//     robots:robots,
//     searchfield:''
// }
class App extends Component{
    // adding state
    constructor(){
        super()
        this.state={
            robots:[],
            searchfield:''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
           return response.json();
        })
        .then(users=>{
            this.setState({robots:users});
        })
       
    }
    onSearchChange=(event)=>{
            this.setState({searchfield:event.target.value})
       
       
    }
   render(){
       const{robots,searchfield}=this.state;
    const filteredRobots=robots.filter(robot=>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
    if(robots.length===0){
        return <h1>Loading</h1>
    } else{
    return(
        <div  className="tc">
             <h1 className="f2">Robo Friends</h1>
             <SearchBox searchChange={this.onSearchChange}/>
       <Scroll>
       <Cardlist robots={filteredRobots}/>
       </Scroll>
        </div>
     );
    }
   }
}

export default App;