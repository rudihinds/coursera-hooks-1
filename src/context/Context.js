import { useState, useContext, createContext } from "react";

// when you call create context react will give you this context object back with two things on it
// a consumer and a provider.
// so you could destructure like this

/**
 * const { Consumer, Provider } = createContext();
however, in order to get the value out of this again, which is what we want.
we have to use a UserContext.Consumer and use the render props pattern –
passing a function as a child – to retrieve the value and display it.

go to oldcontext.js

 */
const UserContext = createContext();

const LevelFive = () => {
  const [ user, setUser ] = useContext(UserContext);

  return (
    <div>
      <p>level five rendered</p>
      <h5>{`${user.firstName} ${user.lastName} aged ${user.age}`}</h5>
      {/* <SomeConsumer /> */}
      <button
        onClick={() => {
          setUser(Object.assign({}, user, { suffix: user.age + 1 }));
        }}
      >
        Increment
      </button>
    </div>
  );
};

const LevelFour = () => (
  <div>
    <h4>fourth level</h4>
    <LevelFive />
  </div>
);

const LevelThree = () => (
  <div>
    <h3>third level</h3>
    <LevelFour />
  </div>
);

const LevelTwo = () => (
  <div>
    <h2>second level</h2>
    <LevelThree />
  </div>
);

const LevelOne = () => {
  const user = useState({
    firstName: "Tony",
    lastName: "Stark",
    age: 19,
    email: "Tony@email.com",
  });

  return (
    <UserContext.Provider value={user}>
      <h1>first level</h1>
      <LevelTwo />
    </UserContext.Provider>
  );
};


export default LevelOne;
