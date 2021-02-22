const questions = [
  {
    id: 1,
    question:
      "We can go for keys when there is a possibility that our user could change the data.",
    options: [
      { id: 1, value: "Keys" },
      { id: 2, value: "Refs" },
      { id: 3, value: "Both" },
      { id: 4, value: "None of the above" }
    ],
    answer: { id: 1, value: "Keys" }
  },
  {
    id: 2,
    question: "JSX is typesafe.",
    options: [{ id: 1, value: "True" }, { id: 2, value: "False" }],
    answer: { id: 1, value: "True" }
  },
  {
    id: 3,
    question:
      "React merges the object you provide into the current state using __________.",
    options: [{ id: 1, value: "setState()" }, { id: 2, value: "State()" }],
    answer: { id: 1, value: "setState()" }
  },
  {
    id: 4,
    question: "Arbitrary inputs of components are called __________.",
    options: [
      { id: 1, value: "Keys" },
      { id: 2, value: "Props" },
      { id: 3, value: "Elements" },
      { id: 4, value: "Ref" }
    ],
    answer: { id: 2, value: "Props" }
  },
  {
    id: 5,
    question:
      "_________ can be done while more than one element needs to be returned from a component.",
    options: [
      { id: 1, value: "Abstraction" },
      { id: 2, value: "Packing" },
      { id: 3, value: "Insulation" },
      { id: 4, value: "Wrapping" }
    ],
    answer: { id: 4, value: "Wrapping" }
  },
  {
    id: 6,
    question:
      "Which of the following needs to be updated to achieve dynamic UI updates?",
    options: [{ id: 1, value: "State" }, { id: 2, value: "Props" }],
    answer: { id: 1, value: "State" }
  },
  {
    id: 7,
    question: "Lifecycle methods are mainly used ___________.",
    options: [
      { id: 1, value: "To keep track of event history" },
      { id: 2, value: "To enhance components" },
      { id: 3, value: "Free up resources" },
      { id: 4, value: "None of the above" }
    ],
    answer: { id: 3, value: "Free up resources" }
  }
];

export default questions;
