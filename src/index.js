import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';
import { Router, Route, browserHistory } from 'react-router';

ReactDOM.render(
     <Router history={browserHistory}>
       <Route path="/" component={Main}/>
       <Route path="/home" component={Main}/>
     </Router>,
    document.getElementById('root'));