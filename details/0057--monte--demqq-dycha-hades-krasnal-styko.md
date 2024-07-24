### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, dycha, hades, kRaSnaL, STYKO<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [57](../standings_global.md)<br />
Regional Rank: [42]( ../standings_europe.md)<br />
Final Rank Value:  1030.1<br />
<br />
Final Rank Value (1030.1) = Starting Rank Value (956.9) + Head To Head Adjustments (73.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.481[<sup>1</sup>](#table2)
- Bounty Collected: 0.421[<sup>2</sup>](#table1)
- Opponent Network: 0.199[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.275<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 956.9
- 400 + ( ( 0.275 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 956.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           28 |      199 | 2024-07-18 | KOI           | W   | 1.000      | 0.500        | 0.076 (0.038)    | 0.404 (0.202)    | 0 (0.000) |    20.01 | DemQQ, dycha, hades, kRaSnaL, STYKO  |
|           27 |      333 | 2024-07-16 | Zero Tenacity | L   | 1.000      | -            | -                | -                | -         |   -12.46 | DemQQ, dycha, hades, kRaSnaL, STYKO  |
|           26 |      616 | 2024-06-16 | B8            | L   | 0.945      | -            | -                | -                | -         |    -9.99 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           25 |      641 | 2024-06-15 | BLEED         | W   | 0.940      | 0.435        | 0.162 (0.066)    | 0.439 (0.179)    | 0 (0.000) |    22.54 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           24 |      693 | 2024-06-14 | BLEED         | L   | 0.932      | -            | -                | -                | -         |    -6.15 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           23 |      717 | 2024-06-13 | Zero Tenacity | W   | 0.926      | 0.435        | 0.173 (0.070)    | 1.000 (0.402)    | 0 (0.000) |    17.71 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           22 |      753 | 2024-06-12 | FORZE Reload  | W   | 0.918      | -            | -                | -                | 0 (0.000) |     2.12 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           21 |      795 | 2024-06-10 | SINNERS       | W   | 0.905      | 0.143        | 0.048 (0.006)    | 0.769 (0.099)    | 0 (0.000) |    14.88 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           20 |      800 | 2024-06-10 | Aurora        | L   | 0.905      | -            | -                | -                | -         |    -3.92 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           19 |      806 | 2024-06-10 | RUSH B        | L   | 0.904      | -            | -                | -                | -         |   -16.91 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           18 |      820 | 2024-06-09 | AMKAL         | L   | 0.900      | -            | -                | -                | -         |    -7.11 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           17 |      832 | 2024-06-09 | Aurora        | W   | 0.900      | 0.143        | 0.423 (0.054)    | 0.783 (0.101)    | 0 (0.000) |    24.82 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           16 |      841 | 2024-06-09 | 3DMAX         | W   | 0.899      | 0.143        | 0.175 (0.023)    | 1.000 (0.128)    | 0 (0.000) |    21.02 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           15 |      847 | 2024-06-09 | SAW           | L   | 0.899      | -            | -                | -                | -         |    -6.90 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           14 |      855 | 2024-06-09 | PARIVISION    | L   | 0.898      | -            | -                | -                | -         |   -11.75 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           13 |      862 | 2024-06-09 | 9 Pandas      | L   | 0.898      | -            | -                | -                | -         |   -10.13 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           12 |      901 | 2024-06-08 | 1WIN          | W   | 0.893      | 0.143        | 0.035 (0.004)    | -                | 0 (0.000) |    13.57 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           11 |      913 | 2024-06-08 | AMKAL         | L   | 0.892      | -            | -                | -                | -         |    -6.92 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           10 |      919 | 2024-06-08 | Quixal        | W   | 0.892      | -            | -                | -                | 0 (0.000) |     1.02 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            9 |     1120 | 2024-06-04 | PARIVISION    | L   | 0.867      | -            | -                | -                | -         |   -11.90 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            8 |     1324 | 2024-05-27 | Falcons       | L   | 0.815      | -            | -                | -                | -         |    -1.92 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            7 |     1335 | 2024-05-27 | Vitality      | L   | 0.813      | -            | -                | -                | -         |    -0.18 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            6 |     1492 | 2024-05-21 | Sangal        | L   | 0.772      | -            | -                | -                | -         |    -9.04 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            5 |     1531 | 2024-05-20 | Sashi         | W   | 0.765      | 0.500        | 0.234 (0.089)    | 1.000 (0.382)    | 0 (0.000) |    18.52 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            4 |     1584 | 2024-05-18 | Sashi         | L   | 0.752      | -            | -                | -                | -         |    -5.12 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            3 |     1613 | 2024-05-17 | BLEED         | W   | 0.746      | 0.500        | 0.162 (0.060)    | 0.439 (0.164)    | -         |    19.27 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            2 |     1652 | 2024-05-16 | kONO          | W   | 0.739      | 0.384        | 0.036 (0.010)    | 0.559 (0.159)    | -         |     9.04 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            1 |     1698 | 2024-05-15 | DMS           | W   | 0.733      | 0.500        | -                | 0.461 (0.169)    | -         |     9.10 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($23,005.61)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.947 | $5,000.00      | $4,732.78       |
| 2024-06-09 |      0.900 | $4,000.00      | $3,601.52       |
| 2024-06-02 |      0.854 | $4,000.00      | $3,416.67       |
| 2024-05-22 |      0.780 | $12,500.00     | $9,747.70       |
| 2024-05-18 |      0.753 | $2,000.00      | $1,506.94       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
