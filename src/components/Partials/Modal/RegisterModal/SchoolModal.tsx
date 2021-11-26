import React, { useState } from "react"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"

import "./SchoolModal.css"

interface Props {
  onCloseModal: () => void
  setAtr1: (req: string) => void
  selectedSchool: string
}

const schoolList = [
  { label: "홍익대학교 서울캠퍼스", name: "홍익대학교 서울캠퍼스" },
  { label: "홍익대학교 세종캠퍼스", name: "홍익대학교 세종캠퍼스" },
  { label: "홍익대학교 교육대학원", name: "홍익대학교 교육대학원" },
]

const SchoolModal = ({ onCloseModal, setAtr1, selectedSchool }: Props) => {
  const onSelectFinish = () => {
    onCloseModal()
    setAtr1(school)
  }
  const [school, setSchool] = useState<string>()
  return (
    <div className="userInfo-modal">
      <div className="userInfo__title">학교 검색</div>
      <div className="userInfo__container">
        <Autocomplete
          noOptionsText={""}
          className="auto-complete"
          disablePortal
          options={schoolList}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} />}
          onChange={(e, value: any) => setSchool(value.name)}
          style={{
            fontSize: "12px",
          }}
        />
      </div>
      <div className="userInfo__button">
        <button onClick={onCloseModal}>뒤로가기</button>
        <button onClick={onSelectFinish}>선택 완료</button>
      </div>
    </div>
  )
}

export default SchoolModal
