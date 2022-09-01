import React, { useState } from 'react'
import {  ErrorModal } from '.';
type Props = {
  status: boolean;
  setStatus:any;
}
const ModalController = ({status, setStatus}: Props) => {
  // const [mainModal, setMainModal] = useState(false);
  const [errorModal, setErrorModal] = useState(false)
  return (
    <>
      {status && (
        <ErrorModal setErrorModal={setErrorModal} setStatus = {setStatus}/>
      )}
    </>
  )
}

export default ModalController