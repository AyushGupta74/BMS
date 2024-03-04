import React, { useState, useEffect } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormInput,
  CFormLabel,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const FormControl = () => {
  const [expenditureData, setExpenditureData] = useState({
    expenditure_date: '',
    expenditure_type: '',
    expenditure_amount: '',
  })

  const [expenditureList, setExpenditureList] = useState([])

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setExpenditureData({ ...expenditureData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8080/expenditure/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(expenditureData),
      })
      if (response.ok) {
        alert('Expenditure data submitted successfully')
        fetchData()
      } else {
        alert('Failed to submit expenditure data')
      }
    } catch (error) {
      alert('Error submitting expenditure data: ' + error)
    }
  }

  const handleDelete = async (index) => {
    try {
      const response = await fetch(`http://localhost:8080/expenditure/${index}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        alert('Expenditure data deleted successfully')
        fetchData()
      } else {
        alert('Failed to delete expenditure data')
      }
    } catch (error) {
      alert('Error deleting expenditure data: ' + error)
    }
  }

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/expenditure')
      if (response.ok) {
        const data = await response.json()
        setExpenditureList(data)
      } else {
        console.error('Failed to fetch expenditure data')
      }
    } catch (error) {
      console.error('Error fetching expenditure data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Expenditure Management</strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3" onSubmit={handleSubmit}>
              <CRow className="mb-3 mt-3">
                <CFormLabel htmlFor="expenditure_date" className="col-sm-3 col-form-label">
                  Select Month
                </CFormLabel>
                <CCol sm={9}>
                  <CFormInput
                    type="date"
                    placeholder="Enter Expenditure Date"
                    name="expenditure_date"
                    id="expenditure_date"
                    value={expenditureData.expenditure_date}
                    min={new Date().toJSON().slice(0, 10)}
                    onChange={handleInputChange}
                    required
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3 mt-3">
                <CFormLabel htmlFor="expenditure_type" className="col-sm-3 col-form-label">
                  Select Year
                </CFormLabel>
                <CCol sm={9}>
                  <CFormInput
                    type="text"
                    placeholder="Enter Expenditure Category"
                    name="expenditure_type"
                    value={expenditureData.expenditure_type}
                    id="expenditure_type"
                    onChange={handleInputChange}
                    required
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3 mt-3">
                <CFormLabel htmlFor="expenditure_amount" className="col-sm-3 col-form-label">
                  Enter Salary Amount
                </CFormLabel>
                <CCol sm={9}>
                  <CFormInput
                    type="number"
                    placeholder="Enter Expenditure Amount"
                    name="expenditure_amount"
                    value={expenditureData.expenditure_amount}
                    id="expenditure_amount"
                    onChange={handleInputChange}
                    required
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3 mt-3">
                <CCol sm={9} className="offset-sm-3">
                  <CButton type="submit" className="mb-3">
                    Submit
                  </CButton>
                </CCol>
              </CRow>
            </CForm>
          </CCardBody>
        </CCard>
      </CCol>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Expenditure List</strong>
          </CCardHeader>
          <CCardBody>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell className="text-center">Date</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Type</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Expenditure Amount</CTableHeaderCell>
                  <CTableHeaderCell>Delete</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {expenditureList.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell className="text-center">
                      <div>{item.expenditure_date}</div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <div>{item.expenditure_type}</div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <div>{item.expenditure_amount}</div>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div>
                        <CButton
                          color="danger"
                          type="button"
                          className="mb-3"
                          onClick={() => handleDelete(item.expenditure_id)}
                        >
                          Delete
                        </CButton>
                      </div>
                    </CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default FormControl
