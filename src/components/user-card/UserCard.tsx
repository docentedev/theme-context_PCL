import styles from './UserCard.module.css'

interface UserCardProps {
    theme: string;
}

const UserCard = ({ theme }: UserCardProps) => {
    return (
        <div className={`${styles.card} ${theme}`}>User Card</div>
    )
}

export default UserCard