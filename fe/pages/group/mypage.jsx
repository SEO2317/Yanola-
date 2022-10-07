import React, { useEffect, useState } from 'react'
import axios, { Axios } from 'axios'

const mypage = () => {

  const [springData, setSpringData] = useState('');
  

  useEffect(()=>{
    axios({
      method: 'GET',
      url: 'http://localhost:8105/group/1'
    })
    .then(response => setSpringData(response.data));
  }, []);

  console.log(springData);
  return (
    <div className='flex flex-col items-center mx-3 my-auto'>
    <table className="border-separate border border-slate-500 ...">
    <tr>
      <th className="border border-slate-300 ...">GROUP ID</th>
      <th className="border border-slate-300 ...">{springData.groupId}</th>
    </tr>
  <tbody>
    <tr>
      <td className="border border-slate-300 ...">GROUP RANK</td>
      <td className="border border-slate-300 ...">{springData.groupId}</td>
    </tr>
    <tr>
      <td className="border border-slate-300 ...">GROUP SCORE</td>
      <td className="border border-slate-300 ...">{springData.groupId}</td>
    </tr>
    <tr>
      <td className="border border-slate-300 ...">GROUP MILLIGE</td>
      <td className="border border-slate-300 ...">{springData.groupId}</td>
    </tr>
  </tbody>
</table>
</div>
  );
  }

export default mypage