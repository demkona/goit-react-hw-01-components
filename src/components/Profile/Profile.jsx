import PropTypes from 'prop-types';
import css from '../Profile/Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (

        <div className={css.profile}>
            <div className={css.description}>
                <img
                    src={avatar}
                    alt={username}
                    className={css.avatar}
                />
                <p className={css.name}>{username}</p>
                <p className={css.tag}>{tag}</p>
                <p className={css.location}>{location}</p>
            </div>
            <ul className={css.stats}>
                {Object.entries(stats).map(([key, value]) => (
                    <li className={css.itemList} key={key}>
                        <span className={css.label}>{key}</span>
                        <span className={css.quantity}>{value}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
        followers: PropTypes.number,
        views: PropTypes.number,
        likes: PropTypes.number,
    }).isRequired,
}
