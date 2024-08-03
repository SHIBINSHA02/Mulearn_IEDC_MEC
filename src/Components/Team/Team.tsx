import React from 'react';
import styles from './Team.module.css';
import data from '../../../data.json';
import TeamCard from './TeamCard/TeamCard';

const Team: React.FC = () => {
  const teamData = [
    { ...data.team.staffAdvisor, designation: 'Staff Advisor' },
    { ...data.team.campusLead, designation: 'Campus Lead' },
    { ...data.team.campusCoLead, designation: 'Campus Co-Lead' },
    { ...data.team.treasurer, designation: 'Treasurer' },
    { ...data.team.technicalLead, designation: 'Technical Lead' },
    { ...data.team.mediaLead, designation: 'Media Lead' },
    { ...data.team.contentLead, designation: 'Content Lead' },
    { ...data.team.operationLead, designation: 'Operation Lead' },
    { ...data.team.eventCoordinator, designation: 'Event Coordinator' },
    { ...data.team.marketingLead, designation: 'Marketing Lead' },
    { ...data.team.communityManager, designation: 'Community Manager' },
    { ...data.team.designLead, designation: 'Design Lead' },
    { ...data.team.researchLead, designation: 'Research Lead' },
    { ...data.team.innovationLead, designation: 'Innovation Lead' },
    { ...data.team.logisticsLead, designation: 'Logistics Lead' },
    { ...data.team.sponsorshipLead, designation: 'Sponsorship Lead' },
    { ...data.team.outreachLead, designation: 'Outreach Lead' },
    { ...data.team.publicRelationsLead, designation: 'Public Relations Lead' },
    { ...data.team.strategyLead, designation: 'Strategy Lead' },
    { ...data.team.financeLead, designation: 'Finance Lead' },
    { ...data.team.hrLead, designation: 'HR Lead' },
    { ...data.team.partnershipLead, designation: 'Partnership Lead' },
    { ...data.team.developmentLead, designation: 'Development Lead' },
    { ...data.team.sustainabilityLead, designation: 'Sustainability Lead' }
  ];

  return (
    <div className={styles.teamWrapper} id="team">
      <h1>Our Team</h1>
      <div className={styles.teamBodyWrapper}>
        <div className={styles.teamMembersDetailsWrapper}>
          {teamData.map((member, index) => (
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
