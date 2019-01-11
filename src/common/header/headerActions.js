import axios from 'axios'

export const SEARCH_FOCUS = 'Header.SEARCH_FOCUS'
export const SEARCH_BLUR = 'Header.SEARCH_BLUR'
export const GET_HOT_SEARCH_LIST = 'Header.GET_HOT_SEARCH_LIST'
export const HOT_SEARCH_MOUSE_ENTER = 'Header.HOT_SEARCH_MOUSE_ENTER'
export const HOT_SEARCH_MOUSE_LEAVE = 'Header.HOT_SEARCH_MOUSE_LEAVE'
export const CHANGE_PAGE = 'Header.CHANGE_PAGE'

const _changeList = (hotSearchList) => ({
  type: GET_HOT_SEARCH_LIST,
  hotSearchList,
  totalPage: Math.ceil(hotSearchList.length / 7)
})

const _searchFocus = () => ({
  type: SEARCH_FOCUS
})

const _searchBlur = () => ({
  type: SEARCH_BLUR
})

const _hotSearchMouseEnter = () => ({
  type: HOT_SEARCH_MOUSE_ENTER
})

const _hotSearchMouseLeave = () => ({
  type: HOT_SEARCH_MOUSE_LEAVE
})

const _changePage = (newCurrentPage) => ({
  type: CHANGE_PAGE,
  newCurrentPage
})

const _getHotSearchList = () => (dispatch) => {
  axios.get('api/hotSearchList.json')
    .then((res) => {
      const hotSearchList = res.data.hotSearchList

      dispatch(_changeList(hotSearchList))
    })
    .catch(() => {
      console.log('Get hot search list error')
    })
}

export const handleSearchFocus = hotSearchList => dispatch => {
  (hotSearchList.length <= 0) && dispatch(_getHotSearchList())

  dispatch(_searchFocus())
}

export const handleSearchBlur = () => dispatch => {
  dispatch(_searchBlur())
}

export const handleHotSearchMouseEnter = () => dispatch => {
  dispatch(_hotSearchMouseEnter())
}

export const handleHotSearchMouseLeave = () => dispatch => {
  dispatch(_hotSearchMouseLeave())
}

export const handleChangePage = (currentPage, totalPage, spinIcon) => dispatch => {
  const originAngle = spinIcon.style.transform.replace(/[^0-9]/ig, '')
  const originAngleNum = originAngle ? parseInt(originAngle, 10) : 0
  spinIcon.style.transform = `rotate(${originAngleNum + 360}deg)`

  if (currentPage < totalPage) {
    dispatch(_changePage(currentPage + 1))
  } else {
    dispatch(_changePage(1))
  }
}

export const handleArticleSearch = () => dispatch => {
  console.log('typing')
}