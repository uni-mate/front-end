import React, { useEffect, useState } from "react"

import "./PromiseWhere.css"

interface Props {
  setIdx: (idx: number) => void
  setAtr: (atr: string) => void
  where: string
}

const PromiseWhere = ({ setIdx, setAtr, where }: Props) => {
  const [detPromiseWhere, setDetPromiseWhere] = useState(
    where === "" ? "" : where
  )
  useEffect(() => {
    setIdx(3)
    setAtr(detPromiseWhere)
  }, [setIdx, setAtr, detPromiseWhere])
  return (
    <div className="promise-where__container">
      <div className="promise-where__title">
        <div>어디서 만날까요?</div>
      </div>
      <div className="promise-where-input__container">
        <input
          type="input"
          name="where"
          value={detPromiseWhere}
          onChange={(e) => setDetPromiseWhere(e.target.value)}
          placeholder="약속 장소를 적어주세요"
        ></input>
      </div>
    </div>
  )
}

export default PromiseWhere
