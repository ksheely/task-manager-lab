<?php

$file = 'tasks.json';

$tasks = json_decode(file_get_contents($file), true);

$action = $_GET['action'] ?? '';

if ($action == 'get') { // BUG: frontend calls 'list'
echo json_encode($tasks);
}

if ($action == 'add') {

$task = [
"id" => uniqid(),
"text" => $_POST['text'],
"done" => false
];

$tasks[] = $task;

// BUG: missing JSON_PRETTY_PRINT and no validation
file_put_contents($file, json_encode($tasks));

echo json_encode(["status" => "success"]);

}

if ($action == 'complete') {

$id = $_POST['id'];

foreach ($tasks as $task) { // BUG: missing reference &
if ($task['id'] == $id) {
$task['done'] = true;
}
}

file_put_contents($file, json_encode($tasks));

echo json_encode(["status" => "updated"]);

}

?>