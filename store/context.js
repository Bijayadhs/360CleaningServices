import { createContext, useState } from 'react';

export const QuoteContext = createContext();

export const QuoteProvider = (props) => {
    const [quote, setQuote] = useState(false);
    return (
        <QuoteContext.Provider value={{ quote, setQuote }}>{props.children}</QuoteContext.Provider>
    )
}