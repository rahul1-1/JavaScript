const tasks = [
    {"id": "a", "dependencies": ["b", "c"]},
    {"id": "b", "dependencies": ["d"]},
    {"id": "c", "dependencies": ["b"]},
    {"id": "d", "dependencies": []},
    {"id": "e", "dependencies": ["f"]},
    {"id": "f", "dependencies": []},
  ];
  
  const totalTasks = tasks.length;
  let totalTasksExecuted = 0;
  let currentIndex = 0;
  
  // Helper function to remove the executed task from dependencies of other tasks
  const removeTaskFromDependencies = (taskId) => {
    tasks.forEach((task) => {
      const index = task.dependencies.indexOf(taskId);
      if (index !== -1) {
        task.dependencies.splice(index, 1);
      }
    });
  };
  
  // Function to execute the tasks based on their dependencies
  const executeTasks = () => {
    while (totalTasksExecuted < totalTasks) {
      const currentTask = tasks[currentIndex];
      
      // Check if the task has no dependencies and hasn't been executed yet
      if (currentTask.dependencies.length === 0 && !currentTask.executed) {
        console.log(currentTask.id);
        currentTask.executed = true;
        removeTaskFromDependencies(currentTask.id);
        totalTasksExecuted++;
      } else if (!currentTask.visitCount) {
        // Mark the task as visited for the first time
        currentTask.visitCount = 1;
      } else if (currentTask.visitCount > totalTasks) {
        // If the visit count exceeds the total number of tasks, a cycle is present
        console.log("Cycle detected.");
        break;
      } else {
        // Increment the visit count for the task to detect cycles
        currentTask.visitCount += 1;
      }
  
      // Move to the next task in the list (loop back to the beginning if needed)
      currentIndex++;
      if (currentIndex === tasks.length) {
        currentIndex = 0;
      }
    }
  };
  
  // Execute the tasks
  executeTasks();
  