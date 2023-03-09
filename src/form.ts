import { createStore } from "solid-js/store";
import { useNavigate } from 'solid-start';
import { v4 as uuidv4 } from 'uuid';

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
    }

    return { receipts, populateReceiptStoreFromSubmission }
}

type Member = {
    id: string,
    name: string,
    contact: Contact,
    amountDue: number // positive or negative number of what a member is owed
}

class Contact {
    private readonly contactInfo: string;
    private constructor(email?: string, phone?: string) {
        if (phone) { this.contactInfo = phone; }
        else if (email) { this.contactInfo = email; }
        else { throw new Error('Must provide at least one method of contact!'); }
    }

    public static new(email?: string, phone?: string): Contact {
        // TODO: validate email & phone numbers
        return new Contact(email, phone);
    }
}

type Group = {
    id: string,
    name: string,
    members: Member[]
}

const useGroupForm = () => {
    // TODO: replace initialization with stored state
    const [group, setGroup] = createStore<Group>({
        id: uuidv4(),
        name: '',
        members: []
    });
   
    const populateGroupStoreFromSubmission = async (event: Event) => {
        console.log(event);

        // TODO: implement
    }

    return { group, populateGroupStoreFromSubmission };
}

export type {
    Receipt,
    Group,
    Member
}

export { useReceiptForm, useGroupForm, Contact }