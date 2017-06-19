import './Blog.css';
import React, { Component } from 'react';

class Blog extends Component {
  constructor(){
    super();
    this.state = {
      data: {
        "title":"8 Things You Didn’t Know About WiFi",
        "imageBlog":"https://cdn-images-1.medium.com/max/800/1*g3xdfK_dM683QZpl9G6nlQ.jpeg",
        "author": "Calum McClelland",
        "imgAuthor": "https://cdn-images-1.medium.com/fit/c/48/48/1*1pKMI6LwChI1DVGBbYjRkA.png",
        "description": "How does WiFi work? Where did it start? What does it stand for?",
        "body":"Ah, good ‘ole WiFi. From helping us to keep our phone bill low (except March, goddammit) to allowing our laptops/tablets/etc. to connect to the internet, WiFi has been a ubiquitous companion that we’ve all come to know and love. WiFi is also useful for some IoT applications (wait, what is IoT?), such as building and home automation or in-house energy management. For many other IoT applications, WiFi is absolutely useless. Given the importance of WiFi to our everyday lives and to certain IoT applications, here are 8interesting things about WiFi that you didn’t know!",
        "time":"Time 1"
      },
    }
  }

  componentWillMount(){
    this.setState({data: this.props.BlogData});
  }

  render() {
    const data = this.state.data;
    console.log(data);
    return (
      <div className="row justify-content-center">
        <div className="padding10 col-md-6 col-sm-8">
          <div className="padding10 authorData flex align-vertical-bottom">
            <img src={data.imgAuthor} className="imgPreview" alt="Img 1"/>
            <div className="authorName">
              <small className="displayBlock">{data.author}</small>
              <small className="light small">{data.time}</small>
            </div>
          </div>
          <h3 className="padding10">{data.title}</h3>
          <h3 className="padding10" style={{"color":"#c3c3c3","fontWeight":"inherit"}}>{data.description}</h3>
          <img className="padding10" style={{"width":"100%","height":"45%"}} src={data.imageBlog} alt=""/>
          <p className="padding10">{data.body}</p>
          <div className="padding10">Comments</div>
        </div>
      </div>
    );
  }
}

export default Blog;
