import React from 'react';
import * as firebase from 'firebase';
const slug = str => str.replace(/[^\w\d]/g, '-').toLowerCase();

export default class FireVote extends React.Component {
  state = {
    loaded: false,
    data: null,
  };

  static defaultProps = {
    prop: 'value',
    hidden: {},
  };

  onDown = () => {
    const auth = firebase.auth();
    auth.signInAnonymously().then(x => {
      const uid = auth.currentUser.uid;
      const { children } = this.props;
      const ref = firebase.database().ref(`votes/${slug(children)}/${uid}`);
      ref.remove();
    });
  };

  onUp = () => {
    const auth = firebase.auth();
    auth.signInAnonymously().then(x => {
      const uid = auth.currentUser.uid;
      const { children } = this.props;
      const ref = firebase.database().ref(`votes/${slug(children)}/${uid}`);
      ref.set(uid);
    });
  };

  componentDidMount() {
    const { children } = this.props;

    this.ref = firebase.database().ref(`votes/${slug(children)}`);

    this.ref.on('value', snap => {

      this.setState({
        data: snap.val(),
        loaded: true,
      });
    });
  }

  render() {
    const { onUp, onDown } = this;
    const { children } = this.props;
    const { data } = this.state;
    return (
      <tr>
        <td>{children}</td>
        <td>{(data && Object.keys(data).length) || 0}</td>
        <td>
        <button onClick={onUp}>+</button>
        {' '}
        <button onClick={onDown}>−</button>
        </td>
      </tr>
    );
  }
}
