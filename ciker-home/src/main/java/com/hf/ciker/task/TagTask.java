package com.hf.ciker.task;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;

import com.hf.ciker.services.ITagService;

@Component
public class TagTask {
	
	 @Autowired
	 private ITagService tagService;
	
	 @Scheduled(cron = "0 0 3 * * ? ")
	 public void tagParticiple() {
		
	 }
	
}
