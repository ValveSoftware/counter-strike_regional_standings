### Roster Details<br />
Team Name: ENCE Athena<br />
Roster: Aida, Emmsan, Mileyyy, miLo, Waldee<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [176](../standings_global.md)<br />
Regional Rank: [108]( ../standings_europe.md)<br />
Final Rank Value:  632.0<br />
<br />
Final Rank Value (632.0) = Starting Rank Value (659.5) + Head To Head Adjustments (-27.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.212[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 659.5
- 400 + ( ( 0.128 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 659.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           12 |      321 | 2024-06-08 | Crescent fe     | L   | 1.000      | -            | -                | -                | -         |   -14.33 | Aida, Emmsan, Mileyyy, miLo, Waldee |
|           11 |     1542 | 2024-04-27 | NIP Impact      | L   | 0.855      | -            | -                | -                | -         |    -9.40 | Aida, Emmsan, miLo, Waldee, xia     |
|           10 |     1727 | 2024-04-19 | Astralis W      | W   | 0.803      | 0.331        | 0.002 (0.001)    | 0.041 (0.011)    | 0 (0.000) |    11.27 | Aida, Emmsan, miLo, Waldee, xia     |
|            9 |     2107 | 2024-04-07 | ex-FORZE Ladies | L   | 0.723      | -            | -                | -                | -         |   -11.50 | Aida, Emmsan, miLo, Waldee, xia     |
|            8 |     2131 | 2024-04-06 | Imperial fe     | L   | 0.714      | -            | -                | -                | -         |    -1.78 | Aida, Emmsan, miLo, Waldee, xia     |
|            7 |     2180 | 2024-04-04 | BIG EQUIPA      | L   | 0.703      | -            | -                | -                | -         |    -6.73 | Aida, Emmsan, miLo, Waldee, xia     |
|            6 |     2352 | 2024-03-27 | Imperial fe     | L   | 0.650      | -            | -                | -                | -         |    -1.71 | Aida, Emmsan, miLo, Waldee, xia     |
|            5 |     2469 | 2024-03-20 | NIP Impact      | L   | 0.603      | -            | -                | -                | -         |    -8.10 | Aida, Emmsan, miLo, Waldee, xia     |
|            4 |     2621 | 2024-03-13 | ex-GUILD fe     | W   | 0.556      | 0.331        | 0.005 (0.001)    | 0.114 (0.021)    | 0 (0.000) |     9.07 | Aida, Emmsan, miLo, Waldee, xia     |
|            3 |     3019 | 2024-02-25 | NAVI Javelins   | L   | 0.441      | -            | -                | -                | -         |    -3.34 | Aida, Emmsan, miLo, Waldee, xia     |
|            2 |     3049 | 2024-02-24 | Spirit fe       | W   | 0.435      | 0.238        | 0.005 (0.000)    | 0.054 (0.006)    | 0 (0.000) |     6.81 | Aida, Emmsan, miLo, Waldee, xia     |
|            1 |     3291 | 2024-02-14 | more whiskey    | W   | 0.370      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     2.20 | Aida, Emmsan, miLo, Waldee, xia     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,229.21)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-08 |      1.000 | $100.00        | $100.00         |
| 2024-04-27 |      0.855 | $107.00        | $91.49          |
| 2024-04-21 |      0.816 | $1,050.00      | $856.97         |
| 2024-04-07 |      0.723 | $250.00        | $180.75         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
