import React, { useState } from "react";
import axios from "axios";
import { Editor } from "@tinymce/tinymce-react";

const AddFAQ = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/api/faqs", { question, answer });
      alert("FAQ added successfully!");
    } catch (error) {
      console.error("Error adding FAQ:", error);
    }
  };

  return (
    <div>
      <h2>Add FAQ</h2>
      <form onSubmit={handleSubmit}>
        <label>Question:</label>
        <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} required />

        <label>Answer:</label>
        <Editor
          apiKey="y9wplj64ged3r7i5aty718yt1om35238opfdt6j5vjhbgk05"
          value={answer}
          onEditorChange={(newText) => setAnswer(newText)}
          init={{
            height: 200,
            menubar: false,
            plugins: "lists link",
            toolbar: "undo redo | bold italic | alignleft aligncenter alignright | bullist numlist outdent indent",
          }}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddFAQ;
