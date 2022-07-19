import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QOUTES = [
  { id: 'q1', author: 'Max', text: 'Learning React Js is Fun!' },
  { id: 'q2', author: 'Maximillian', text: 'Learning React js is great!' }
];

const AllQuotes = (props) => {


  return (
    <div>
      <QuoteList quotes={DUMMY_QOUTES} />
    </div>
  )
}

export default AllQuotes;