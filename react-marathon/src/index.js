import React from 'react';
import ReactDom from 'react-dom';
import HeaderBlock from './components/HeaderBlock';
import './index.css';

const AppList = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];
  const firstItem = <li>Item 0</li>;

  return (
    <ul>
      { firstItem }
      { items.map(item => <li>{item}</li>) }
      <li>{ items[0] }</li>
      <li>{ items[1] }</li>
    </ul>
  );
}

const App = () => {
  return (
    <>
      <HeaderBlock />
      <AppHeader />
      <AppInput />
      <AppList />
      <AppHeader />
      <AppList />
    </>
  );
}

const AppInput = () => {
  const placeholder = 'Type text ...';

  return (
    <label htmlFor="search">
      <input id="search" placeholder={placeholder} />
    </label>
  );
}


const AppHeader = () => {
  return (
    <h1 className="header">Hello, World!!!! </h1>
  )
}

//*show element on a page
//first arg element, 2nd where to show element
ReactDom.render(<App />, document.getElementById('root'));

