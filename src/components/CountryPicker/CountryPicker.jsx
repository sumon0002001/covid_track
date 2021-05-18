import React, { useEffect, useState} from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';
import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({handleCountryChange}) => {
  
    const [fetchedCountries, setFetchCountries] = useState([])
  

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchCountries(await fetchCountries())
    }

    fetchAPI();
  }, [setFetchCountries])

  
  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value) }>
        <option value="global">Global</option>
        {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
      </NativeSelect>
    </FormControl>
  )
};

export default CountryPicker;
