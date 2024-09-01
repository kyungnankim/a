package com.kh.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class WebController {

    @GetMapping(value =  {"", "/notice","/list", "/introduce", "/smallbus", "/limousine", "/bigbus", "/request", "/search", "/search/my"})
    public String forward() {
        return "forward:/index.html";
    }
}