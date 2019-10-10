import React, { Component } from 'react';
import ReactSpeedometer from "react-d3-speedometer"

export class HomePage extends Component{
    constructor(props) {
        super(props);
        this.state = { benchmark: 0 };
      }

    render(){
        return (
            <div className="HomePage">
                <div class="row header">
                    Header
                </div>
                <div class="row content">
                    <ReactSpeedometer value={this.state.benchmark}/> 
                </div>
                <div class="row footer">
                    <button onClick={this.runBenchmark}>
                        Run benchmark
                    </button>
                </div>
            </div>
         )
    }
    runBenchmark = ()=>{
        fetch('/benchmark')
            .then(response => response.json())
            .then(data => {
                this.setState({ benchmark:data.benchmark })
            })
            // console.log(data)
 
        // console.log("foo")
    }
};
// export default HomePage

