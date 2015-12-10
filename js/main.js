var MyApp = React.createClass({
	getInitialState: function() {
		return {
			lettersObj: {
		        'A' : 0,
		        'B' : 0,
		        'C' : 0,
		        'D' : 0,
		        'E' : 0,
		        'F' : 0,
		        'G' : 0,
		        'H' : 0,
		        'I' : 0,
		        'K' : 0,
		        'L' : 0, 
		        'M' : 0,
		        'N' : 0,
		        'O' : 0,
		        'P' : 0,
		        'Q' : 0,
		        'R' : 0,
		        'S' : 0,
		        'T' : 0,
		        'V' : 0,
		        'X' : 0,
		        'Y' : 0,
		        'Z' : 0
		    },
		    words:'',
		    totalLetters:0
		}
	},	
	wordChange: function(e) {
		this.setState({words:e.target.value})
		var arr = this.state.words.split(' ').join('').split('');
		// for (var i = 0; i < arr.length; i++) {
		var uppedLetter = arr[arr.length-1].toUpperCase();
		this.state.lettersObj[uppedLetter]++;
		// };
		this.setState({lettersObj: this.state.lettersObj, totalLetters: arr.length})
		console.log(e.target.value, this.state.words)
	},
	render:function() {
		console.log(this.state.lettersObj)
		return(
			<div>
				<h1>The Skybox</h1>
				<SkyBox totalLetters= {this.state.totalLetters} data={this.state.lettersObj}/>
				<textarea onChange={this.wordChange} placeholder = 'type stuff here'/>
			</div>
		)
	}
})

var Letter = React.createClass({
	render: function() {
		return <span className = {this.props.stylin}>{this.props.char}</span>
	}
})

var SkyBox = React.createClass({
	render:function() {
		var skyLetters = [];
		var allTheLetters = parseInt(this.props.totalLetters);
		for (var key in this.props.data) {
			var count = this.props.data[key];
			var percent = Math.floor(count/allTheLetters * 100);
			// (Math.floor(this.props.data[key]/parseInt(this.props.totalLetters) *100)) 
			var properClass = 'frequency-' + percent
			if (this.props.data[key] !== 0) {
				skyLetters.push(<Letter stylin={properClass} char={key}/>)
			}
		}
		return (
			<div className="skyB well" >
				{skyLetters}
			</div>
		)
	}
})

ReactDOM.render(<MyApp />, document.getElementById('reactApp'));