package com.yanola.yanolatetris.jwt;

import java.util.Date;

import org.springframework.stereotype.Component;

import com.yanola.yanolatetris.entity.Group;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Header;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtTokenGenerator {

    private static final long JWT_TOKEN_VALIDITY = 5 * 60 * 60;

    public String generateToken(Group group) {
        return Jwts.builder()
                .setHeaderParam(Header.TYPE, Header.JWT_TYPE).setIssuer("yanola 접속 토큰 발행")
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis() + JWT_TOKEN_VALIDITY * 1000))
                .claim("id", group.getGroupId())
                .signWith(SignatureAlgorithm.HS256, "secret").compact();
    };

    public Claims parseToken(String authHeader) {
        if (authHeader == null || !authHeader.startsWith("Bearer "))
            throw new IllegalArgumentException();

        String token = authHeader.substring("Bearer ".length());
        return Jwts.parser().setSigningKey("secret").parseClaimsJws(token).getBody();

    };

}
