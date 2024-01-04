import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Produto } from '../../App'

type FavoritoState = {
  itens: Produto[]
}

const initialState: FavoritoState = {
  itens: []
}

const favoritoSlice = createSlice({
  name: 'favorito',
  initialState,
  reducers: {
    adicionar1: (state, action: PayloadAction<Produto>) => {
      const product = action.payload

      if (state.itens.find((produto) => produto.id === product.id)) {
        alert('item já adicionado')
      } else {
        state.itens.push(product)
      }
    }
  }
})

export const { adicionar1 } = favoritoSlice.actions

export default favoritoSlice.reducer
