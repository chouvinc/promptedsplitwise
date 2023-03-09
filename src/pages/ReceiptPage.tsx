import { Component, createSignal, For } from "solid-js";
import { createStore } from "solid-js/store";
import { Receipt as ReceiptModel } from '~/model/Receipt';
import ReceiptStep from '~/components/ReceiptStep';

import styles from './ReceiptPage.module.css';
import mockReceipts from '~/data/mock_receipts.json';

const [total, setTotal] = createSignal(0);
const ReceiptPage: Component = () => {
    const processedReceipts = createStore<ReceiptModel[]>([]);
    // TODO: pass in the store from shared global state instead
    const receipts = mockReceipts;
    const firstReceipt = receipts.length > 0 ? receipts.slice(0, 1) : null;
    const theRest = receipts.length > 0 ? receipts.slice(1) : null;

    const getReceiptJsx = (receipts: Receipt[], isHidden: Boolean = false) => {
        if (receipts.length <= 0) return (<div/>);
        return (<For each={receipts}>
            {(receipt) => (
                <div class={isHidden ? styles.Hidden : styles.Fullscreen}>
                    <div class={styles.Header}> {receipt.name} </div>
                    <ReceiptStep receipt={receipt} total={total}/>
                    <div class={styles.Total}>Total: {
                        (Math.round(total() * 100) / 100).toFixed(2)
                    }</div>
                </div>
            )}
        </For>);
    }

    return (
        <div class={styles.ReceiptBody}>
            {getReceiptJsx(firstReceipt)}
            {getReceiptJsx(theRest, true)}
        </div>
    )
};

export default ReceiptPage;
export { total, setTotal };