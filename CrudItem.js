import { useState } from "react";

const CrudItem = () => {
    const [showCreate, setShowCreate] = useState(false)
    const [showDelete, setShowDelete] = useState(false)

    const handleCreateClick = () => setShowCreate(!showCreate)
    const handleDeleteClick = () => setShowDelete(!showDelete)
    const handleUpdateClick = () => setShowDelete(!showDelete)
    const handleDisplayClick = () => setShowDelete(!showDelete)


    const [itemid, setItemId] = useState("");
    const [itemdesc, setItemDesc] = useState("");
    const [itemcur, setItemCur] = useState("");
    const [itemprice, setItemPrice] = useState("");
    const [itemquantity, setItemQuantity] = useState("");
    const [itemamount, setItemAmount] = useState("");

    const handleCreateItem = () => {
        // Perform actions to create an order using the input values
        // For this example, we'll just log the order details
        // console.log("Customer ID:", itemid);
        //console.log("Customer Name:", customername);
        //console.log("Date Of Birth:", date);
        //console.log("Mobile Number:", mobilenumber);
        //console.log("Email:", email);
    };

    const handleDeleteItem = () => {

    };

    const handleUpdateItem = () => {

    };
    const handleDisplayItem = () => {

    }

    return (
        <div>
            <button onClick={handleCreateClick}>Create</button>


            {showCreate ?
                <div>
                    <h1>Create Item</h1>
                    <input
                        type="text"
                        placeholder="Item ID"
                        value={itemid}
                        onChange={(e) => setItemId(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Item Description"
                        value={itemdesc}
                        onChange={(e) => setItemDesc(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Item Currency"
                        value={itemcur}
                        onChange={(e) => setItemCur(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Item Price"
                        value={itemprice}
                        onChange={(e) => setItemPrice(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Item Quantity"
                        value={itemquantity}
                        onChange={(e) => setItemQuantity(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Item Amount"
                        value={itemamount}
                        onChange={(e) => setItemAmount(e.target.value)}
                    />

                    <button onClick={handleCreateItem}>Create Item</button>
                </div>
                : null}


            <button onClick={handleDeleteClick}>Delete</button>


            {showCreate ?
                <div>
                    <h1>Delete Item</h1>
                    <input
                        type="text"
                        placeholder="Item ID"
                        value={itemid}
                        onChange={(e) => setItemId(e.target.value)}
                    />
                    <button onClick={handleDeleteItem}>Delete Item</button>
                </div>
                : null}

            <button onClick={handleUpdateClick}>Update</button>
            {showCreate ?
                <div>
                    <h1>Update Item</h1>
                    <input
                        type="text"
                        placeholder="Item ID"
                        value={itemid}
                        onChange={(e) => setItemId(e.target.value)}
                    />

                    <input
                        type="text"
                        placeholder="Item Description"
                        value={itemdesc}
                        onChange={(e) => setItemDesc(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Item Currency"
                        value={itemcur}
                        onChange={(e) => setItemCur(e.target.value)}
                    />
                    <input
                        type="number"
                        placeholder="Item Price"
                        value={itemprice}
                        onChange={(e) => setItemPrice(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Item Quantity"
                        value={itemquantity}
                        onChange={(e) => setItemQuantity(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Item Amount"
                        value={itemamount}
                        onChange={(e) => setItemAmount(e.target.value)}
                    />
                    <button onClick={handleUpdateItem}>Update Item</button>
                </div>
                : null}



            <button onClick={handleDisplayClick}>Display</button>


            {showCreate ?
                <div>
                    <h1>Display Item</h1>
                    <input
                        type="text"
                        placeholder="Item ID"
                        value={itemid}
                        onChange={(e) => setItemId(e.target.value)}
                    />
                    <button onClick={handleDisplayItem}>Display Item</button>
                </div>
                : null}
        </div>



    )
}

export default CrudItem;