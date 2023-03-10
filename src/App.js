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
