const initialState = {
  value: 0,
  color: "#000000"
}

const reducer = (state = initialState, action) => {
  let { type } = action;
  if (type === "INCREMENT") {
    return {
      value: state.value + 1
    }
  }
  if (type === "DECREMENT") {
    return {
      value: state.value - 1
    }
  }
  if (type === "INCREMENT5") {
    return {
      value: state.value + 5 
    }
  }
  if (type === "DECREMENT5") {
    return {
      value: state.value - 5
    }
  }
  if (type === "COLOR") {
    if (colorChanger.value === "black") {
      return {
        value: state.value,
        color: "#000000"
      }
    }
    if (colorChanger.value === "red") {
      return {
        value: state.value,
        color: "#ff0000"
      }
    }
    if (colorChanger.value === "green") {
      return {
        value: state.value,
        color: "#008000"
      }
    }
    if (colorChanger.value === "blue") {
      return {
        value: state.value,
        color: "#0000ff"
      }
    }
  }
  if (type === "COUNTER") {
    if (counterNum.value == "") {
      return {
        value: state.value = 0
      }
    } else {
      state.value = Number(counterNum.value)
      return {
        value: state.value
      }
    }
  }
  console.log(state)
  return state
}
