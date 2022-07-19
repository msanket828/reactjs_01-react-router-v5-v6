import QuoteForm from "../components/quotes/QuoteForm"

const NewQuotes=(props)=> {

  const addQuoteHandler=(quoteData)=> {
    // props.
    console.log(quoteData);
  }

  return <QuoteForm onAddQuote={addQuoteHandler}/>
}

export default NewQuotes;