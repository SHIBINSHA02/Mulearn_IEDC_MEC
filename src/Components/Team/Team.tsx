import React from 'react';
import styles from './Team.module.css';
import data from '../../../data.json';
import TeamCard from './TeamCard/TeamCard';

const Team: React.FC = () => {
  const mulearnData = Object.values(data.team.mulearn);
  const IEDCData = Object.values(data.team.IEDC);

  const renderTeamCards = (teamData: any) => {
    return Object.keys(teamData).map((key) => (
      <div key={key} className={styles.teamCardWrapper}>
        <TeamCard
          name={teamData[key].name}
          designation={teamData[key].designation}
          image={teamData[key].image}
          linkedIn={teamData[key].linkedIn}
        />
      </div>
    ));
  };

  return (
    <div className={styles.teamWrapper} id="team">
      <h1>Our Team</h1>
      <h2>IEDC Team</h2>
      <div className={styles.teamBodyWrapper} id="IEDC">
        <div className={styles.teamMembersDetailsWrapper}>
          {renderTeamCards(IEDCData)}
        </div>
      </div>
      <h2>Mulearn Team</h2>
      <div className={styles.teamBodyWrapper} id="mulearn">
        <div className={styles.teamMembersDetailsWrapper}>
          {renderTeamCards(mulearnData)}
        </div>
      </div>
    </div>
  );
};

export default Team;
