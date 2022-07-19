import { Route, useParams } from "react-router-dom";
import Comments from "../components/comments/Comments";
import HighlightedQuote from "../components/quotes/HighlightedQuote";

const DUMMY_QOUTES = [
  { id: 'q1', author: 'Max', text: 'Learning React Js is Fun!' },
  { id: 'q2', author: 'Maximillian', text: 'Learning React js is great!' }
];


const QuoteDetail = () => {
  const param = useParams();
  

  const quote = DUMMY_QOUTES.find(quote => quote.id === param.quoteID);

  // const quote = DUMMY_QOUTES.map(singleQuote => singleQuote.id == actualParam);
  console.log(quote);

  if (!quote) {
    return <p>Quote not found</p>
  }
  return (
    <div>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={`/quotes/${param.quoteID}/comments`}>
        <Comments />
      </Route>
    </div>
  )
}

export default QuoteDetail;