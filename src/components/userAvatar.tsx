import { Avatar } from "@mui/material";

const UserAvatar = () => {
  function stringAvatar(name: string) {
    return {
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return <Avatar {...stringAvatar("Gustavo Albuquerque")} />;
};

export default UserAvatar;
