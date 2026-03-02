### Roster Details<br />
Team Name: Rune Eaters<br />
Roster: dako, fitch, forkyz, her1tage, mo0N<br />
Global Rank: [112](../../standings_global_2026_03_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_03_02.md)<br />
Regional Rank: [84]( ../../standings_europe_2026_03_02.md)<br />
<br />
Final Rank Value:  916.6<br />
<br />
Final Rank Value (916.6) = Starting Rank Value (906.0) + Head To Head Adjustments (10.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.334[<sup>1</sup>](#table2)
- Bounty Collected: 0.295[<sup>2</sup>](#table1)
- Opponent Network: 0.064[<sup>2</sup>](#table1)
- LAN Wins: 0.377[<sup>2</sup>](#table1)

The average of these factors is 0.267<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 906.0
- 400 + ( ( 0.267 - 0.000 ) / ( 0.846 - 0.000 ) ) * 1600 = 906.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent  | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |      128 | 2026-02-26 | NOVAQ     | L   | 1.000      | -            | -                | -                | -         |   -14.46 | dako, fitch, forkyz, her1tage, mo0N |
|           10 |      319 | 2026-02-22 | Nemiga    | L   | 1.000      | -            | -                | -                | -         |    -4.61 | dako, fitch, forkyz, her1tage, mo0N |
|            9 |      536 | 2026-02-17 | FOKUS     | L   | 1.000      | -            | -                | -                | -         |   -27.24 | dako, fitch, forkyz, her1tage, mo0N |
|            8 |      543 | 2026-02-17 | Nemiga    | W   | 1.000      | 0.143        | 0.091 (0.013)    | 0.770 (0.110)    | 0 (0.000) |    26.81 | dako, fitch, forkyz, her1tage, mo0N |
|            7 |      639 | 2026-02-15 | Tricked   | L   | 1.000      | -            | -                | -                | -         |    -9.25 | dako, fitch, forkyz, her1tage, mo0N |
|            6 |     1140 | 2026-02-01 | DEPO      | W   | 1.000      | 0.264        | 0.004 (0.001)    | 0.110 (0.029)    | 1 (1.000) |    10.05 | dako, fitch, forkyz, her1tage, mo0N |
|            5 |     1266 | 2026-01-28 | ALLINNERS | L   | 0.978      | -            | -                | -                | -         |   -18.92 | dako, fitch, forkyz, her1tage, mo0N |
|            4 |     1272 | 2026-01-27 | NOVAQ     | W   | 0.973      | 0.310        | 0.033 (0.010)    | 0.597 (0.180)    | 1 (0.973) |    14.77 | dako, fitch, forkyz, her1tage, mo0N |
|            3 |     1282 | 2026-01-27 | HOTU      | L   | 0.972      | -            | -                | -                | -         |    -1.76 | dako, fitch, forkyz, her1tage, mo0N |
|            2 |     1290 | 2026-01-27 | NOVAQ     | W   | 0.971      | 0.310        | 0.033 (0.010)    | 0.597 (0.180)    | 1 (0.971) |    15.92 | dako, fitch, forkyz, her1tage, mo0N |
|            1 |     1867 | 2025-12-27 | Omega     | W   | 0.766      | 0.287        | 0.034 (0.008)    | 0.650 (0.143)    | 1 (0.766) |    19.30 | dako, fitch, forkyz, her1tage, mo0N |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,377.92)
- Divide that value by the 5th highest value among all rosters ($334,320.24)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-02-22 |      1.000 | $350.00        | $350.00         |
| 2026-02-01 |      1.000 | $1,055.00      | $1,055.00       |
| 2026-01-28 |      0.980 | $492.00        | $482.32         |
| 2025-12-27 |      0.766 | $1,945.00      | $1,490.61       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
