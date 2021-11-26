import React, { useEffect, useState } from "react"

import { MBTI } from "../../../types/CreateRoomTypes"
import _ from "lodash"

import "./Register3.css"

interface Props {
  setAtr: (req: MBTI) => void
  registerMBTI: MBTI
}

const Register3 = ({ setAtr, registerMBTI }: Props) => {
  const [MBTI, setMBTI] = useState({
    first_mbti: registerMBTI.first_mbti ? registerMBTI.first_mbti : "",
    second_mbti: registerMBTI.second_mbti ? registerMBTI.second_mbti : "",
    third_mbti: registerMBTI.third_mbti ? registerMBTI.third_mbti : "",
    fourth_mbti: registerMBTI.fourth_mbti ? registerMBTI.fourth_mbti : "",
  })
  useEffect(() => {
    setAtr(MBTI)
  }, [setAtr, MBTI])
  return (
    <div className="mbti__container">
      <div className="mbti__header">MBTI를 선택해주세요</div>
      <div className="mbti__content">
        <div
          className={`mbti--first ${
            _.size(MBTI.first_mbti) > 0 ? "checked" : ""
          }`}
        >
          <input
            type="radio"
            name="mbti-first-1"
            id="mbti-first-1"
            value={MBTI.second_mbti}
            onChange={() =>
              setMBTI((prev) => ({
                ...prev,
                first_mbti: "E",
              }))
            }
            checked={_.includes(MBTI.first_mbti, "E")}
          />
          <label htmlFor="mbti-first-1">E</label>
          <input
            type="radio"
            name="mbti-first-2"
            id="mbti-first-2"
            value={MBTI.first_mbti}
            onChange={() =>
              setMBTI((prev) => ({
                ...prev,
                first_mbti: "I",
              }))
            }
            checked={_.includes(MBTI.first_mbti, "I")}
          />
          <label htmlFor="mbti-first-2">I</label>
        </div>
        <div
          className={`mbti--second ${
            _.size(MBTI.second_mbti) > 0 ? "checked" : ""
          }`}
        >
          <input
            type="radio"
            name="mbti-second-1"
            id="mbti-second-1"
            value={MBTI.second_mbti}
            onChange={() =>
              setMBTI((prev) => ({
                ...prev,
                second_mbti: "S",
              }))
            }
            checked={_.includes(MBTI.second_mbti, "S")}
          />
          <label htmlFor="mbti-second-1">S</label>
          <input
            type="radio"
            name="mbti-second-2"
            id="mbti-second-2"
            value={MBTI.second_mbti}
            onChange={() =>
              setMBTI((prev) => ({
                ...prev,
                second_mbti: "N",
              }))
            }
            checked={_.includes(MBTI.second_mbti, "N")}
          />
          <label htmlFor="mbti-second-2">N</label>
        </div>
        <div
          className={`mbti--third ${
            _.size(MBTI.third_mbti) > 0 ? "checked" : ""
          }`}
        >
          <input
            type="radio"
            name="mbti-third-1"
            id="mbti-third-1"
            value={MBTI.second_mbti}
            onChange={() =>
              setMBTI((prev) => ({
                ...prev,
                third_mbti: "T",
              }))
            }
            checked={_.includes(MBTI.third_mbti, "T")}
          />
          <label htmlFor="mbti-third-1">T</label>
          <input
            type="radio"
            name="mbti-third-2"
            id="mbti-third-2"
            value={MBTI.third_mbti}
            onChange={() =>
              setMBTI((prev) => ({
                ...prev,
                third_mbti: "F",
              }))
            }
            checked={_.includes(MBTI.third_mbti, "F")}
          />
          <label htmlFor="mbti-third-2">F</label>
        </div>
        <div
          className={`mbti--fourth ${
            _.size(MBTI.fourth_mbti) > 0 ? "checked" : ""
          }`}
        >
          <input
            type="radio"
            name="mbti-fourth-1"
            id="mbti-fourth-1"
            value={MBTI.second_mbti}
            onChange={() =>
              setMBTI((prev) => ({
                ...prev,
                fourth_mbti: "J",
              }))
            }
            checked={_.includes(MBTI.fourth_mbti, "J")}
          />
          <label htmlFor="mbti-fourth-1">J</label>
          <input
            type="radio"
            name="mbti-fourth-2"
            id="mbti-fourth-2"
            value={MBTI.fourth_mbti}
            onChange={() =>
              setMBTI((prev) => ({
                ...prev,
                fourth_mbti: "P",
              }))
            }
            checked={_.includes(MBTI.fourth_mbti, "P")}
          />
          <label htmlFor="mbti-fourth-2">P</label>
        </div>
        <div
          className={`mbti--no ${
            _.size(MBTI.first_mbti) === 0 &&
            _.size(MBTI.second_mbti) === 0 &&
            _.size(MBTI.third_mbti) === 0 &&
            _.size(MBTI.fourth_mbti) === 0
              ? "checked"
              : ""
          }`}
          onClick={() =>
            setMBTI({
              first_mbti: "",
              second_mbti: "",
              third_mbti: "",
              fourth_mbti: "",
            })
          }
        >
          잘 모르겠어요!
        </div>
      </div>
    </div>
  )
}

export default Register3
