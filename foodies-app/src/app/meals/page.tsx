import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

const MealsPage = async () => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  let { data: meals, error } = await supabase.from('meals').select();

  return <pre>{JSON.stringify(meals, null, 2)}</pre>;
};
export default MealsPage;
