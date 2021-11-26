import { useState } from "react"
import { TestUserState } from "../types/ChatTypes"

import user1 from "../assets/profileImage/p1.png"
import user2 from "../assets/profileImage/p2.png"
import user3 from "../assets/profileImage/p3.png"

export const useAdddProfileImages = (defaultArray?: TestUserState[]) => {
  const [newArray, setNewArray] = useState<TestUserState[]>()

  useState(() => {
    setNewArray(
      defaultArray?.map((userInfo) => {
        let image
        switch (userInfo.name) {
          case "고니":
            image = user1
            break
          case "아이유":
            image = user2
            break
          case "조이":
            image = user3
            break
        }
        return {
          ...userInfo,
          image,
        }
      })
    )
  })

  return [newArray]
}
