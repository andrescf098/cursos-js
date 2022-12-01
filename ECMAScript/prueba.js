const helloPromise = () => {
    return new Promise((resolve, reject) => {
      if (true) {
        resolve('Hey!');
      } else {
        reject('Whooops!');
      }
    });
  };


console.log(helloPromise())