package to.my.dear.b.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class MainController {

    @GetMapping({"/", "/{path:^(?!api).*}"})
	public String main() {
        return "forward:/index.html";
	}
	
}
