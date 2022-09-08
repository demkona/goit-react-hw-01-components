import user from 'json/user.json'

//  <Profile
//   username={user.username}
//   tag={user.tag}
//   location={user.location}
//   avatar={user.avatar}
//   stats={user.stats}
// /> 

export const Profile = ({ username, tag, location, avatar, stats }) => {
    return (
        <div className="profile">
            <div className="description">
                <img
                    src={avatar}
                    alt={username}
                    className="avatar"
                />
                <p className="name">{username}</p>
                <p className="tag">{tag}</p>
                <p className="location">{location}</p>
            </div>


            {/* <ul className="stats">
                <li>
                    <span className="label">{stats.followers}</span>
                    <span className="quantity">1000</span>
                </li>
                <li>
                    <span className="label">{stats.Views}</span>
                    <span className="quantity">2000</span>
                </li>
                <li>
                    <span className="label">{stats.Likes}</span>
                    <span className="quantity">3000</span>
                </li>
            </ul> */}

        </div>
    )
}


