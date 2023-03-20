type Props = {}

const Demots = (props: Props) => {
  type Quote = {
    quote: string
    author: string
  }

  type id = 1 | 2 | 3 | 4 | 5

  type QuotesList = Record<id, Quote>

  const data: QuotesList = {
    1: {
      quote: '',
      author: 'Sage',
    },
    2: {
      quote: '',
      author: 'Sage',
    },
  }
  return <div>Demots</div>
}

export default Demots
