import React, {useContext, useState} from 'react';
import './view.css';
import { MyContext } from '../components/Context';

function Create(props) {
    // Handle Form dengan useState
    const [quote, setQuote] = useState("");

    const _handleSubmit = (event) => {
        event.preventDefault();
        alert(`Ketikan Quote ${quote}`)
    }
        // destructuring context dan menggunakan context
        const { theme, huruf, onChangeTheme, onChangeFont} = useContext(MyContext);
        return(
            <div className="content">
                <div className="content-quote">
                    {/* Form untuk menuliskan quote */}
                    <form onSubmit={_handleSubmit}>
                        <label htmlFor="quote" style={{ fontSize: '25px'}}> Quote </label>
                        <input id="quote" type="text" value={quote}
                        onChange={e => setQuote(e.target.value)}
                        style={{ width: '30vw', height: '5vh'}} 
                        placeholder="Tulis Quote Disini ..." />
                    </form>
                    {/* component yang dapat berubah backgroundnya dan jenis fontnya */}
                    <div className="quote" 
                        style={{
                            backgroundColor: 
                                theme === 'dark' ? 'black' : 'white',
                            color: 
                                theme === 'dark' ? 'white' : 'black',
                        }}>
                    <p style={{
                        fontFamily:
                        huruf === 'a' ? 'Arial' : 'Georgia'
                    }}> {quote === '' ? 'Silahkan Tulis Quote' : quote} </p>
                </div>
            </div>
            <aside>
                {/* pilihan tombol untuk mengganti background dan jenis font */}
                <div className="bg-tema">
                    <h3> Background Theme </h3>
                    {/* data-testid digunakan untuk melakukan testing button */}
                        <button onClick={onChangeTheme} data-testid="background"> 
                        {theme === 'dark' ? 'Black' : 'White'} </button>
                </div>
                <div className="font-tema">
                    <h3> Font Theme </h3>
                        <button onClick={onChangeFont}> 
                        {huruf === 'a' ? 'Arial' : 'Georgia'} </button>
                </div>
            </aside>
        </div>
    )
}

export default Create;