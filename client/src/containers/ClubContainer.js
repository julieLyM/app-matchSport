import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getClub } from '../actions/actionsClub';

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
      <div>
        {clubs.map(club => (
          <div>
            {club.name}
            <img src={club.imgUrl} />
          </div>
        ))}
      </div>
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
