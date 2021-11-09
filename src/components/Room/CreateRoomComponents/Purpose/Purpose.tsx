import React, { useEffect, useState } from "react"
import "./Purpose.css"

interface Props {
  purposeState: string
  setAtr: (type: string) => void
}

const Purpose = ({ purposeState, setAtr }: Props) => {
  const [detPurpose, setDetPurpose] = useState(
    purposeState === "" ? "" : purposeState
  )
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetPurpose(e.target.value)
  }
  useEffect(() => {
    setAtr(detPurpose)
  }, [setAtr, detPurpose])
  return (
    <div className="purpose__container">
      <div className="purpose__title">
        <div>만나서 무엇을 할까요?</div>
      </div>
      <div className="purpose-input__container">
        <input
          type="radio"
          name="chat_type"
          id="점심 약속"
          value="점심 약속"
          onChange={handleChange}
          checked={detPurpose === "점심 약속"}
        ></input>
        <label
          htmlFor="점심 약속"
          // onClick={handleSet}
        >
          <span>점심 약속</span>
        </label>
        <input
          type="radio"
          name="chat_type"
          id="보드게임"
          value="보드게임"
          onChange={handleChange}
          checked={detPurpose === "보드게임"}
        ></input>
        <label
          htmlFor="보드게임"
          // onClick={handleSet}
        >
          <span>보드게임</span>
        </label>
        <input
          type="radio"
          name="chat_type"
          id="저녁 약속"
          value="저녁 약속"
          onChange={handleChange}
          checked={detPurpose === "저녁 약속"}
        ></input>
        <label
          htmlFor="저녁 약속"
          // onClick={handleSet}
        >
          <span>저녁 약속</span>
        </label>
        <input
          type="radio"
          name="chat_type"
          id="카페 가기"
          value="카페 가기"
          onChange={handleChange}
          checked={detPurpose === "카페 가기"}
        ></input>
        <label
          htmlFor="카페 가기"
          // onClick={handleSet}
        >
          <span>카페 가기</span>
        </label>
        <input
          type="radio"
          name="chat_type"
          id="방탈출"
          value="방탈출"
          onChange={handleChange}
          checked={detPurpose === "방탈출"}
        ></input>
        <label
          htmlFor="방탈출"
          // onClick={handleSet}
        >
          <span>방탈출</span>
        </label>
        <input
          type="radio"
          name="chat_type"
          id="PC방 가기"
          value="PC방 가기"
          onChange={handleChange}
          checked={detPurpose === "PC방 가기"}
        ></input>
        <label
          htmlFor="PC방 가기"
          // onClick={handleSet}
        >
          <span>PC방 가기</span>
        </label>
        <input
          type="text"
          name="chat_type"
          id="기타"
          onChange={handleChange}
          placeholder="기타(직접 입력하세요)"
        />
      </div>
    </div>
  )
}

export default Purpose
