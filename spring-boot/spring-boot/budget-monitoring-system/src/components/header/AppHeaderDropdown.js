import React, { useState } from 'react'
import { CAvatar, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle } from '@coreui/react'
import { cilTask } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import avatar8 from './../../assets/images/avatars/woman.png'

const AppHeaderDropdown = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false)

  const handleLogout = () => {
    if (!isLoggedOut) {
      // Clear any user authentication tokens or session identifiers
      localStorage.removeItem('token') // Removing token from local storage
      // Redirect the user to the index page
      window.location.href = '/' // Replace '/' with the appropriate route for your index page
      // You can replace '/' with the appropriate route for your index page
      // Redirect the user to the login page or homepage
      // Use window.location.href = '/login'
      // For now, let's just simulate the logout action
      setIsLoggedOut(true) // Set logout status to true
      alert('Logging out...') // You can replace this with your actual logout logic
    }
  }

  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
        <CAvatar src={avatar8} size="md" />
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">
        <CDropdownItem onClick={handleLogout} disabled={isLoggedOut}>
          <CIcon icon={cilTask} className="me-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
