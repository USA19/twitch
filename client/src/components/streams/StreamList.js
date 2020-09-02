
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchStreams} from '../../actions';
import {Link} from 'react-router-dom';

export class StreamList extends Component {
    componentDidMount(){
      this.props.fetchStreams();
    }
    // renderList(){
    //     this.props.streams.map(stream=>{
    //         return (
    //             <div className="item" key={stream.id}>
    //                 <i className="large middled aligned icon camera"/>
    //                 <div className="content">
    //                     {stream.title}
    //                     <div className="description">
    //                         {stream.description}
    //                     </div>
    //                 </div>
    //             </div>
    //         );
    //     });
    // }
    renderAdmin=stream=>{
        if (stream.userId===this.props.currentUserId){
            
            return(
                <div className="right floated content">
                    <Link to={`/streams/edit/${stream.id}`} className="ui button primary">Edit</Link>
                    <Link className="ui button negative" to={`/streams/delete/${stream.id}`}>Delete</Link>
               </div>
            );
        }
    }

    renderCreate=()=>{
        if(this.props.isSignedIn){
            return(
                <div style={{textAlign:'right'}}>
                    <Link to='/streams/new' className="ui button primary">Create Stream</Link>
                </div>
            );
        }
        
    }
    render() {
        return (
            <div>
            <h2>Streams</h2>
            <div className="ui celled list">
            {
               this.props.streams.map(stream=>{
            return(<div className="item" key={stream.id}>
                    {this.renderAdmin(stream)}
                    <i className="large middled aligned icon camera"/>
                    <div className="content">
                    <Link to={`/streams/show/${stream.id}`}>
                        {stream.title}
                        </Link>
                        <div className="description">
                            {stream.description}
                        </div>
                    </div>
                  
                </div>)
           
        })
               
        }
            </div>
            {this.renderCreate()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
    streams:Object.values(state.streams),
    currentUserId:state.auth.userId,
    isSignedIn:state.auth.isSignedIn
}
};



export default connect(mapStateToProps,{fetchStreams})(StreamList);
