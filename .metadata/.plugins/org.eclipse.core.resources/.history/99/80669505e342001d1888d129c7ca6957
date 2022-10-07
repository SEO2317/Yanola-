package com.yanola.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.springframework.stereotype.Component;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Builder
@AllArgsConstructor
@NoArgsConstructor
@Setter
@Getter
@Entity
@Table(name = "HOST")
@Component
public class Host {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "HOST_ID")
	private String hostID;

	@Column(nullable = false)
	private String groupAdminId;

	@Column(nullable = false)
	private Group group;

	@Override
	public String toString() {
		return "Host [hostID=" + hostID + ", groupAdminId=" + groupAdminId + ", group=" + group + "]";
	}

	@Setter
	@Getter
	@NoArgsConstructor
	@AllArgsConstructor
	@Builder
	public static class Request {

		@NotBlank(message = "그룹아이디는 반드시 입력")
		private String groupAdminId;

		private Group group;

		public static Host toEntity(final Request request) {
			return Host.builder().groupAdminId(request.getGroupAdminId()).group(request.getGroup()).build();
		}
	}

	@Setter
	@Getter
	@Builder
	@ToString
	public static class Response {
		private String groupAdminId;

		private Group group;
		
		public static Host.Response toResponse(final Host host){
			return Response.builder()
					.groupAdminId(host.getGroupAdminId())
					.group(host.getGroup())
					.build();
		}
	}

}
