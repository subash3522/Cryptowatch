import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './App.css'

function CryptoTable() {

    const [crypto,setCrypto] = useState([])

    const cryptoHandler =()=>{
        axios.get('https://api.coincap.io/v2/assets')
        .then(res=>{
            
            setCrypto(res.data.data)}
        )
        .catch(err=>console.log(err));
    }

    useEffect(()=>{
        cryptoHandler()
    },[])

    const sortedCrypto = [...crypto].sort((a,b)=>b.priceUsd - a.priceUsd)
    console.log(sortedCrypto.slice(0,10));
  return (
   <>
   <div className="graph">
   <ResponsiveContainer width="100%" height={500}>
        <BarChart data={crypto}>
          <XAxis dataKey="name" />
          <YAxis  />
          <Tooltip />
          <Legend />
          <Bar dataKey="priceUsd" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      </div>
   </>
  )
}

export default CryptoTable