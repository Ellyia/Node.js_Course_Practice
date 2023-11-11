import { Request, Response } from 'express';
import Movie, { IMovieDocument } from '../models/movieModel';

// Get all movies
export const getMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    const movies: IMovieDocument[] = await Movie.find();
    res.json(movies);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching movies.' });
  }
};

// Create a new movie
export const createMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title } = req.body;
    const existingMovie = await Movie.findOne({ title });
    if (existingMovie) {
      res.status(400).json({ error: 'Movie with the same title already exists.' });
    } else {
      const newMovie: IMovieDocument = new Movie(req.body);
      await newMovie.save();
      res.status(201).json(newMovie);
    }
  } catch (err) {
    res.status(400).json({ error: 'Error creating the movie.' });
  }
};

// Get a movie by title
export const getMovieByName = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title } = req.query;
    const movie: IMovieDocument | null = await Movie.findOne({ title });
    
    if (!movie) {
      res.status(404).json({ error: 'Movie not found.' });
    } else {
      res.json(movie);
    }
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching the movie.' });
  }
};

// Update a movie
export const updateMovie = async (req: Request, res: Response): Promise<void> => {
  const { title } = req.params;
  const newTitle = req.body?.title;
  const newDescription = req.body?.description;
  const newReleaseDate = req.body?.releaseDate;
  const newGenre = req.body?.genre;

  try {
    const updatedMovie: IMovieDocument | null = await Movie.findOne({ title: title });
    if (!updatedMovie) {
      res.status(404).json({ error: 'Movie not found.' });
    } else {
      updatedMovie.title = newTitle;
      updatedMovie.description = newDescription;
      updatedMovie.releaseDate = newReleaseDate;
      updatedMovie.genre = newGenre;
      await updatedMovie.save();
      res.json(updatedMovie);
    }
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while updating the movie.' });
  }
};

// Delete a movie by ID
export const deleteMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title } = req.params;
    const deletedMovie: IMovieDocument | null = await Movie.findOneAndDelete({ title });
    if (!deletedMovie) {
      res.status(404).json({ error: 'Movie not found.' });
    } else {
      res.json({ status: 'Movie deleted successfully' });
    }
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while deleting the movie.' });
  }
};