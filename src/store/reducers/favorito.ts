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
    adicionar: (state, action: PayloadAction<Produto>) => {
      const product = action.payload

      if (state.itens.filter((produto) => produto.id === product.id)) {
        alert('item já adicionado')
      } else {
        state.itens.push(product)
      }
    }
  }
})

export const { adicionar } = favoritoSlice.actions

export default favoritoSlice.reducer
