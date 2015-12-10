var MyApp = React.createClass({
	defaultLettersObj: {
		        'A' : 0,
		        'B' : 0,
		        'C' : 0,
		        'D' : 0,
		        'E' : 0,
		        'F' : 0,
		        'G' : 0,
		        'H' : 0,
		        'I' : 0,
		        'J' : 0,
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
		        'U' : 0,
		        'V' : 0,
		        'W' : 0,
		        'X' : 0,
		        'Y' : 0,
		        'Z' : 0
		    },
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
		        'J' : 0,
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
		        'U' : 0,
		        'V' : 0,
		        'W' : 0,
		        'X' : 0,
		        'Y' : 0,
		        'Z' : 0
		    },
		    words:'',
		    totalLetters:0
		}
	},	
	wordChange: function(e) {
		var words = e.target.value;
		if (words.length  !== this.state.words.length + 1){
			this.pasteOrDelete(words);
		}
		else{
			this.setState({words:e.target.value})
			var arr = this.state.words.split(' ').join('').split('');
			// for (var i = 0; i < arr.length; i++) {
			var uppedLetter = arr[arr.length-1].toUpperCase();
			this.state.lettersObj[uppedLetter]++;
			// };
			this.setState({lettersObj: this.state.lettersObj, totalLetters: arr.length})
			// console.log(e.target.value, this.state.words, this.state.lettersObj[uppedLetter])
		}
	},
	pasteOrDelete: function(fullString) {
		this.setState({lettersObj: defaultLettersObj, words:fullString})
		var arr = this.state.words.split(' ').join('').split('');
			// for (var i = 0; i < arr.length; i++) {
			var uppedLetter = arr[arr.length-1].toUpperCase();
			this.state.lettersObj[uppedLetter]++;
			// };
			this.setState({lettersObj: this.state.lettersObj, totalLetters: arr.length})
			// console.log(e.target.value, this.state.words, this.state.lettersObj[uppedLetter])
	},
	render:function() {
		return(
			<div>
				<h1>skybox</h1>
				<SkyBox totalLetters= {this.state.totalLetters} data={this.state.lettersObj}/>
				<div className="text-center">
				<textarea className="well" onChange={this.wordChange} placeholder = 'type stuff here'/>
				</div>
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