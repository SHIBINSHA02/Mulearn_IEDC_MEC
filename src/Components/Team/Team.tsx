import React from 'react';
import styles from './Team.module.css';
import data from '../../../data.json';
import TeamCard from './TeamCard/TeamCard';

const Team: React.FC = () => {
  const Data = Object.values(data.team);

  const renderTeamCards = (teamData: any) => {
    return Object.keys(teamData).map((key) => (
      <div key={key} className={styles.teamCardWrapper}>
        <TeamCard
          name={teamData[key].name}
          designation={teamData[key].designation}
          designation2={teamData[key].designation2}
          image={teamData[key].image}
          linkedIn={teamData[key].linkedIn}
        />
      </div>
    ));
  };

  return (
    <div className={styles.teamWrapper} id="team">
      <h1>Our Team</h1>
      <div className={styles.teamBodyWrapper} id="IEDC">
        <div className={styles.teamMembersDetailsWrapper}>
          {renderTeamCards(Data)}
        </div>
      </div>
    </div>
  );
};

export default Team;
