import React, { useEffect, useState } from "react"

import "./FacultyModal.css"
import TextField from "@mui/material/TextField"
import Autocomplete from "@mui/material/Autocomplete"

interface Props {
  onCloseModal: () => void
  setAtr2: (req: string) => void
  selectedFaculty: string
}

const facultyList = [
  { label: "경영학과", name: "경영학과" },
  { label: "경제학과", name: "경제학과" },
  { label: "비즈니스 경영", name: "비즈니스 경영" },
]

const FacultyModal = ({ onCloseModal, setAtr2, selectedFaculty }: Props) => {
  const onSelectFinish = () => {
    onCloseModal()
    setAtr2(faculty)
  }
  const [faculty, setFaculty] = useState<string>()
  useEffect(() => {
    console.log(faculty)
  }, [faculty])
  return (
    <div className="userInfo-modal">
      <div className="userInfo__title">학과 검색</div>
      <div className="userInfo__container">
        <Autocomplete
          noOptionsText={""}
          className="auto-complete"
          disablePortal
          options={facultyList}
          sx={{ width: 300 }}
          onChange={(e, value: any) => setFaculty(value.name)}
          renderInput={(params) => <TextField {...params} />}
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

export default FacultyModal
