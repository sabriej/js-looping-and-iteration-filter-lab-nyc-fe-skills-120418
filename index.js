// Code your solution in this file
const drivers = [
  {
    name: 'Bobby',
    hometown: 'Pittsburgh' },
  {
    name: 'Sammy',
    hometown: 'New York' } ,
  {
    name: 'Sally',
    hometown: 'Cleveland' },
  {
    name: 'Annette',
    hometown: 'Los Angeles' },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay' }
];
expect(matchName(drivers, 'Bobby')).to.eql([
  {
    name: 'Bobby',
    hometown: 'Pittsburgh'
  },
  {
    name: 'Bobby',
    hometown: 'Tampa Bay'
  }
]);