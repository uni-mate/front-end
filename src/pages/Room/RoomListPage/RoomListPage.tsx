import React, { Fragment, useEffect } from "react"
import SearchIcon from "../../../assets/icons/attr/search.png"
import FilterIcon from "../../../assets/icons/attr/filter.png"
import { useHistory } from "react-router"
import useNavbar from "../../../hooks/useNavbar"
import RecommendRoomPreview from "./../../../components/Room/RecommendRoomPreview/RecommendRoomPreview"
import RestRoomPreview from "../../../components/Room/RestRoomPreview/RestRoomPreview"

import { Chat } from "../../../types/types"

import RecommendRoomPreviewSK from "./../../../components/Room/RecommendRoomPreview/RecommendRoomPreviewSK"
import RestRoomPreviewSK from "../../../components/Room/RestRoomPreview/RestRoomPreviewSK"

import "./RoomListPage.css"
import BasicModal from "../../../components/Partials/Modal/BasicModal"
import CreateRoomModal from "../../../components/Partials/Modal/CreateRoomModal/CreateRoomModal"

interface Props {
  allChatList?: Chat[] | undefined
  fetchChatLoading: boolean
  createLoading: boolean
  fetchAllChatSaga: () => void
}

const RoomListPage = ({
  allChatList,
  createLoading,
  fetchChatLoading,
  fetchAllChatSaga,
}: Props) => {
  const history = useHistory()
  const [navbarInside] = useNavbar()
  useEffect(() => {
    fetchAllChatSaga()
  }, [fetchAllChatSaga])

  useEffect(() => {
    navbarInside()
  }, [navbarInside])

  return (
    <Fragment>
      <BasicModal
        isModalOpen={createLoading}
        width="0px"
        height="0px"
        backgroundColor="transparent"
        boxShadow={0}
        padding="0px"
      >
        <CreateRoomModal />
      </BasicModal>
      <div className="roomlist">
        <div className="roomlist-header">
          <span className="roomlist-header__title">방 목록</span>
        </div>
        <div className="filter">
          <div className="filter__search-icon">
            <img src={SearchIcon} alt="filter" />
          </div>
          <input type="text" placeholder="가고 싶은 방을 검색해보세요." />
          <div
            className="filter__search"
            onClick={() => history.push("/room/filter")}
          >
            <img src={FilterIcon} alt="search" />
          </div>
        </div>
        <div className="recommend-room">
          <span className="recommend-room__title">
            당신과 잘 맞는 방을 추천드려요!
          </span>

          <div className="recommend-room__list">
            {fetchChatLoading &&
              new Array(4)
                .fill(1)
                .map((_, idx) => <RecommendRoomPreviewSK key={idx} />)}
            {!fetchChatLoading &&
              allChatList?.map((chat) => (
                <RecommendRoomPreview key={chat.chat_id} chat={chat} />
              ))}
          </div>
        </div>
        <div className="rest-room">
          <span className="rest-room__title">다른 방도 구경해보세요</span>
          <div className="rest-room__list">
            {fetchChatLoading &&
              new Array(4)
                .fill(1)
                .map((_, idx) => <RestRoomPreviewSK key={idx} />)}
            {!fetchChatLoading &&
              allChatList?.map((chat) => (
                <RestRoomPreview key={chat.chat_id} chat={chat} />
              ))}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default RoomListPage
