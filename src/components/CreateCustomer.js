import { useState } from "react";

const CreateCustomer = () => {

    const [showDisplay, setShowDisplay] = useState([]);

    const handleDisplayClick = () => {
        setShowDisplay(!showDisplay)
    }
    const [custid, setCustID] = useState("");
    const [fullTableDetails, setFulltableDetails] = useState([])

    const handleDisplayItem = () => {
        fetch(
            `http://v248s4i.exa-ag.com:8000/sap/opu/odata/sap/ZCUST_DET_SRV/CUSTOMERSet('${custid}')?$format=json`
        )

            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const { CustId, CustName, CustDob, CustMobile, CustEmail, CustCity, Pincode, CustArea, CustStreet } = data.d;
                setFulltableDetails([{ CustId, CustName, CustDob, CustMobile, CustEmail, CustCity, Pincode, CustArea, CustStreet }]);
                console.log(data);
            }
            )

    }

    return (
        <div>
            <div className='button-container'>
                <button onClick={handleDisplayClick}>Display Customer</button>
            </div>

            {showDisplay ?
                <div>
                    <h1>Display Customer</h1>
                    <input
                        type="text"
                        placeholder="Customer ID"
                        value={custid}
                        onChange={(e) => setCustID(e.target.value)}
                    />
                    {/* <button onClick={handleDisplayItem}>Display Item</button> */}

                    <button onClick={() => {
                        handleDisplayItem()
                    }}>Display Item</button>

                    {fullTableDetails && fullTableDetails.length > 0 ?

                        <table className="table-design">
                            <thead>
                                <tr>
                                    <th>Customer ID</th>
                                    <th>Name</th>
                                    <th>DOB</th>
                                    <th>Mobile</th>
                                    <th>Email</th>
                                    <th>City</th>
                                    <th>Pincode</th>
                                    <th>Area</th>
                                    <th>Street</th>
                                </tr>
                            </thead>
                            <tbody>
                                {fullTableDetails.map(({ CustId, CustName, CustDob, CustMobile, CustEmail, CustCity, Pincode, CustArea, CustStreet }) => {
                                    return (
                                        <tr key={CustId}>
                                            <td>{CustId}</td>
                                            <td>{CustName}</td>
                                            <td>{CustDob}</td>
                                            <td>{CustMobile}</td>
                                            <td>{CustEmail}</td>
                                            <td>{CustCity}</td>
                                            <td>{Pincode}</td>
                                            <td>{CustArea}</td>
                                            <td>{CustStreet}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                        : null}
                </div>
                : null}
        </div>



    )
}


export default CreateCustomer;