import React, { Component } from "react";
import "./style.css";


class ScoreBar extends Component {
    render() {
        return (
            <div style={{width:"100%"}}>
            <nav className="navbar navbar-default navbar-fixed-top">
                <div className="itemLeft">Test Your Memory</div>
                <div className={`itemCenter ${this.props.animate}`}>{this.props.message}</div>

                <div className="scores">
                    <div className="high-score">
                        <div className="score-head">TOP SCORE</div>
                        <div className="score-value">{this.props.highscore}</div>
                    </div>
                    <div className="score">
                        <div className="score-head">SCORE</div>
                        <div className="score-value">{this.props.score}</div>
                    </div>
                </div>
            </nav>
                <div style={{height: "105px",display: "block",width: "100%"}}></div>
            </div>
        );
    }
}

export default ScoreBar;
