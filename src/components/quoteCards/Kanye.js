import React from 'react'

import { getKanyeQuotes } from '../../lib/api'

function Kanye() {

  const [kanyeQuotes, setKanyeQuotes] = React.useState()
  
  React.useEffect(() => {
    const pullData = async () => {
      const quoteData = await getKanyeQuotes()
      setKanyeQuotes(quoteData.data.quote)
    }
    pullData()
  }, [])

  return (

    <div className="text-css">
      <div className="background-four">
        <p className="title text-css-four">{kanyeQuotes} <br/> <span className="sub">Kanye West</span></p>
      </div>
    </div>

  )
}
export default Kanye