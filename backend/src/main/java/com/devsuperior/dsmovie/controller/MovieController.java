package com.devsuperior.dsmovie.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovie.Dto.MovieDTO;
import com.devsuperior.dsmovie.service.MovieService;

@RestController
@RequestMapping(value="/movies")
public class MovieController {
	@Autowired
	private MovieService movieService;
	
	@GetMapping
	public Page<MovieDTO> findAll(Pageable pageable){
		
		return movieService.findAll(pageable);
		
		
	}
	
	
	@GetMapping(value = "/{id}")
	public MovieDTO findById(@PathVariable Long id){
		
		return movieService.findById(id);
		
		
	}
	

}
