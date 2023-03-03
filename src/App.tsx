import type { Component } from 'solid-js';
import { createSignal } from 'solid-js';
import { useReceiptForm } from './form';

import styles from './App.module.css';

const App: Component = () => {
  const { receipts, populateReceiptStoreFromSubmission } = useReceiptForm();

  return (
    <div class={styles.App}>
      <header class={styles.header}>
        {/* TODO fix this to be the location of the server endpoint */}
        <form class={styles.receiptForm} target="/test" onSubmit={populateReceiptStoreFromSubmission}>  
          <label for="receipts">
            Upload Receipts
          </label> <br/> <br/>
          <input type="file" id="receipts" name="receipts" multiple/> <br/> <br/>
          <input type="submit"/>
        </form>
      </header>
    </div>
  );
};

export default App;
