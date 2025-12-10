import React from "react";
import { FlatList } from "react-native";
import TaskItem from "./TaskItem";

const TaskList = ({ tasks, deleteTask, toggleComplete, setEditTask, darkMode }) => {
  return (
    <FlatList
      data={tasks}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TaskItem
          task={item}
          deleteTask={deleteTask}
          toggleComplete={toggleComplete}
          setEditTask={setEditTask}
          darkMode={darkMode}
        />
      )}
    />
  );
};

export default TaskList;
