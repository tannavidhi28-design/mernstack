import React from 'react'
import { Link } from 'react-router-dom'

export const IPLTeams = () => {

    const teams = [
        { id: 1, name: "MI" },
        { id: 2, name: "CSK" },
        { id: 3, name: "RCB" },
        { id: 4, name: "KKR" },
        { id: 5, name: "GT" },
        { id: 6, name: "RR" }
    ]

    return (
        <div style={{ textAlign: "center" }}>
            <h1>IPL Teams</h1>

            {
                teams.map((team) => {
                    return (
                        <li key={team.id}>
                            <Link to={`/team/${team.id}`}>
                                {team.name}
                            </Link>
                        </li>
                    )
                })
            }

        </div>
    )
}