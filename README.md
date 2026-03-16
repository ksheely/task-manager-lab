# Python Task Manager Debugging Lab

This repository is a **GitHub-ready starter project** for a debugging lab.

Students are given a small Flask-based Task Manager app that is **intentionally broken**.
Their job is to identify and fix the bugs so the app can:

- Load tasks
- Add new tasks
- Mark tasks as completed

## Tech Stack

- Python
- Flask
- HTML
- JavaScript
- JSON file storage

## Setup

Create and activate a virtual environment if you want, then install dependencies:

```bash
pip install -r requirements.txt
```

Run the app:

```bash
python app.py
```

Open in a browser:

```text
http://127.0.0.1:5000
```

## Student Goal

Use:
- the browser console
- the network tab
- Flask terminal output
- careful code reading

to find and fix the bugs.

## Files

```text
python-task-manager-debug-starter/
├── app.py
├── requirements.txt
├── tasks.json
├── LAB_WORKSHEET.md
├── INSTRUCTOR_NOTES.md
├── templates/
│   └── index.html
└── static/
    └── script.js
```

## Notes

This repo includes multiple intentional issues across:
- Python backend routes and logic
- JavaScript frontend logic
- JSON data formatting

See `LAB_WORKSHEET.md` for the student handout.
