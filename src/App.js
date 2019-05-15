import React, { Component } from 'react';
import List from './List'
import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state-drills/HelloWorld';
import Bomb from './state-drills/Bomb';
import RouletteGun from './state-drills/RouletteGun';

class App extends Component {
  static defaultProps = {
    store: {
      lists: [],
      allCards: {},
    }
  };

  render() {
    const { store } = this.props
    const debugDivStyle = {
      display: 'flex',
    };
    return (
      <main className='App'>

        {/* state lesson stuff */}
        <TheDate />

        {/* event handler lesson */}
        <div style={debugDivStyle}>
          <Counter />
          <Counter count={123} step={3} />
          <Counter count={3} step={10} />
        </div>

        {/* drill 1 with default props */}
        <HelloWorld />

        {/* drill 2 */}
        <Bomb />

        {/* drill 3 */}
        <RouletteGun bulletInChamber={4}/>

        <Messages name="Messages" unread={0} />
        <Messages name="Notifications" unread={10} />
        <header className='App-header'>
          <h1>Trelloyes!</h1>
        </header>
        <div className='App-list'>
          {store.lists.map(list => (
            <List
              key={list.id}
              header={list.header}
              cards={list.cardIds.map(id => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    );
  }
}

export default App;
