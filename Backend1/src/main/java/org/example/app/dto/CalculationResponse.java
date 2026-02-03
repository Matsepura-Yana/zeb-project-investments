package org.example.app.dto;
import org.example.app.TableRow;

import java.util.List;

public class CalculationResponse {
    public List<TableRow> rows;

    public CalculationResponse(List<TableRow> rows) {
        this.rows = rows;
    }
}

