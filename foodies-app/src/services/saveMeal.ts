import { MealItemProps } from '@/components/meals/mealItem';
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';
import fs from 'node:fs';
import { arrayBuffer } from 'stream/consumers';

const SaveMeal = async (meal: MealItemProps) => {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  console.log(Object(meal.image), 'meal');

  const extension = meal.image.split('.').pop();
  const fileName = `${meal.slug}.${extension}`;

  const stream = fs.createWriteStream(`public/assets/${fileName}`);

  //const bufferedImage = await meal.image.arrayBuffer();

  /*stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed!');
    }
  });*/

  meal.image = `/assets/${fileName}`;

  const { data, error } = await supabase
    .from('meals')
    .insert([
      {
        slug: meal.slug,
        title: meal.title,
        summary: meal.summary,
        instructions: meal.instructions,
        creator: meal.creator,
        creator_mail: meal.creatorEmail
      }
    ])
    .select();
};
export default SaveMeal;
