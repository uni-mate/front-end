import React from "react"
import "./AuthModal.css"

interface Props {
  closeModal: () => void
}

const AuthModal = ({ closeModal }: Props) => {
  const close = () => {
    closeModal()
  }
  return (
    <div className="auth-modal__container">
      <div className="auth-modal__title">
        <div>비밀번호나 이메일을</div>
        <span>다시 한 번 확인해주세요</span>
      </div>
      <div className="auth-modal__btn-container">
        <button onClick={close}>확인</button>
      </div>
    </div>
  )
}

export default AuthModal
