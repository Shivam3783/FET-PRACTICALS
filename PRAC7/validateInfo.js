export function validateInfo(name,pass){
    if(name=='user' && pass=='password'){
      return 'Valid user';
    }
    return 0;
  }
