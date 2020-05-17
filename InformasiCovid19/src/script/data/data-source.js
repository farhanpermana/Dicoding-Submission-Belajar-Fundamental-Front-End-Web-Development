class DataSource {
    static searchClub(keyword) {
        return fetch(`https://covid-api.com/api/reports?q=${keyword}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.data) {
                return Promise.resolve(responseJson.data);
            } else {
                return Promise.reject(`${keyword} tidak ditemukan`);
            }
        })
    }
 }
  
 export default DataSource;