import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <div>
            <ul className={css.friendList}>
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <li className={css.item} key={id}>
                        <span className={`${css.status} ${css[isOnline]}`}></span>
                        <img className={css.avatar} src={avatar} alt={name} width="48" />
                        <p className={css.name}>{name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            isOnline: PropTypes.bool.isRequired,
            id: PropTypes.number.isRequired,
        }).isRequired,
    ).isRequired,
};
