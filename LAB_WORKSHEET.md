# Lab Worksheet: Debugging a Broken Python Task Manager

## Course Context
This lab supports topics such as:
- work/life balance
- personal task management
- debugging and troubleshooting
- client/server thinking

## Purpose
You are given a small Flask web app that is supposed to act as a simple task manager.

Right now, it is **broken**.

Your job is to debug it and get it working.

---

## Learning Objectives
By the end of this lab, you should be able to:

1. Run a small Flask application locally.
2. Use browser developer tools to diagnose frontend problems.
3. Trace API problems between frontend and backend code.
4. Fix basic Python, JavaScript, and JSON issues.
5. Explain how debugging differs from just writing code.

---

## Expected App Behavior
When the app is working, a user should be able to:

- see a list of tasks
- add a new task
- click a button to mark a task complete

---

## Part 1 – Run the App

Install dependencies:

```bash
pip install -r requirements.txt
```

Run the app:

```bash
python app.py
```

Open:

```text
http://127.0.0.1:5000
```

### Record Your First Impressions
What happens when the page loads?

- Does the page open?
- Do tasks display?
- Do you see any obvious errors?
- What seems broken?

Write notes here:

- 
- 
- 

---

## Part 2 – Check the Browser Tools

Open your browser developer tools.

Look at:

- **Console**
- **Network**

### Questions
1. Are there JavaScript errors?
2. Are API requests succeeding or failing?
3. Which request fails first?
4. What status code do you see?

Write notes here:

- 
- 
- 
- 

---

## Part 3 – Debug the Frontend

Open:

```text
static/script.js
```

Look for problems involving:
- method names
- button click handling
- API calls
- JavaScript syntax/logic

### Frontend Fix Log
List the bugs you found and fixed:

1.  
2.  
3.  

What changed after each fix?

- 
- 
- 

---

## Part 4 – Debug the Backend

Open:

```text
app.py
```

Check:
- route names
- request/response behavior
- task update logic

### Backend Fix Log
List the bugs you found and fixed:

1.  
2.  
3.  

How did you verify each fix?

- 
- 
- 

---

## Part 5 – Check the Data File

Open:

```text
tasks.json
```

Questions:
1. Is the JSON valid?
2. If not, what error does it cause?
3. How do you correct it?

Write notes here:

- 
- 
- 

---

## Part 6 – Final Verification

Once fixed, verify that the app can:

- [ ] Load tasks
- [ ] Add a task
- [ ] Mark a task complete

Take a screenshot of the final working app.

---

## Reflection Questions

1. Which bug was the hardest to find?
2. Which debugging tool helped the most?
3. What does this lab teach you about how software systems fail?
4. How might automated testing help catch bugs like these earlier?

---

## Optional Extension
After fixing the app, add one improvement:

- delete a task
- add a priority level
- add categories such as School / Work / Personal
- prevent empty tasks from being added

Describe your improvement here:

- 
