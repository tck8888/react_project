import React from "react";

import "./BottomBar.scss";
import { connect } from "react-redux";
import { changeTab } from "../actions/tabAction";

class BottomBar extends React.Component {
  constructor(props) {
    super(props);
  }

  renderItems() {
    let tabs = this.props.tabs;
    return tabs.map((item, index) => {
      let cls = item.key + " btn-item";
      let name = item.name;
      if (item.key === this.props.activeKey) {
        cls += " active";
      }
      return (
        <div
          key={item.key}
          className={cls}
          onClick={() => this.changeTab(item)}
        >
          <div className="tab-icon" />
          <div className="btn-name">{name}</div>
        </div>
      );
    });
  }

  changeTab(item) {
    this.props.dispatch(
      changeTab({
        activeKey: item.key
      })
    );
  }

  render() {
    return <div className="bottom-bar">{this.renderItems()}</div>;
  }
}
export default connect(state => ({
  tabs: state.tabReducer.tabs,
  activeKey: state.tabReducer.activeKey
}))(BottomBar);
