import React from 'react'
import PropTypes from 'prop-types'
import { Text, View } from 'react-native'
import Page from '../../components/layouts/Page'
import { useSelector } from 'react-redux'
import useTranslation from '../../hooks/useTranslation'

const ProfileScreen = (props) => {
   const auth = useSelector(state => state.auth)
   const __ = useTranslation()
   return (
      <Page>
         <Text>{__('welcome_note')}</Text>
         <Text>{JSON.stringify({ auth })}</Text>
      </Page>
   )
}

ProfileScreen.propTypes = {
   // prop: PropTypes.string
}

ProfileScreen.defaultProps = {
   type: 'text'
}

export default ProfileScreen