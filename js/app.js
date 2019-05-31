const quotes = [{
        quote: "I mean, they say you die twice. One time when you stop breathing and a second time, a bit later on, when somebody says your name for the last time.",
        author: "Banksy, street artist"
    },
    {
        quote: "Chop your own wood and it'll warm you twice.",
        author: "Henry ford"
    },
    {
        quote: "I don't want to believe, I want to know.",
        author: "Carl Sagan"
    },
    {
        quote: "If you've got one foot in tomorrow and one foot in yesterday, you'll piss on today.",
        author: "Debbie Novotny"
    },
    {
        quote: "There is love in holding on and there is love in letting go.",
        author: "Elizabeth Berg"
    },
    {
        quote: "The most fucked up joke life can play on you is letting you meet the right person at the wrong time.",
        author: "Unknown"
    },
    {
        quote: "I think the saddest people always try their hardest to make people happy. Because they know what it feels like to feel absolutely worthless and they don't want anyone else to feel like that.",
        author: "Robin Williams"
    },
    {
        quote: "When Students cheat on exams it's because our School System values grades more than Students value learning.",
        author: "Neil Degrasse Tyson"
    },
    {
        quote: "We ask 18-year-olds to make huge decisions about their career and financial future, when a month ago they had to ask to go to the bathroom.",
        author: "Adam Kotsko"
    },
    {
        quote: "You have to be odd to be number one.",
        author: "Dr. Seuss"
    }
];

const Buttons = (props) => {
    return (
        <div className="buttons">
            <a id="tweet-quote"
            target="_blank"
            href={props.href}>
            Tweet</a>
            <button id="new-quote" onClick={props.onClick}>New Quote</button>
        </div>
    )
}

class QuoteBox extends React.Component {
    constructor(props) {
        super(props);
        let quoteNum = Math.floor(Math.random() * quotes.length);
        this.nextQuote = this.nextQuote.bind(this);
        let {quote, author} = quotes[quoteNum];

        this.state = {
            quote: {
                text: quote,
                author: author,
                url: "https://twitter.com/intent/tweet?text=" + '"' + encodeURI(quote) + '" - ' + encodeURI(author)
            }
        };
    }

    nextQuote() {
        let quoteNum = Math.floor(Math.random() * quotes.length);
        let {quote, author} = quotes[quoteNum];

        this.setState({
            quote: {
                text: quote,
                author: author,
                url: "https://twitter.com/intent/tweet?text=" + '"' + encodeURI(quote) + '" - ' + encodeURI(author)
            }
        });
    }

    render() {
        return (
            <React.Fragment>
                <p id="text">{this.state.quote.text}</p>
                <p id="author">- {this.state.quote.author}</p>
                <Buttons href={this.state.quote.url} onClick={this.nextQuote}/>
            </React.Fragment>
        );
    }
}

ReactDOM.render( <QuoteBox /> , document.getElementById("quote-box"));