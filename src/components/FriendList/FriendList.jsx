// import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';

export const FriendList = ({ avatar, name, isOnline }) => {

    return (
        <div>{ }
            <li className={css.item}>
                <span className="status"></span>
                <img className="avatar" src={avatar} alt={name} width="48" />
                <p className="name">{name}</p>
            </li>
        </div>
    )
}