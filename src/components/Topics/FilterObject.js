import React, {Component} from 'react';

export default class FilterObject extends Component {
    constructor(){
        super();


        this.state = {
                drivers: [{
                    name: "Sebastian",
                    age: 30,
                    awesome: true
                },
                {
                    name: "Lewis",
                    age: 30,
                },
                {
                    name: "Kimi",
                    age: 40,
                    awesome: true
                }
                ],
            userInput: "",
            filteredDrivers: []
        }
    }

        handleChange (val) {
            this.setState({userInput: val})
        }

        filterDrivers (prop){
         let drivers = this.state.drivers;
         let filteredDrivers = [];

         for(let i = 0; i < drivers.length; i++){
             if(drivers[i].hasOwnProperty(prop)) {
               filteredDrivers.push(drivers[i])
             }
         }

         this.setState({filteredDrivers: filteredDrivers})
        }
    
    render(){
        return (
           <div className="puzzleBox filterObjectPB">
               <h4>Filter Object</h4>
                 <span className="puzzleText">
                     {JSON.stringify(this.state.drivers, null, 10)}
                 </span>
                 <input className="inputLine" onChange={ (e) => this.handleChange}></input>
                 <button className="confirmationBox"></button>
                 <span className="resultsBox filterObjectPB">
                      {JSON.stringify(this.state.filteredArray, null, 10)}
                 </span>
           </div> 
        )
    }
}