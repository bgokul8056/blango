function resolvedCallback(data){
  console.log('Resolved with data' + data);
}

function rejectCallback(msg){
  console.log('Reject with message ' + msg);
}

const lazyAdd = (a,b) => {
  const doAdd = (resolve, reject) => {
    if (typeof a!=="number" || typeof b!=="number"){
      reject("a and b must both be numbers")
    }
    else{
      const sum = a+b
      return resolve(sum)
    }
  }
  return new Promise(doAdd)
}

const p = lazyAdd(45,5)
p.then(resolvedCallback, rejectCallback)
lazyAdd("56","name").then(resolvedCallback, rejectCallback)