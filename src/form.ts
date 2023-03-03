import { createStore } from "solid-js/store";

// TODO: consolidate this definition with the backend so we don't forget to update stuff
type Receipt = {
    name?: string,
    totalAmount?: number,
    lineItems: String[]
}

const useReceiptForm = () => {
    const [receipts, setReceipts] = createStore<Receipt>({
        name: "",
        totalAmount: 0,
        lineItems: []
    });

    const populateReceiptStoreFromSubmission = async (event: Event) => {
        event.preventDefault();

        const receiptElement = event.currentTarget as HTMLFormElement;
        const formData = new FormData(receiptElement);

        const response: Response = await fetch("http://localhost:8000/upload_receipts", {
            method: "POST",
            body: formData
        })

        const responseJson = await response.json();
        console.log(responseJson);
        // TODO: set receipt store
    }

    return { receipts, populateReceiptStoreFromSubmission }
}

export type {
    Receipt
}

export { useReceiptForm }