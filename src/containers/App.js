import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import styled from 'styled-components';
import Scroll from '../components/Scroll';

const Title = styled.h1`
  font-size: 4em;
  font-weight: 600;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  color: white;
  text-shadow: 5px 5px 8px #000000;
  margin: 0.3 0;
`;

const useInput = (initialField) => {
  const [value, setValue] = useState(initialField);
  const onChange = (e) => {
    const { value } = e.target;
    setValue(value);
  };
  return { value, onChange };
};

const App = () => {
  const name = useInput('');
  const [robots, setRobots] = useState([]);
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(name.value.toLowerCase());
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((users) => setRobots(users));
  }, []);

  return !robots.length ? (
    <Title>Loading...</Title>
  ) : (
    <div className="tc">
      <Title>RoboFriends</Title>
      <SearchBox {...name} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default App;
