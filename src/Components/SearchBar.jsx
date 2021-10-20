import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange(e) {
    this.setState({ term: e.target.value });
  }

  //   onFormSubmision(event) {
  //     event.preventDefault();
  //     console.log(this.state.term);
  //   }

  onFormSubmision = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form
          action="#"
          className="ui form"
          onSubmit={this.onFormSubmision}
          //   onSubmit={this.onFormSubmision.bind(this)}  //when we use method syntax
          //   onSubmit={(e) => {
          //     e.preventDefault();
          //     console.log(this.state.term);
          //   }}
        >
          <div className="field">
            <label htmlFor="input">Image Search:</label>
            <input
              type="text"
              placeholder="Search..."
              value={this.state.term}
              //   onChange={(e) => this.setState({ term: e.target.value })}
              onChange={this.onInputChange.bind(this)}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
