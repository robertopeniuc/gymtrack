
package com.gymtrack.gymtrack.service;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.gymtrack.gymtrack.model.Exercise;
import com.gymtrack.gymtrack.repository.ExerciseRepository;

@Service
public class ExerciseService {

    private final ExerciseRepository exerciseRepository;

    public ExerciseService(ExerciseRepository exerciseRepository) {
        this.exerciseRepository = exerciseRepository;
    }

    public List<Exercise> getAllExercises() {
        return exerciseRepository.findAll();
    }

    public Exercise getExerciseById(Long id) {
        return exerciseRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(
                        HttpStatus.NOT_FOUND,
                        "Exercise not found"
                ));
    }

    public boolean existsById(Long id) {
        return exerciseRepository.existsById(id);
    }

    public Exercise addExercise(Exercise exercise) {
		if (exercise.getName() == null || exercise.getName().isBlank()) {
			throw new ResponseStatusException(
					HttpStatus.BAD_REQUEST, 
					"Exercise name cannot be empty");
		}
    	
        if (exercise.getId() != null && existsById(exercise.getId())) {
            throw new ResponseStatusException(
                    HttpStatus.CONFLICT,
                    "Exercise ID already exists"
            );
        }

        exercise.setId(null);
        exercise.setName(exercise.getName().trim());
        return exerciseRepository.save(exercise);
    }

    public Exercise updateExercise(Long id, Exercise updatedExercise) {
        Exercise exercise = getExerciseById(id);
		if (updatedExercise.getName() == null || updatedExercise.getName().isBlank()) {
			throw new ResponseStatusException(HttpStatus.BAD_REQUEST, "Exercise name cannot be empty");
		}
        exercise.setName(updatedExercise.getName().trim());
        return exerciseRepository.save(exercise);
    }

    public void deleteExercise(Long id) {
        Exercise exercise = getExerciseById(id);
        exerciseRepository.delete(exercise);
    }
}
