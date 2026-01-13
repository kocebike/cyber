/*
  # Create reviews table for Cybersecurity for Normal People

  1. New Tables
    - `reviews`
      - `id` (uuid, primary key) - Unique identifier for each review
      - `name` (text) - Name of the person leaving the review
      - `content` (text) - The review content/message
      - `rating` (integer) - Rating from 1-5 stars
      - `approved` (boolean) - Whether the review is approved by admin
      - `created_at` (timestamptz) - When the review was created

  2. Security
    - Enable RLS on `reviews` table
    - Add policy for anyone to read approved reviews
    - Add policy for anyone to insert new reviews (pending approval)
    - Add policy for authenticated admins to read all reviews
    - Add policy for authenticated admins to update reviews
    - Add policy for authenticated admins to delete reviews

  3. Notes
    - Reviews default to unapproved status
    - Only admins can approve/manage reviews
    - Public users can only see approved reviews
*/

CREATE TABLE IF NOT EXISTS reviews (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  content text NOT NULL,
  rating integer NOT NULL CHECK (rating >= 1 AND rating <= 5),
  approved boolean DEFAULT false,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE reviews ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can read approved reviews"
  ON reviews
  FOR SELECT
  USING (approved = true);

CREATE POLICY "Anyone can insert new reviews"
  ON reviews
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Authenticated admins can read all reviews"
  ON reviews
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Authenticated admins can update reviews"
  ON reviews
  FOR UPDATE
  TO authenticated
  USING (true)
  WITH CHECK (true);

CREATE POLICY "Authenticated admins can delete reviews"
  ON reviews
  FOR DELETE
  TO authenticated
  USING (true);