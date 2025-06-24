import "./App.css";
import { useState } from "react";

const INITIAL_VALUE = 15;
const App = () => {
  const [increment, setIncrement] = useState(INITIAL_VALUE);

  const handleIncrement = () => {
    setIncrement((prevCount) => Math.min(prevCount + 1, 25));
  };
  const handleDecrement = () => {
    setIncrement((prevCount) => Math.max(prevCount - 1, 10));
  };
  let bgColor = increment > 15 ? "red" : "blue";
  return (
    <div>
      <div className="main-container">
        <div className="text-container">
          <p>{increment}</p>
        </div>

        <div className="button-container" style={{ backgroundColor: bgColor }}>
          <button onClick={handleIncrement}> + Increment</button>
          <button onClick={handleDecrement}> - Decrement</button>
        </div>
      </div>
    </div>
  );
};
export default App;

// setIncrement((prev) => Math.min(prev + 1, 26));










import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);

  const FetchData = async () => {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json();

      setUsers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  useEffect(() => {
    //Debouncing
    let timer = setTimeout(() => {
      setSearchTerm(inputValue);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [inputValue]);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const FilterData = users.filter((ele) =>
    ele.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOnclick = (user) => {
    if (!selectedUsers.some((u) => u.id === user.id)) {
      setSelectedUsers((prev) => [...prev, user]);
    }
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search Here"
          value={inputValue}
          onChange={handleChange}
        />
      </div>
      {FilterData.map((ele) => {
        return (
          <p
            key={ele.id}
            style={{ cursor: "pointer", color: "blue" }}
            onClick={() => handleOnclick(ele)}
          >
            {ele.name}
          </p>
        );
      })}
      <div>
        {selectedUsers.map((ele) => {
          return <p key={ele.id}>{ele.name}</p>;
        })}
      </div>
    </div>
  );
};

export default App;




sum(2)(3, 4)
sum(2, 3, 4)
sum(2, 3)(4)

const person = {
  name: "Alice",
  greet: function () {
    console.log(`Hello, I'm ${this.name}`);
  },
};

const greetFn = person.greet;
greetFn();



function createCounter() {
  let count = 0;

  return function () {
    count++;
    console.log(count);
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

counter1(); // ?
counter1(); // ?
counter2(); // ?




Create a simple Todo List app using React. The app should have the following features:

🧩 Features:
Add a new task:
Input field to type the task.
Button to add the task to the list.
Prevent adding empty tasks.

Display tasks:
Show a list of all added tasks.

Toggle task completion:
Clicking on a task should toggle its completed state.
Completed tasks should have a strikethrough style.

Filter tasks:
Show three buttons to filter: All, Active, Completed.