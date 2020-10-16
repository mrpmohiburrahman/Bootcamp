import React from "react";
import { View, ScrollView, } from "react-native";
import commonStyles from '../../../theme/common-styles'
import * as yup from 'yup'
import { Metrics,Colors } from "../../../theme";
import { Formik } from "formik";
import Input from '../../../components/common/Input';
import Text from '../../../components/common/Text';
import Button from '../../../components/common/Button';

import TagInput from "../../../components/Taginput";
import {Switch, Icon} from 'native-base'

export default function Create() {
  return (
    <ScrollView style={commonStyles.container}>
      <View style={{margin:Metrics.base}}>
        <Text title bold>Create bootcamp</Text>
        <Formik
          initialValues={{
            title:'',
            description:'',
            careers:[],
            address:'',
            email:'',
            website:'',
            contact:'',
            isScholarship:false,
            jobGuarentee:false,
            coverColor:{
              name:"orage",
              code:Colors.orange
            }
          }}
          onSubmit={(values,action)=>{
            console.log('values',values)
          }}
        >
        {(formikProps)=>(
          <View style={{marginTop:Metrics.doubleBase}}>
          <Input
              formikKey='title'
              formikProps={formikProps}
              placeholder='Title'
              autoCapitalize='words'
            />
          <Input
              formikKey='description'
              formikProps={formikProps}
              placeholder='Description'
            />
          <View style={{marginBottom:Metrics.doubleBase}}>
            <Text style={{marginBottom:5}} lightGrey>
              Creers (press space after adding a career)
            </Text>
            <TagInput formikProps={formikProps} formikKey="careers"/>
          </View>
          <Input
              formikKey='address'
              formikProps={formikProps}
              placeholder='Bootcamp address'
            />
          <Input
              formikKey='email'
              formikProps={formikProps}
              placeholder='Contact Email'
            />
          <Input
              formikKey='contact'
              formikProps={formikProps}
              placeholder='Contact number'
            />
          <Input
              formikKey='website'
              formikProps={formikProps}
              placeholder='Bootcamp website'
            />
          <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            marginVertical:Metrics.base
          }}>
            <View style={{flex:1, marginRight:10}}>
              <Text style={{marginBottom:5}} bold>
                Scholarship Available
              </Text>
              <Text caption>
                Do you provide scholarship to the students?
              </Text>
            </View>
            <Switch
              onValueChange={(value)=>{
                formikProps.setFieldValue("isScholarship", value)
              }}
              value={formikProps.values["isScholarship"]}
            />
          </View>
          <View style={{
            flexDirection:'row',
            justifyContent:'space-between',
            alignItems:'center',
            marginVertical:Metrics.base
          }}>
            <View style={{flex:1, marginRight:10}}>
              <Text style={{marginBottom:5}} bold>
                Job Ready
              </Text>
              <Text caption>
                will students become job ready after completing?
              </Text>
            </View>
            <Switch
              onValueChange={(value)=>{
                formikProps.setFieldValue("jobGuarentee", value)
              }}
              value={formikProps.values["jobGuarentee"]}
            />
          </View>
          <Button style={{marginTop:Metrics.base}} title='Create'/>
          </View>
        )}

        </Formik>
      </View>
    </ScrollView>
    
  );
}
