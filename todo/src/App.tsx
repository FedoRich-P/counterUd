import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

export type todolistsType = {
    id: string;
    title: string;
    filter: FilterValuesType;
}

function App() {

    let todolistID1 = v1();
    let todolistID2 = v1();

    let [todolists, setTodolists] = useState<todolistsType[]>([
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, setTasks] = useState({
        [todolistID1]: [
            {id: v1(), title: "HTML&CSS", isDone: true},
            {id: v1(), title: "JS", isDone: true},
            {id: v1(), title: "ReactJS", isDone: false},
            {id: v1(), title: "Rest API", isDone: false},
            {id: v1(), title: "GraphQL", isDone: false},
        ],
        [todolistID2]: [
            {id: v1(), title: "HTML&CSS2", isDone: true},
            {id: v1(), title: "JS2", isDone: true},
            {id: v1(), title: "ReactJS2", isDone: false},
            {id: v1(), title: "Rest API2", isDone: false},
            {id: v1(), title: "GraphQL2", isDone: false},
        ]
    });


    function removeTask(todoListID: string, id: string) {
        setTasks({...tasks, [todoListID]: tasks[todoListID].filter(t => t.id !== id)});
    }

    function addTask(todoListID: string, title: string) {
        let newTask = {id: v1(), title: title, isDone: false};
        // let newTasks = [task, ...tasks];
        setTasks({...tasks, [todoListID]: [newTask, ...tasks[todoListID]]});
    }

    function changeStatus(todoListID: string, taskId: string, isDone: boolean) {

        const newTasks = tasks[todoListID].map(t => (
            (t.id === taskId) ? (t.isDone, t) : t
        ))

        setTasks({...tasks, newTasks})
    }

    // let task = tasks.find(t => t.id === taskId);
    // if (task) {
    //     task.isDone = isDone;
    // }
    //
    // setTasks([...tasks]);

    function changeFilter(todoListID: string, value: FilterValuesType) {
        setTodolists(todolists.map(filtered => filtered.id === todoListID ?
            {...filtered, filter: value} :
            filtered))
    }

    const createTodoList = todolists.map((task) => {


        let tasksForTodolist = tasks[task.id];

        if (task.filter === "active") {
            tasksForTodolist = tasksForTodolist.filter(t => t.isDone === false);
        }
        if (task.filter === "completed") {
            tasksForTodolist = tasksForTodolist.filter(t => t.isDone === true);
        }


        return (
            <Todolist
                todoListID={task.id}
                key={task.id}
                title={task.title}
                tasks={tasksForTodolist}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask}
                changeTaskStatus={changeStatus}
                filter={task.filter}
            />
        )
    })
    return (
        <div className="App">
            {createTodoList}
        </div>
    );
}

export default App;


// let [tasks, setTasks] = useState([
//     {id: v1(), title: "HTML&CSS", isDone: true},
//     {id: v1(), title: "JS", isDone: true},
//     {id: v1(), title: "ReactJS", isDone: false},
//     {id: v1(), title: "Rest API", isDone: false},
//     {id: v1(), title: "GraphQL", isDone: false},
// ]);

// let [filter, setFilter] = useState<FilterValuesType>("all");

// <Todolist title="What to learn"
//           tasks={tasksForTodolist}
//           removeTask={removeTask}
//     // changeFilter={changeFilter}
//           addTask={addTask}
//           changeTaskStatus={changeStatus}
//     // filter={filter}
// />

// let tasksForTodolist = tasks;

// if (filter === "active") {
//     tasksForTodolist = tasks.filter(t => t.isDone === false);
// }
// if (filter === "completed") {
//     tasksForTodolist = tasks.filter(t => t.isDone === true);
// }
//
// function changeFilter(value: FilterValuesType) {
//     setFilter(value);
// }