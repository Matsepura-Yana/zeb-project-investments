package org.example.app;
import java.util.ArrayList;
import java.util.List;

import org.example.app.dto.CalculationRequest;
import org.example.app.dto.CalculationResponse;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class CalculationController {

    DB db = new DB();

    @PostMapping("/calculate")
    public CalculationResponse calculate(@RequestBody CalculationRequest request) {

        List<TableRow> rows = new ArrayList<>();
        float startkapital = request.amount;

        for (int jahr = 1; jahr <= request.duration; jahr++) {

            float rendite = randomWert(-0.20f, 0.25f);
            float volatilitaet = randomWert(0.10f, 0.30f);
            float schwankung = randomWert(0.0f, 0.10f);

            float endkapital =
                    startkapital * (1 + rendite + volatilitaet * schwankung);

            rows.add(new TableRow(
                    jahr,
                    startkapital,
                    rendite * 100,
                    endkapital
            ));

            startkapital = endkapital;
        }
        db.setLastResult(rows);
        return new CalculationResponse(rows);
    }

    @GetMapping("/")
    public CalculationResponse getResults() {
        return new CalculationResponse(db.getLastResult());
    }
    private float randomWert(float min, float max) {
        return (float) (min + Math.random() * (max - min));
    }
}


