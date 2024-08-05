import React, { useState } from 'react';
import styles from './Team.module.css';
import data from '../../../data.json';
import TeamCard from './TeamCard/TeamCard';

interface TeamMember {
  name: string;
  designation: string;
  designation2?: string;
  image: string;
  linkedIn: string;
}

const Team: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const Data: TeamMember[] = Object.values(data.team);

  const renderTeamCards = (teamData: TeamMember[], showAll: boolean) => {
    const visibleData = showAll ? teamData : teamData.slice(0, 6);
    return visibleData.map((member, index) => (
      <div key={index} className={styles.teamCardWrapper}>
        <TeamCard
          name={member.name}
          designation={member.designation}
          designation2 ={member.designation2|| ''}
          image={member.image}
          linkedIn={member.linkedIn}
        />
      </div>
    ));
  };

  return (
    <div className={styles.teamWrapper} id="team">
      <h1>Our Team</h1>
      <div className={styles.teamBodyWrapper} id="IEDC">
        <div className={styles.teamMembersDetailsWrapper}>
          {renderTeamCards(Data, showMore)}
        </div>
        {!showMore && (
          <button className={styles.showMoreBtn} onClick={() => setShowMore(true)}>
            Show More
          </button>
        )}
      </div>
    </div>
  );
};

export default Team;
