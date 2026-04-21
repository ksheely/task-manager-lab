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

- The page does open but there is very minimal design
- The tasks do not display even when you try to enter a task
- Obvious errors are that you cannot add tasks to the task manager
- the main broken item is that you cannot add tasks to the task manager

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

- Yes there is a 500 error (internal server error) and a 405 (Method Not Allowed) error in the script.js file
- The api requests are failing due to these above http errors
- The GET request fails first when you first try to load the page but the post after attempting to submit something also fails
- 500 and 405

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

1.  The forEach loop in the Load tasks function had a syntax error (foreach)
2.  The button "${task.id}" value needed quotes around it to display the tasks name when added to the list
3.  These bugs where mostly syntax

What changed after each fix?

- Still got 405 errors for wrong method
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

1.  app.route task needed to be tasks in order to be found by the frontend
2.  In the `/tasks/<task_id>` route task['done'] was compared to True insded of being set to true
3.  

How did you verify each fix?

- I verified that the routes matched the front end routes
- I made sure that the task ID was actually set to a value insted of being compared to TRUE 
- 

---

## Part 5 – Check the Data File

Open:

```text
tasks.json
```

Questions:
1. Is the JSON valid? NO
2. If not, what error does it cause? json.decoder.JSONDecodeError: Illegal trailing comma before end of array: line 2 column 61 (char 62)
3. How do you correct it? Removed the column

Write notes here:

- 
- 
- 

---

## Part 6 – Final Verification

Once fixed, verify that the app can:

- [X] Load tasks
- [X] Add a task
- [X] Mark a task complete

Take a screenshot of the final working app.

---

## Reflection Questions

1. Which bug was the hardest to find?
    The hardest thing to find was the JSON comma error because I was focused on debugging the files one by one.
2. Which debugging tool helped the most?
    The dev tools in microsoft edge helped a lot along with github copilot
3. What does this lab teach you about how software systems fail?
    It teaches you that software systems can easily fail due to human error
4. How might automated testing help catch bugs like these earlier?
    Automated testing would have caught these bugs before a merge request preventing them from making it to production.

---

## Optional Extension
After fixing the app, add one improvement:

- delete a task
- add a priority level
- add categories such as School / Work / Personal
- prevent empty tasks from being added

Describe your improvement here:

- 
