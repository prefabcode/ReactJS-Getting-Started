const Stars = (props) => {
	const numberOfStars = 1 + Math.floor(Math.random() * 9);
  
//   let stars = [];
  
//   for (let i = 0; i < numberOfStars; i++) {
//   	stars.push(<i key={i} className="fa fa-star"></i>)
//   }
  
  return (
  	<div className="col-5">
    	{_.range(numberOfStars).map(i => <i key={i} className="fa fa-star"></i>)}
    </div>
  )
};

const Button = (props) => {
	return (
  	<div className="col-2">
    	=
    </div>
  )
};

const Answer = (props) => {
	return (
  	<div className="col-5">
    	{props.selectedNumbers.map((number, i) => <span key={i}>{number}</span>)}
    </div>
  )
};

const Numbers = (props) => {
	const numberClassName = (number) => {
  	if (props.selectedNumbers.indexOf(number) >= 0) {
    	return 'selected';
    }
  }

  return (
  	<div className="card text-center">
  	  <div>
				{Numbers.list.map((number, i) => 
          <span key={i} 
                className={numberClassName(number)}
                onClick={() => props.selectNumber(number) }>
            {number}
        </span>
        )}
  	  </div>
  	</div>
  )
};

Numbers.list = _.range(1,10);

class Game extends React.Component {
	state = {
  	selectedNumbers: []
  };
  
  selectNumber = (clickedNumber) => {
  	this.setState(prevState => ({
    	selectedNumbers: prevState.selectedNumbers.concat(clickedNumber)
    }));
  };
  
  render() {
  	return (
    	<div className="container">
      	<h3>Play Nine</h3>
        <hr />
    	  <div className="row">
    	     <Stars />
       		 <Button />
           <Answer selectedNumbers={this.state.selectedNumbers} /> 
    	  </div>
        <br />
        <Numbers selectedNumbers={this.state.selectedNumbers} 
        selectNumber={this.selectNumber}/>
    	</div>
    )
  }
}

class App extends React.Component {
	render() {
  	return (
    	<div>
    	  <Game />
    	</div>
    )
  }
}

ReactDOM.render(<App />, mountNode);