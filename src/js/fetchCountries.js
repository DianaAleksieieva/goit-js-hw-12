export default class ApiCountries {
  constructor() {
    this.searchQuery = '';
    
  }
  fetchCountries(url) {
    const BASE_URL = 'https://restcountries.eu/rest/v2/name';
      const params = "?fields=;name;capital;population;flag;languages;"
    return fetch(`${BASE_URL}/${this.searchQuery}?fields=${this.name}${params}`).then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
        }
 
      return response.json();
    }
  )
  .catch(error => console.log(error));
  }
  get query() {
    return this.searchQuery ;
  }
  set query(newQuery) {
    this.searchQuery = newQuery
    return this.searchQuery
  }
}
