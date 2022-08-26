import { useState } from "react";

const LevelFive = ({ user, setUser }) => {
  return (
    <div>
      <h5>{`${user.firstName} ${user.lastName} aged ${user.age}`}</h5>
      <button
        onClick={() => {
          setUser(Object.assign({}, user, { age: user.age + 1 }));
        }}
      >
        Increment Age
      </button>
    </div>
  );
};

const LevelFour = ({ user, setUser }) => (
  <div>
    <h4>fourth level</h4>
    <LevelFive user={user} setUser={setUser} />
  </div>
);

const LevelThree = ({ user, setUser }) => (
  <div>
    <h3>third level</h3>
    <LevelFour user={user} setUser={setUser} />
  </div>
);

const LevelTwo = ({ user, setUser }) => (
  <div>
    <h2>second level</h2>
    <LevelThree user={user} setUser={setUser} />
  </div>
);

const LevelOne = () => {
  const [user, setUser] = useState({
    firstName: "Tony",
    lastName: "Stark",
    age: 25,
    email: "tony@email.com",
  });

  return (
    <>
      <h1>first level</h1>
      <LevelTwo user={user} setUser={setUser} />
    </>
  );
};

export default UserContext;
