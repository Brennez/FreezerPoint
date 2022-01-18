import { useState } from 'react'

function Home() {
  const [data, setData] = useState({
    nome: '',
    autor: '',
    categoria: '',
    genero: '',
    edicao: '',
    sinopse: '',
    image_url: '',
    venda: '',
    troca: '',
    doacao: '',
    preco: ''
  })

  return (
    <div>
      <Input data={data} setData={setData} type={'nome'} />
    </div>
  )
}

export function Input({ setData, data, type }) {
  function handleInputChange(setData, data, type, value) {
    setData({
      ...data,
      [type]: value
    })
  }

  return (
    <input
      onchange={e => handleInputChange(setData, data, type, e.target.value)}
    />
  )
}
