import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const DeneyimList = () => {
  const deneyimList = useSelector((state) => state.deneyim)

  useEffect(() => {
    console.log(deneyimList)
  }, [deneyimList])

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div>DeneyimList</div>
            <div>
              <table className="table_bg table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                  </tr>
                </thead>
                <tbody>
                  {deneyimList &&
                    deneyimList.map((item, index) => {
                      return (
                        <tr key={index}>
                          <th scope="row">{item.sirket_adi}</th>
                          <th scope="row">{item.pozisyon_adi}</th>
                          <th scope="row">{item.baslangic_tarihi}</th>
                          <th scope="row">{item.bitis_tarihi}</th>
                          <th scope="row">{item.aciklama}</th>
                          <th scope="row">{item.sehir}</th>
                        </tr>
                      )
                    })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeneyimList
