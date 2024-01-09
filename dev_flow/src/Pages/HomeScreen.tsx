import TaskBox from "./Taskbox";

const HomeScreen = () => {
  return (
    <div>
      <div className=" bg-red-500 w-full h-[calc(100vh-70px)] flex justify-center items-center">
        <TaskBox />
      </div>
    </div>
  );
};

export default HomeScreen;
