const flashcardsData = {
  Java: [
    {
      id: 1,
      question: "What is the difference between == and .equals() in Java?",
      answer: "== compares object references, while .equals() compares the actual content/values of objects."
    },
    {
      id: 2,
      question: "What is the purpose of the 'static' keyword in Java?",
      answer: "The static keyword indicates that a member belongs to the class itself rather than to instances of the class. Static members are shared across all instances."
    },
    {
      id: 3,
      question: "What is polymorphism in Java?",
      answer: "Polymorphism allows objects to be treated as instances of their parent class while maintaining their own unique behavior. It includes method overriding and method overloading."
    },
    {
      id: 4,
      question: "What is the difference between ArrayList and LinkedList?",
      answer: "ArrayList uses a dynamic array internally, providing fast random access but slower insertions/deletions. LinkedList uses a doubly-linked list, providing fast insertions/deletions but slower random access."
    }
  ],
  Fullstack: [
    {
      id: 1,
      question: "What is the difference between GET and POST requests?",
      answer: "GET requests retrieve data and are idempotent, while POST requests submit data to be processed and can change server state."
    },
    {
      id: 2,
      question: "What is CORS and why is it important?",
      answer: "CORS (Cross-Origin Resource Sharing) is a security feature that controls which domains can access resources from your server, preventing unauthorized cross-origin requests."
    },
    {
      id: 3,
      question: "What is the Virtual DOM in React?",
      answer: "The Virtual DOM is a lightweight copy of the actual DOM that React uses to optimize rendering performance by minimizing direct DOM manipulations."
    },
    {
      id: 4,
      question: "What is the difference between state and props in React?",
      answer: "Props are read-only data passed from parent to child components, while state is mutable data managed within a component that can trigger re-renders when changed."
    }
  ],
  JavaScript: [
    {
      id: 1,
      question: "What is closure in JavaScript?",
      answer: "A closure is a function that has access to variables in its outer (enclosing) scope even after the outer function has returned."
    },
    {
      id: 2,
      question: "What is the difference between let, const, and var?",
      answer: "var is function-scoped and hoisted, let is block-scoped and not hoisted, const is block-scoped, not hoisted, and cannot be reassigned."
    },
    {
      id: 3,
      question: "What is event bubbling?",
      answer: "Event bubbling is when an event triggers on the deepest target element, then bubbles up through its parent elements in the DOM tree."
    },
    {
      id: 4,
      question: "What are Promises and how do they work?",
      answer: "Promises are objects representing the eventual completion or failure of an asynchronous operation. They have three states: pending, fulfilled, and rejected."
    }
  ],
  Python: [
    {
      id: 1,
      question: "What is a list comprehension in Python?",
      answer: "A list comprehension is a concise way to create lists using a single line of code with a for loop and optional conditional statement."
    },
    {
      id: 2,
      question: "What is the difference between a list and a tuple?",
      answer: "Lists are mutable (can be changed), while tuples are immutable (cannot be changed after creation)."
    },
    {
      id: 3,
      question: "What is the GIL in Python?",
      answer: "The Global Interpreter Lock (GIL) is a mutex that protects access to Python objects, preventing multiple threads from executing Python code simultaneously."
    },
    {
      id: 4,
      question: "What are decorators in Python?",
      answer: "Decorators are functions that modify the behavior of other functions by wrapping them with additional functionality."
    }
  ],
  React: [
    {
      id: 1,
      question: "What are React Hooks?",
      answer: "Hooks are functions that allow you to use state and other React features in functional components without writing class components."
    },
    {
      id: 2,
      question: "What is the difference between useEffect and useLayoutEffect?",
      answer: "useEffect runs after the DOM updates, while useLayoutEffect runs synchronously after DOM mutations but before the browser repaints."
    },
    {
      id: 3,
      question: "What is the Context API in React?",
      answer: "The Context API allows you to share data between components without having to pass props down manually at every level."
    },
    {
      id: 4,
      question: "What is the difference between controlled and uncontrolled components?",
      answer: "Controlled components have their state managed by React, while uncontrolled components manage their own state internally using refs."
    }
  ],
  "Node.js": [
    {
      id: 1,
      question: "What is the event loop in Node.js?",
      answer: "The event loop is a mechanism that allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded."
    },
    {
      id: 2,
      question: "What is the difference between require and import?",
      answer: "require is CommonJS syntax for synchronous module loading, while import is ES6 syntax for asynchronous module loading."
    },
    {
      id: 3,
      question: "What is middleware in Express.js?",
      answer: "Middleware are functions that have access to the request and response objects, and can modify them or end the request-response cycle."
    },
    {
      id: 4,
      question: "What is the purpose of package.json?",
      answer: "package.json contains metadata about the project, dependencies, scripts, and other configuration information for Node.js applications."
    }
  ]
};

export default flashcardsData;
