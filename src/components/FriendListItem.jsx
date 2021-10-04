import PropTypes from "prop-types";
import styles from "./friends.module.css";
export default function FriendListItem({ id, name, avatar, isOnline }) {
  return (
    <li className={styles.item} key={id}>
      {isOnline ? (
        <span className={styles.status}>{isOnline}</span>
      ) : (
        <span className={styles.Online}>{isOnline}</span>
      )}
      <img className={styles.avatar} src={avatar} alt={name} width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
