import { FlatList, StyleSheet } from 'react-native';

import AddCategoryForm from '@/components/AddCategoryForm';
import { Text, View } from '@/components/Themed';
import { supabase } from '@/lib/supabase';
import { useEffect, useState } from 'react';
import { Categories, fetchCategory } from '@/lib/api';

export default function TabOneScreen() {

  const [categories, setCategories] = useState<Categories>([]);

  useEffect(() => {    
    fetchCategory().then(data => setCategories(data));
  }, []);

  const handleSubmit = async (name: string) => {
    const { data, error } = await supabase
      .from('categories')
      .insert({ name })
      .select()
      .order('created_at', {
        ascending: true
      });

    if (error)
      console.log(error);
    else
      setCategories([...categories, data[0]]);
  }

  return (
    <View style={styles.container}>
      <AddCategoryForm
        onSubmit={handleSubmit}
      />
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <FlatList
        data={categories}
        keyExtractor={item => item.id}
        renderItem={({ item }) => <Text>{item.name}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
