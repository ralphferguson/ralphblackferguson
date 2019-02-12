export default (state=[], action) => {
  switch (action.type) {
    case 'FETCH_DATA':
      return action.payload;
    default:
      return [
{ "name": "", "temperature": 0, "humidity": 0 },
{ "name": "", "temperature": 0, "humidity": 0 },
{ "name": "", "temperature": 0, "humidity": 0 },
{ "name": "", "temperature": 0, "humidity": 0 }
]

}
};
