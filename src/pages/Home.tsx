import { Component, For, Show } from "solid-js";
import { useNavigate } from "solid-start";
import { useReceiptForm } from "~/form";

import styles from './Home.module.css';

const Home: Component = () => {
    const navigate = useNavigate();
    const { receipts, populateReceiptStoreFromSubmission } = useReceiptForm();
    const onSubmit = async (e: Event) => {
        await populateReceiptStoreFromSubmission(e);
        console.log(receipts);
        // navigate("/step");
    }

    return (    
        <div class={styles.App}>
            <header class={styles.header}>
                {/* TODO fix this to be the location of the server endpoint */}
                <form class={styles.receiptForm} onSubmit={onSubmit}>  
                <label for="receipts">
                    Upload Receipts
                </label> <br/> <br/>
                <input type="file" id="receipts" name="receipts" multiple/> <br/> <br/>
                <input type="submit"/>
                </form>
            </header>
        </div>);
}

export default Home;