import React, { Fragment, useEffect, useState } from "react"
import SearchIcon from "../../../assets/icons/attr/search.png"
import FilterIcon from "../../../assets/icons/attr/filter.png"
import { useHistory } from "react-router"
import useNavbar from "../../../hooks/useNavbar"
import RecommendRoomPreview from "./../../../components/Room/RecommendRoomPreview/RecommendRoomPreview"
import RestRoomPreview from "../../../components/Room/RestRoomPreview/RestRoomPreview"

import { ChatType } from "../../../types/ChatTypes"
import { FilterData } from "./../../../types/FilterTypes"

import RecommendRoomPreviewSK from "./../../../components/Room/RecommendRoomPreview/RecommendRoomPreviewSK"
import RestRoomPreviewSK from "../../../components/Room/RestRoomPreview/RestRoomPreviewSK"

import _ from "lodash"

import "./RoomListPage.css"

interface Props {
  allChatList?: ChatType[] | undefined
  fetchChatLoading: boolean
  fetchAllChatSaga: () => void
  isFilter: boolean
  filterInfo: FilterData
  filterFinishHandler: () => void
}

const RoomListPage = ({
  allChatList,
  fetchChatLoading,
  fetchAllChatSaga,
  isFilter,
  filterInfo,
  filterFinishHandler,
}: Props) => {
  const history = useHistory()
  const [navbarInside] = useNavbar()
  const [searchText, setSearchText] = useState<string>("")
  const [allChatListFilter, setAllChatListFilter] = useState<
    ChatType[] | undefined
  >(allChatList ? allChatList : undefined)

  useEffect(() => {
    !isFilter && fetchAllChatSaga()
    navbarInside()
  }, [isFilter, fetchAllChatSaga, navbarInside, filterFinishHandler])

  useEffect(() => {
    isFilter &&
      setAllChatListFilter(
        allChatList?.filter(
          (chat) =>
            // chat type 필터
            chat.chat_type === filterInfo.chat_type ||
            // grade 필터
            (!_.includes(filterInfo.grade, "no") &&
              _.includes(chat.grade, filterInfo.grade)) ||
            // gender 필터
            (!_.includes(filterInfo.gender, "nogender") &&
              chat.select_gender === filterInfo.gender) ||
            // 공통점 필터
            (!_.includes(filterInfo.chat_feature, "nocommon") &&
              // interest가 0보다 크면서
              _.size(chat.chat_feature.interest) > 0 &&
              // 필터가 interest인 경우
              _.includes(filterInfo.chat_feature, "interest")) ||
            (!_.includes(filterInfo.chat_feature, "nocommon") &&
              //단과대가 0보다 크면서
              _.size(chat.chat_feature.faculty) > 0 &&
              //   // 필터가 interest인 경우
              _.includes(filterInfo.chat_feature, "faculty")) ||
            (!_.includes(filterInfo.chat_feature, "nocommon") &&
              // mbti가 있으면서
              _.size(chat.chat_feature.mbti.first_mbti) > 0 &&
              _.size(chat.chat_feature.mbti.first_mbti) > 0 &&
              _.size(chat.chat_feature.mbti.first_mbti) > 0 &&
              _.size(chat.chat_feature.mbti.first_mbti) > 0 &&
              // 필터가 mbti인 경우
              _.includes(filterInfo.chat_feature, "mbti")) ||
            _.includes(filterInfo.purpose, chat.chat_purpose)
        )
      )
  }, [filterInfo, allChatList, isFilter])

  useEffect(() => {
    _.size(searchText) > 0 && filterFinishHandler()
  }, [searchText, filterFinishHandler, allChatList])

  useEffect(() => {
    _.size(searchText) > 0 &&
      setAllChatListFilter(
        allChatList?.filter((chat) => _.includes(chat.title, searchText))
      )
  }, [allChatList, searchText])

  useEffect(() => {
    console.log("allChatList", allChatList)
    console.log("isFilter: ", isFilter)
    console.log(searchText.length === 0 && !isFilter)
  }, [allChatList, isFilter, searchText])

  return (
    <Fragment>
      <div className="roomlist">
        <div className="roomlist-header">
          <span className="roomlist-header__title">방 목록</span>
        </div>
        <div className="filter">
          <div className="filter__search-icon">
            <img src={SearchIcon} alt="filter" />
          </div>
          <input
            type="text"
            placeholder="방 제목을 검색해보세요."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <div
            className="filter__search"
            onClick={() => history.push("/room/filter")}
          >
            <img src={FilterIcon} alt="search" />
          </div>
        </div>

        {searchText.length === 0 && !isFilter && (
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
        )}
        <div className="rest-room">
          {searchText.length === 0 && !isFilter ? (
            <span className="rest-room__title">다른 방도 구경해보세요</span>
          ) : (
            <span className="rest-room__title">검색 결과</span>
          )}

          <div className="rest-room__list">
            {fetchChatLoading &&
              new Array(4)
                .fill(1)
                .map((_, idx) => <RestRoomPreviewSK key={idx} />)}
            {!fetchChatLoading &&
              (!isFilter && searchText.length === 0
                ? allChatList?.map((chat) => (
                    <RestRoomPreview key={chat.chat_id} chat={chat} />
                  ))
                : allChatListFilter.map((chat) => (
                    <RestRoomPreview key={chat.chat_id} chat={chat} />
                  )))}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default RoomListPage
