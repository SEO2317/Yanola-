package com.yanola.yanolatetris;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.session.data.redis.config.annotation.web.http.EnableRedisHttpSession;

@EnableRedisHttpSession
@EnableCaching
@SpringBootApplication
public class YanolaTetrisApplication {

	public static void main(String[] args) {
		SpringApplication.run(YanolaTetrisApplication.class, args);
	}

}
