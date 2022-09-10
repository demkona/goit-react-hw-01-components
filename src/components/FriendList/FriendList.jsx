// import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';

export const FriendList = ({ friends }) => {
    return (
        <div>{ }
            <ul className="friend-list">
                {friends.map(({ avatar, name, isOnline, id }) => (
                    <li className={css.item} key={id}>
                        <span className="status"></span>
                        <img className="avatar" src={avatar} alt={name} width="48" />
                        <p className="name">{name}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

