import React from 'react';

class ToggleSidebar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggled: false,
      touchStartX: 0,
      beingTouched: false
    }
  }

  toggleSidebar(e) {
    let outer = $("#outer-wrap");
    outer.toggleClass("toggled");
    this.setState({ toggled: !this.state.toggled })
  };

  handleTouchStart(e) {
    this.handleStart(e.targetTouches[0].clientX);
  }

  handleTouchMove(e) {
    this.handleMove(e.targetTouches[0].clientX);
  }

  handleTouchEnd() {
    this.handleEnd();
  }

  handleStart(x) {
    this.setState({
      touchStartX: x,
      beingTouched: true
    });
  }

  handleMove(x) {
    if (this.state.beingTouched) {
      const touchX = x;
      const deltaX = x - this.state.touchStartX;
      if (deltaX < 0) {
        if (this.state.toggled) {
          this.toggleSidebar();
        }
      } else if (deltaX > 0){
        if (!this.state.toggled) {
          this.toggleSidebar();
        }
      }
    }
  }

  handleEnd() {
    this.setState({
      touchStartX: 0,
      beingTouched: false
    })
  }

  render () {
    return (
      <div
        className="phone-header"
        onTouchStart={(e) => this.handleTouchStart(e)}
        onTouchMove={(e) => this.handleTouchMove(e)}
        onTouchEnd={() => this.handleTouchEnd()}>
        <button
          id="toggle-sidebar"
          onClick={(e) => this.toggleSidebar(e)}>
          <i className="fa fa-bars fa-2x" aria-hidden="true"></i>
        </button>
      </div>
    )
  }
}

export default ToggleSidebar;
