//var axios = require("axios").default;
export const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      tiers: '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '1e1087477bmshdb80fd90e32ad25p16fab5jsn9c9d1a74cad9'
    }
  };

