import React from "react";
export default class Modal extends React.Component {
  toggleClass = () => {
    this.setState({ active: !this.props.active });
  };
 
  render() {
    return (
      <>
        <div className="modal" style={{ display: `${this.props.active === true ? "flex" : "none"}`, position: "fixed" }}>
          <div className="modal__content">
            <h2 className="modal__content-header">{this.props.message}</h2>
              <button onClick={() => this.props.changeActive()} className="modal__content-cancel">
                Return 
              </button>
            </div>
          </div>
      </>
    );
  }
}
