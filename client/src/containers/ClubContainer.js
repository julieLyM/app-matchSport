import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getClub } from '../actions/actionsClub';
import Score from '../components/Score';

class ClubContainer extends Component {
  componentDidMount() {
    this.fetchClub();
  }

  fetchClub = async () => {
    const { getClub } = this.props;
    return await getClub();
  };

  render() {
    const {
      clubs: { clubs },
    } = this.props;
    console.log(clubs);
    return (
      <>
        <h1>match club points</h1>
        <div
          style={{
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'center',
          }}
        >
          {clubs.map((club, i) => (
            <div
              style={{
                flex: '1 1 100px',
                border: 'solid purple 1px',
              }}
              key={i}
            >
              <p>{club.name}</p>
              <img style={{ maxWidth: '100%' }} src={club.image} />
              <Score />
            </div>
          ))}
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return { clubs: state.clubs };
};

const mapDispatchToProps = dispatch => {
  return {
    getClub: () => dispatch(getClub()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClubContainer);
