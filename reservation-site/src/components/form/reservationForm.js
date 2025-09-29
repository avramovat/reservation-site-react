import React from 'react';
import { useEffect } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import  {useReservationForm}  from './useReservationForm';
import bgImg from '../../assets/nerfee-mirandilla-o1EDsUFmuXQ-unsplash.jpg';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaList } from 'react-icons/fa';
import { Layout, FormContainer, FormHeader, IconButton, Title, StyledForm, Label, Textarea, Input, Error, SubmitButton, Background} from '../../styles/components/Form'
import { StyledPhoneInput } from '../../styles/components/ContactInput'



export default function ReservationForm({ onSubmit }) {
    const navigate = useNavigate();

  
    const {
      formData,
      errors,
      isPhoneValid,
      dateRef,
      minTime,
      maxTime,
      handleChange,
      handlePhoneChange,
      handleSubmit,
    } = useReservationForm(onSubmit);
  
    const today = new Date().toISOString().split('T')[0];
  
    return (
      <Layout>
        <Background src={bgImg} alt="background" />
        <FormContainer>
          <FormHeader>
            <IconButton onClick={() => navigate('/')}><FaArrowLeft /></IconButton>
            <IconButton onClick={() => navigate('/reservations')} title="See all reservations"><FaList /></IconButton>
          </FormHeader>
  
          <Title>Reservation</Title>
  
          <StyledForm onSubmit={handleSubmit} id="reservationForm">
            <Label>
              Name:
              <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
              {errors.name && <Error>{errors.name}</Error>}
            </Label>
  
            <Label>
              Contact Number:
              <StyledPhoneInput
                country={'es'}
                value={formData.contact}
                onChange={handlePhoneChange}
                enableSearch={true}
                enableAreaCodes={true}
                placeholder=""
                inputProps={{ name: 'contact', required: true }}
                inputClass="react-phone-input"
              />
              {isPhoneValid === false && <Error>Invalid phone number</Error>}
              {errors.contact && <Error>{errors.contact}</Error>}
            </Label>
  
            <Label>
              Date:
              <Input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                ref={dateRef}
                min={today}
              />
              {errors.date && <Error>{errors.date}</Error>}
            </Label>
  
            <Label>
              Time:
              <Input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                min={minTime}
                max={maxTime}
              />
              {errors.time && <Error>{errors.time}</Error>}
              {errors.datetime && <Error>{errors.datetime}</Error>}
            </Label>
  
            <Label>
              Number of People:
              <Input
                type="number"
                name="people"
                value={formData.people}
                min="1"
                onChange={handleChange}
              />
              {errors.people && <Error>{errors.people}</Error>}
            </Label>
  
            <Label>
              Comments (optional):
              <Textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
              />
            </Label>
  
            <SubmitButton type="submit">
              {formData.index !== undefined ? 'Edit Reservation' : 'Reserve'}
            </SubmitButton>
          </StyledForm>
        </FormContainer>
      </Layout>
    );
  }

