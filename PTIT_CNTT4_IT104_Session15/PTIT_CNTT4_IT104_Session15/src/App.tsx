import React, { Component } from 'react'
import EmailForm from './components/PTIT_CNTT4_IT104_SESSION15_BAI01/EmailForm'
import ColorForm from './components/PTIT_CNTT4_IT104_SESSION15_BAI02/ColorForm'
import BirthdayForm from './components/PTIT_CNTT4_IT104_SESSION15_BAI03/BirthdayForm'
import ProgressForm from './components/PTIT_CNTT4_IT104_SESSION15_BAI04/ProgressForm'
import ListPost from './components/PTIT_CNTT4_IT104_SESSION15_BAI06/ListPost'
import Clock from './components/PTIT_CNTT4_IT104_SESSION15_BAI07/Clock'
import Bai8 from './components/PTIT_CNTT4_IT104_SESSION15_BAI08/Bai8'
import Bai9 from './components/PTIT_CNTT4_IT104_SESSION15_BAI09/Bai9'
export default class App extends Component {
  render() {
    return (
      <div>
        <EmailForm></EmailForm>
        <ColorForm></ColorForm>
        <BirthdayForm></BirthdayForm>
        <ProgressForm></ProgressForm>
        <ListPost></ListPost>
        <Clock></Clock>
        <Bai8></Bai8>
        <Bai9></Bai9>
      </div>
    )
  }
}
