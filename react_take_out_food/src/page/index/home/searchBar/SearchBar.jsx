import React from "react";
import "./SearchBar.scss";
class SearchBar extends React.Component {
  render() {
    return (
      <div className="seach-bar">
        <div className="bar-location">
          <div className="location-icon" />
          <div className="location-text">上海</div>
        </div>
        <div className="seach-btn">
          <p className="place-holder">鸡翅</p>
        </div>
      </div>
    );
  }
}

export default SearchBar;
