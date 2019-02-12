import fetchJson from '../apis/fetchJson';

export const fetchData = () => async dispatch => {
    const response = await fetchJson.get('/data_v2.json');

    dispatch({ type: 'FETCH_DATA', payload: response.data })
  };

  export const fetchSpecData = (id) => async dispatch => {
    const response = await fetchJson.get(`/users/${id}`);

    dispatch({ type: 'FETCH_SPEC_DATA', payload: response.data})
  };

  // const response = await fetchJson.get('London&appid=21b185ec33f8f0298a99a7712726c8d6');
  //const response = await fetchJson.get('37.8267,-122.4233');

  // https://weather-ydn-yql.media.yahoo.com/forecastrss?location=sunnyvale,ca&oauth_consumer_key=dj0yJmk9NWFCUk1DMVR3OEtMJnM9Y29uc3VtZXJzZWNyZXQmc3Y9MCZ4PWFm
