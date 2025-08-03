package com.intern.controller;

import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class InternController {
	
	
	@GetMapping("/api/intern")
    public Map<String, Object> getInternData() {
        return Map.of(
            "name", "Vivek Saini",
            "referralCode", "VivekSaini2025",
            "totalDonations", 1500
        );
    }

}
