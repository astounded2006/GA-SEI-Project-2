import React from 'react'
import { getRonQuotes } from '../../lib/api'

function Ron() {
  const [ronQuotes, setRonQuotes] = React.useState()
  
  React.useEffect(() => {
    const pullData = async () => {
      const quoteData = await getRonQuotes()
      setRonQuotes(quoteData.data)
    }
    pullData()
  }, [])


  return (

    <div className="text-css">
      <div className="background-five">
        <p className="title text-css-five">{ronQuotes} <br/> <span className="sub">Ron Swanson</span></p>
      </div>
    </div>

  )
}
export default Ron