// Write your code here

import './index.css'

const MatchCard = props => {
  const {recentMatches} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = recentMatches

  const color = matchStatus === 'Won' ? 'won' : 'lost'

  return (
    <li className="itemList">
      <img
        src={competingTeamLogo}
        className="competingTeamLogo"
        alt={`competing team ${competingTeam}`}
      />
      <p className="competingTeam">{competingTeam}</p>
      <p className="result">{result}</p>
      <p className={`wonOrLost ${color}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
