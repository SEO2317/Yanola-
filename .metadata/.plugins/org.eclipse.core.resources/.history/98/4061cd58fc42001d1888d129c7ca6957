package com.yanola.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.yanola.entity.Group;
import com.yanola.service.GroupService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/group")
public class MypageController {
	
	@Autowired
	private GroupService groupService;
	
	@GetMapping("/{id}")
	public Group.Response GroupMyPage(@PathVariable String groupId) {
		System.out.println("그룹 마이페이지 호출");
		
		Group groupInfo = groupService.findGroupById(groupId);
		return Group.Response.toResponse(groupInfo);
	}

}
