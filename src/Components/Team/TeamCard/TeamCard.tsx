import React from 'react';
import styles from './TeamCard.module.css';
import linkedInIcon from './linkedin.png';

const defaultImage = 'https://t3.ftcdn.net/jpg/01/18/01/98/360_F_118019822_6CKXP6rXmVhDOzbXZlLqEM2ya4HhYzSV.jpg';

interface TeamCardProps {
    name: string;
    designation: string;
    designation2: string;
    image?: string;
    linkedIn?: string;
}

const TeamCard: React.FC<TeamCardProps> = ({ name, designation,designation2, image, linkedIn }) => {
    return (
        <div className={styles.teamCard}>
            <div className={styles.teamCard__image}>
                <img
                    className={styles.photo}
                    src={image || defaultImage}
                    alt={name}
                    loading="lazy"
                />
            </div>
            <div className={styles.teamCard__content}>
            <h3 className={styles.teamCard__name}>{name}</h3>
            <p className={styles.teamCard__designation}>{designation}</p>
            {designation2 && <p className={styles.teamCard__designation}>{designation2}</p>}

                {linkedIn && (
                <a
                    href={linkedIn}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.teamCard__linkedin}
                >
                    <img
                        src={linkedInIcon}
                        alt="LinkedIn"
                        className={styles.linkedinimg}
                    />
                </a>
            )}
            </div>
        </div>
    );
};

export default TeamCard;
