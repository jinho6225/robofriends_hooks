import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import styled from 'styled-components';
import Scroll from '../components/Scroll';

import { setSearchField } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchFiled: state.searchFiled,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event) => dispatch(setSearchField(event.target.value)),
  };
};

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

const App = (props) => {
  const [robots, setRobots] = useState([]);
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(props.searchFiled.toLowerCase());
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((users) => setRobots(users));
  }, [props.store]);

  return !robots.length ? (
    <Title>Loading...</Title>
  ) : (
    <div className="tc">
      <Title>RoboFriends</Title>
      <SearchBox {...props} />
      <Scroll>
        <CardList robots={filteredRobots} />
      </Scroll>
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
// export default App;
