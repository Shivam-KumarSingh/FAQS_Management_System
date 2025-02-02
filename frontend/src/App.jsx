import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import axios from "axios";
import FAQList from "./pages/FAQList";
import AddFAQ from "./pages/AddFAQ";
import "./App.css"; // Import custom CSS

function App() {
  const [faqs, setFaqs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    fetchFaqs();
  }, []);

  const fetchFaqs = async () => {
    try {
      const response = await axios.get("/api/faqs");
      setFaqs(response.data);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
    }
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory === "" || faq.category === selectedCategory)
  );

  return (
    <Router>
      <div className={`app ${isDarkMode ? "dark" : "light"}`}>
        <header className="header">
          <h1>FAQ System</h1>
          <nav>
            <Link to="/">Home</Link> | <Link to="/add">Add FAQ</Link>
          </nav>
          <button onClick={toggleDarkMode} className="theme-toggle">
            {isDarkMode ? "Light Mode" : "Dark Mode"}
          </button>
        </header>
        
        <Routes>
          <Route path="/" element={<FAQList />} />
          <Route path="/add" element={<AddFAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
