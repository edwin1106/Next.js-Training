'use server';

import { MealItemProps } from '@/components/meals/mealItem';
import SaveMeal from '@/services/saveMeal';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

const isInvalidText = (text: string) => {
  return !text || text.trim() === '';
};

const shareMeal = async (formData: FormData | null) => {
  const meal = {
    title: formData?.get('title'),
    summary: formData?.get('summary'),
    instructions: formData?.get('instructions'),
    image: formData?.get('image'),
    creator: formData?.get('creator'),
    creatorEmail: formData?.get('email')
  } as MealItemProps;

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creatorEmail) ||
    !meal.creatorEmail.includes('@')
  ) {
    return {
      message: 'Invalid Input'
    };
  }

  await SaveMeal(meal);
  revalidatePath('/meals');
  redirect('/meals');
};

export { shareMeal };
