import React, { useState, useCallback } from "react";
import {
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  ScrollView,
  RefreshControl,
} from "react-native";

const Dashboard = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    // Simulate a network request
    setTimeout(() => {
      setRefreshing(false);
      // Add your data fetching logic here
      console.log("Screen refreshed!");
    }, 2000);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Text>Dashboard</Text>
        {/* Add other components/content here */}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  scrollView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
