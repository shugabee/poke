import React from 'react'

const TeamSection = ({team}) => {
  return (
    <div>
        <h1>My Team</h1>
        <div className="team-container">
          { team.map((p,i) => {
            return <h4>hello</h4>
          })}
        </div>
    </div>
  )
}

export default TeamSection