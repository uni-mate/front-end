import React, { useEffect, useState } from "react"

import "./Gender.css"

interface Props {
  setAtr: (type: string) => void
  setIdx: (idx: number) => void
  genderState: string
}

const Gender = ({ setAtr, setIdx, genderState }: Props) => {
  const [detGender, setDetGender] = useState(
    genderState === "" ? "" : genderState
  )
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetGender(e.target.value)
  }
  useEffect(() => {
    setIdx(5)
    setAtr(detGender)
  }, [setIdx, setAtr, detGender])
  return (
    <div className="gender__container">
      <div className="gender__title">
        <div>어떤 성별의 메이트들과</div>
        <span>친해질까요?</span>
      </div>
      <div className="gender-input__container">
        <input
          type="radio"
          name="gender"
          id="no"
          value="no"
          onChange={handleChange}
          checked={detGender === "no" ? true : false}
        ></input>
        <label htmlFor="no">
          <div>상관없어요</div>
        </label>
        <input
          type="radio"
          name="gender"
          id="women"
          value="women"
          onChange={handleChange}
          checked={detGender === "women" ? true : false}
        ></input>
        <label htmlFor="women">
          <div>여자끼리</div>
        </label>
        <input
          type="radio"
          name="gender"
          id="men"
          value="men"
          onChange={handleChange}
          checked={detGender === "men" ? true : false}
        ></input>
        <label htmlFor="men">
          <div>남자끼리</div>
        </label>
      </div>
    </div>
  )
}

export default Gender
