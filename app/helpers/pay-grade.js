import Ember from 'ember';

export function payGrade(params) {
  var pay = params[0].get('money');

  if (pay >= 30000){
    return '$$$$';
  } else if (pay >= 10000){
    return '$$$';
  } else if (pay >= 5000){
    return '$$';
  } else if (pay <= 4999){
    return '$';
  }
}


export default Ember.Helper.helper(payGrade);
