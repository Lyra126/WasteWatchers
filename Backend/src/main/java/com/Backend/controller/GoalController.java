package com.Backend.controller;

import com.PigEBankBackend.Backend.model.Account;
import com.PigEBankBackend.Backend.model.Goal;
import com.PigEBankBackend.Backend.service.GoalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/SavedLocations")
public class SavedLocationsController {
    @Autowired
    SavedLocationsService savedLocationsService;

    @GetMapping("/getAll")
    public ResponseEntity<List<SavedLocations>> getAllGoals() {
        return new ResponseEntity<List<SavedLocations>>(savedLocationsService.getAllSavedLocations(), HttpStatus.OK);
    }

    @GetMapping("/getSavedLocationsId")
    public ResponseEntity<String> getSavedLocationsId(String pigName, String ownerEmail) {
        return new ResponseEntity<String>(savedLocationsService.getSavedLocationsId(pigName, ownerEmail), HttpStatus.OK);
    }

    @PostMapping("/newSavedLocations")
    public ResponseEntity<String> createSavedLocations(@RequestBody SavedLocations savedLocations) {
        return new ResponseEntity<String>(savedLocationsService.addSavedLocations(savedLocations), HttpStatus.OK);
    }

    @DeleteMapping("/deleteSavedLocations")
    public ResponseEntity<String> deleteSavedLocations(String id) {
        return new ResponseEntity<String>(savedLocationsService.deleteSavedLocations(id), HttpStatus.OK);
    }


    @PutMapping("/updatePigName")
    public ResponseEntity<String> updatePigName(@RequestBody Goal goal) {
        return new ResponseEntity<String>(goalService.updatePigName(goal), HttpStatus.OK);
    }

    @PutMapping("/updateGoalName")
    public ResponseEntity<String> updateGoalName(@RequestBody Goal goal) {
        return new ResponseEntity<String>(goalService.updateGoalName(goal), HttpStatus.OK);
    }

    @PutMapping("/updateOwnerEmail")
    public ResponseEntity<String> updateOwnerEmail(@RequestBody Goal goal) {
        return new ResponseEntity<String>(goalService.updateOwnerEmail(goal), HttpStatus.OK);
    }

    @PutMapping("/updateCurrentSavings")
    public ResponseEntity<String> updateCurrentSavings(@RequestBody Goal goal) {
        return new ResponseEntity<String>(goalService.updateCurrentSavings(goal), HttpStatus.OK);
    }

    @PutMapping("/addToCurrentSavings")
    public ResponseEntity<String> addToCurrentSavings(String id, int money){
        return new ResponseEntity<String>(goalService.addToCurrentSavings(id, money), HttpStatus.OK);
    }

    @PutMapping("/updateSavingsGoal")
    public ResponseEntity<String> updateSavingsGoal(@RequestBody Goal goal) {
        return new ResponseEntity<String>(goalService.updateSavingsGoal(goal), HttpStatus.OK);
    }

    @PutMapping("/updateArchived")
    public ResponseEntity<String> updateArchived(@RequestBody Goal goal) {
        return new ResponseEntity<String>(goalService.updateArchived(goal), HttpStatus.OK);
    }
}
