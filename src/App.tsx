import React from "react";

// Css
import styles from "./App.module.css";

// Components
import Header from "./components/header";
import Footer from "./components/footer";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div>
      <Header />
      <main className={styles.main}>
        <div>
          <h2>Oque você vai fazer?</h2>
          <TaskForm btnText="Criar Tarefa" />
        </div>
        <div>
          <h2>Suas tarefas:</h2>
          <TaskList />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
