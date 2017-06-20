package testvueclientserver.controllers;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.stream.Stream;

/**
 * Created by User on 21.06.2017.
 */

@RestController
public class SpeechScriptController {

    @RequestMapping("/json")
    public String getJson() throws Exception {
        Path path = Paths.get(getClass().getClassLoader().getResource("jsons/spech.json").toURI());
        StringBuilder data = new StringBuilder();
        Stream<String> lines = Files.lines(path);
        lines.forEach(line -> data.append(line).append("\n"));
        lines.close();
        return data.toString();
    }

}
