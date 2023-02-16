import styles from '../css/Main.module.css';
import { useContext } from 'react'
import UserContext from '../Context/user-context'
import UserCard from './UserCard'
import Loader from '../UI/Loader'

const Main = () => {

    const ctx = useContext(UserContext);

    console.log(ctx.users);
    const users = ctx.users.map(item => <UserCard key={item.id} item={item} />);
    return (
        <div className={styles.main}>
            {!ctx.isLoading && ctx.users.length > 0 && !ctx.error && users}
            {!ctx.isLoading && ctx.users.length === 0 && !ctx.error && <p>Click on 'Get Users' to actually get the users</p>}
            {ctx.isLoading && !ctx.error && <Loader />}
            {ctx.error && <p>There was an error</p>}
        </div>
    )
}

export default Main;