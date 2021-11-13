import React, { useEffect, useState } from "react"

import "./Grade.css"

interface Props {
  gradeState: string
  setAtr: (type: string) => void
}

const Grade = ({ gradeState, setAtr }: Props) => {
  const [detGrade, setDetGrade] = useState<string>(
    gradeState === "" ? "" : gradeState
  )
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetGrade(e.target.value)
  }
  useEffect(() => {
    setAtr(detGrade)
  }, [setAtr, detGrade])
  return (
    <div className="grade__container">
      <div className="grade__title">
        <div>몇학년 메이트들과 친해질까요?</div>
        <span>(중복 가능)</span>
      </div>
      <div className="grade-input__container">
        <input
          type="radio"
          name="grade"
          id="no"
          value="no"
          onChange={handleChange}
          checked={detGrade === "no"}
        ></input>
        <label htmlFor="no">
          <span>학년은 상관 없어요!</span>
        </label>
        <input
          type="radio"
          name="grade"
          id="1"
          value="1"
          onChange={handleChange}
          checked={detGrade === "1"}
        ></input>
        <label htmlFor="1">
          <span>1학년</span>
        </label>
        <input
          type="radio"
          name="grade"
          id="2"
          value="2"
          onChange={handleChange}
          checked={detGrade === "2"}
        ></input>
        <label
          htmlFor="2"
          // onClick={handleSet}
        >
          <span>2학년</span>
        </label>
        <input
          type="radio"
          name="grade"
          id="3"
          value="3"
          onChange={handleChange}
          checked={detGrade === "3"}
        ></input>
        <label
          htmlFor="3"
          // onClick={handleSet}
        >
          <span>3학년</span>
        </label>
        <input
          type="radio"
          name="grade"
          id="4"
          value="4"
          onChange={handleChange}
          checked={detGrade === "4"}
        ></input>
        <label
          htmlFor="4"
          // onClick={handleSet}
        >
          <span>4학년</span>
        </label>
        <input
          type="radio"
          name="grade"
          id="5"
          value="5"
          onChange={handleChange}
          checked={detGrade === "5"}
        ></input>
        <label
          htmlFor="5"
          // onClick={handleSet}
        >
          <span>5학년 이상</span>
        </label>
      </div>
    </div>
  )
}

export default Grade
