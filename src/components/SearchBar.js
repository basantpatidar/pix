import React from "react";

class SearchBar extends React.Component {
  state = {term: ""};

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.term);
    
  }
  

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
        <label>Image search</label>
          <input type="text" value={this.state.term} onChange={e => this.setState({term: e.target.value})} />
        </form>
      </div>
    );
  }
}

export default SearchBar;



// import React from "react";

// class SearchBar extends React.Component {
//   state = {term: "",
// term1: '',
// term2: ''};

//   onFormSubmit(event) {
//     event.preventDefault();

//     this.props.onSubmit(this.state.term);
    
//   }
//   changeHandle = (e) => {
//     this.setState({[e.target.name]:e.target.value})
//   }
  

//   render() {
//     console.log(this.state)
//     return (
//       <div className="ui segment">
//         <form onSubmit={(e)=>(this.onFormSubmit(e))}  className="ui form">
//         <label>Image search</label>
//           <input type="text" value={this.state.term} name={"term"} onChange={this.changeHandle} />
//           <input type="text" value={this.state.term1} name={"term1"} onChange={this.changeHandle} />
//           <input type="text" value={this.state.term2} name={"term2"} onChange={this.changeHandle} />
//           {/* <button onClick={(e)=> this.onFormSubmit(e)}/> */}
//         </form>
//       </div>
//     );
//   }
// }

// export default SearchBar;
