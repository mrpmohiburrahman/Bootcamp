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
          <Button title='Create'/>
          </View>
        )}

        </Formik>
      </View>
    </ScrollView>
    
  );
}
