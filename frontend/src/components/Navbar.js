import { Link } from 'react-router-dom'

const Navbar = () => {

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20,3H4C2.897,3,2,3.897,2,5v6v8c0,1.103,0.897,2,2,2h16c1.103,0,2-0.897,2-2v-8V5C22,3.897,21.103,3,20,3z M20.001,9 C20,9,20,9,20.001,9h-0.466l-2.667-4H20L20.001,9z M9.535,9L6.868,5h2.597l2.667,4H9.535z M14.535,9l-2.667-4h2.597l2.667,4H14.535 z M4,5h0.465l2.667,4H4V5z M4,19v-8h16l0.002,8H4z"></path></svg> Film Critic <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18,11c0-0.959-0.68-1.761-1.581-1.954C16.779,8.445,17,7.75,17,7c0-2.206-1.794-4-4-4c-1.517,0-2.821,0.857-3.5,2.104 C8.821,3.857,7.517,3,6,3C3.794,3,2,4.794,2,7c0,0.902,0.312,1.727,0.817,2.396C2.324,9.761,2,10.342,2,11v8c0,1.103,0.897,2,2,2 h12c1.103,0,2-0.897,2-2v-2.638l4,2v-7l-4,2V11z M13,5c1.103,0,2,0.897,2,2s-0.897,2-2,2s-2-0.897-2-2S11.897,5,13,5z M6,5 c1.103,0,2,0.897,2,2S7.103,9,6,9S4,8.103,4,7S4.897,5,6,5z M4,19v-8h12l0.002,8H4z"></path></svg></h1>
        </Link>
      </div>
    </header>
  )
}

export default Navbar