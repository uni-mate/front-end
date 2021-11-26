import React, { Fragment, useEffect, useState } from "react"

import CustomInput from "../../Partials/CustomInput/CustomInput"
import DropDown from "../../Partials/DropDown/DropDown"
import { SelectChangeEvent } from "@mui/material/Select"
import BasicModal from "../../Partials/Modal/BasicModal"
import SchoolModal from "../../Partials/Modal/RegisterModal/SchoolModal"
import FacultyModal from "../../Partials/Modal/RegisterModal/FacultyModal"

import "./Register1.css"

// const schoolList = [
//   "홍익대학교 서울캠퍼스",
//   "홍익대학교 세종캠퍼스",
//   "홍익대학교 교육대학원",
// ]

const gradeOptions = [
  { key: "1학년", value: "1" },
  { key: "2학년", value: "2" },
  { key: "3학년", value: "3" },
  { key: "4학년", value: "4" },
  { key: "5학년 이상", value: "5" },
]

interface Props {
  setAtr1: (req: string) => void
  setAtr2: (req: string) => void
  setAtr3: (req: string) => void
  faculty: string
  school: string
}

const Register1 = ({ setAtr1, setAtr2, setAtr3, faculty, school }: Props) => {
  const [schoolModal, setSchoolModal] = useState(false)
  const [facultyModal, setFacultyModal] = useState(false)
  const [grade, setGrade] = useState<string>()
  const handleChange = (e: SelectChangeEvent) => {
    setGrade(e.target.value as string)
  }
  useEffect(() => {
    setAtr3(grade)
  }, [setAtr3, grade])
  return (
    <Fragment>
      {schoolModal && (
        <BasicModal
          isModalOpen={schoolModal}
          width="300px"
          height="310px"
          backgroundColor="#fff"
          boxShadow={24}
          padding="30px 20px"
        >
          <SchoolModal
            onCloseModal={() => setSchoolModal(false)}
            setAtr1={setAtr1}
            selectedSchool={school}
          />
        </BasicModal>
      )}
      {facultyModal && (
        <BasicModal
          isModalOpen={facultyModal}
          width="300px"
          height="310px"
          backgroundColor="#fff"
          boxShadow={24}
          padding="30px 20px"
        >
          <FacultyModal
            onCloseModal={() => setFacultyModal(false)}
            setAtr2={setAtr2}
            selectedFaculty={faculty}
          />
        </BasicModal>
      )}
      <div className="register1__container">
        <div onClick={() => setSchoolModal(true)}>
          <CustomInput
            placeholder="학교를 선택해주세요"
            value={school ? school : null}
            readOnly
          />
        </div>
        <div onClick={() => setFacultyModal(true)}>
          <CustomInput
            placeholder="학과를 선택해주세요"
            value={faculty ? faculty : null}
            readOnly
          />
        </div>
        <DropDown
          value={grade || ""}
          handleChange={handleChange}
          itemList={gradeOptions}
        />
      </div>
    </Fragment>
  )
}

export default Register1
