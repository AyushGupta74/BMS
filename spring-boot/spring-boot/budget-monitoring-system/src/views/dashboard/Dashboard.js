import { React, useState, useEffect } from 'react'

import {
  CCardHeader,
  CCol,
  CRow,
  CFormSelect,
  CFormLabel,
  CCard,
  CCardBody,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle } from '@coreui/utils'

const Dashboard = () => {
  const [month, setMonth] = useState('1')
  const [year, setYear] = useState('2024')
  const [tableExample, setTableExample] = useState([])
  const [expensesData, setExpensesData] = useState([])
  const [salaryData, setSalaryData] = useState([])

  useEffect(() => {
    fetchGraphData(month, year)
  }, [month, year])

  function fetchGraphData(month, year) {
    const token = localStorage.getItem('token')

    if (!token) {
      console.error('User is not logged in')
      return
    }

    const url = `http://localhost:8080/expenditure?month=${month}&year=${year}`

    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        if (response.ok) {
          console.log('Data fetched successfully')
          return response.json()
        } else {
          console.error('Failed to fetch data')
        }
      })
      .then((data) => {
        setTableExample(data)
        // Set expenses data
        setExpensesData(data.map((item) => item.expenditure_amount))
        // Set salary data
        setSalaryData(Array.from({ length: getDaysInMonth(month, year) }, () => 100000))
      })
      .catch((error) => {
        console.error('Error occurred while fetching data:', error)
      })
  }

  const handleChange = (event) => {
    const newMonth = event.target.value
    setMonth(newMonth)
    fetchGraphData(newMonth, year)
  }

  const handleYearChange = (event) => {
    const newYear = event.target.value
    setYear(newYear)
    fetchGraphData(month, newYear)
  }

  function getMonthName(monthNumber) {
    const months = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]
    return months[monthNumber - 1]
  }

  function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate()
  }

  return (
    <>
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={12}>
              <h4 id="traffic" className="card-title mb-0">
                {getMonthName(month)} Expenses
              </h4>
            </CCol>
            <CCol sm={12}>
              <CRow className="mb-3 mt-3">
                <CFormLabel htmlFor="staticEmail2" className="col-sm-3 col-form-label">
                  Select Month
                </CFormLabel>
                <CCol sm={9}>
                  <CFormSelect
                    aria-label="Default select example"
                    id="month"
                    name="month"
                    onChange={handleChange}
                    value={month}
                  >
                    <option>Select Month</option>
                    {[...Array(12).keys()].map((index) => (
                      <option key={index + 1} value={index + 1}>
                        {getMonthName(index + 1)}
                      </option>
                    ))}
                  </CFormSelect>
                </CCol>
              </CRow>
              <CRow className="mb-3 mt-3">
                <CFormLabel htmlFor="staticEmail2" className="col-sm-3 col-form-label">
                  Select Year
                </CFormLabel>
                <CCol sm={9}>
                  <CFormSelect
                    aria-label="Default select example"
                    id="year"
                    name="year"
                    onChange={handleYearChange}
                    value={year}
                  >
                    <option>Select Year</option>
                    {[...Array(3).keys()].map((index) => (
                      <option key={index} value={2024 + index}>
                        {2024 + index}
                      </option>
                    ))}
                  </CFormSelect>
                </CCol>
              </CRow>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: Array.from({ length: getDaysInMonth(month, year) }, (_, i) => i + 1),
              datasets: [
                {
                  label: 'Expenses',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: expensesData,
                },
                {
                  label: 'Monthly Salary',
                  backgroundColor: 'transparent',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: salaryData,
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: true,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
      </CCard>

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>{getMonthName(month)} Expenses List</CCardHeader>
            <CCardBody>
              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell className="text-center">Date</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Type</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Expenditure Amount</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
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
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
