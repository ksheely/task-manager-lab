from flask import Flask, request, jsonify, render_template
import json
import uuid

app = Flask(__name__)

DATA_FILE = "tasks.json"

def load_tasks():
    with open(DATA_FILE, "r") as f:
        return json.load(f)

def save_tasks(tasks):
    with open(DATA_FILE, "w") as f:
        json.dump(tasks, f, indent=2)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/tasks", methods=["GET"])  # BUG: frontend expects /tasks
def get_tasks():
    return jsonify(load_tasks())

@app.route("/tasks", methods=["POST"])
def add_task():
    tasks = load_tasks()

    task = {
        "id": str(uuid.uuid4()),
        "text": request.json["text"],
        "done": False
    }

    tasks.append(task)
    save_tasks(tasks)

    return jsonify({"status": "added"})

@app.route("/tasks/<task_id>", methods=["PUT"])
def complete_task(task_id):
    tasks = load_tasks()

    for task in tasks:
        if task["id"] == task_id:
            task["done"] = True   # BUG: comparison instead of assignment

    save_tasks(tasks)
    return jsonify({"status": "updated"})

if __name__ == "__main__":
    app.run(debug=True)
