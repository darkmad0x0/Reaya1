import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider as PaperProvider } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Import screens
import RoleSelectionScreen from './src/screens/RoleSelectionScreen';
import HospitalDashboard from './src/screens/hospital/HospitalDashboard';
import DoctorDashboard from './src/screens/doctor/DoctorDashboard';
import PatientDashboard from './src/screens/patient/PatientDashboard';

// Import patient tab screens
import PatientHomeScreen from './src/screens/patient/PatientHomeScreen';
import SymptomCheckerScreen from './src/screens/patient/SymptomCheckerScreen';
import ImageAnalysisScreen from './src/screens/patient/ImageAnalysisScreen';
import MedicationInfoScreen from './src/screens/patient/MedicationInfoScreen';
import HealthTrackerScreen from './src/screens/patient/HealthTrackerScreen';

// Import hospital screens
import SupplierScreen from './src/screens/hospital/SupplierScreen';
import JobScreen from './src/screens/hospital/JobScreen';
import ReferralScreen from './src/screens/hospital/ReferralScreen';

// Import doctor screens
import AppointmentScreen from './src/screens/doctor/AppointmentScreen';
import ChatWithPatientScreen from './src/screens/doctor/ChatWithPatientScreen';
import DoctorAnalyticsScreen from './src/screens/doctor/DoctorAnalyticsScreen';

// Define types for navigation
export type RootStackParamList = {
  RoleSelection: undefined;
  HospitalStack: undefined;
  DoctorStack: undefined;
  PatientStack: undefined;
};

export type HospitalStackParamList = {
  HospitalDashboard: undefined;
  Supplier: undefined;
  Jobs: undefined;
  Referrals: undefined;
};

export type DoctorStackParamList = {
  DoctorDashboard: undefined;
  Appointments: undefined;
  Chat: undefined;
  Analytics: undefined;
};

export type PatientTabParamList = {
  Home: undefined;
  SymptomChecker: undefined;
  ImageAnalysis: undefined;
  Medication: undefined;
  HealthTracker: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const HospitalStack = createNativeStackNavigator<HospitalStackParamList>();
const DoctorStack = createNativeStackNavigator<DoctorStackParamList>();
const PatientTabs = createBottomTabNavigator<PatientTabParamList>();

// Hospital Stack Navigator
const HospitalStackNavigator = () => {
  return (
    <HospitalStack.Navigator>
      <HospitalStack.Screen name="HospitalDashboard" component={HospitalDashboard} />
      <HospitalStack.Screen name="Supplier" component={SupplierScreen} />
      <HospitalStack.Screen name="Jobs" component={JobScreen} />
      <HospitalStack.Screen name="Referrals" component={ReferralScreen} />
    </HospitalStack.Navigator>
  );
};

// Doctor Stack Navigator
const DoctorStackNavigator = () => {
  return (
    <DoctorStack.Navigator>
      <DoctorStack.Screen name="DoctorDashboard" component={DoctorDashboard} />
      <DoctorStack.Screen name="Appointments" component={AppointmentScreen} />
      <DoctorStack.Screen name="Chat" component={ChatWithPatientScreen} />
      <DoctorStack.Screen name="Analytics" component={DoctorAnalyticsScreen} />
    </DoctorStack.Navigator>
  );
};

// Patient Tab Navigator
const PatientTabNavigator = () => {
  return (
    <PatientTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: 'gray',
      }}
    >
      <PatientTabs.Screen 
        name="Home" 
        component={PatientHomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="home" size={24} color={color} />,
        }}
      />
      <PatientTabs.Screen 
        name="SymptomChecker" 
        component={SymptomCheckerScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="chat" size={24} color={color} />,
        }}
      />
      <PatientTabs.Screen 
        name="ImageAnalysis" 
        component={ImageAnalysisScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="image" size={24} color={color} />,
        }}
      />
      <PatientTabs.Screen 
        name="Medication" 
        component={MedicationInfoScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="pill" size={24} color={color} />,
        }}
      />
      <PatientTabs.Screen 
        name="HealthTracker" 
        component={HealthTrackerScreen}
        options={{
          tabBarIcon: ({ color }) => <Icon name="chart-line" size={24} color={color} />,
        }}
      />
    </PatientTabs.Navigator>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="RoleSelection">
            <Stack.Screen 
              name="RoleSelection" 
              component={RoleSelectionScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="HospitalStack" 
              component={HospitalStackNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="DoctorStack" 
              component={DoctorStackNavigator}
              options={{ headerShown: false }}
            />
            <Stack.Screen 
              name="PatientStack" 
              component={PatientTabNavigator}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </SafeAreaProvider>
  );
} 