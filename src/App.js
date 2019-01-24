import React, { Component } from 'react';
import './App.css';
import GameCard from "./Components/GameCard";
import Wrapper from "./Components/Wrapper";
import ScoreBar from "./Components/ScoreBar";
import gifs from "./gifs.json";

class App extends Component {
        state = {
            message: "Click on gif to begin and try not to click on the same gif twice!",
            gifs,
            score: 0,
            highscore: 0,
            animate: "",
            gifAnimate:""
        };

  componentDidMount() {
      this.mixGif()
  }

    mixGif = id => {
        console.log("text");
        let shuffled = this.state.gifs.sort(() => Math.random() - 0.5);
        this.setState({gifs: shuffled });
        return true;
    };

    gifClicked = id => {
        let guessedCorrect = false;
        let newInfo = this.state.gifs.map(gif => {
            if (gif.id === id) {
                if (!gif.clicked) {
                    gif.clicked = true;
                    guessedCorrect = true;
                }
            }
            return gif;
        });

        if (guessedCorrect) {
            this.setState({score: this.state.score+1, gifAnimate:"",message: "You guessed correctly!", animate:"animated pulse"});
        } else {
            newInfo = this.state.gifs.map(gif => {
                gif.clicked = false;
                return gif;
            });
            this.setState({score: 0, gifAnimate:"animated jello",gifs: newInfo, message: "You guessed incorrectly!", animate:"animated wobble", highscore: Math.max(this.state.score, this.state.highscore)});
        }
        this.setState({gifs: newInfo});
        this.mixGif(id);
        return true;
    };

    render() {
        return (
            <Wrapper>
                <ScoreBar message={this.state.message} animate={this.state.animate} score={this.state.score} highscore={this.state.highscore}/>
                {this.state.gifs.map(gif => (
                    <GameCard
                        gifClicked={this.gifClicked}
                        id={gif.id}
                        key={gif.id}
                        image={gif.image}
                        animate={this.state.gifAnimate}
                    />
                ))}
            </Wrapper>
        );
    }

}

export default App;
