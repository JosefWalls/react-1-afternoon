import React, {Component} from 'react';

export default class Palindrome extends Component {
    constructor(){
        super();

        this.state = {
           userInput: "",
           guess: "",
           win: "",
           lostCount: 0
        }
    } 

    handleChange(value){
        this.setState({userInput: value})
    }
    
    guess(){
        let userGuest = this.state.userInput;
        let lostCount = this.state.lostCount;

        if(userGuest === "Potato"){
           this.setState({win: "You cheated"})
        } else if (userGuest !== "Potato"){
            this.setState({guess: "Grown in ireland, also Idahoan."})
            this.setState
            this.setState({lostCount : 1})
        } else if (lostCount === 1){
            this.setState({guess: "They are round, yet not"})
            this.setState({lostCount : 2})
        } else if (lostCount === 2){
            this.setState({guess: "They are used to make fwench fies"})
            this.setState({lostCount : 3})
        } else if (lostCount === 3){
            this.setState({guess: "Fill in the blank: Potat_"})
            this.setState({lostCount : 4})
        } else if (lostCount === 4){
            this.setState({guess: "Your just a noob now"})
            this.setState({lostCount : 5})
        } else {
            this.setState({guess: "ITS POTATO"})
            this.setState({lostCount : 5})
        }
    }
    
    render(){
        return (
            <div className="puzzleBox palindromePB">
            <h4> Mystery Word (Good luck homie)</h4>
            <input className="inputLine" onChange={ (e) => (this.handleChange(e.target.value, null, 10))}></input>
            <button className="confirmationButton" onClick={ () => (this.guess(this.state.userInput))}> Check to see if you are wrong</button>
            <span className="resultsBox">Hint One: {this.state.guess}</span>
            <span className="resultsBox">Mystery Word is: {this.state.win}</span>
          </div>
        )
    }
}