// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {eachTeam} = props
  const {name, teamImageUrl, id} = eachTeam

  return (
    <li className="lisItem">
      <Link to={`/team-matches/${id}`} className="linkItems">
        <img src={teamImageUrl} className="teamLogoImage" alt={name} />
        <p className="teamName">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
