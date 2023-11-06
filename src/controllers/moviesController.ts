import { Request, Response } from 'express';
import Movie, { IMovieDocument } from '../models/movieModel';

// Get all movies
export const getMovies = async (req: Request, res: Response): Promise<void> => {
  try {
    const movies: IMovieDocument[] = await Movie.find();
    res.json(movies);
    // res.json({ status: 'Hello, list of movies!' });
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
      // res.json({ status: 'Created, movie!' });
    }
  } catch (err) {
    res.status(400).json({ error: 'Error creating the movie.' });
  }
};

// Get a movie by ID
export const getMovieById = async (req: Request, res: Response): Promise<void> => {
  try {
    const movie: IMovieDocument | null = await Movie.findById(req.params.movieId);
    if (!movie) {
      res.status(404).json({ error: 'Movie not found.' });
    } else {
      res.json(movie);
      // res.json({ status: 'Found one movie!' });
    }
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching the movie.' });
  }
};

// Update a movie by ID
export const updateMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const updatedMovie: IMovieDocument | null = await Movie.findByIdAndUpdate(req.params.movieId, req.body, { new: true });
    if (!updatedMovie) {
      res.status(404).json({ error: 'Movie not found.' });
    } else {
      res.json(updatedMovie);
      // res.json({ status: 'Changed one movie!' });  
    }
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while updating the movie.' });
  }
};

// Delete a movie by ID
export const deleteMovie = async (req: Request, res: Response): Promise<void> => {
  try {
    const deletedMovie: IMovieDocument | null = await Movie.findByIdAndDelete(req.params.movieId);
    if (!deletedMovie) {
      res.status(404).json({ error: 'Movie not found.' });
    } else {
      res.json({ status: 'Movie deleted successfully' });
    }
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while deleting the movie.' });
  }
};