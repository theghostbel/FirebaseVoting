import React from 'react';
import * as firebase from 'firebase';
export default class FirebaseValue extends React.Component {
  state = {
    loaded: false,
    data: {},
  };

  static defaultProps = {
    prop: 'value',
  };

  componentDidMount() {
    const { path } = this.props;

    this.ref = firebase.database().ref(path);

    this.ref.on('value', snap => {
      console.log(snap.val());
      this.setState({
        data: snap.val(),
        loaded: true,
      });
    });
  }

  render() {
    if (!this.state.loaded) {
      return null;
    }
    const { children } = this.props;
    return React.cloneElement(children, {
      [this.props.prop]: this.state.data,
    });
  }
}
