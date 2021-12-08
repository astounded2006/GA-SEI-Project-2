import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/common/Home'
import CreateQuoteCard from './components/quoteCards/CreateQuoteCard'
import RandomQuoteCard from './components/quoteCards/RandomQuoteCard'
import Chuck from './components/quoteCards/Chuck'
import Ron from './components/quoteCards/Ron'
import Kanye from './components/quoteCards/Kanye'
import Nav from './components/common/Nav'


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/random-quote" element={<RandomQuoteCard />} />
        <Route path="/create-quote" element={<CreateQuoteCard />} />
        <Route path="/chuck" element={<Chuck />} />
        <Route path="/ron" element={<Ron />} />
        <Route path="/kanye" element={<Kanye />} />
      </Routes>
    </BrowserRouter>
  )
  
}

export default App