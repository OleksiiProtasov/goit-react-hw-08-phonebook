import React, { Component } from 'react';
import { connect } from 'react-redux';
import Container from '../components/Container';

import { todosOperations, todosSelectors } from '../redux/Contacts';

// const barStyles = {
//   display: 'flex',
//   alignItems: 'flex-end',
//   marginBottom: 20,
// };

class TodosView extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    this.props.fetchTodos();
  }

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { showModal } = this.state;

    return (
      <Container>
          <h1>Phonebook</h1>
      
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoadingTodos: todosSelectors.getLoading(state),
});

const mapDispatchToProps = {
  fetchTodos: todosOperations.fetchTodos,
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosView);