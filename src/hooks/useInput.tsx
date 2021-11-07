import { useCallback, useState } from "react"

const useInput = <T,>(
  initialState: T
): [
  T,
  (e: React.ChangeEvent) => void,
  (email: string) => boolean,
  (password: string) => boolean
] => {
  const [state, setState] = useState(initialState)
  const onChange = useCallback((e) => {
    setState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }, [])
  const emailValid = (emailInput: string): boolean => {
    const emailReg =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i
    return emailReg.test(emailInput)
  }
  const passwordValid = (passwordInput: string): boolean => {
    const passwordReg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i
    return passwordReg.test(passwordInput)
  }

  return [state, onChange, emailValid, passwordValid]
}

export default useInput
