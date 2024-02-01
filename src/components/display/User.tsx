import React, { CSSProperties } from "react";

type Props = {
  user: any;
  repos: any;
  handleResetUser: () => void;
};

const User: React.FC<Props> = ({ user, repos, handleResetUser }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        border: "3px solid #000",
        width: "40%",
      }}
    >
      <span>
        <img
          style={{
            width: "40px",
            height: "40px",
          }}
          src={user.avatar_url}
          alt="profile"
        />
        User:
        {user && (
          <div>
            <div>Name:{user!.name}</div>
            <div>Bio:{user!.bio}</div>
            <div>Location:{user!.location}</div>
          </div>
        )}
      </span>

      <h3>Repos:</h3>
      <ul
        style={{
          listStyle: "none",
        }}
      >
        {repos &&
          repos.map((repo: any) => {
            return <li key={repo.id}>{repo.name}</li>;
          })}
      </ul>
      <button onClick={handleResetUser}>Reset</button>
    </div>
  );
};

export default User;
