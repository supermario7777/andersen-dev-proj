import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ComparisonState } from '../../interfaces/comparisonState'
import { Pokemon } from '../../interfaces/pokemon'

const initialState: ComparisonState = {
  comparison: [],
  error: null,
}

const comparisonSlice = createSlice({
  name: 'comparison',
  initialState,
  reducers: {
    addToComparison: (state, action: PayloadAction<Pokemon>) => {
      // if (state.comparison.find((p) => p.id === action.payload.id)) {
      //   state.error = `The pokemon is already in the comparison list`
      //   return
      // }

      if (state.comparison.length >= 2) {
        state.error = 'You can compare only 2 pokémons.'
        return
      }

      state.comparison.push(action.payload)
      state.error = null
    },
    removeFromComparison: (state, action: PayloadAction<number>) => {
      state.comparison = state.comparison.filter((p) => p.id !== action.payload)
    },
    clearComparisonError: (state) => {
      state.error = null
    },
    setComparisonError: (state, action: PayloadAction<string>) => {
      state.error = action.payload
    },
  },
})

export const { addToComparison, removeFromComparison, clearComparisonError, setComparisonError } =
  comparisonSlice.actions

export default comparisonSlice.reducer
