import React, { Component } from 'react';
import FireProp from './fire-prop';
import FireCtrl from './fire-ctrl';
import FireFac from './fire-fac';
import FireVote from './fire-vote';


export default class App extends Component {
  render() {
    return (
      <div style={{padding: '1px'}}>
        <div style={{margin: '-1px'}}>
        <p><b>What features would you like added to CodeSandbox.io next?</b></p>
        <FireVote>Single click to deploy SPA with Now</FireVote>
        <FireVote>Integrate with GitHub</FireVote>
        <FireVote>Publish npm modules from browser</FireVote>
        <FireVote>Publish AWS Lambda functions</FireVote>
        <FireVote>P2P Deployment with IPFS</FireVote>
        <FireVote>Monetize ebeds with attention tokens</FireVote>
        <FireVote>Embeds with no title bar</FireVote>
        </div>
      </div>
    );
  }
}
