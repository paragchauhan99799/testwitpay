import './Home.css';
import Blog from './Blog';
import React, { Component } from 'react';

class Home extends Component {
  render() {
    const BlogData = this.props.BlogData;
    const onChange = this.props.onChange;
    const onLike = this.props.onLike;
    return (
    <div className="row">
      <div className="col-md-2">
      </div>
      <div className="row col-md-8 col-sm-12">
        {
        BlogData.map(function(data, index) {
        return(
          <div className="blogDiv col col-md-6 col-sm-12" key={index}>
            <div className="row">
                <div className="col-md-4 col-sm-12">
                    <img className="blogkimage" onClick={(e) => {console.log(data);onChange(data);}} style={{"width":"100%","height":"100%","cursor":"pointer"}} src={data.imageBlog} alt="Img 1"/>
                </div>
                <div className="blogData col-md-8 col-sm-12">
                    <div className="title cursorPointer">
                        <h3 onClick={(e) => {console.log(data);onChange(data);}}>{data.title}</h3>
                        <small className="light">{data.description}</small>
                    </div>
                    <div className="flex align-vertical-bottom">
                        <img src={data.imgAuthor} alt="Img 1"/>
                        <div className="authorName">
                            <small className="displayBlock">{data.author}</small>
                            <small className="light">{data.time}</small>
                        </div>
                        <div className="cursorPointer" onClick={() => {onLike(data)}} style={{"padding":"10px"}}>
                            {data.like === false ? <small>Like</small> : <small>Liked</small>}
                        </div>
                    </div>        
                </div>
            </div>
          </div>
        )
        })
        }
      </div>
      <div className="col-md-2">
      </div>
    </div>
    );
  }
}

export default Home;
