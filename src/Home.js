import './Home.css';
import React, { Component } from 'react';

class Home extends Component {
  constructor(){
      super();
      this.state = {
          ClassBlogData : [],
      }
      this.addDataOnScroll = this.addDataOnScroll.bind(this);
  }
  
  componentDidMount() {
    let newArray = [...this.state.ClassBlogData,...this.props.BlogData];
    console.log('Componen Did Mount');
    this.setState({ClassBlogData: newArray});
    window.addEventListener('scroll', this.addDataOnScroll);
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.addDataOnScroll);
  }
  addDataOnScroll(event) {
    let scrollTop = event.target.body.scrollTop;
    let scrollHeight = event.target.body.scrollHeight;
    let clientHeight = window.innerHeight;
    console.log(scrollTop, clientHeight, scrollHeight);
    if(scrollTop + clientHeight >= (scrollHeight - 30)) {
        let newArray = [...this.state.ClassBlogData,this.props.BlogData[0],this.props.BlogData[1],this.props.BlogData[2]];
        this.setState({ClassBlogData: newArray});
    }
  }

  render() {
    const BlogData = this.state.ClassBlogData;
    const onChange = this.props.onChange;
    const onLike = this.props.onLike;
    return (
    <div className="col-md-12 col-md-12 nopadding">
      <div className="col-md-8 push-md-2 col-sm-12 col-xs-12">
        <div className="row">
        {
        BlogData.map(function(data, index) {
        return(
          <div className="blogDiv col-md-6 col-sm-12" key={index}>
            <div className="row margin0" style={{"border":"1px solid black"}}>
                <div className="col-md-4 col-sm-12 nopadding" style={{"height":"235px"}}>
                    <img className="blogkimage" onClick={(e) => {console.log(data);onChange(data);}} style={{"width":"100%","height":"100%","cursor":"pointer"}} src={data.imageBlog} alt="Img 1"/>
                </div>
                <div className="blogData col-md-8 col-sm-12">
                    <div className="title cursorPointer">
                        <h3 onClick={(e) => {console.log(data);onChange(data);}}>{data.title}</h3>
                        <small className="light small">{data.description}</small>
                    </div>
                    <div className="flex author">
                        <img src={data.imgAuthor} alt="Img 1" style={{"paddingTop":"3px","height":"10%","width":"10%"}} />
                        <div className="authorName">
                            <small className="displayBlock small">{data.author}</small>
                            <small className="light small">{data.time}</small>
                        </div>
                        <div className={data.like ? "liked cursorPointer": "like cursorPointer"} onClick={() => {onLike(data)}}>
                            <small>Like</small>
                        </div>
                    </div>        
                </div>
            </div>
          </div>
        )
        })
        }
        </div>
      </div>
    </div>
    );
  }
}

export default Home;
