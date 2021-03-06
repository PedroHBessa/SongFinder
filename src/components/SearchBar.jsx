import React from "react";
import "../scss/searchbar.scss";

//create a Ssearch Bar component
class SearchBar extends React.Component {
  state = {
    term: "",
    animations: "showbar",
  };

  //get the term that will be sent to youtube api to get a list of videos
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  //send the term from this component to his parent
  onFormSubmit = (event) => {
    event.preventDefault();

    document.querySelector(".videos__main").style.display = "none";
    document.querySelector(".lds-ring").style.display = "inline-block";
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <section className="search__main">
        <form onSubmit={this.onFormSubmit}>
          <input
            role="form"
            className={"search__input " + this.state.animations}
            type="text"
            placeholder="Search artists, bands, songs..."
            value={this.state.term}
            onChange={this.onInputChange}
          ></input>
          <i
            title="submit-btn"
            className="fa fa-search"
            onClick={this.onFormSubmit}
          ></i>
        </form>
        <div className="lds-ring">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </section>
    );
  }
}

export default SearchBar;
