import React from "react";
import ReactDOM from "react-dom";

class TweetBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "",
            photo: false
        };
        this.getRemaining = this.getRemaining.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleToggle = this.handleToggle.bind(this);
        this.overflowAlert = this.overflowAlert.bind(this);
    }
    getRemaining(){
        return 140 - (this.state.photo ? 23 : 0) - this.state.text.length;
    }
    handleChange(e){
        this.setState({ text: e.target.value });
    }
    handleToggle() {
        this.setState({ photo: !this.state.photo });
    }
    overflowAlert(){
    	if (this.getRemaining() < 0){
    		var offset = this.state.photo? -23 : 0;
	    	return <div className="alert alert-warning">
	        	<strong>Oops! Too Long:</strong>
	        	{this.state.text.substring(130 + offset, 140 + offset)}
	        	<strong className="bg-danger">{this.state.text.substring(140 + offset)}</strong>
	      	</div>;	
    	}
    	else{
    		return;
    	}
    }
    render() {
        return (
            <div className="well clearfix">
			    <textarea className="form-control" style={{height: '70px'}} onChange={this.handleChange}></textarea>
		  		<br/>
		  		{ this.overflowAlert() }
			    <span>{this.getRemaining()}</span>
			    <button className="js-tweet-button btn btn-primary pull-right" disabled={this.getRemaining() == 140}>Tweet</button>
			    <button className="js-add-photo-button btn btn-default pull-right" onClick={this.handleToggle}>{this.state.photo ? "✓ Photo Added" : "Add Photo"}</button>
		  	</div>
        );
    }
}

ReactDOM.render(
    <h1>Hello worl</h1>,
    document.getElementById('container')
);
