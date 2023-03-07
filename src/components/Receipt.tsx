import { Component, For, Show } from "solid-js";

import styles from './Receipt.module.css';
import mockReceipts from '~/data/mock_receipts.json';
import { style } from "solid-js/web";

const Receipt: Component = () => {
    const receipts = mockReceipts;
    console.log(mockReceipts);
    return (
        <div class={styles.ReceiptBody}>
            <Show when={receipts.length > 0}>
                <For each={receipts}>
                    {(receipt) => (
                        <>
                        <div class={styles.header}> {receipt.name} </div>
                        <div> 
                            <For each={receipt.lineItems}>
                                {(lineItem) => (
                                    <>
                                    <div>{ lineItem.name }: { lineItem.amount }</div>
                                    <div class={styles.ReceiptContextButton}>
                                        <div class={styles.Accept}>Accept</div>
                                        {/* TODO: nav to context menu component from this button */}
                                        <div class={styles.Split}>Split</div>
                                        <div class={styles.WrongAmount}>Wrong Amount</div>
                                        <div class={styles.Skip}>Skip</div>
                                    </div>
                                    </>
                                )}
                            </For>
                        </div>
                        </>
                    )}
                </For>
            </Show>
            
        </div>
    )
};

export default Receipt;