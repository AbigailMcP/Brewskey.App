// @flow

import type { Device, DeviceMutator, LoadObject } from 'brewskey.js-api';
import type { Navigation } from '../types';

import * as React from 'react';
import InjectedComponent from '../common/InjectedComponent';
import DAOApi from 'brewskey.js-api';
import { observer } from 'mobx-react';
import NewDeviceForm from '../components/NewDeviceForm';

type InjectedProps = {|
  navigation: Navigation,
|};

@observer
class NewDeviceScreen extends InjectedComponent<InjectedProps> {
  static navigationOptions = {
    title: 'New Brewskey box',
  };

  _onFormSubmit = async (values: DeviceMutator): Promise<void> => {
    const { navigation } = this.injectedProps;
    const clientID = DAOApi.DeviceDAO.post(values);
    const { id } = await DAOApi.DeviceDAO.waitForLoaded((): LoadObject<
      Device,
    > => DAOApi.DeviceDAO.fetchByID(clientID));
    // todo better handle reset routes
    // it should be a bunch of navigationActions;
    navigation.goBack();
    navigation.navigate('deviceDetails', { id });
  };

  render() {
    return <NewDeviceForm onSubmit={this._onFormSubmit} />;
  }
}

export default NewDeviceScreen;
