import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import type { JSX } from "solid-js";


import styles from './App.module.css';

const App: Component = () => {
  const [receipts, setReceipts] = createSignal([]);

  console.log("Hello");

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        <form class={styles.receiptForm} action="http://localhost:8000/upload_receipts" method="post" enctype="multipart/form-data">  
          <label for="receipts">
            Upload Receipts
          </label> <br/> <br/>
          <input type="file" id="receipts" name="receipts" onChange={(event) => {
            console.log(event.target.files);
          }} multiple/> <br/> <br/>
          <input type="submit" onSubmit={(event) => {
            console.log(event);
          }}/>
        </form>
      </header>
    </div>
  );
};

export default App;
