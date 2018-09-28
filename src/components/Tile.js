import React, { Component } from 'react'
import './Tile.css'
import { TileImage, CenterItems, TileText } from './styles'

class Tile extends Component {
  state = {
    hover: false,
  }

  mouseOver = () => {
    this.setState({ hover: true })
  }

  mouseLeave = () => {
    this.setState({ hover: false })
  }

  render() {
    return (
      <button
        className="tile"
        onClick={this.props.onClick}
        onMouseOver={this.mouseOver}
        onMouseLeave={this.mouseLeave}
      >
        <CenterItems>
          <TileImage
            backgroundImage={this.props.img}
            active={this.state.hover}
          />
          {this.state.hover && (
            <TileText>
              <p className="tiletext"> {this.props.title} </p>
              <p className="tiledesc"> {this.props.desc} </p>
            </TileText>
          )}
        </CenterItems>
      </button>
    )
  }
}

export default Tile
