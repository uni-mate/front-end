import { useCallback } from "react"
import { useDispatch } from "react-redux"
import { navbarIN, navbarOut } from "../redux/modules/navbar"

const useNavbar = () => {
  const dispatch = useDispatch()
  const navbarInside = useCallback(() => {
    dispatch(navbarIN())
  }, [dispatch])
  const navbarOutSide = useCallback(() => {
    dispatch(navbarOut())
  }, [dispatch])
  return [navbarInside, navbarOutSide]
}

export default useNavbar
