'use server';

import { MealItemProps } from '@/components/meals/mealItem';
import SaveMeal from '@/services/saveMeal';

const shareMeal = async (formData: FormData) => {
  const meal = {
    title: formData.get('title'),
    summary: formData.get('summary'),
    instructions: formData.get('instructions'),
    image: formData.get('image'),
    creator: formData.get('creator'),
    creatorEmail: formData.get('email')
  } as MealItemProps;

  await SaveMeal(meal);
};

export { shareMeal };
