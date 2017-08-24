import React from 'react'
import {connect} from 'react-redux'
import * as chat from '../../action/chat.js'

export class ChatContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      content: '',
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e){
    this.setState({content: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.messageCreate({
      meta: false,
      content: this.state.content,
    })
  }
  render() {
    return (
      <div className='chat-container'>
        <h1> Welcome to Mythic Chat </h1>
        <ul>
          {this.props.chatHistory.map((item, ))}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  chatHistory: state.history,
})

export const mapDispatchToProps = (dispatch) => ({
  messageCreate: (message) => dispatch(chat.message(message)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ChatContainer)
