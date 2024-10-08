import React, { useState } from 'react';
import { View, Text, Button, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';

const HomeScreen = ({ navigation }: { navigation: any }) => {
  const [menuItems, setMenuItems] = useState([
    { id: '1', name: 'Bruschetta', description: 'Grilled bread with tomato, basil, and garlic.', price: '55.00', course: 'Appetizer' },
    { id: '2', name: 'Grilled Salmon', description: 'A classic main course.', price: '20.00', course: 'Main Course' },
    { id: '3', name: 'Chocolate Mousse', description: 'A rich dessert with chocolate.', price: '62.00', course: 'Dessert' },
    { id: '4', name: 'Caesar Salad', description: 'Fresh lettuce with Caesar dressing, croutons, and Parmesan.', price: '102.00', course: 'Salad' },
    { id: '5', name: 'Lobster Risotto', description: 'Creamy risotto with chunks of lobster.', price: '55.00', course: 'Main Course' },
    { id: '6', name: 'Red Wine', description: 'A glass of full-bodied red wine.', price: '48.00', course: 'Beverage' },
    { id: '7', name: 'Garlic Bread', description: 'Toasted bread with garlic butter.', price: '46.00', course: 'Appetizer' },
    { id: '8', name: 'Penne Arrabbiata', description: 'Pasta with a spicy tomato sauce.', price: '44.00', course: 'Main Course' },
    { id: '9', name: 'Tiramisu', description: 'A classic Italian dessert with coffee and mascarpone.', price: '59.00', course: 'Dessert' },
    { id: '10', name: 'Iced Tea', description: 'Refreshing iced tea with lemon.', price: '25.00', course: 'Beverage' },
  ]);

  const totalMenuItems = menuItems.length;

  // Function to remove a menu item
  const removeMenuItem = (id: string) => {
    setMenuItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  // Function to add a new menu item
  const addMenuItem = (newItem: { id: string; name: string; description: string; price: string; course: string }) => {
    setMenuItems((prevItems) => [...prevItems, newItem]);
  };

  return (
    <View style={styles.container}>
      {/* Chef Profile Section */}
      <View style={styles.profileContainer}>
        <Image 
          source={require('../assets/cheff.jpeg')} // Replace with a valid image URL
          style={styles.profileImage} 
        />
        <Text style={styles.chefName}>Chef Christoffel</Text>
        
      </View>
      
      {/* Menu Section */}
      <Text style={styles.header}>Menu</Text>
      <Text>Total Menu Items: {totalMenuItems}</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.menuItem}>
            <Text style={styles.dishName}>{item.name}</Text>
            <Text>${item.price}</Text>
            <Text>{item.description}</Text>
            <Text>{item.course}</Text>
            <TouchableOpacity onPress={() => removeMenuItem(item.id)}>
              <Text style={styles.removeButton}>Remove</Text>
            </TouchableOpacity>
          </View>
        )}
      />
      <Button title="Add Menu Item" onPress={() => navigation.navigate('AddMenuItem', { addMenuItem })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  chefName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  
  header: {
    fontSize: 24,
    fontWeight:"bold",
    marginBottom: 20,
    textAlign: 'center',
  },
  menuItem: {
    marginBottom: 16,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
  },
  dishName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  removeButton: {
    color: 'red',
    marginTop: 10,
    textAlign: 'right',
  },
});

export default HomeScreen;