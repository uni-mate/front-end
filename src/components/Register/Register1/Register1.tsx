import React, { useState } from "react"
import CustomButton from "../../Partials/CustomButton/CustomButton"

import CustomInput from "../../Partials/CustomInput/CustomInput"

import "./Register1.css"

// const schoolList = [
//   "홍익대학교 서울캠퍼스",
//   "홍익대학교 세종캠퍼스",
//   "홍익대학교 교육대학원",
// ]

const gradeOptions = [
  { value: "1", label: "1학년" },
  { value: "2", label: "2학년" },
  { value: "3", label: "3학년" },
  { value: "4", label: "4학년" },
  { value: "5", label: "5학년" },
]

const Register1 = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [grade, setGrade] = useState(null)
  const onSelectGrade = (value: string) => {
    setGrade(value)
    setIsOpen(false)
    console.log(value)
  }
  const toggleHandler = () => setIsOpen((prev) => !prev)
  return (
    <div className="register1__container">
      <div>
        <CustomInput placeholder="학교를 선택해주세요" />
      </div>
      <div>
        <CustomInput placeholder="학과를 선택해주세요" />
      </div>
      <div className="grade-select">
        <div className="grade-select__container">
          <div className="grade-select__header" onClick={toggleHandler}>
            {grade ? grade : "학년을 선택해주세요"}
          </div>
          {isOpen && (
            <div className="grade-select__options">
              <ul>
                {gradeOptions.map((grade) => (
                  <li
                    onClick={() => onSelectGrade(grade.value)}
                    key={grade.value}
                  >
                    {grade.label}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Register1
