import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import FilterPage from "./FilterPage"
import { RootState } from "./../../types/types"
import { UserState } from "./../../types/UserTypes"
import { FilterData } from "./../../types/FilterTypes"
import {
  filterFinish,
  filterIng,
  successFilter,
} from "../../redux/modules/filter"

const FilterPageContainer = () => {
  const dispatch = useDispatch()
  const user = useSelector<RootState, UserState>(
    (state) => state.auth.user_data
  )
  const filterInfo = useSelector<RootState, FilterData>(
    (state) => state.filter.filter_data
  )
  const setFilterHandler = useCallback(
    (req) => {
      dispatch(successFilter(req))
    },
    [dispatch]
  )
  const filterStart = useCallback(() => {
    dispatch(filterIng())
  }, [dispatch])
  const filterEnd = useCallback(() => {
    dispatch(filterFinish())
  }, [dispatch])
  return (
    <FilterPage
      userInfo={user}
      filterInfo={filterInfo}
      setFilterHandler={setFilterHandler}
      filterStart={filterStart}
      filterEnd={filterEnd}
    />
  )
}

export default FilterPageContainer
