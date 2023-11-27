import { Request, Response } from 'express';
import Genre, { IGenreDocument } from '../models/genreModel';

// Get all genres
export const getGenres = async (req: Request, res: Response): Promise<void> => {
  try {
    const genres: IGenreDocument[] = await Genre.find();
    res.json(genres);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching genres.' });
  }
};

// Create a new genre
export const createGenre = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.body;
    if (!name) {
      res.status(400).json({ error: 'Genre name is required.' });
    }

    const existingGenre = await Genre.findOne({ name });
    if (existingGenre) {
      res.status(400).json({ error: 'Genre with the same name already exists.' });
    }

    const newGenre = new Genre({ name });
    await newGenre.save();
    res.status(201).json(newGenre);
  } catch (err) {
    res.status(400).json({ error: 'Error creating the genre.' });
  }
};

// Update a genre
export const updateGenre = async (req: Request, res: Response): Promise<void> => {
  const { name } = req.params;
  const newName = req.body?.name;

  if (!name || !newName) {
    res.status(400).json({ error: 'Both current name and new name are required.' });
  }

  try {
    const existingGenre = await Genre.findOne({ name });
    if (!existingGenre) {
      res.status(404).json({ error: 'Genre not found.' });
    } else {
      existingGenre.name = newName;
      await existingGenre.save();
      res.json(existingGenre);
    }
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while updating the genre.' });
  }
};

// Delete a genre
export const deleteGenre = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name } = req.params;
    const deletedStatus = await Genre.deleteOne({ name: name });
    if (!deletedStatus.deletedCount) {
      res.status(404).json({ error: 'Genre not found.' });
    } else {
      res.json({ status: 'Genre deleted successfully' });
    }
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while deleting the genre.' });
  }
}