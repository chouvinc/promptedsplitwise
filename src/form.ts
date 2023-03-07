import { createStore } from "solid-js/store";
import { useNavigate } from 'solid-start';

// TODO: consolidate this definition with the backend so we don't forget to update stuff
type Receipt = {
    name?: string,
    totalAmount?: number,
    lineItems: String[]
}

const useReceiptForm = () => {
    const [receipts, setReceipts] = createStore<Receipt[]>([]);

    const populateReceiptStoreFromSubmission = async (event: Event) => {
        event.preventDefault();

        const receiptElement = event.currentTarget as HTMLFormElement;
        const formData = new FormData(receiptElement);

        const response: Response = await fetch("http://localhost:8000/upload_receipts", {
            method: "POST",
            body: formData
        });

        const responseJson: Receipt[] = await response.json();
        setReceipts(responseJson);
        console.log(responseJson);
    }

    return { receipts, populateReceiptStoreFromSubmission }
}

export type {
    Receipt
}

export { useReceiptForm }