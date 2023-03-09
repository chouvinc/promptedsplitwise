import { Component, For, Show } from "solid-js";
import { useNavigate } from "solid-start";
import { Form } from "solid-start/data/Form";
import { useGroupForm, useReceiptForm } from "~/form";

import styles from './Home.module.css';

const Home: Component = () => {
    const navigate = useNavigate();
    
    // TODO: move receipts to another page
    const { receipts, populateReceiptStoreFromSubmission } = useReceiptForm();
    const onSubmit = async (e: Event) => {
        await populateReceiptStoreFromSubmission(e);
        console.log(receipts);
        // navigate("/step");
    }
    const { group, populateGroupStoreFromSubmission } = useGroupForm();

    return (    
        <div class={styles.App}>
            <header class={styles.header}>
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