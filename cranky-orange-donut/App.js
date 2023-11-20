import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function App() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBMI] = useState('0.00');
  const [bmiCategory, setBMICategory] = useState('');

  const calculateBMI = () => {
    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (isNaN(weightValue) || isNaN(heightValue) || heightValue <= 0) {
      setBMI('00');
      setBMICategory('');
      return;
    }

    const bmiValue = weightValue / Math.pow(heightValue / 100, 2);
    setBMI(bmiValue.toFixed(2));

    // Phân loại chỉ số BMI
    if (bmiValue < 18.5) {
      setBMICategory('Nhẹ cân');
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      setBMICategory('Bình thường');
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      setBMICategory('Sắp béo phì');
    } else if (bmiValue >= 30 && bmiValue < 34.9) {
      setBMICategory('Béo phì loại 1');
    } else if (bmiValue >= 35 && bmiValue < 39.9) {
      setBMICategory('Béo phì loại 2');  
    } else {
      setBMICategory('Béo phì loại 3');
    }
  };

  const clearFields = () => {
    setWeight('');
    setHeight('');
    setBMI('0.00');
    setBMICategory('');
  };

  return (
    <View style={styles.container}>
         <Text style={styles.title}>Lê Hiếu Huy </Text>

     <Text style={styles.title}>Bảng Đo Lường BMI</Text>
      <Text style={styles.label}>Weight (KG):</Text>
      <TextInput
        style={styles.input}
          placeholder=" KG"
        keyboardType="numeric"
        value={weight}
        onChangeText={(text) => setWeight(text)}
      />

      <Text style={styles.label}>Height (CM):</Text>
      <TextInput
        style={styles.input}
          placeholder=" CM"
        keyboardType="numeric"
        value={height}
        onChangeText={(text) => setHeight(text)}
      />

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>BMI: <Text style={styles.result}>{bmi}</Text></Text>
        <Text style={styles.resultCategory}>{bmiCategory}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <Button title="compute(Tính)" onPress={calculateBMI} />
        <Button title="clear(Xóa)" onPress={clearFields} color="#d2691e" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    backgroundColor: '#bdb76b'
  },
  label: {
    fontSize: 20,
    fontWeight: 'bold',
    marginRight: 130,
    marginBottom: 10,
    fontFamily: 'bamboo',
  },
  input: {
    height: 40,
    width: '80%',
    borderColor: 'grey',
    backgroundColor: 'lightgray',
    borderWidth: 1,
    marginBottom: 16,
    paddingLeft: 8,
  },
  resultContainer: {
    marginTop: 20,
alignItems: 'center',
  },
  resultLabel: {
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'bamboo',
  },
  result: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'red',
    marginTop: 8,
  },
  resultCategory: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
    marginTop: 8,
  },
  buttonContainer: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 29,
    marginBottom:100,
    fontFamily: 'Times new roman',
    fontWeight: 'bold',
    color: 'green',


  
  },
});