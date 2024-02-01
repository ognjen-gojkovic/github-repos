import React from "react";
import "./App.css";
import InputForm from "./components/inputForm/InputForm";
import User from "./components/display/User";

type User = {
  avatar_url: string;
  name: string;
  location: string;
  bio: string;
};

function App() {
  const [user, setUser] = React.useState<User | null>(null);
  const [repos, setRepos] = React.useState([]);

  const handleGetUser = (user: any) => {
    setUser(user);
  };

  React.useEffect(() => {
    const fetchRepos = async () => {
      if (user) {
        const res = await fetch(
          `https://api.github.com/users/${user.name}/repos`
        );

        const data = await res.json();
        const newRepos = data.map((repo: any) => ({
          id: repo.id,
          name: repo.name,
        }));
        setRepos(newRepos);
      }
    };

    fetchRepos();
  }, [user]);

  console.log(repos);
  return (
    <div className="App">
      <InputForm handleGetUser={handleGetUser} />
      {user ? <User user={user} repos={repos} /> : <h3>Serach for new user</h3>}
    </div>
  );
}

export default App;
