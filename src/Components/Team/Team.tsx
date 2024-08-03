import React from 'react';
import styles from './Team.module.css';
import data from '../../../data.json';
import TeamCard from './TeamCard/TeamCard';

const Team: React.FC = () => {
  const teamData = [
    { ...data.team.campusLead, designation: 'Campus Lead Mulearn, COO IEDCs' },
    { ...data.team.ceoIEDC, designation: 'CEO IEDC' },
    { ...data.team.campusCoLead, designation: 'Campus Co-Lead, COO IEDC' },
    { ...data.team.financeLead, designation: 'Finance Lead' },
    { ...data.team.technicalLead, designation: 'Technical Lead' },
    { ...data.team.mediaLead, designation: 'Social Media Lead' },
    { ...data.team.contentLead, designation: 'Content Lead' },
    { ...data.team.operationLead, designation: 'Operation Lead' },
    { ...data.team.desginCoordinator, designation: 'Desgin Coordinator, Creative Team IEDC' },
    { ...data.team.marketingLead, designation: 'Marketing Lead, Content Sub lead' },
    { ...data.team.opsSubLeadIEDC, designation: 'IEDC QUALITY AND OPS LEAD' },
    { ...data.team.designLead, designation: 'Design Team Lead, Creative Team Member' },
    { ...data.team.creativeSubLead, designation: 'Creative Team Sub Lead' },
    { ...data.team.marketingSubLead, designation: 'Marketing Sub Lead' },
    { ...data.team.contentWriter, designation: 'Content Writer' },
    { ...data.team.muplayAmbassador, designation: 'MuPlay Ambassador, Content Writer IEDC' },
    { ...data.team.mediaSubLead, designation: 'Social Media Sub Lead' },
    { ...data.team.communityLead, designation: 'Community Lead' },
    { ...data.team.techLead, designation: 'Tech Team Lead' },
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
