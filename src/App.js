import React, { Component } from "react";
import "./App.css";

// ---------------------------------------------------------------------------

const styles = {
  bold: { fontWeight: "bold" },
  italic: { fontStyle: "italic" },
  underline: { textDecorationLine: "underline" }
};

const stylings = ["bold", "italic", "underline"];

const colors = ["yellow", "blue", "red", "black", "purple", "pink"];

// ---------------------------------------------------------------------------

class App extends Component {
  state = {
    color: "blue",
    bold: false,
    italic: false,
    underline: false
  };

  // ------------------------------------

  // to choose color text
  selectColor = color => {
    this.setState({ color: color });
  };

  // ------------------------------------

  // to choose new style text
  selectStyle = style => {
    const newSelectStyle = !this.state[style];
    this.setState({ [style]: newSelectStyle });
  };

  // ------------------------------------

  render() {
    const stylingBoxes = stylings.map(style => (
      // <button className="btn btn-light" style={styles[style]} key={style}>
      //   {style}
      // </button>

      <button
        className="btn btn-light"
        style={styles[style]}
        key={style}
        onClick={() => this.selectStyle(style)}
        style={{ backgroundColor: style }}
      >
        {style}
      </button>
    ));

    // ------------------------------------

    const colorBoxes = colors.map(color => (
      <button
        style={{ backgroundColor: color, height: 30, width: 30 }}
        key={color}
        onClick={() => this.selectColor(color)}
      />
    ));

    // ------------------------------------

    return (
      <div className="App">
        <div className="my-3">{stylingBoxes}</div>
        <textarea
          style={{
            color: this.state.color,
            fontWeight: this.state.bold ? "bold" : "",
            fontStyle: this.state.italic ? "italic" : "",
            textDecorationLine: this.state.underline ? "underline" : ""
          }}
        />
        <div className="my-3">{colorBoxes}</div>
      </div>
    );
  }
}

export default App;
