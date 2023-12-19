import { useState } from 'react';
import './App.css';
import * as quotesData from './assets/quotes.json';
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';


interface Quote {
    quote: string;
    author: string;
}

const quotes = quotesData.quotes;



const getRandomQuote = (): Quote => {
    const idx: number = Math.floor(Math.random() * Object.keys(quotes).length);
    return quotes[idx];
}

const getRandomColor = (): string => {
    const red = Math.floor(Math.random() * 128);
    const green = Math.floor(Math.random() * 128);
    const blue = Math.floor(Math.random() * 128);

    return `rgb(${red}, ${green}, ${blue})`;
}

const transition = 'all 1s';


function App() {
    const [quote, setQuote] = useState<Quote>(getRandomQuote());
    const [color, setColor] = useState<string>(getRandomColor());

    const handleNewQuote = () => {
        setQuote(getRandomQuote());
        setColor(getRandomColor());
    }

    return (
        <div className='background' style={{ backgroundColor: color, transition }} >
            <div id='quote-box'>
                <div className='quote-content' style={{ color: color, transition }}>
                    
                    <h2 id='text'>
                        <FaQuoteLeft size='25' style={{ marginRight: '10px'}} />
                        {quote.quote}
                        <FaQuoteRight size='25' style={{ marginLeft: '10px'}} />
                    </h2>

                    <p id='author' >- {quote.author}</p>

                    <a id='tweet-quote'
                        href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${quote.quote}`}
                        target='_blank'
                        style={{
                            backgroundColor: color,
                            marginRight: "10px",
                            transition
                        }}
                    >
                    <FaTwitter color='white' />
                    </a>
                    <button id='new-quote' onClick={handleNewQuote} style={{ backgroundColor: color, transition }}>New Quote</button>
                </div>
            </div>
        </div>
    )
}



export default App
