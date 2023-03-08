import {useState} from 'react'
import './App.css';

function NewExpenses(props) {
  const [category, setCategory] = useState("");

  function handleInputChange(event) {
    setCategory(event.target.value);
  }

  function addCategory() {
    const newCategory = category;
    props.onAddCategory(newCategory);
    setCategory("")
  }

  return (
    <>
      <label htmlFor="category-input">What will be the name for your new category: </label>
      <input type="text" value={category} onChange={handleInputChange} />
      <button onClick={addCategory}>Add New</button>
    </>
  );
}

function CategoryDropdown(props) {
  return (
    <select id="category-dropdown" defaultValue={props.categories[0]}>
      {props.categories.map((category) => (
      <option key={category} value={category}>{category}</option>))}
    </select>
  );
}

const App = () => {
  const [categories,setCategories] = useState(["Options"]);

  function handleAppCaregory(newCategory) {
    setCategories((prevCategories) => [...prevCategories, newCategory]);
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
          <div className="add-categories">
            <NewExpenses onAddCategory={handleAppCaregory}/>
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
