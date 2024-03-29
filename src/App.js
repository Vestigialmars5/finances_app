// import my components and important things
import {useState} from 'react'
import './App.css';
import NewExpenses from './components/NewExpenses/NewExpenses.js'
import NewIncome from './components/NewIncome/NewIncome.js'
import CategoryDropdown from './components/CategoryDropdown/CategoryDropdown.js'
import RemoveCategory from './components/CategoryDropdown/RemoveCategory';


const App = () => {
  // define the categories useState for when a new category is added to the categories
  // default value of ["options"]
  const [categories,setCategories] = useState(["Categories"]);
  // define the myIncome useState for when we update income
  const [myIncome, setMyIncome] = useState(0);
  const [myExpenses, setMyExpenses] = useState(0)
  // define the component to show useState
  const [showComponent, setShowComponent] = useState(false)
  const [currComponent, setCurrComponent] = useState("Income")
  const [showRemove, setShowRemove] = useState("false")
  const [removing, setRemoving] = useState("off")

  // handle the new category with it as an parameter
  function handleAppCategory(newCategory) {
    // change the state of the categories
    // by making the previous categories in the list to a list with all prevs plus the added one
    setCategories((prevCategories) => [...prevCategories, newCategory]);
  }

  function handleRemoveCategory(categories,category){
    const index = categories.indexOf(category);
  }

  // sets the myIncome to the income amount to new amount plus the past amount
  function handleStoreIncome(incomeAmount) {
    // i think the incomeAmount is passed as the prevIncome and we add the incomeAmount
    setMyIncome(prevIncome => prevIncome + incomeAmount);
  }

  // sets the myExpenses to the Expenses amount to new amount plus the past amount
  function handleStoreExpenses(ExpensesAmount) {
    // i think the ExpensesAmount is passed as the prevExpenses and we add the ExpensesAmount
    setMyExpenses(prevExpenses => prevExpenses + ExpensesAmount);
    setMyIncome(prevIncome => prevIncome - ExpensesAmount);
  }

  // toggle between the expenses and income
  const handleToggleClick = () => {
    setShowComponent(!showComponent);
    if (currComponent == "Income"){
      setCurrComponent("Expenses");
    } else {
      setCurrComponent("Income");
    }
  }

  // toggle between showing the categories to remove
  const handleToggleRemoveCategory = () => {
    setShowRemove(!showRemove);
    if (removing == "on"){
      setRemoving("off");
      console.log("off")
    } else {
      setRemoving("on")
      console.log("on")
    }
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
          <div className='wrapper'>
            <div className='myIncome'>
              <h2>{myIncome.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h2>
            </div>
              <h1 className="title">YOUR PORTFOLIO</h1>
            <div className='myExpenses'>
              <h2>{myExpenses.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</h2>
            </div>
          </div>
        </header>
        {/* main - activities */}
        <main>
          <div>
            <h2>KEEP TRACK OF YOUR MONEY OR SOMETHING</h2>
            <p>MAYBE LIKE AN INSPIRATIONAL MONEY QUOTE HERE</p>
            <button className='toggleComponents' onClick={handleToggleClick}>{currComponent}</button>
          </div>
          <div className='add-income'>
            {showComponent && <NewIncome onStoreIncome={handleStoreIncome} myIncome={myIncome}/>}
          </div>
          <div className="add-categories">
            {!showComponent && <NewExpenses onStoreExpense={handleStoreExpenses}
            myExpenses={myExpenses}/>}
          </div>
          <div className='category-dropdown'>
            <CategoryDropdown categories={categories}  onAddCategory={handleAppCategory}/>
          </div>
          <div className='remove-dropdown'>
            <button onClick={handleToggleRemoveCategory}>Remove Category</button>
            {!showRemove && <RemoveCategory categories={categories} onRemoveCategory={handleRemoveCategory}/>}
          </div>
        </main>
      </div>
    </>
  );

}

export default App;