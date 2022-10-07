package com.yanola.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.yanola.entity.Group;


@Repository
public interface GroupRepository extends JpaRepository<Group, Long> {
	Group findByGroupId(String id);
}
