import { Profile } from 'components/Profile/Profile';
import user from "./data/user.json";
console.log(Profile)
console.log(user)

export const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  );
};

