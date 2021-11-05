import { useSelector } from "react-redux";
import Task from "./Task";

function List() {
  const tasks = useSelector((state) => state.tasks);
  const filterTask = useSelector((state) => state.filter);

  return (
    <div>
      {filterTask === "done"
        ? tasks
            .filter((task) => task.done === false)
            .map((task) => <Task task={task} key={task.id} />)
        : filterTask === "undone"
        ? tasks
            .filter((el) => el.done === true)
            .map((task) => <Task task={task} key={task.id} />)
        : tasks.map((task) => <Task task={task} key={task.id} />)}
    </div>
  );
}
export default List;
