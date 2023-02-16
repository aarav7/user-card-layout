import styles from '../css/Main.module.css';
import { useContext } from 'react'
import UserContext from '../context/user-context'
import UserCard from './UserCard'
import Loader from '../ui/Loader'

const Main = () => {

    const ctx = useContext(UserContext);
    const { users, isLoading, error } = { ...ctx }
    const userCards = ctx.users.map(item => <UserCard key={item.id} item={item} />);

    return (
        <div className={styles.main}>
            {!isLoading && users.length > 0 && !error && userCards}
            {!isLoading && users.length === 0 && !error && <p>Click on 'Get Users' to actually get the users</p>}
            {isLoading && !error && <Loader />}
            {error && <p>There was an error</p>}
        </div>
    )
}

export default Main;