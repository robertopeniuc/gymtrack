package com.gymtrack.gymtrack.controller;

import java.util.List;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import com.gymtrack.gymtrack.service.ExerciseService;
import com.gymtrack.gymtrack.model.Exercise;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;

@CrossOrigin(origins = "http://localhost:5173")
@RestController

public class ExerciseController {
	
	private final ExerciseService exerciseService;

	public ExerciseController(ExerciseService exerciseService) {
		this.exerciseService = exerciseService;
	}
	@GetMapping("/exercises")
	public List<Exercise> getExercises() {
		return exerciseService.getAllExercises();
	}
	
	@GetMapping("/exercises/{id}")
	public Exercise getExerciseById(@PathVariable Long id) {
		return exerciseService.getExerciseById(id);
	}
	
	@PostMapping("/exercises")
	public ResponseEntity<Exercise> createExercise(@RequestBody Exercise exercise) {
	    Exercise savedExercise = exerciseService.addExercise(exercise);
	    return ResponseEntity.status(201).body(savedExercise);
	}
	
	@PutMapping("/exercises/{id}")
	public Exercise updateExercise(@PathVariable Long id, @RequestBody Exercise exercise) {
	    return exerciseService.updateExercise(id, exercise);
	}
	
	@DeleteMapping("/exercises/{id}")
	public void deleteExercise(@PathVariable Long id) {
	    exerciseService.deleteExercise(id);
	}
}
