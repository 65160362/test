import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';

function HomePage(params) {
    const [click, setClick] = useState([]);
    
    function ClickBlue() {
        setClick([...click, { color: 'blue'}])
        console.log(click);
    }

    function ClickGreen() {
        setClick([...click, { color: 'green'}])
        console.log(click);
    }

    function ClickOrange() {
        setClick([...click, { color: 'orange'}])
        console.log(click);
    }


    return (<>
    <div className="row">
        <label id="label">สีทั้งหมด</label>
        <div>
            <button onClick={() => { ClickBlue() }}>🫐</button>
            <button onClick={() => { ClickGreen() }}>🍏</button>
            <button onClick={() => { ClickOrange() }}>🍊</button>
        </div>

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">ลำดับ</th>
                        <th scope="col">color</th>
                    </tr>
                </thead>
                <tbody>
                    {click.map((color, index) => (
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>{color.color}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    </>)
}
export default HomePage;