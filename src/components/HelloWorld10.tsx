import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const QRCode = require('qrcode.react');

const Email: React.FC = () => {


    const [email, setEmail] = useState('')

    const changeSetEmailToSetUrl = (event: any) => {
        setEmail(event.target.value);
    }


    return (

            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput={changeSetEmailToSetUrl} />
                </div>
                <div>
                <QRCode value={`{mailto:${email}?}`} size={256} />
            </div>

            </div>
            

    )
}


export default Email;