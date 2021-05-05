import React from 'react'
import {
  ApplicationContainer,
  ApplicationForm,
  InputContainer,
  MainFieldSet,
  SubFieldSet,
  SubmitButton,
  ApplicationBanner,
  SelectContainer,
  Legend,
} from '../components/StyledComponents'

import { FaChevronRight } from 'react-icons/fa'
const Application = ({
  name,
  email,
  phone,
  address,
  username,
  password,
  gender,
  module,
  modules,
  onSubmit,
}) => {
  return (
    <ApplicationContainer>
      <ApplicationBanner></ApplicationBanner>
      <ApplicationForm>
        <MainFieldSet>
          <Legend>Student Details</Legend>
          <InputContainer>
            <label>Full Name:</label>
            <input
              type='text'
              value={name.name}
              onChange={(e) => {
                name.setName(e.target.value)
              }}
              placeholder='eg: Mirul Khanal...'
            />
          </InputContainer>
          <InputContainer>
            <label>Email:</label>
            <input
              type='text'
              value={email.email}
              onChange={(e) => {
                console.log(email.email)
                email.setEmail(e.target.value)
              }}
              placeholder='eg: mirulkhanal@gmail.com...'
            />
          </InputContainer>

          <InputContainer>
            <label>Phone Number:</label>
            <input
              type='text'
              value={phone.phone}
              onChange={(e) => {
                console.log(email.email)
                phone.setPhone(e.target.value)
              }}
              placeholder='eg: 9857075392...'
            />
          </InputContainer>
          <InputContainer>
            <label>Address:</label>
            <input
              type='text'
              value={address.address}
              onChange={(e) => {
                console.log(email.email)
                address.setAddress(e.target.value)
              }}
              placeholder='eg: Grande Towers...'
            />
          </InputContainer>
        </MainFieldSet>
        <SubFieldSet>
          <Legend>Login Details</Legend>
          <InputContainer>
            <label>Username:</label>
            <input
              type='text'
              value={username.username}
              onChange={(e) => {
                console.log(email.email)
                username.setUsername(e.target.value)
              }}
              placeholder='eg: mkhanal...'
            />
          </InputContainer>
          <InputContainer>
            <label>Password:</label>
            <input
              type='text'
              value={password.password}
              onChange={(e) => {
                console.log(email.email)
                password.setPassword(e.target.value)
              }}
              placeholder='eg: B@n@n@987'
            />
          </InputContainer>

          <InputContainer>
            <label>Gender</label>
            <input
              type='radio'
              name='gender'
              value='male'
              checked={gender.gender === 'male'}
              onChange={(e) => {
                console.log(gender.gender)
                gender.setGender(e.target.value)
              }}
            />
            Male
            <br />
            <input
              type='radio'
              name='gender'
              value='female'
              // value={password.password}
              checked={gender.gender === 'female'}
              onChange={(e) => {
                console.log(gender.gender)
                gender.setGender(e.target.value)
              }}
            />
            Female
            <br />
          </InputContainer>
          <SelectContainer>
            <label>Courses</label>

            <select
              value={module.selectedModule}
              onChange={(e) => {
                module.setSelectedModule(e.target.value)
              }}>
              {modules &&
                modules.map((module) => (
                  <option key={module.moduleID} value={module.moduleID}>
                    {module.moduleName}
                  </option>
                ))}
            </select>
          </SelectContainer>
        </SubFieldSet>
        <SubmitButton type='submit' onSubmit={onSubmit} onClick={onSubmit}>
          <p>Submit</p>
          <FaChevronRight className='icon submit-icon' />
        </SubmitButton>
      </ApplicationForm>
    </ApplicationContainer>
  )
}

export default Application
