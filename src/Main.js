import Home from './Home';
import Blog from './Blog';
import React, { Component } from 'react';
import Header from './component/Header';
import _ from 'lodash';

var AllDataObject = require("./blog.data");

class Main extends Component {
  constructor(){
    super();
    this.state = {
      link: "/home",
      AllData: AllDataObject,
      BlogData: {
        "title":"8 Things You Didn’t Know About WiFi",
        "imageBlog":"https://cdn-images-1.medium.com/max/800/1*g3xdfK_dM683QZpl9G6nlQ.jpeg",
        "author": "Calum McClelland",
        "imgAuthor": "https://cdn-images-1.medium.com/fit/c/48/48/1*1pKMI6LwChI1DVGBbYjRkA.png",
        "description": "How does WiFi work? Where did it start? What does it stand for?",
        "body":"Ah, good ‘ole WiFi. From helping us to keep our phone bill low (except March, goddammit) to allowing our laptops/tablets/etc. to connect to the internet, WiFi has been a ubiquitous companion that we’ve all come to know and love. WiFi is also useful for some IoT applications (wait, what is IoT?), such as building and home automation or in-house energy management. For many other IoT applications, WiFi is absolutely useless. Given the importance of WiFi to our everyday lives and to certain IoT applications, here are 8interesting things about WiFi that you didn’t know!",
        "time":"Time 1",
        "like":false
      }
    }
  }

  onChange(data){
    this.setState({BlogData: data});
    this.setState({link: "/blog"});
  }
  onLike(updateDataObject){
    var newData = _.forEach(this.state.AllData, (data) => {
      if(data.id === updateDataObject.id){
        data.like = !data.like; 
      }
    })
    this.setState({ AllData: newData});
  }
  onChangeHome(){
    this.setState({link: "/home"});
  }

  render() {
    return (
      <div className="">
        <div className="row" style={{"padding":"20px 0px"}}>
          <div className="col-md-2 col-sm-0 nopadding"></div>
          <div className="col-md-8 col-sm-12 nopadding">
            <Header onChange={this.onChangeHome.bind(this)}/>
          </div>
          <div className="col-md-2 col-sm-0 nopadding"></div>
        </div>
        <div className="row" style={{"color":"black"}}>
          <div className="col-md-2 col-sm-0 nopadding"></div>
          <h3 style={{"padding":"5px"}} >Popular on Media</h3>
          <div className="col-md-2 col-sm-0 nopadding"></div>
        </div>
        <div className="row nopadding">
          {
            this.state.link === '/blog' ?
            <Blog BlogData={this.state.BlogData}/> : <Home BlogData={this.state.AllData} onLike={this.onLike.bind(this)} onChange={this.onChange.bind(this)}/>
          }
        </div>
      </div>
    );
  }
}

export default Main;
