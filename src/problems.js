export const problems = [

  {
    id: 1,
    title: "Semantic Navigation with Dropdown",

    html_question: `Create a semantic <nav> with:
- Logo div
- 3 menu items
- One dropdown submenu (nested <ul>)
- Proper class names`,

    html_solution: `<nav class="navbar"><div class="logo"></div><ul><li><a href="#"></a></li><li class="dropdown"><a href="#"></a><ul><li><a href="#"></a></li></ul></li><li><a href="#"></a></li></ul></nav>`,

    python_question: `Write a function that checks if a number is prime.`,

    python_solution: `is_prime()`,

    sql_question: `Select top 5 highest salary employees.`,

    sql_solution: `ORDER BY salary DESC LIMIT 5`,

    logic_question: `
Q1. Three boxes are labeled: Apples, Oranges, Apples & Oranges.
All labels are wrong. You can pick only one fruit from one box.
A) Apples
B) Oranges
C) Apples & Oranges
D) Any box

Q2. Three switches control three bulbs in another room.
You may enter the room only once.
A) Turn all ON
B) Turn one ON, wait, turn OFF, turn another ON, then check heat
C) Random guess
D) Turn all OFF
`,

    logic_solution: ["C", "B"]
  },

  {
    id: 2,
    title: "Validated Registration Form",

    html_question: `Create a form with:
- Username (required)
- Email (type=email)
- Password (minlength 8)
- Submit button
- Proper label association`,

    html_solution: `<form><label for="u"></label><input id="u" required><label for="e"></label><input type="email" id="e"><label for="p"></label><input type="password" id="p" minlength="8"><button type="submit"></button></form>`,

    python_question: `How to write a recursive factorial function of a number n.`,

    python_solution: `factorial(n)`,

    sql_question: `Join users and orders tables.`,

    sql_solution: `JOIN orders ON users.id = orders.user_id`,

    logic_question: `
Q1. After 100 passes toggling lockers, which remain open?
A) Prime numbers
B) Even numbers
C) Perfect squares
D) Multiples of 10

Q2. Find missing number:
2 6 7
4 8 12
6 ? 17
A) 9
B) 10
C) 11
D) 12
`,

    logic_solution: ["C", "B"]
  },

  {
    id: 3,
    title: "Semantic Layout Structure",

    html_question: `Create layout using:
<header>, <main>, <section>, <aside>, <footer>`,

    html_solution: `<div><header></header><main><section></section><aside></aside></main><footer></footer></div>`,

    python_question: `How to Reverse a string in python without slicing.`,

    python_solution: `reversed()`,

    sql_question: `Group total sales by customer_id.`,

    sql_solution: `GROUP BY customer_id`,

    logic_question: `
Q1. Bridge crossing 1,2,7,10 minutes. Minimum time?
A) 19
B) 18
C) 17
D) 16

Q2. 9 coins, one heavier. Minimum weighings?
A) 1
B) 2
C) 3
D) 4
`,

    logic_solution: ["C", "B"]
  },

  {
    id: 4,
    title: "Table Builder Advanced",

    html_question: `Create a table with header row and 3 data rows.`,

    html_solution: `<table><tr><th></th></tr><tr><td></td></tr><tr><td></td></tr><tr><td></td></tr></table>`,

    python_question: `How to Ccheck if a given string is palindrome or not in python.`,

    python_solution: `palindrome`,

    sql_question: `Delete users where age < 18. in the users table`,

    sql_solution: `DELETE FROM users WHERE age < 18`,

    logic_question: `
Q1. One guard lies, one tells truth. Best strategy?
A) Ask which door is correct
B) Ask both guards
C) Ask what the other guard would say, choose opposite
D) Random choice

Q2. Father 4x son's age. In 20 years twice. Son’s age?
A) 8
B) 10
C) 12
D) 15
`,

    logic_solution: ["C", "B"]
  },

  {
    id: 5,
    title: "Image Card Component",
    html_question: `Create card with <img>, <h3>, <p>, button.`,
    html_solution: `<div><img><h3></h3><p></p><button></button></div>`,
    python_question: `Find largest number in list [1,2,3,4,5].`,
    python_solution: `max(1,2,3,4,5)`,
    sql_question: `Select distinct city names from customers table.`,
    sql_solution: `SELECT DISTINCT city FROM customers`,
    logic_question: `
Q1. Seating puzzle middle person?
A) A
B) B
C) C
D) D

Q2. Two ropes burn unevenly. Measure 45 min?
A) Burn one rope fully
B) Burn both one end
C) Burn one both ends & other one end
D) Cut rope
`,
    logic_solution: ["A", "C"]
  },

  {
    id: 6,
    title: "Video Section",
    html_question: `Create section with video and source.`,
    html_solution: `<section><video><source></video></section>`,
    python_question: `Create dictionary of first 5 natural numbers.`,
    python_solution: `{1:1,2:2,3:3,4:4,5:5}`,
    sql_question: `Update salary to 50000 where id = 2.`,
    sql_solution: `UPDATE employees SET salary = 50000 WHERE id = 2`,
    logic_question: `
Q1. 2^5 equals?
A) 16
B) 32
C) 64
D) 128

Q2. Pattern: 5,10,20,40,?
A) 60
B) 70
C) 80
D) 90
`,
    logic_solution: ["B", "C"]
  },

  {
    id: 7,
    title: "Ordered List Page",
    html_question: `Create ordered list with 5 items.`,
    html_solution: `<ol><li></li><li></li><li></li><li></li><li></li></ol>`,
    python_question: `Convert string 'Hello' to integer safely.`,
    python_solution: `int(Hello)`,
    sql_question: `How to Count total orders.`,
    sql_solution: `COUNT(*)`,
    logic_question: `
Q1. 7 factorial?
A) 720
B) 5040
C) 40320
D) 840

Q2. 3 machines make 90 items in 6 hrs. Per hour?
A) 10
B) 15
C) 18
D) 20
`,
    logic_solution: ["B", "B"]
  },

  {
    id: 8,
    title: "Form Validation Advanced",
    html_question: `Create form with required validation and pattern attribute.`,
    html_solution: `<form><input required pattern=".{5,}"><button type="submit"></button></form>`,
    python_question: `Check if a number 'n' is even.`,
    python_solution: `n% 2 == 0`,
    sql_question: `Select names starting with 'A'.`,
    sql_solution: `LIKE 'A%'`,
    logic_question: `
Q1. Perfect squares after 100 lockers?
A) Prime
B) Even
C) Perfect squares
D) Multiples of 10

Q2. Missing sequence: 3,9,27,81,?
A) 162
B) 200
C) 243
D) 300
`,
    logic_solution: ["C", "C"]
  }

];