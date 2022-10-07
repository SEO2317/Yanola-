package com.yanola.yanolatetris.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Table(name = "GAME_ITEM")
@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class GameItem {

    @Id
    @Column(name = "GAME_ITEM_ID")
    private String id;

    @Column
    private String category;

    @Column
    private String price;

    @Column
    private boolean itemUsage;

    @Override
    public String toString() {
        return "GameItem [category=" + category + ", price=" + price + ", itemUsage=" + itemUsage + "]";
    }

}
