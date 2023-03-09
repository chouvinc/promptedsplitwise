import { createSignal } from 'solid-js';
import { Receipt as ReceiptModel} from '~/model/Receipt';
import { total, setTotal } from '~/pages/ReceiptPage';

import styles from './ReceiptStep.module.css';

const ReceiptStep = (props: {
    receipt: ReceiptModel;
}) => {

    const jsxForLineItem = (lineItem: any) => {
        const [accepted, setAccepted] = createSignal(false);

        const handleAccept = (event: Event, lineItem: any) => {
            setTotal(total() + (accepted() ? -lineItem.amount : lineItem.amount));
            setAccepted(!accepted());
        }

        return (
            <div>
                <div class={styles.LineItemText}>{ lineItem.name }: { lineItem.amount }</div>
                <div class={styles.ReceiptContextButton}>
                    <div class={accepted() ? styles.Accepted: styles.Accept} onClick={(e)=> handleAccept(e, lineItem)}>Accept</div>
                    {/* TODO: nav to context menu component from this button */}
                    <div class={styles.Split}>Split</div>
                    <div class={styles.WrongAmount}>Wrong Amount</div>
                    <div class={styles.Skip}>Skip</div>
                </div>
            </div>
        );
    }

    return (
        <div> 
            <For each={props.receipt.lineItems}>
                {jsxForLineItem}
            </For>
        </div>
    );
}

export default ReceiptStep;