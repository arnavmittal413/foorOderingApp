import './Meals.css'
import MealSummary from "./MealSummary"
import AvailableMeals from "./AvailableMeals"
import { Fragment } from 'react';
const Meals = (props) => {
  return <Fragment>
      <MealSummary />
      <AvailableMeals />
  </Fragment>
}
export default Meals;
