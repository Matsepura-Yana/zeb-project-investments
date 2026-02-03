package org.example.app;

import java.util.ArrayList;
import java.util.List;

public class DB {
    private List<TableRow> lastResult = new ArrayList<>();

    public List<TableRow> getLastResult() {
        return lastResult;
    }

    public DB(List<TableRow> lastResult) {
        this.lastResult = lastResult;
    }

    public DB(){

    }

    public void setLastResult(List<TableRow> lastResult) {
        this.lastResult = lastResult;
    }
}
