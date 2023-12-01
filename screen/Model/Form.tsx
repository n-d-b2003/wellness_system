// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

// const Form = () => {
//   // State for form fields
//   const [sleepDuration, setSleepDuration] = useState('');
//   const [qualityOfSleep, setQualityOfSleep] = useState('');
//   const [physicalActivityLevel, setPhysicalActivityLevel] = useState('');
//   const [stressLevel, setStressLevel] = useState('');
//   const [bmiCategory, setBmiCategory] = useState('');
//   const [nutritiousDiet, setNutritiousDiet] = useState('');
//   const [exercise, setExercise] = useState('');
//   const [sports, setSports] = useState('');

//   // Function to handle form submission
//   const handleSubmit = () => {
//     // Perform any actions you need with the form data
//     console.log({
//       sleepDuration,
//       qualityOfSleep,
//       physicalActivityLevel,
//       stressLevel,
//       bmiCategory,
//       nutritiousDiet,
//       exercise,
//       sports,
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Sleep Duration"
//         value={sleepDuration}
//         onChangeText={(text) => setSleepDuration(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Quality of Sleep"
//         value={qualityOfSleep}
//         onChangeText={(text) => setQualityOfSleep(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Physical Activity Level"
//         value={physicalActivityLevel}
//         onChangeText={(text) => setPhysicalActivityLevel(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Stress Level"
//         value={stressLevel}
//         onChangeText={(text) => setStressLevel(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Bmi Category"
//         value={bmiCategory}
//         onChangeText={(text) => setBmiCategory(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Nutritious Diet"
//         value={nutritiousDiet}
//         onChangeText={(text) => setNutritiousDiet(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Exercise"
//         value={exercise}
//         onChangeText={(text) => setExercise(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Sports"
//         value={sports}
//         onChangeText={(text) => setSports(text)}
//       />

//       {/* TouchableOpacity for form submission */}
//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Submit</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     padding: 10,
//     width: '100%',
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//   },
// });

// export default Form;

// import React, { useState } from 'react';
// import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
// import { client } from "@gradio/client";

// const Form = () => {
//   // State for form fields
//   const [sleepDuration, setSleepDuration] = useState('');
//   const [qualityOfSleep, setQualityOfSleep] = useState('');
//   const [physicalActivityLevel, setPhysicalActivityLevel] = useState('');
//   const [stressLevel, setStressLevel] = useState('');
//   const [bmiCategory, setBmiCategory] = useState('');
//   const [nutritiousDiet, setNutritiousDiet] = useState('');
//   const [exercise, setExercise] = useState('');
//   const [sports, setSports] = useState('');
//   const [prediction, setPrediction] = useState('');

//   // Function to handle form submission
//   const handleSubmit = async () => {
//     const inputData = {
//       sleepDuration,
//       qualityOfSleep,
//       physicalActivityLevel,
//       stressLevel,
//       bmiCategory,
//       nutritiousDiet,
//       exercise,
//       sports,
//     };

//     try {
//       const app = await client("http://127.0.0.1:7865/");
//       const result = await app.predict("/predict", [inputData]);
//       setPrediction(result.data);
//     } catch (error) {
//       console.error('Error making Gradio API request:', error);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <TextInput
//         style={styles.input}
//         placeholder="Sleep Duration"
//         value={sleepDuration}
//         onChangeText={(text) => setSleepDuration(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Quality of Sleep"
//         value={qualityOfSleep}
//         onChangeText={(text) => setQualityOfSleep(text)}
//       />
// <TextInput
//         style={styles.input}
//         placeholder="Physical Activity Level"
//         value={physicalActivityLevel}
//         onChangeText={(text) => setPhysicalActivityLevel(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Stress Level"
//         value={stressLevel}
//         onChangeText={(text) => setStressLevel(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="BMI Category"
//         value={bmiCategory}
//         onChangeText={(text) => setBmiCategory(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Nutritious Diet"
//         value={nutritiousDiet}
//         onChangeText={(text) => setNutritiousDiet(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Exercise"
//         value={exercise}
//         onChangeText={(text) => setExercise(text)}
//       />
//       <TextInput
//         style={styles.input}
//         placeholder="Sports"
//         value={sports}
//         onChangeText={(text) => setSports(text)}
//       />
//       <TouchableOpacity style={styles.button} onPress={handleSubmit}>
//         <Text style={styles.buttonText}>Submit</Text>
//       </TouchableOpacity>

//       {/* Display the prediction */}
//       {prediction && (
//         <View style={styles.predictionContainer}>
//           <Text style={styles.predictionText}>Prediction: {prediction}</Text>
//         </View>
//       )}
//     </View>
//   );
// };

// // Styles
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     padding: 20,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 10,
//     padding: 10,
//     width: '100%',
//   },
//   button: {
//     backgroundColor: 'blue',
//     padding: 10,
//     borderRadius: 5,
//     marginTop: 10,
//   },
//   buttonText: {
//     color: 'white',
//     textAlign: 'center',
//   },
//   predictionContainer: {
//     marginTop: 20,
//   },
//   predictionText: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
// });

// export default Form;

// React Native Component
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { client } from "@gradio/client";

const Form = () => {
  // State for form fields
  const [sleepDuration, setSleepDuration] = useState('');
  const [qualityOfSleep, setQualityOfSleep] = useState('');
  const [physicalActivityLevel, setPhysicalActivityLevel] = useState('');
  const [stressLevel, setStressLevel] = useState('');
  const [bmiCategory, setBmiCategory] = useState('');
  const [nutritiousDiet, setNutritiousDiet] = useState('');
  const [exercise, setExercise] = useState('');
  const [sports, setSports] = useState('');
  const [prediction, setPrediction] = useState('');

  // Function to handle form submission
  const handleSubmit = async () => {
    const inputData = {
      sleepDuration,
      qualityOfSleep,
      physicalActivityLevel,
      stressLevel,
      bmiCategory,
      nutritiousDiet,
      exercise,
      sports,
    };

    try {
      // Make a POST request to the Express server
      const response = await fetch('http://127.0.0.1:7865/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(inputData),
      });

      const result = await response.json();
      // Update the state with the prediction
      setPrediction(result.data);
    } catch (error) {
      console.error('Error making Gradio API request:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Sleep Duration"
        value={sleepDuration}
        onChangeText={(text) => setSleepDuration(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Quality of Sleep"
        value={qualityOfSleep}
        onChangeText={(text) => setQualityOfSleep(text)}
      />
<TextInput
        style={styles.input}
        placeholder="Physical Activity Level"
        value={physicalActivityLevel}
        onChangeText={(text) => setPhysicalActivityLevel(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Stress Level"
        value={stressLevel}
        onChangeText={(text) => setStressLevel(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="BMI Category"
        value={bmiCategory}
        onChangeText={(text) => setBmiCategory(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Nutritious Diet"
        value={nutritiousDiet}
        onChangeText={(text) => setNutritiousDiet(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Exercise"
        value={exercise}
        onChangeText={(text) => setExercise(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Sports"
        value={sports}
        onChangeText={(text) => setSports(text)}
      />
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {/* Display the prediction */}
      {prediction && (
        <View style={styles.predictionContainer}>
          <Text style={styles.predictionText}>Prediction: {prediction}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 20,
    },
    input: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      padding: 10,
      width: '100%',
    },
    button: {
      backgroundColor: 'blue',
      padding: 10,
      borderRadius: 5,
      marginTop: 10,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
    predictionContainer: {
      marginTop: 20,
    },
    predictionText: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });

export default Form;
