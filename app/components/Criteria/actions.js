export const INPUT = "INPUT";

export const handleInput = event => ({
  type: INPUT,
  [event.target.id]: event.target.value
});
