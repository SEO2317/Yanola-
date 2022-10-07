package com.yanola.yanolatetris.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yanola.yanolatetris.entity.Group;
import com.yanola.yanolatetris.entity.Group.Request;
import com.yanola.yanolatetris.repository.GroupRepository;

@Service
public class GroupServiceImpl implements GroupService {

    @Autowired
    private GroupRepository groupRepository;

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
    public Group loginGroup(Request request) {
        return groupRepository.findByGroupId(request.getGroupId());
    }

}
