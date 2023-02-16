import styles from '../css/UserCard.module.css'

const UserCard = (props) => {

    const user = props.item;

    return (
        <div className={styles["user-card"]}>
            <img src={user.avatar} alt="avatar"></img>
            <span className={styles.name}>{user.first_name} {user.last_name}</span>
            <span className={styles.email}>{user.email}</span>
        </div>

    )
}

export default UserCard;