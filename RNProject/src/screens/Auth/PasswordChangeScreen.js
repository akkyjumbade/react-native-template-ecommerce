import React from 'react'
import PropTypes from 'prop-types'
import { View } from 'react-native'
import { useSelector } from 'react-redux'
import useTranslation from '@/hooks/useTranslation'
import Page from "@modules/rn-kit/layouts/Page";
import { Center } from 'native-base'
import LoginForm from '@/components/forms/LoginForm'
import { Button, ButtonOutline, Text } from '@modules/rn-kit'
import Hyperlink from '@modules/rn-kit/atoms/Hyperlink'
import { useNavigation } from '@react-navigation/native'
import PasswordLostForm from '@/components/forms/PasswordLostForm'
import PasswordChangeForm from '@/components/forms/PasswordChangeForm'

const PasswordChangeScreen = (props) => {
   const auth = useSelector(state => state.auth)
   const __ = useTranslation()
   const nav = useNavigation()

   return (
      <Page>
         <Page.Container>
            <Page.Title>Change password</Page.Title>
         </Page.Container>
         <Center style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', padding: 15 }}>
            <View style={{ flex: 1, justifyContent: 'center' }}>
               <PasswordChangeForm />
               <View style={{ marginVertical: 15 }}>
                  {/* <Button title={__('btn_guest_login')} onPress={loginAsGuest} /> */}
               </View>
            </View>
         </Center>
         <Page.Container>
            <View>
               {/* <View style={{ marginBottom: 0, }}>
                  <View style={{ marginBottom: 15, }}>
                     <Hyperlink routeName={'support_link'} >{__('support_link')}</Hyperlink>
                  </View>
               </View> */}
               <View style={{ marginBottom: 30, }}>
                  <View style={{ marginBottom: 15, }}>
                     {/* <Text >{__('login_back')}</Text> */}
                  </View>
                  <Button title={__('cancel')} onPress={() => nav.goBack()} />
               </View>
            </View>
         </Page.Container>
      </Page>
   )
}

PasswordChangeScreen.propTypes = {
   // prop: PropTypes.string
}

PasswordChangeScreen.defaultProps = {
   // type: 'text'
}

export default PasswordChangeScreen
