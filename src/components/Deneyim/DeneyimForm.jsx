import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useFormik } from 'formik'
import { DeneyimSchema } from '../../validations/DeneyimSchema'
import { useDispatch, useSelector } from 'react-redux'
import { setDeneyim } from '../../stores/deneyim'

const DeneyimForm = () => {
  const [deneyimler, setDeneyimler] = useState([])
  const deneyimList = useSelector((state) => state.deneyim)
  const dispatch = useDispatch()

  const notify = () => {
    toast.success('Başarılı!!!!!', {
      position: toast.POSITION.TOP_RIGHT,
    })

    // toast.error('Errorr!!!!!', {
    //   position: toast.POSITION.TOP_RIGHT,
    // })
  }

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    values,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      sirket_adi: '',
      pozisyon_adi: '',
      baslangic_tarihi: '',
      bitis_tarihi: '',
      aciklama: '',
      sehir: '',
    },
    onSubmit: (values, actions) => {
      console.log(errors)
      console.log(values)
      console.log(actions)
      setDeneyimler((deneyimler) => [...deneyimler, values])
      dispatch(setDeneyim(values))
      notify()

      setTimeout(() => {
        console.log(JSON.stringify(values, null, 2))
        actions.resetForm()
        actions.setSubmitting(false)
        console.log('deneyimList', deneyimList)
        console.log(process.env.REACT_APP_API_URL)
      }, 1000)
    },
    validationSchema: DeneyimSchema,
  })

  return (
    <>
      <div>DeneyimForm</div>
      <button className="btn btn-danger" onClick={notify}>
        Notify
      </button>
      {errors && <p>{JSON.stringify(errors)}</p>}
      {deneyimler &&
        deneyimler.map((item, index) => {
          return <p key={index}>{JSON.stringify(item)}</p>
        })}

      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <form
                onSubmit={handleSubmit}
                autoComplete="off"
                className="form_bg"
              >
                <div className="form_title">Deneyim Ekle</div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="mb-3">
                      {/* Şirket Adı */}
                      <label
                        htmlFor="sirket_adi"
                        className="form_label form-label"
                      >
                        Şirket Adı
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="sirket_adi"
                        name="sirket_adi"
                        value={values.sirket_adi}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="mb-3">
                      {/* Pozisyon Adı */}
                      <label
                        htmlFor="pozisyon_adi"
                        className="form_label form-label"
                      >
                        Pozisyon Adı
                      </label>
                      <input
                        id="pozisyon_adi"
                        name="pozisyon_adi"
                        type="text"
                        className="form-control"
                        value={values.pozisyon_adi}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="mb-3">
                      {/* Başlangıç Tarihi */}
                      <label
                        htmlFor="baslangic_tarihi"
                        className="form_label form-label"
                      >
                        Başlangıç Tarihi
                      </label>
                      <input
                        id="baslangic_tarihi"
                        name="baslangic_tarihi"
                        type="date"
                        className="form-control"
                        value={values.baslangic_tarihi}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="mb-3">
                      {/* Bitiş Tarihi */}
                      <label
                        htmlFor="bitis_tarihi"
                        className="form_label form-label"
                      >
                        Bitiş Tarihi
                      </label>
                      <input
                        id="bitis_tarihi"
                        name="bitis_tarihi"
                        type="date"
                        className="form-control"
                        value={values.bitis_tarihi}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-3">
                    <div className="mb-3">
                      {/* Şehir */}
                      <label htmlFor="sehir" className="form_label form-label">
                        Şehir
                      </label>
                      <input
                        id="sehir"
                        name="sehir"
                        type="text"
                        className="form-control"
                        value={values.sehir}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="col-md-9">
                    <div className="mb-3">
                      {/* Açıklama */}
                      <label
                        htmlFor="aciklama"
                        className="form_label form-label"
                      >
                        Açıklama
                      </label>
                      <input
                        id="aciklama"
                        name="aciklama"
                        type="text"
                        className="form-control"
                        value={values.aciklama}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                <button type="submit" className="btn btn-success">
                  Gönder
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DeneyimForm
