import React from 'react';
import styles from './Team.module.css';
import data from '../../../data.json';
import TeamCard from './TeamCard/TeamCard';


const Team: React.FC = () => {
  const mulearnData = Object.values(data.team.mulearn);

  const IEDCData = Object.values(data.team.IEDC);


  return (
    <div className={styles.teamWrapper} id="team">
      <h1>Our Team</h1>
      <h2>IEDC Team</h2>
      <div className={styles.teamBodyWrapper} id="IEDC">

        <div className={styles.teamMembersDetailsWrapper}>
          {IEDCData.map((member, index) => (
            <div key={index} className={styles.teamCardWrapper}>
              <TeamCard
                name={member.name}
                designation={member.designation}
                image={member.image}
              />
            </div>
          ))}
        </div>
      </div>
      <h2>Mulearn Team</h2>
      <div className={styles.teamBodyWrapper} id="mulearn">

        <div className={styles.teamMembersDetailsWrapper}>
          {mulearnData.map((member, index) => (
            <div key={index} className={styles.teamCardWrapper}>
              <TeamCard
                name={member.name}
                designation={member.designation}
                image={member.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
