import { useEffect, useState } from "react"
import { TestUserState } from "../types/ChatTypes"

import user1 from "../assets/user/user1.jpg"
import user2 from "../assets/user/user2.jpg"
import user3 from "../assets/user/user3.png"
import user4 from "../assets/user/user4.png"
import user5 from "../assets/user/user5.jpg"
import user6 from "../assets/user/user6.jpeg"

export const useAdddProfileImages = (defaultArray?: TestUserState[]) => {
  const [newArray, setNewArray] = useState<TestUserState[]>()

  useEffect(() => {
    setNewArray(
      defaultArray?.map((userInfo) => {
        let image
        switch (userInfo.name) {
          case "아이유":
            image = user1
            break
          case "박보검":
            image = user3
            break
          case "조이":
            image = user2
            break
          case "아구몬":
            image = user5
            break
          case "짱구":
            image = user6
            break
          case "라이언":
            image = user4
            break
        }
        return {
          ...userInfo,
          image,
        }
      })
    )
  }, [])

  return [newArray]
}
