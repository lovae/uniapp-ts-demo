import moment from 'moment';

const timeCpmouted = (type: string) => {

  //type: :all:全部  w：一周内  m：一月内  q：三月内  y：一年内
  switch (type) {
    case 'all':
      return ''
    case 'w':
      return moment().subtract(7, 'days').format("YYYY-MM-DD hh:mm:ss");
    case 'm':
      return moment().subtract(30, 'days').format("YYYY-MM-DD hh:mm:ss");
    case 'q':
      return moment().subtract(90, 'days').format("YYYY-MM-DD hh:mm:ss");
    case 'y':
      return moment().subtract(365, 'days').format("YYYY-MM-DD hh:mm:ss");
    default:
      return ''
  }
}
let dateNow = function () {
  return moment().format("YYYY-MM-DD hh:mm:ss")
}
export {
  timeCpmouted,
  dateNow
}