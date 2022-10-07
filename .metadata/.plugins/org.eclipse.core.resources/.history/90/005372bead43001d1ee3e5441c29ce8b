package com.yanola.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.yanola.entity.Group;

@Service
public interface GroupService {
	
	List<Group> findAllGroups(); //그룹 전체 조회
	
	Group findGroupById(String id); //그룹 id로 하나의 그룹 조회
	
	Group saveGroup(Group group); //그룹 저장
	
	//TODO:유저 등록(있어 들어와 없으면 입력해 if else) 메서드 구현할 것
	Group registerGroup(Group enterGroup);
	

}
