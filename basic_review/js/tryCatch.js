{
  try {
    setTimeout(() => {
      throw new Error('err1')
    }, 200);
  } catch (err) {
    console.log(err, 'zzzzzz01');
  }

  try {
    Promise.resolve().then(() => {
      throw new Error('err')
    })
  } catch (err) {
    console.log(err, 'zzzzzz02');
  }
}