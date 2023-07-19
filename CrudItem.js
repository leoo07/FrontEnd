import './CrudItem.css';
import { useState } from "react";

const CrudItem = () => {
    const [showCreate, setShowCreate] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [showUpdate, setShowUpdate] = useState(false)
    const [showDisplay, setShowDisplay] = useState([]);

    let itemData = [];
    const handleCreateClick = () => setShowCreate(!showCreate)
    const handleDeleteClick = () => setShowDelete(!showDelete)
    const handleUpdateClick = () => setShowUpdate(!showUpdate)
    const handleDisplayClick = () => setShowDisplay(!showDisplay)


    const [itemid, setItemId] = useState("");
    const [itemdesc, setItemDesc] = useState("");
    const [itemcur, setItemCur] = useState("");
    const [itemprice, setItemPrice] = useState("");
    const [itemquantity, setItemQuantity] = useState("");
    const [itemamount, setItemAmount] = useState("");

    // State to store table response
    const [fullTableDetails, setFulltableDetails] = useState([])

    const handleCreateItem = () => {
       
    };

    const handleDeleteItem = () => {

    };

    const handleUpdateItem = () => {

    };
    const handleDisplayItem = () => {
        debugger;
        fetch(
            `http://v248s4i.exa-ag.com:8000/sap/opu/odata/sap/ZGW_ITEM_DETAILS1_SRV/Item_DetailsSet('${itemid}')?$format=json`
        )

            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const { Mandt, ItemId, ItemDesc, ItemPrice, Currency } = data.d;
                setFulltableDetails([{ Mandt, ItemId, ItemDesc, ItemPrice, Currency }]);
                console.log(data);
            }
            )

    }

    return (
        <div>

            <button onClick={handleCreateClick}>Create</button>
            <button onClick={handleDeleteClick}>Delete</button>
            <button onClick={handleUpdateClick}>Update</button>
            <button onClick={handleDisplayClick}>Display</button>



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


            {showDelete ?
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

            {showUpdate ?
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



            {showDisplay ?
                <div>
                    <h1>Display Item</h1>
                    <input
                        type="text"
                        placeholder="Item ID"
                        value={itemid}
                        onChange={(e) => setItemId(e.target.value)}
                    />
                    {/* <button onClick={handleDisplayItem}>Display Item</button> */}

                    <button onClick={() => {
                        handleDisplayItem()
                    }}>Display Item</button>

                    {fullTableDetails && fullTableDetails.length > 0 ?

                        <table class="table-design">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Description</th>
                                    <th>Price</th>
                                    <th>Val</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fullTableDetails.map(({ ItemId, ItemDesc, ItemPrice, Mandt }) => {
                                    return (
                                        <tr>
                                            <td>{ItemId}</td>
                                            <td>{ItemDesc}</td>
                                            <td>{ItemPrice}</td>
                                            <td>{Mandt}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>



                        // <table>
                        //     <th>
                        //         <th>Id</th>
                        //         <th>____Description</th>
                        //         <th>__Price</th>
                        //         <th>Val</th>
                        //     </th>
                        //     {fullTableDetails.map(({ ItemId, ItemDesc, ItemPrice, Mandt }) => {
                        //         return (
                        //             <tr>
                        //                 <td>{ItemId}</td>
                        //                 <td>{ItemDesc}</td>
                        //                 <td>{ItemPrice}</td>
                        //                 <td>{Mandt}</td>
                        //             </tr>
                        //         )
                        //     })}
                        // </table>
                        : null}
                </div>
                : null}
        </div>



    )
}

export default CrudItem;
