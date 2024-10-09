export interface IMovie {
  /**
   * the name of the movie
   */
  title: string,
  /**
   * The url of the movie poster
   */
  bannerUrl: string,
  /**
   * The note received by the movie after box offices
   */
  imdbAverage: number,
  /**
   * The name of the company which powered the film
   */
  producerCompany: string,
  /**
   * The year when the movie was made available to the open public
   */
  releasedYear: number,
  /**
   * The number of minutes the film last
   */
  duration: number,
  /**
   * The main thematics the film deals with
   */
  categories: string[],
  /**
   * A brief of the story
   */
  plot: string,
  /**
   * The movie main characters
   */
  casting: string,
}