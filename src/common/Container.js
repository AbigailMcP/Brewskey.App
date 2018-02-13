// @flow

import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../theme';

const styles = StyleSheet.create({
  centered: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    backgroundColor: COLORS.secondary,
    flex: 1,
  },
});

type Props = {
  centered?: boolean,
  children?: React.Node,
  style?: Object,
};

const Container = ({ centered, children, style }: Props) => (
  <View style={[styles.container, centered && styles.centered, style]}>
    {children}
  </View>
);

export default Container;
