package com.yanola.yanolatetris.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.redis.core.StringRedisTemplate;
import org.springframework.data.redis.core.ValueOperations;
import org.springframework.stereotype.Service;

@Service
public class RankServiceImpl implements RankService {

    @Autowired
    private StringRedisTemplate stringRedisTemplate;

    @Override
    public void getRedisStringValue(String key, String value) {
        ValueOperations<String, String> stringValueOperations = stringRedisTemplate.opsForValue();
        stringValueOperations.set(key, value);
        System.out.println("Redis key : " + key);
        System.out.println("Redis value : " + stringValueOperations.get(key));

    }

}