import PropTypes from 'prop-types';
import css from '../Profile/Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (

        <div className={css.profile}>
            <div className="description">
                <img
                    src={avatar}
                    alt={username}
                    className={css.avatar}
                />
                <p className="name">{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </div>


            <ul className="stats">
                <li>
                    <span className="label"></span>
                    <span className="quantity">{stats.followers}</span>
                </li>
                <li>
                    <span className="label"></span>
                    <span className="quantity">{stats.views}</span>

                </li>
                <li>
                    <span className="label"></span>
                    <span className="quantity">{stats.likes}</span>
                </li>
            </ul>

        </div>
    )
}

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
        followers: PropTypes.number.isRequired,
        views: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired
    })
}