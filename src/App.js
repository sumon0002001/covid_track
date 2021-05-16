import React from 'react';

import Cards from './components/Cards/Cards';
import Chart from './components/Chart/Chart';
import CountryPicker from './components/CountryPicker/CountryPicker';
import { fetchData } from './api';

import styles from './App.module.css'

// import { Cards, Chart, CountryPicker} from './components';

class App extends React.Component {
  async componentDidMount() {
    const data = await fetchData();

    console.log(data);
  }
  render() {
    return (
      <div className={styles.container}>
        < Cards />
        < Chart />
        < CountryPicker />
      </div>
    )
  }
}

export default App;
