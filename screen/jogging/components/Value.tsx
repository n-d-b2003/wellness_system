import { StyleSheet, Text, View } from 'react-native';

type ValueProps = {
  label: string;
  value: string;
};

const Value = ({ label, value }: ValueProps) => (
  <View>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.valuetext}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  label: {
    color: 'white',
    fontSize: 18,
  },
  valuetext: {
    fontSize: 30,
    color: '#AFB3BE',
    fontWeight: '500',
  },
});

export default Value;
