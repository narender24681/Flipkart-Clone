import { useToast } from '@chakra-ui/react';
import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

export const PrivateRoute = (props) => {
   const { isAuth } = useSelector(store => store.authReducer);
   const toast = useToast();

   if (!isAuth) {
      toast({
        title: 'Login to see page.',
        duration: 2000,
        status: "error",
        isClosable: true,
      });
      return <Navigate to="/" />
   }

   return props.children
}
