import React from 'react';
import {Router,Route,Switch} from 'react-router-dom';
import StreamCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from './history';

const App=()=>{
    return(
        <div className="ui container">
        
            <Router history={history}>
            <Header/>
                <Switch>
                    <Route exact path="/" component={StreamList}/>
                    <Route exact path="/streams/new" component={StreamCreate}/>
                    <Route exact path="/streams/edit/:id" component={StreamEdit}/>
                    <Route exact path="/streams/delete/:id" component={StreamDelete}/>
                    <Route exact path="/streams/show/:id" component={StreamShow}/>
                </Switch>
            </Router>
        </div>
    );
};


export default App;