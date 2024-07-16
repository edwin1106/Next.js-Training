import { MealItemProps } from '@/components/meals/mealItem';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

const getMeals = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  let { data: meals, error } = await supabase.from('meals').select();
  //With below line you could simulate a response with 2 seconds delai
  //await new Promise((resolve) => setTimeout(resolve, 2000));
  return { meals, error };
};

export default getMeals;
