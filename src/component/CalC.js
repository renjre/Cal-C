
import React from 'react';
import "../css/styles.css"


const CalC = () => {
  let init_num = ""
  const [numbers, setNumbers] = React.useState(init_num)
  const [done, setDone] = React.useState(false)
  const [inputfontsize, setinputfontSize] = React.useState("36px")
  const [result, setresult] = React.useState("")

  const backSpaceHandler = async () => {
    setNumbers(numbers.slice(0, -1))
  }

  let input_style = {
    fontSize: inputfontsize
  }

  const clearAfterResult = () => {
    if (done) {
      setNumbers("")
      setDone(false)
      debugger
    }
  }

  const numbersHandlerBtn = async (el, symb, op) => {
    let operands = ["+", "-", "×", "÷", "%"]

    if (numbers.length > 11) {
      setinputfontSize("18px")
    }
    
    if (numbers !== "" && op) {
      if (numbers.slice(-1) === op) {
        return ""
      }
      else {
        if (operands.includes(numbers.slice(-1))) {
          setNumbers(numbers.slice(0, -1) + op)
        }
        else {
          setNumbers(numbers + op)
        }
      }
    }
    else {
      if ((operands.includes(numbers.slice(-1)) || numbers === "") && symb == 0) {
        return
      }
      else {
        setNumbers(numbers + symb)
        let res = numbers
        if (numbers.includes("÷")) {
          res = numbers.replace(/÷/g, "/")
        }
        if (numbers.includes("×")) {
          res = numbers.replace(/×/g, "*")
        }
        try {
          if (numbers.slice(-1) === "%" || numbers.includes("%")) {
            let perc = numbers + symb
            let ex = perc.split("%")
            if (ex.length === 2) {
              let res = ex[0] * ex[1] / 100
              setresult(res.toString())
            }
          }
          else {
            setresult(eval(res + symb))
          }
        } catch (error) {
          setresult("Wait!")
        }
      }
    }
  }

  const resultHandler = (el) => {
    if (numbers.includes("%")) {
      let ex = numbers.split("%")
      if (ex.length === 2) {
        let res = ex[0] * ex[1] / 100
        setNumbers(res.toString())
      }
    }
    else {
      let exp = numbers
      if (numbers.includes("÷")) {
        exp = numbers.replace(/÷/g, "/")
      }
      if (numbers.includes("×")) {
        exp = numbers.replace(/×/g, "*")
      }
      let result = eval(exp)
      setNumbers(result.toString())
    }
    setDone(true)
  }
  const cleanHandler = (el) => {
    setinputfontSize("36px")
    setNumbers("")
    setresult("")
  }

  return (
    <>
      <div className="container">
        <div className="body">
          <div className='result-box'>
            <p>{result}</p>
          </div>
          <div className="rows">
            <input id='done' type="text" className="resultss" style={input_style} value={numbers} />
          </div>
          <br />

          <div className="rows">
            <div className="btns-btn" onClick={cleanHandler}>
              <div className="btns" style={{ fontSize: "16px" }}>C</div>
            </div>
            <div className="btns-btn" onClick={backSpaceHandler}>
              <div className="btns" style={{ fontSize: "16px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-backspace" viewBox="0 0 16 16">
                  <path d="M5.83 5.146a.5.5 0 0 0 0 .708L7.975 8l-2.147 2.146a.5.5 0 0 0 .707.708l2.147-2.147 2.146 2.147a.5.5 0 0 0 .707-.708L9.39 8l2.146-2.146a.5.5 0 0 0-.707-.708L8.683 7.293 6.536 5.146a.5.5 0 0 0-.707 0z" />
                  <path d="M13.683 1a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-7.08a2 2 0 0 1-1.519-.698L.241 8.65a1 1 0 0 1 0-1.302L5.084 1.7A2 2 0 0 1 6.603 1h7.08zm-7.08 1a1 1 0 0 0-.76.35L1 8l4.844 5.65a1 1 0 0 0 .759.35h7.08a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1h-7.08z" />
                </svg>
              </div>
            </div>
            <div className="btns-btn"
              onMouseDown={clearAfterResult}
              onClick={(el, symb, op) => numbersHandlerBtn(el, "", "%")}>
              <div className="btns" style={{ fontSize: "16px" }}>%</div>
            </div>
            <div className="btns-btn"
              onMouseDown={clearAfterResult}
              onClick={(el, symb, op) => numbersHandlerBtn(el, "", "÷")}>
              <div className="btns">&divide;</div>
            </div>
          </div>

          <div className="rows">
            <div className="btns-btn-number numbers"
              onMouseDown={clearAfterResult}
              onClick={(el, symb) => numbersHandlerBtn(el, "7")}>
              <div className="btns">7</div>
            </div>
            <div className="btns-btn-number numbers"
              onMouseDown={clearAfterResult}
              onClick={(el, symb) => numbersHandlerBtn(el, "8")}>
              <div className="btns">8</div>
            </div>
            <div className="btns-btn-number numbers"
              onMouseDown={clearAfterResult}
              onClick={(el, symb) => numbersHandlerBtn(el, "9")}>
              <div className="btns">9</div>
            </div>
            <div className="btns-btn"
              onMouseDown={clearAfterResult}
              onClick={(el, symb, op) => numbersHandlerBtn(el, "", "×")}>
              <div className="btns">&times;</div>
            </div>
          </div>

          <div className="rows">
            <div className="btns-btn-number numbers"
              onMouseDown={clearAfterResult}
              onClick={(el, symb) => numbersHandlerBtn(el, "4")}>
              <div className="btns">4</div>
            </div>
            <div className="btns-btn-number numbers"
              onMouseDown={clearAfterResult}
              onClick={(el, symb) => numbersHandlerBtn(el, "5")}>
              <div className="btns" >5</div>
            </div>
            <div className="btns-btn-number numbers"
              onMouseDown={clearAfterResult}
              onClick={(el, symb) => numbersHandlerBtn(el, "6")}>
              <div className="btns" >6</div>
            </div>
            <div className="btns-btn"
              onMouseDown={clearAfterResult}
              onClick={(el, symb, op) => numbersHandlerBtn(el, "", "-")}>
              <div className="btns">-</div>
            </div>
          </div>

          <div className="rows">
            <div className="btns-btn-number numbers"
              onMouseDown={clearAfterResult}
              onClick={(el, symb) => numbersHandlerBtn(el, "1")}>
              <div className="btns">1</div>
            </div>
            <div className="btns-btn-number numbers"
              onMouseDown={clearAfterResult}
              onClick={(el, symb) => numbersHandlerBtn(el, "2")}>
              <div className="btns">2</div>
            </div>
            <div className="btns-btn-number numbers"
              onMouseDown={clearAfterResult}
              onClick={(el, symb) => numbersHandlerBtn(el, "3")}>
              <div className="btns">3</div>
            </div>
            <div className="btns-btn"
              onMouseDown={clearAfterResult}
              onClick={(el, symb, op) => numbersHandlerBtn(el, "", "+")}>
              <div className="btns">+</div>
            </div>
          </div>

          <div className="rows">
            <div className="btns-btn-number numbers" style={{ width: "124px", borderRadius: "22px" }}
              onMouseDown={clearAfterResult}
              onClick={(el, symb) => numbersHandlerBtn(el, "0")}>
              <div className="btns">0</div>
            </div>
            <div className="btns-btn-number numbers"
              onMouseDown={clearAfterResult}
              onClick={(el, symb) => numbersHandlerBtn(el, ".")}>
              <div className="btns">.</div>
            </div>
            <div className="btns-btn" onClick={resultHandler}>
              <div className="btns" style={{ fontSize: "16px" }}>=</div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </>
  )
}

export default CalC;
