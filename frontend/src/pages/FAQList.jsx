// FAQList.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";

const FAQList = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/api/faqs")
      .then((response) => {
        setFaqs(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching FAQs", error);
      });
  }, []);

  return (
    <div>
      <h1>FAQs</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {faqs.map((faq) => (
            <li key={faq.id}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FAQList;
