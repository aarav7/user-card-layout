import styles from '../css/Navbar.module.css';
import { useContext } from 'react'
import UserContext from '../context/user-context'

const Navbar = () => {

    const ctx = useContext(UserContext);

    async function fetchUsers() {
        try {
            ctx.getUsers();
            const response = await fetch("https://reqres.in/api/users?page=1");
            if (!response.ok) {
                throw new Error("Something went wrong");
            }
            const data = await response.json();
            const users = data.data;

            ctx.gotUsers(users);
        }
        catch (err) {
            ctx.errors(err.message);
        }

    }

    return (
        <div className={styles.navbar}>
            <span className={styles.brand}>aDMe</span>
            <button className={styles.btn} onClick={fetchUsers}>Get Users</button>
        </div>
    );
}

export default Navbar;