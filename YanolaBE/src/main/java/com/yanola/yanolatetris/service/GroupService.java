package com.yanola.yanolatetris.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.yanola.yanolatetris.entity.Group;

@Service
public interface GroupService {
	
	List<Group> findAllGroups(); 
	
	Group findGroupById(String id); 
	
	Group saveGroup(Group group); 
	
	Group loginGroup(Group.Request request);
}
