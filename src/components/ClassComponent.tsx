import React, { Component } from 'react'
interface Prop{}
interface State{
    count:number;
}
let interval:any;
export default class ClassComponent extends Component <Prop,State>{
    constructor(props:Prop){
        super(props);
        this.state = {
            count:0
        }
    }
    componentDidMount(): void {
         interval = setInterval(() => {
            console.log("hàm setInterval được gọi");
        },1000)
    }
    handleClick = () => {
        clearInterval(interval);
    }
  render() {
    return (
      <div>ClassComponent
        <button onClick={this.handleClick}>dừng interval</button>
      </div>
    )
  }
}
