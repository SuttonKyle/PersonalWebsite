import React, { Component } from 'react'
import './NewModal.css'
import './Tile.css'
import Modal from 'react-modal'
import Tile from './Tile.js'

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

    this.openModal = this.openModal.bind(this)
    this.afterOpenModal = this.afterOpenModal.bind(this)
    this.closeModal = this.closeModal.bind(this)
  }

  openModal() {
    this.setState({ modalIsOpen: true })
  }

  afterOpenModal() {
    //references are now sync'd and can be accessed.
    this.subtitle.style.color = '#f00'
  }

  closeModal() {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <div>
        <Tile
          title={this.state.title}
          img={this.state.img}
          onClick={this.openModal}
          desc={this.props.tiledesc}
        />
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={() => this.afterOpenModal}
          onRequestClose={this.closeModal}
          className="newmodal"
          contentLabel={this.props.modalid}
          close={this.closeModal}
        >
          <h1> {this.state.title} </h1>
          <div className="column">
            <img src={this.state.img} className="modal-image" />
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
      </div>
    )
  }
}

export default NewModal
