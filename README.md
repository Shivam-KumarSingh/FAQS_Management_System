<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FAQ System - README</title>
</head>
<body>

<h1>FAQ System</h1>

<h2>Installation</h2>

<h3>1. Clone the repository:</h3>
<pre><code>
git clone https://github.com/your-username/faq-system.git
cd faq-system
</code></pre>

<h3>2. Install backend dependencies:</h3>
<pre><code>
cd backend
npm install
</code></pre>

<h3>3. Set up PostgreSQL:</h3>
<p>Install PostgreSQL and create a database.</p>
<p>Update the connection string in <code>config/database.js</code>.</p>

<h3>4. Run migrations (if applicable):</h3>
<pre><code>
npm run migrate
</code></pre>

<h3>5. Start the backend server:</h3>
<pre><code>
npm start
</code></pre>

<h3>6. Install frontend dependencies:</h3>
<pre><code>
cd ../frontend
npm install
</code></pre>

<h3>7. Start the frontend development server:</h3>
<pre><code>
npm start
</code></pre>

<h2>API Usage</h2>

<h3>1. GET /api/faqs</h3>
<p>Fetch all FAQs.</p>
<pre><code>
curl -X GET http://localhost:5000/api/faqs
</code></pre>

<h3>2. POST /api/faqs</h3>
<p>Create a new FAQ.</p>
<pre><code>
curl -X POST http://localhost:5000/api/faqs \
  -H "Content-Type: application/json" \
  -d '{"question": "What is Node?", "answer": "A JavaScript runtime"}'
</code></pre>

<h3>3. PUT /api/faqs/:id</h3>
<p>Update an existing FAQ by ID.</p>
<pre><code>
curl -X PUT http://localhost:5000/api/faqs/1 \
  -H "Content-Type: application/json" \
  -d '{"question": "What is Express?", "answer": "A web framework for Node.js"}'
</code></pre>

<h3>4. DELETE /api/faqs/:id</h3>
<p>Delete an FAQ by ID.</p>
<pre><code>
curl -X DELETE http://localhost:5000/api/faqs/1
</code></pre>

<h2>Frontend Features</h2>

<h3>1. Search and Filter</h3>
<p>Search FAQs by keyword and filter by category.</p>

<h3>2. Dark Mode</h3>
<p>Toggle between light and dark mode for better readability.</p>

<h3>3. Animations</h3>
<p>Smooth animations for FAQ cards using <code>framer-motion</code>.</p>

<h3>4. Add FAQ</h3>
<p>Use a rich text editor (<code>TinyMCE</code>) to add FAQs with formatted answers.</p>

<h2>Contribution Guidelines</h2>

<ol>
    <li>Fork the repository.</li>
    <li>Create a new branch (<code>git checkout -b feature-name</code>).</li>
    <li>Make your changes and commit them (<code>git commit -m 'feat: Add new feature'</code>).</li>
    <li>Push to your branch (<code>git push origin feature-name</code>).</li>
    <li>Create a pull request.</li>
</ol>

<h2>Tech Stack</h2>

<ul>
    <li><strong>Backend:</strong> Node.js, Express.js, PostgreSQL</li>
    <li><strong>Frontend:</strong> React.js, Material-UI, TinyMCE, Framer Motion</li>
    <li><strong>Tools:</strong> ESLint, Prettier, Jest</li>
</ul>

<h2>License</h2>
<p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>

</body>
</html>
