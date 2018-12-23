import React, { Component } from 'react'
import './NewModal.css'
import './Tile.css'
import Modal from 'react-modal'
import Tile from './Tile'
import { ModalImage, TilesRow } from './styles'

class NewModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: this.props.title,
      img: this.props.img,
      desc: this.props.desc,
      langs: this.props.langs,
      link: this.props.link,
      modalIsOpen: false,
    }
  }

  openModal = () => this.setState({ modalIsOpen: true })

  closeModal = () => this.setState({ modalIsOpen: false })

  render() {
    return (
      <TilesRow>
        <Tile
          title={this.state.title}
          img={this.state.img}
          onClick={this.openModal}
          desc={this.props.tiledesc}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
          className="newmodal"
          contentLabel={this.props.modalid}
          close={this.closeModal}
        >
          <h1> {this.state.title} </h1>
          <div className="column">
            <ModalImage src={this.state.img} />
            <p className="desc"> {this.state.desc} </p>
          </div>
          <div className="column">
            <h2>Languages Used:</h2>
            {this.state.langs.map(function(listValue) {
              return <p className="lang">{listValue}</p>
            })}
            {this.state.link && (
              <a className="button" href={this.state.link} target="_">
                {' '}
                GitHub Repository{' '}
              </a>
            )}
            <button className="button" onClick={this.closeModal}>
              Close
            </button>
          </div>
        </Modal>
      </TilesRow>
    )
  }
}

export default NewModal
