import React, { useEffect, useState } from "react"

import _ from "lodash"

import "./Grade.css"

interface Props {
  gradeState: string[]
  setAtr: (type: string[]) => void
  setIdx: (idx: number) => void
}

const Grade = ({ gradeState, setAtr, setIdx }: Props) => {
  const [detGrade, setDetGrade] = useState<string[]>(
    _.size(gradeState) === 0 ? [] : gradeState
  )

  useEffect(() => {
    setIdx(3)
    setAtr(detGrade)
    console.log("detGrade: ", detGrade)
  }, [setIdx, setAtr, detGrade])
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
          onChange={() => setDetGrade(["no"])}
          checked={_.includes(detGrade, "no")}
        ></input>
        <label htmlFor="no">
          <span>학년은 상관 없어요!</span>
        </label>
        <input
          type="checkbox"
          name="grade"
          id="1"
          value="1"
          onChange={() =>
            setDetGrade((prev) => {
              if (_.includes(prev, "no")) {
                return ["1"]
              } else if (_.includes(prev, "1")) {
                return prev.filter((el) => el !== "1")
              } else {
                return [...prev, "1"]
              }
            })
          }
          checked={_.includes(detGrade, "1")}
        ></input>
        <label htmlFor="1">
          <span>1학년</span>
        </label>
        <input
          type="checkbox"
          name="grade"
          id="2"
          value="2"
          onChange={() =>
            setDetGrade((prev) => {
              if (_.includes(prev, "no")) {
                return ["2"]
              } else if (_.includes(prev, "2")) {
                return prev.filter((el) => el !== "2")
              } else {
                return [...prev, "2"]
              }
            })
          }
          checked={_.includes(detGrade, "2")}
        ></input>
        <label
          htmlFor="2"
          // onClick={handleSet}
        >
          <span>2학년</span>
        </label>
        <input
          type="checkbox"
          name="grade"
          id="3"
          value="3"
          onChange={() =>
            setDetGrade((prev) => {
              if (_.includes(prev, "no")) {
                return ["3"]
              } else if (_.includes(prev, "3")) {
                return prev.filter((el) => el !== "3")
              } else {
                return [...prev, "3"]
              }
            })
          }
          checked={_.includes(detGrade, "3")}
        ></input>
        <label
          htmlFor="3"
          // onClick={handleSet}
        >
          <span>3학년</span>
        </label>
        <input
          type="checkbox"
          name="grade"
          id="4"
          value="4"
          onChange={() =>
            setDetGrade((prev) => {
              if (_.includes(prev, "no")) {
                return ["4"]
              } else if (_.includes(prev, "4")) {
                return prev.filter((el) => el !== "4")
              } else {
                return [...prev, "4"]
              }
            })
          }
          checked={_.includes(detGrade, "4")}
        ></input>
        <label
          htmlFor="4"
          // onClick={handleSet}
        >
          <span>4학년</span>
        </label>
        <input
          type="checkbox"
          name="grade"
          id="5"
          value="5"
          onChange={() =>
            setDetGrade((prev) => {
              if (_.includes(prev, "no")) {
                return ["5"]
              } else if (_.includes(prev, "5")) {
                return prev.filter((el) => el !== "5")
              } else {
                return [...prev, "5"]
              }
            })
          }
          checked={_.includes(detGrade, "5")}
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
