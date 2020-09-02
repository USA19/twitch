import React from 'react';
import Modal from '../Modal';
import {Link} from 'react-router-dom';
import history from '../../components/history';
import {fetchStream , deleteStream} from '../../actions';
import {connect} from 'react-redux';


class StreamDelete extends React.Component{ 


componentDidMount=()=>{
   
    this.props.fetchStream( this.props.match.params.id);

}
action=()=>{
         return(
        // <React.Fragment>  yai koi HTML produce ni krta neechay is ka shorten code hai
            <>     
              <button className="ui negative button" onClick={()=>this.props.deleteStream(this.props.match.params.id )}>Delete</button>
                <Link to='/' className="ui  button">Cancel</Link>
            </>    
                // {/* </React.Fragment> */}
                 )
     }
onDismiss=()=>{
        history.push('/');
    }
renderContent=()=>{
    if(!this.props.stream){
        return 'Are you sure you want to delete this stream?'
    }
    return `are you sure you want to delete this stream with title ${this.props.stream.title}?`
}
render(){
   
    return(
        
        <Modal
            title="Delete Stream"
            content={this.renderContent()}
            action={this.action()}
            onDismiss={this.onDismiss}
        />
       
    );
    }
}

const mapStateToProps=(state,ownProps)=>{
return{
    stream:state.streams[ownProps.match.params.id]
}
}


export default connect(mapStateToProps,{fetchStream , deleteStream} ) (StreamDelete);