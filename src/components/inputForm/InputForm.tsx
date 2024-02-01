import React from "react";

type Props = {
  handleGetUser: (user: any) => void;
};

const InputForm: React.FC<Props> = ({ handleGetUser }) => {
  const [username, setUsername] = React.useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res: any = await fetch(`https://api.github.com/users/${username}`);
    const data = await res.json();

    const { avatar_url, name, location, bio } = data;
    const newUser = {
      avatar_url,
      name,
      location,
      bio,
    };
    handleGetUser(newUser);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="controls">
          <label>GitHub user:</label>
          <input type="text" onChange={handleChange} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InputForm;
