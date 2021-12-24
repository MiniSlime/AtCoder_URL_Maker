import React from "react";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {url: "ここにリンクがくる",}
  }

  randomInt(min,max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  handleClick(){
    const contest = this.randomInt(212,232);
    const problem = String.fromCharCode(this.randomInt(0,4) + 'a'.charCodeAt(0));
    console.log("コンテスト:" + contest + " 問題:" + problem);

    this.setState({url: "https://atcoder.jp/contests/abc" + contest + "/tasks/abc" + contest + "_" + problem});
  }

  render(){
    return(
      <div>
        <h3>AtCoder URL Maker</h3>
        <p>令和ABCのA~D問題のURLがランダムに生成されます</p>
        <div><a href={this.state.url}>{this.state.url}</a></div>
        <button onClick={() => {this.handleClick()}}>リンク生成</button>
      </div>
    );
  }
}

export default App;
