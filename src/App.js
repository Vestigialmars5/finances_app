import {useState} from 'react'
import './App.css';
import NewExpenses from './components/NewExpenses/NewExpenses.js'
import NewIncome from './components/NewIncome/NewIncome.js'
import CategoryDropdown from './components/CategoryDropdown/CategoryDropdown.js'


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