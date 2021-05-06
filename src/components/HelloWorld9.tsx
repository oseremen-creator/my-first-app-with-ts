import React, { useState } from 'react';
//import QRCode from 'qrcode-react'; //This declaration could have been used if qrcode-react is ES6 module feature compliant

const HelloWorld9: React.FC = () => {
    const QRCode = require('qrcode.react'); //qrcode-react is not yet ES6 module feature compliant, hence this approach to declaration.

    const [url, setUrl] = useState('')

    const [email, setEmail] = useState('')

    const [subject, setSubject] = useState('')

    const [body, setBody] = useState('')

    const [sms, setSms] = useState('')

    const [message, setMessage] = useState('')

    const changeSetNameToSetUrl = (event: any) => {
        setUrl(event.target.value);
    }
    const changeSetEmailToSetUrl = (event: any) => {
        setEmail(event.target.value);
    }
    const changeSetSubjectToSetUrl = (event: any) => {
        setSubject(event.target.value);
    }
    const changeSetBodyToSetUrl = (event: any) => {
        setBody(event.target.value);
    }
    const changeSetSMSToSetUrl = (event: any) => {
        setSms(event.target.value);
    }
    const changeSetMessageToSetUrl = (event: any) => {
        setMessage(event.target.value);
    }


    return (
        <div>
            {/* This creates the block with the URL QR-Code */}
            <div className="tile is-parent">
                <article className="tile is-child notification is-danger">
                    {/*<p class="title">Wide tile</p>
                    <p class="subtitle">Aligned with the right tile</p>*/}
                    <div className="content">
                    <div className="field">
                <label className="label">URL</label>
                <div className="control">
                    <input className="input" type="text" placeholder="Text input" onInput={changeSetNameToSetUrl} />
                </div>
            </div>

            <div> {/* This creates the QR-Code*/}
                <QRCode value={url} size={256} fgColor="darkblue" />
            </div>
                    </div>
                </article>
            </div>

                    {/* This creates the block with the Email and its components QR-Code */}
            <div className="tile is-parent">
                <article className="tile is-child notification is-danger">
                    {/*<p className="title">Wide tile</p>
                    <p className="subtitle">Aligned with the right tile</p>*/}
                    <div className="content">
                        <div className="field">
                            <label className="label">Email</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Text input" onInput={changeSetEmailToSetUrl} />
                            </div>
                        </div>
                        <div className="field">
                            <label className="label">Subject</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Text input" onInput={changeSetSubjectToSetUrl} />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Body</label>
                            <div className="control">
                                <input className="input" type="text" placeholder="Text input" onInput={changeSetBodyToSetUrl} />
                            </div>
                        </div>

                        <div> {/* This creates the QR-Code*/}
                            <QRCode value={`{mailto:${email}?subject=${subject}&body=${body}`} size={256} />
                        </div>
                    </div>
                </article>
            </div>


                    {/* This creates the block with the SMS and the message it contains QR-Code */}
            <div className="tile is-parent">
                <article className="tile is-child notification is-danger">
                    {/*<p className="title">Wide tile</p>
                    <p className="subtitle">Aligned with the right tile</p>*/}
                    <div className="content">
                        <div className="field">
                            <label className="label">SMS</label>
                            <div className="control">
                            <input className="input" type="text" placeholder="Text input" onInput={changeSetSMSToSetUrl} />
                        </div>
                    </div>

                    <div className="field"> {/* This allows the Message to change*/}
                        <label className="label">Message</label>
                        <div className="control">
                        <input className="input" type="text" placeholder="Text input" onInput={changeSetMessageToSetUrl} />
                        </div>
                    </div>

                    <div> {/* This creates the QR-Code*/}
                        <QRCode value={`SMS:${sms}+2348175930381:${message}`} size={256} />
                    </div>
                    </div>
                </article>
            </div>


            {/* 1. You can pass any string as prop named value to QRCode, including JSON string, like that commented out below, to QRCode */}
            {/*
                <QRCode value={JSON.stringify({
                    name: "Employee Name",
                    age: 27,
                    department: "Police",
                    id: "aisuoiqu3234738jdhf100223"
                })} size={256}/>
                */}

            {/*
                The size={256} prop passed above is to specify the size of the qrcode displayed which defaults to 128
                */}

            {/*
                    <QRCode value="This is just an ordinary string example" />
                */}


            {/* 2. You can also pass SMS as value */}
            {/* <QRCode value="SMS:+2348175930381:This is a SMS stored in a QR Code!" size={256}/> */}
            {/* You can also use SMSTO instead of SMS. Both will normally work */}


            {/* 3. You can also pass email address WITH or WITHOUT email subject, email body, cc, bcc, as value */}
            {/* <QRCode value={`mailto:someone@mysite.com?subject=Subject goes here&body=Body goes here.`} size={256} /> */}
            {/* cc, bcc, below  may also be captured but your decoder software has to be able to read them
                    mailto:someone@yoursite.com?cc=someoneelse@theirsite.com,another@thatsite.com,me@mysite.com&bcc=lastperson@theirsite.com&subject=Big%20News&body=Body%20goes%20here.
                */}

            {/* 4. You can also pass URL as value */}
            {/* <QRCode value="https://www.pau.edu.ng" size={256}/> */}
            {/* Below URL is for whatsapp */}
            {/* <QRCode value="https://wa.me/08175930381?text=I would like to buy a pair of shoes from you" size={256}/> */}
            {/* Below URL is for App Google play store. For more info, see https://support.google.com/admob/answer/3086746?hl=en */}
            {/* <QRCode value="https://play.google.com/store/apps/details?id=com.gidimo" size={256}/> */}
            {/* Below URL if for Apple app store}
                 <QRCode value="https://apps.apple.com/us/app/twitter/id333903271" size={256}/> 

                {/* 5. You can also pass Geographical location as value */}
            {/* <QRCode value="geo:-36.4902,-13.85382, 10"/> */}
            {/* format is deg N latitude, deg W longitude, altitude in meters */}

            {/* 6. You can also capture calendar events but the decoder software available may not always invoke the calendar*/}
            {/*
                <QRCode value={`BEGIN:VEVENT
                SUMMARY:Summer+Vacation!
                DTSTART:20180601T070000Z
                DTEND:20180831T070000Z
                END:VEVENT`} size={256}/>
                */}

            {/* 7. You can also do Vcard.
                    <QRCode value={`BEGIN:VCARD
                    VERSION:3.0
                    N:Owen;Sean;;;
                    FN:Sean Owen
                    TITLE:Software Engineer
                    EMAIL;TYPE=INTERNET;TYPE=WORK;TYPE=PREF:srowen@google.com
                    URL;TYPE=Homepage:https://example.com
                    END:VCARD`
                    } size={256}/>
                */}

            {/*
                etc. Sea without shores
                 */}

            {/* Besides size, you can set more properties for QRCode, including logo image overlay. See  https://www.npmjs.com/package/qrcode.react*/}



            {/* Additional useful reference: https://github.com/zxing/zxing/wiki/Barcode-Contents */}

        </div>

    )
}
export default HelloWorld9;

