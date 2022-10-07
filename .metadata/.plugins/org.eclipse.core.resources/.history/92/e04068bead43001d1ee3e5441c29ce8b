package com.yanola.service;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;

import com.yanola.entity.Group;
import com.yanola.entity.Group.Response;
import com.yanola.repository.GroupRepository;
import com.yanola.service.GroupService;

public class GroupServiceImpl implements GroupService {
	
	@Autowired
	private GroupRepository groupRepository;
	
	@Autowired
	private GroupService groupService;
	
	@Override
	public List<Group> findAllGroups() {
		System.out.println("그룹 전체 조회");
		return groupRepository.findAll();
	}

	@Override
	public Group findGroupById(String id) {
		System.out.println("ID로 그룹 검색");
		return groupRepository.findByGroupId(id);
	}

	@Override
	public Group saveGroup(Group group) {
		System.out.println("그룹정보 저장");
		return groupRepository.save(group);
	}

	@Override
	public Group registerGroup(Group enterGroup) {
		System.out.println("그룹등록");
		return enterGroup;
	}

	

	
	
}
