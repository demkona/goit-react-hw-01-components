import PropTypes from 'prop-types';
import css from '../FriendList/FriendList.module.css';
import { FriendListItem } from '../FriendListItem/FriendListItem'

export const FriendList = ({ friends }) => {
    const friendsList = friends.map(item => <FriendListItem key={item.id} {...item} />);
    return <ul className={css.friendList}>{friendsList}</ul>;
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
