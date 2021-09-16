console.log('-----------------------------------------------');

var l = console.log;

const stackSize = () => {
  const a = 1;
  const b = { c: 2, d: 3, e: 4 };

  try {
    // Try to keep going until we hit the stack limit
    return stackSize() + 1;
  } catch (e) {
    // We reached the end, recurse back
    return 1;
  }
};

console.log('Max Function Calls', stackSize());
