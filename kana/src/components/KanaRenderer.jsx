import '../css/global.css'
export default function KanaRenderer({kanaDictionary}){
    return(
        <div className='dflex justify-space-between w-1280'>
        {/* Hiragana */}
        <div>
        <h2>Hiragana</h2>
        {Object.keys(kanaDictionary.hiragana).map((group) => (
          <div key={group}>
            <div className='dflex gap-8 align-center justify-center'>
            {Object.entries(kanaDictionary.hiragana[group].characters).map(([character, pronunciations]) => (
              <div key={character} className='dflex ' >
                <div>{character}</div>
                {/* <div>{pronunciations.join(', ')}</div> */}
              </div>
            ))}
            </div>
          </div>
        ))}
        </div>
        {/* Katakana */}
        <div>
        <h2>Katakana</h2>
        {Object.keys(kanaDictionary.katakana).map((group) => (
          <div key={group}>
            {/* <h3>{group}</h3> */}
            <div className='dflex gap-8 align-center justify-center'>
            {Object.entries(kanaDictionary.katakana[group].characters).map(([character, pronunciations]) => (
              <div key={character} className='dflex'>
                <div>{character}</div>
                {/* <div>{pronunciations.join(', ')}</div> */}
              </div>
            ))}
            </div>
          </div>
        ))}
        </div>
      </div>
      )
}