import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';

interface getMealsByIdProps {
  slug: string;
}

const getMealBySlug = async (props: getMealsByIdProps) => {
  const { slug } = props;
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data, error } = await supabase
    .from('meals')
    .select()
    .eq('slug', `${slug}`);

  return { data, error };
};
export default getMealBySlug;
