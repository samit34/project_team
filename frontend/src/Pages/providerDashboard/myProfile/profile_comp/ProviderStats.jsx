import React from 'react'

const stats = [
    { id: 1, name: 'Transactions every 24 hours', value: '44 million' },
    { id: 2, name: 'Assets under holding', value: '$119 trillion' },
    { id: 3, name: 'New users annually', value: '46,000' },
  ]
  
  const ProviderStats = () => {
    return (


      <section className="prv-statics">
      
      <div className="prv-static-container ">
          <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
                  <div  key={stat.id} className="bg-white rounded-lg shadow-md p-6 text-center">
                      <h3 className="text-2xl font-semibold text-blue-600">{stat.value}</h3>
                      <p className="text-gray-600">{stat.name}  </p> 
                  </div>
                   ))}
          </div>
      </div>
    </section>
      
    )
  }
  
  export default ProviderStats

 