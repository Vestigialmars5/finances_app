import {useState} from 'react'
import './App.css';

// new income section component
function NewIncome(props) {
  // set the useState for the incomeAmount
  const [incomeAmount, setIncomeAmount] = useState(0);

  // function to do store the income if the incomeAmount is more than 0
  function handleStoringIncome() {
    if (incomeAmount > 0) {
      props.onStoreIncome(incomeAmount);
      setIncomeAmount(0);
    }
    else {
      alert("Can't add add 0 or less than 0 to your income, can you? That would be an expense. Just input a normal positive number o_o")
      setIncomeAmount(0);
    }
  }

  return (
    <>
      <input type="number" value={incomeAmount} onChange={e => setIncomeAmount(parseInt(e.target.value))} />
      <button className="plus-minus">+</button>
      <button className="plus-minus">-</button>
      <button className='addIncome' onClick={handleStoringIncome}>Add Income</button>
      <p>Current income: ${props.myIncome}</p>
    </>
  );
}

// new expenses section component
function NewExpenses(props) {
  // define the category useState for input change
  const [category, setCategory] = useState("");

  // everytime a character changes in the input box handle input change
  function handleInputChange(event) {
    // setCategory to the value inputed during the event
    setCategory(event.target.value);
  }

  // add a new category to options on click Add New
  function addCategory() {
    // set the category to a var to manipulate it
    const newCategory = category;
    // lift it up
    props.onAddCategory(newCategory);
    // reset the category
    setCategory("")
  }

  return (
    // displays a text an input box and the add new bttn
    <>
      <label htmlFor="category-input">What will be the name for your new category: </label>
      <input type="text" value={category} onChange={handleInputChange} />
      <button onClick={addCategory}>Add New</button>
    </>
  );
}

// dropdown menu component
function CategoryDropdown(props) {
  return (
    // displays a dropdown menu, the default value will be the default value set with setCategories
    // per category in categories display it as an option
    <select id="category-dropdown" defaultValue={props.categories[0]}>
      {props.categories.map((category) => (
      <option key={category} value={category}>{category}</option>))}
    </select>
  );
}

// app component
const App = () => {
  // define the categories useState for when a new category is added to the categories
  // default value of ["options"]
  const [categories,setCategories] = useState(["Categories"]);
  // define the myIncome useState for when we update income
  const [myIncome, setMyIncome] = useState(0);

  // handle the new category with it as an parameter
  function handleAppCategory(newCategory) {
    // change the state of the categories
    // by making the previous categories in the list to a list with all prevs plus the added one
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  }

  // sets the myIncome to the income amount to new amount plus the past amount
  function handleStoreIncome(incomeAmount) {
    // i think the incomeAmount is passed as the prevIncome and we add the incomeAmount
    setMyIncome(prevIncome => prevIncome + incomeAmount);
  }


  return (
    <>
      <div className="App">
      {/* header */}
        <header>
          {/* nav */}
          <nav>
            <h1>NAME OF THE APP HERE</h1>
            <ul>
              <li><a href="#">HOME</a></li>
              <li><a href="#">INCOME</a></li>
              <li><a href="#">EXPENSES</a></li>
              <li><a href="#">DATA</a></li>
              <li><a href="#">GOALS</a></li>
            </ul>
          </nav>
          <h1 className="title">YOUR PORTFOLIO</h1>
        </header>
        {/* main - activities */}
        <main>
          <div>
            <h2>KEEP TRACK OF YOUR MONEY OR SOMETHING</h2>
            <p>MAYBE LIKE AN INSPIRATIONAL MONEY QUOTE HERE</p>
          </div>
          <div className='add-income'>
            <NewIncome onStoreIncome={handleStoreIncome} myIncome={myIncome}/>
          </div>
          <div className="add-categories">
            <NewExpenses onAddCategory={handleAppCategory}/>
          </div>
          <div className='category-dropdwon'>
            <CategoryDropdown categories={categories}/>
          </div>
        </main>
      </div>
    </>
  );

}

export default App;


/* 1. an app that helps you organice your income expenses and give an analisis on how that money is used.
2. people that rely on tracking their money in a spreadsheet document. it takes a lot of time and it is not automated.
3. i want to include a way to add a new expense and be able to categorice it into whatever form of expense it is (medical, groceries,etc). i want it to be able to take in your income and be able to add where that income came from like with the expenses. also adding an optional description for each of those. i want it to display your current money after taking in the input or salary for the month and substracting after each expense. i also want it to be able to display data on those expenses and show where most of the money is used in and other analisis stuff.
4. i want it to be a website and then i want to develop a mobile app for it so that it can be more portable.
5. no
6. im learning about everything so anything goes, im going with react because of its dynamic displaying of elements without reloding each time.
7. the code provided before is all the stuff being displayed. i created this project using npx create-app... so i have a lot of other files and dependencies. the code before was the app.js in src folder.
8. no
9. i dont have a budget or anything, im also the only one working on this. 

this is a project im doing so that i have something to shoe in my portfolio */

/* 54 6f 20 72 65 63 61 70 20 77 68 61 74 20 77 65 20 64 69 73 63 75 73 73 65 64 2c 20 77 65 20 74 61 6c 6b 65 64 20 61 62 6f 75 74 20 74 68 65 20 66 6f 6c 6c 6f 77 69 6e 67 20 70 6f 69 6e 74 73 20 79 6f 75 20 63 6f 75 6c 64 20 61 64 64 20 69 6e 20 74 68 65 20 66 75 74 75 72 65 2e 0a 0a 48 65 72 65 20 61 72 65 20 73 6f 6d 65 20 69 64 65 61 73 20 66 6f 72 20 6d 6f 72 65 20 66 65 61 74 75 72 65 73 20 79 6f 75 20 63 6f 75 6c 64 20 61 64 64 20 69 6e 20 74 68 65 20 66 75 74 75 72 65 3a 0a 31 2e 20 61 6e 20 61 70 70 20 74 68 61 74 20 68 65 6c 70 73 20 79 6f 75 20 6f 72 67 61 6e 69 7a 65 20 79 6f 75 72 20 69 6e 63 6f 6d 65 20 65 78 70 65 6e 73 65 73 20 61 6e 64 20 67 69 76 65 73 20 61 6e 20 61 6e 61 6c 79 73 69 73 20 6f 6e 20 68 6f 77 20 74 68 61 74 20 6d 6f 6e 65 79 20 69 73 20 75 73 65 64 2e 0a 32 2e 20 70 65 6f 70 6c 65 20 74 68 61 74 20 72 65 6c 79 20 6f 6e 20 74 72 61 63 6b 69 6e 67 20 74 68 65 69 72 20 6d 6f 6e 65 79 20 69 6e 20 61 20 73 70 72 65 61 64 73 68 65 65 74 20 64 6f 63 75 6d 65 6e 74 2e 20 69 74 20 74 61 6b 65 */