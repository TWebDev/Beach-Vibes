import React from 'react';
import Fieldinput from './formComponents/Fieldinput';
import Select from './formPseudoElems/Select';
import Button from '../Button';
import icon from '../../../media/logos/BV_Icon_case.svg'
import { connect } from 'react-redux';
import * as actions from '../../tools/redux/actions/index';

const HeroForm = (props) => {

  let
  {
    formFieldSet,
    nameVal,
    lastVal,
    phoneVal,
    mailVal,

    updateFormName,
    updateFormLast,
    updateFormPhone,
    updateFormEmail
  } = props;

  const validateForm = () => {

    if (nameVal && lastVal && phoneVal && mailVal) {

      return ('is-outlined is-info is-radiusless is-large is-fullwidth has-text-white');

    } else {

      return ('is-static is-outlined is-dark is-radiusless is-large is-fullwidth has-text-dark');

    }
  }

  let optionsCall = [
    "Please select an option",
    "9:00 am - 12:00 pm",
    "12:00 pm - 3:00 pm",
    "3:00 pm - 6:00 pm"
  ]
  let optionsDates = [
    "Please select an option",
    "January - April",
    "May - August",
    "September - December"
  ]

  return (
    <React.Fragment>
      <div className="form-title"><img src={icon} style={{width: '8%', display: 'inline'}} /> <h1 style={{display: 'inline', verticalAlign: 'text-bottom'}}>LET'S START THE JOURNEY</h1></div>
      <div id="mc_embed_signup">
        <form
          action="https://gmail.us20.list-manage.com/subscribe/post?u=bca043a35ba2b3789e3e94d7c&amp;id=fa90de4939"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          
              <div className="mc-field-group">
                <Fieldinput
                  Type='text'
                  Name='FNAME'
                  _Id='mce-FNAME'
                  Placeholder='Please enter your first name'
                  inputIcon={nameVal ? ('fas fa-user-check') : ('far fa-user')}
                  Value={formFieldSet.nameValue || ''}
                  formHandler={e => updateFormName(e)}
                >
                  First Name
              </Fieldinput>
              </div>
              <div className="mc-field-group">
                <Fieldinput
                  Type='text'
                  Name='LNAME'
                  _Id='mce-LNAME'
                  Placeholder='Please enter your last name'
                  inputIcon={lastVal ? ('fas fa-user-check') : ('far fa-user')}
                  Value={formFieldSet.lastValue || ''}
                  formHandler={e => updateFormLast(e)}
                >
                  Last Name
              </Fieldinput>
              </div>
              <div className="mc-field-group">
                <Fieldinput
                  Type='tel'
                  Name='PHONE'
                  _Id='mce-PHONE'
                  Placeholder='123 456 7890'
                  inputIcon={phoneVal ? ('fas fa-mobile-alt') : ('fas fa-mobile')}
                  Value={formFieldSet.phoneValue || ''}
                  formHandler={e => updateFormPhone(e)}
                >
                  Phone Number
              </Fieldinput>
              </div>
              <div className="mc-field-group">
                <Fieldinput
                  Type='email'
                  Name='EMAIL'
                  _Id='mce-EMAIL'
                  Placeholder='mail@mailme.com'
                  inputIcon={mailVal ? ('far fa-envelope') : ('far fa-envelope-open')}
                  Value={formFieldSet.emailValue || ''}
                  formHandler={e => updateFormEmail(e)}
                >
                  Email
              </Fieldinput>
              </div>
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response"></div>
                <div className="response" id="mce-success-response"></div>
              </div>
          <div className="columns" id='dropdown'>
            <div className="column is-flex" style={{margin: "auto"}}>
              <p className='is-small has-text-shadow'><strong className='has-text-white '>What's the best time to contact you?</strong></p>
              <div className="mc-field-group">
                
                <Select
                  Options={optionsCall}
                  Name='CALL_AT'
                  _Id='mce-CALL_AT'
                >
                </Select>
              </div>
              </div>
              <div className="column is-flex" style={{margin: "auto"}}>
              <p className='is-small has-text-shadow'><strong className='has-text-white '>When are you coming to Mexico?</strong></p>
              <div className="mc-field-group">
                
                <Select
                  Options={optionsDates}
                  Name='PREF_DATES'
                  _Id='mce-PREF_DATES'
                >
                </Select>
              </div>
            </div>
          </div>
          <Button
            addClass={validateForm()}
            Type='submit'
            Value='Subscribe'
            _Id='mc-embedded-subscribe'
          >
            Begin your booking
          </Button>
        </form>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = ({ actions }) => {
  const {
    nameVal,
    lastVal,
    phoneVal,
    mailVal,
    formFieldSet }
    = actions
  return {
    nameVal,
    lastVal,
    phoneVal,
    mailVal,
    formFieldSet
  }
}

export default connect(mapStateToProps, actions)(HeroForm)