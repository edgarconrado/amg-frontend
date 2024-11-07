import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Categories } from '@/lib/api';
import CategoryCard from './CategoryCard';

interface Props {
  categories: Categories;
}

export default function ShowCategories({ categories }: Props) {  
  console.log(categories);
  
  return (
    <View style={styles.container}>
      <FlatList
        data={categories}        
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <CategoryCard name={item.name} imageUrl={'https://media.istockphoto.com/id/1170900913/es/foto/sabrosa-y-refrescante-paleta-con-sabor-a-fresas.jpg?s=612x612&w=0&k=20&c=MxPy1Nq8HykuhsW38aAhTHnBy-lAirZ_6ikcal_zUgo='} />
        )}     
      />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});