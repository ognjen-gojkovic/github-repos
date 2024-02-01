import React, { CSSProperties } from "react";

type Props = {
  user: any;
  repos: any;
};

const User: React.FC<Props> = ({ user, repos }) => {
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
      <span>User: {user && <span>{user!.name}</span>}</span>
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
    </div>
  );
};

export default User;
