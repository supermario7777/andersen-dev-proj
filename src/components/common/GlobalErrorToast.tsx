import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../store/index'
import toast from 'react-hot-toast'
import { clearComparisonError } from '../../slices/comparison/comparisonSlice'

const GlobalErrorToast = () => {
  const error = useSelector((state: RootState) => state.comparison.error)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (error) {
      toast.error(error)
      dispatch(clearComparisonError())
    }
  }, [error, dispatch])

  return null
}

export default GlobalErrorToast
