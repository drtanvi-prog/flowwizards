import { QUOTES } from '../../../data/quotesData'
import QuoteCard from './QuoteCard'

const PremiumQuoteStack = ({ quotes = QUOTES }) => (
  <section
    className="relative w-full bg-white"
    style={{ paddingTop: '2rem', paddingBottom: '6rem' }}
  >
    <div className="max-w-360 mx-auto px-8 xl:px-16">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {quotes.map((q, i) => (
          <QuoteCard key={i} q={q} i={i} total={quotes.length} />
        ))}
      </div>
    </div>
  </section>
)

export default PremiumQuoteStack
