import { Link } from 'react-router-dom'

function Home() {
  return (
    <><div className="home">
      <div className="block">
        <Link to="/chuck">
          <div className="chuck">
          </div>
        </Link>
        <Link to="/ron">
          <div className="ron">
          </div>
        </Link>
        <Link to="/kanye">
          <div className="kanye">
          </div>
        </Link>
        <Link Link to="/random-quote">
          <div className="home-card">
          Be Inspired
          </div>
        </Link>
        <Link to="/create-quote">
          <div className="home-card">
        Create your own quote card
          </div>
        </Link>
      </div>
    </div></>
  )
}

export default Home