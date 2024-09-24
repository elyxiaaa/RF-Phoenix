import React from 'react'
import NavBar from '../Components/NavBar'
import Rules1 from '../assets/RF-ASSETS/Rules1.png'
import Footer from '../Components/Footer'
import DataTable from 'react-data-table-component';
function Rule() {
  const columns = [
    {
      name: 'Rule',
      selector: row => row.rule,
    },
    {
      name: 'Sanction',
      selector: row => row.sanction,
    },
  ];
  
  const data = [
      {
      id: 1,
      rule: 'Beetlejuice',
      sanction: '1988',
    },
    {
      id: 2,
      rule: 'Ghostbusters',
      sanction: '1984',
    },
  ]
  return (
    <div>
         <div className={`h-screen w-full bg-BG bg-no-repeat bg-cover bg-center`}>
        <NavBar/>

        </div>
        

        <div>
          <Footer/>
          </div>
    </div>
  )
}

export default Rule
