import React from 'react'

const Buttons = (props) => {
  return (
      <div className="buttons">
          <a id="tweet-quote"
          target="_blank"
          rel="noopener noreferrer"
          href={props.href}>
          Tweet</a>
          <button id="new-quote" onClick={props.onClick}>New Quote</button>
      </div>
  )
}

class QuoteBox extends React.Component {
  constructor(props) {
      super(props)
      this.nextQuote = this.nextQuote.bind(this)
      this.state = {
        isLoaded: false,
        error: null,
        quotes: []
      }
  }

  nextQuote() {
     if (this.state.error) {
       this.setState({
         isLoaded: false,
         error: null,
         quotes: []
       })
     } else {
       this.setState({})
     }
  }

  componentDidMount() {
    fetch("https://raw.githubusercontent.com/yozhikvtumane/random-quote-react/master/js/quotes.json")
      .then((res)=>res.json())
      .then((data)=>{
        this.setState({
          isLoaded: true,
          quotes: data.map(e=>e)
        })
      }, (error)=>{
        this.setState({
          isLoaded: true,
          error: error
        })
      })
  }

  render() {
      let {quotes, error, isLoaded} = this.state

      if (!isLoaded) {
        return (
          <React.Fragment>
              <p id="text">
                <span className="loader-active"></span>
              </p>
              <p id="author"></p>
              <Buttons href={null} onClick={this.nextQuote}/>
          </React.Fragment>
        )
      } else if (error) {
          return (
            <React.Fragment>
              <p id="text">
                There was an error with loading quotes...
              </p>
              <p id="author"></p>
              <Buttons href={null} onClick={this.nextQuote}/>
            </React.Fragment>
          )
      } else {
        let num = Math.floor(Math.random() * quotes.length)
        let link = 'https://twitter.com/intent/tweet?text=' + "\"" + encodeURI(quotes[num].quote) + "\" - " + encodeURI(quotes[num].author)
        return (
          <React.Fragment>
              <p id="text">{quotes[num].quote}</p>
              <p id="author">{"- " + quotes[num].author}</p>
              <Buttons href={link} onClick={this.nextQuote}/>
          </React.Fragment>
        )
      }
  }
}

export default QuoteBox
