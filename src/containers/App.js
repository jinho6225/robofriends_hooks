import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import styled from 'styled-components';
import Scroll from '../components/Scroll';

import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = (state) => {
  return {
    searchFiled: state.searchRobots.searchFiled,
    robots: state.requestRobots.robots,
    isPending: state.requestRobots.isPending,
    error: state.requestRobots.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (event) => dispatch(setSearchField(event.target.value)),
    onRequestRobots: () => dispatch(requestRobots()),
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
  const { onRequestRobots, robots, searchFiled, isPending } = props;
  const filteredRobots = robots.filter((robot) => {
    return robot.name.toLowerCase().includes(searchFiled.toLowerCase());
  });

  useEffect(() => {
    onRequestRobots();
  }, [onRequestRobots]);

  return isPending ? (
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
