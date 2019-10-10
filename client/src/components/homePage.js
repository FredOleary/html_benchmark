import React, { Component } from 'react';
import ReactSpeedometer from "react-d3-speedometer"
import logo from '../weka_logo.png';
import background_img from '../weka_hpc.jpg';

export class HomePage extends Component{
    constructor(props) {
        super(props);
        this.state = { benchmark: 0, loading:false };
      }
      
      
    render(){
        return (
            <div className="homePage">
                <div className= "header">
                    <div style = {{position:'relative',  top:  '50%', transform: 'translateY(-50%)' }}>
                        <img src={logo} alt="Logo"  />;
                    </div>
                </div>
                <div className="content" style = {{ backgroundImage:`url(${background_img})`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>
                    <div style = {{backgroundColor: 'rgba(255, 255, 255, .7)', height:"100%", withd:"100%"}}>
                        <div style = {{position:'absolute', top:'50%', left:'50%', margin:0, transform: 'translate(-50%, -50%)', marginTop:"80px"}}>
                            <ReactSpeedometer value={this.state.benchmark} height={500} width={500} /> 
                        </div>
                        <div>
                            <button onClick={this.runBenchmark} style = {{height:'50px', marginTop:"10px", fontSize:18}} >{this.getBenchMarkText()}</button>
                        </div>
                     </div>
                </div>
               {/* <div className="footer">
                    <div style = {{position:'absolute', top:'50%', left:'50%', margin:0, transform: 'translate(-50%, -50%)'}}>
                        <button onClick={this.runBenchmark} >
                            Run benchmark
                        </button>
                    </div>
                </div> */}
            </div>
         )
    }
    getBenchMarkText = () =>{
        return (!this.state.loading) ? "Run benchmark" : "Running...";
    }
    runBenchmark = ()=>{
        this.setState({ benchmark:0 })
        this.setState({ loading:true })
        fetch('/benchmark')
            .then(response => response.json())
            .then(data => {
                this.setState({ benchmark:data.benchmark })
                this.setState({ loading:false })
            })
            // console.log(data)
 
        // console.log("foo")
    }
};
// export default HomePage



    
 