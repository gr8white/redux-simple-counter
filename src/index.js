const { createStore } = Redux;

// Initialize the Redux store by passing it our reducer (defined globally in reducer.js)
const { subscribe, dispatch, getState } = createStore(reducer);

// Re-render the application every time the state changes
// Here we pass the Redux state to our render method (defined globally in render.js)
subscribe(() => render(getState()))

// Dispatch the "INCREMENT" action every time the +1 button is pressed
const incrementButton = document.getElementById('increment');
incrementButton.addEventListener('click', e => dispatch({ type: "INCREMENT" }));

// Dispatch the "DECREMENT" action every time the -1 button is pressed
const decrementButton = document.getElementById('decrement');
decrementButton.addEventListener('click', e => dispatch({ type: "DECREMENT" }));

// Dispatch the "INCREMENT" action every time the +5 button is pressed
const increment5Button = document.getElementById('increment5');
increment5Button.addEventListener('click', e => dispatch({ type: "INCREMENT5" }));

// Dispatch the "DECREMENT" action every time the -5 button is pressed
const decrement5Button = document.getElementById('decrement5');
decrement5Button.addEventListener('click', e => dispatch({ type: "DECREMENT5" }));

// Dispatch the "COLOR" action every time the value in colorChanger changes
const colorChanger = document.getElementById('colorChanger');
colorChanger.addEventListener('change', e => dispatch({ type: "COLOR" }));

// When 'Enter' key is pressed, "COUNTER" action is called to run
const setNum = document.getElementById('counterNum');
setNum.addEventListener('keyup', function(e) {if (e.keyCode === 13) {dispatch({ type: "COUNTER" }), console.log(initialState)}}) 
