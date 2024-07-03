interface SlugMealPageProps {
  params: { slug: string };
}
const SlugMealPage = ({ params }: SlugMealPageProps) => {
  return <h1>{params.slug} Meal</h1>;
};
export default SlugMealPage;
