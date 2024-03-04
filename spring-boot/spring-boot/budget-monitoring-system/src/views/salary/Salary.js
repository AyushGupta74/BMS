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
  CFormSelect,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'

const FormControl = () => {
  const [formData, setFormData] = useState({
    salaryMonth: '',
    salaryYear: '',
    amount: '',
  })

  const [salaryData, setSalaryData] = useState([])

  useEffect(() => {
    fetchData()
  }, []) // Fetch data on component mount

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/salery') // Update URL with your endpoint
      if (response.ok) {
        const data = await response.json()
        setSalaryData(data)
      } else {
        console.error('Failed to fetch salary data')
      }
    } catch (error) {
      console.error('Error fetching salary data:', error)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    const parsedValue = value !== '' ? parseInt(value, 10) : ''
    setFormData({ ...formData, [name]: parsedValue })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:8080/salery/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        alert('Form submitted successfully')
        window.location.reload()

        setFormData({
          salaryMonth: '',
          salaryYear: '',
          amount: '',
        })
      } else {
        console.error('Failed to submit form data')
      }
    } catch (error) {
      console.error('Error submitting form data:', error)
    }
  }
  const handleDelete = async (index) => {
    try {
      const response = await fetch(`http://localhost:8080/salery/${index}`, {
        method: 'DELETE',
      })
      if (response.ok) {
        alert('Data deleted successfully')
        fetchData()
      } else {
        console.error('Failed to delete data')
      }
    } catch (error) {
      console.error('Error deleting data:', error)
    }
  }

  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Salary Management</strong>
          </CCardHeader>
          <CCardBody>
            <CForm className="row g-3" onSubmit={handleSubmit}>
              <CRow className="mb-3 mt-3">
                <CFormLabel htmlFor="month" className="col-sm-3 col-form-label">
                  Select Month
                </CFormLabel>
                <CCol sm={9}>
                  <CFormSelect
                    id="salaryMonth"
                    name="salaryMonth"
                    onChange={handleInputChange}
                    value={formData.salaryMonth}
                  >
                    <option value="">Select Month</option>
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    {/* Add more options for other months */}
                  </CFormSelect>
                </CCol>
              </CRow>
              <CRow className="mb-3 mt-3">
                <CFormLabel htmlFor="year" className="col-sm-3 col-form-label">
                  Select Year
                </CFormLabel>
                <CCol sm={9}>
                  <CFormSelect
                    id="salaryYear"
                    name="salaryYear"
                    onChange={handleInputChange}
                    value={formData.salaryYear}
                  >
                    <option value="">Select Year</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    {/* Add more options for other years */}
                  </CFormSelect>
                </CCol>
              </CRow>
              <CRow className="mb-3 mt-3">
                <CFormLabel htmlFor="salary_amount" className="col-sm-3 col-form-label">
                  Enter Salary Amount
                </CFormLabel>
                <CCol sm={9}>
                  <CFormInput
                    type="number"
                    placeholder="Enter Salary Amount"
                    name="amount"
                    id="amount"
                    onChange={handleInputChange}
                    value={formData.amount}
                    required
                  />
                </CCol>
              </CRow>
              <CRow className="mb-3 mt-3">
                <CCol sm={3}></CCol>
                <CCol sm={9}>
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
            <strong>Salary List</strong>
          </CCardHeader>
          <CCardBody>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell className="text-center">Month</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Year</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Salary Amount</CTableHeaderCell>
                  <CTableHeaderCell>Delete</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {salaryData.map((item, index) => (
                  <CTableRow key={index}>
                    <CTableDataCell className="text-center">{item.salaryMonth}</CTableDataCell>
                    <CTableDataCell className="text-center">{item.salaryYear}</CTableDataCell>
                    <CTableDataCell className="text-center">{item.amount}</CTableDataCell>
                    <CTableDataCell>
                      <CButton
                        color="danger"
                        type="button"
                        className="mb-3"
                        onClick={() => handleDelete(item.monthly_salary_id)}
                      >
                        Delete
                      </CButton>
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
