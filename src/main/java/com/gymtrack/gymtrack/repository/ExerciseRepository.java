package com.gymtrack.gymtrack.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.gymtrack.gymtrack.model.Exercise;

public interface ExerciseRepository extends JpaRepository<Exercise, Long> {

}
