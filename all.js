var l = console.log;

// ----------------------------------------------------------------
// Test Data Structures
const s = new Stack();

s.push(1);
l(s.getItems());
s.push(2);
l(s.getItems());
l('popped', s.pop());
l(s.getItems());

const q = new Queue();

s.push(1);
l(s.getItems());
s.push(2);
l(s.getItems());
l('popped', s.pop());
l(s.getItems());

// ----------------------------------------------------------------

// Visualize Stack
const function3 = () => {
  throw Error('error');
};

const function2 = () => {
  function3();
};

const function1 = () => {
  function2();
};

function1();

// ----------------------------------------------------------------

// Stack call limit
const f = () => f();
f();

// How many function calls?
const stackSize = () => {
  // Local variables are also pushed to the stack,
  // so we have less size available for functions
  // const a = 1;
  // Reference to an object, not actual values
  // const b = { c: 2, d: 3 };

  try {
    // Try to keep going until we hit the stack limit
    return stackSize() + 1;
  } catch (e) {
    // We reached the end, recurse back
    return 1;
  }
};

console.log('Max Function Calls', stackSize());

// ----------------------------------------------------------------

// Message Queue
console.log('Starting');

// Oldest goes first
setTimeout(() => {
  console.log('1');
}, 1000);

setTimeout(() => {
  console.log('2');
}, 1000);

setTimeout(() => {
  console.log('3');
}, 1000);

console.log('Ending');
