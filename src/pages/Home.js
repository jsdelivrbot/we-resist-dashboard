import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button, { ButtonGroup } from '@atlaskit/button'
import MainSection from '../components/MainSection'
import ContentWrapper from '../components/ContentWrapper'
import PageTitle from '../components/PageTitle'
import Page, { Grid, GridColumn } from '@atlaskit/page'
import Banner from '@atlaskit/banner'
import ErrorIcon from '@atlaskit/icon/glyph/error'
import sc2 from 'sc2-sdk';

const api = sc2.Initialize({
  app: 'sylveon',
  callbackURL: 'http://localhost:1234/',
  accessToken: '',
  scope: ['vote', 'comment', 'offline']
});

class Home extends Component {
  static contextTypes = {
    showModal: PropTypes.func,
    addFlag: PropTypes.func,
    onConfirm: PropTypes.func,
    onCancel: PropTypes.func,
    onClose: PropTypes.func
  }

  render () {
    return (
      <ContentWrapper>
        <PageTitle>Home</PageTitle>
        <MainSection />
      </ContentWrapper>
    )
  }
}

const mapStateToProps = (state) => {

  return {}
}

export default connect(mapStateToProps)(Home)