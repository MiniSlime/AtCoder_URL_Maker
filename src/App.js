import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {url: "ここにリンクがくるほげ",}
  }

  randomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  handleClick(){
    const contest = this.randomInt(126,187);
    const problem = String.fromCharCode(this.randomInt(0,3) + 'a'.charCodeAt(0));
    console.log("コンテスト:" + contest + " 問題:" + problem);

    this.setState({url: "https://atcoder.jp/contests/abc" + contest + "/tasks/abc" + contest + "_" + problem});
  }

  render(){
    return(
      <dev>
        <a href={this.state.url}>{this.state.url}</a>
        <button onClick={() => {this.handleClick()}}>リンク生成</button>
      </dev>
    );
  }
}

export default App;
