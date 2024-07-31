### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, dycha, hades, kRaSnaL, STYKO<br />
Global Rank: [42](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [31]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1107.6<br />
<br />
Final Rank Value (1107.6) = Starting Rank Value (1001.8) + Head To Head Adjustments (105.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.478[<sup>1</sup>](#table2)
- Bounty Collected: 0.443[<sup>2</sup>](#table1)
- Opponent Network: 0.244[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.291<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1001.8
- 400 + ( ( 0.291 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1001.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |        5 | 2024-07-31 | EYEBALLERS      | W   | 1.000      | 0.500        | -                | 0.513 (0.257)    | 0 (0.000) |     4.55 | DemQQ, dycha, hades, kRaSnaL, STYKO  |
|           35 |       87 | 2024-07-29 | 9INE            | W   | 1.000      | 0.435        | 0.022 (0.010)    | 0.486 (0.211)    | 0 (0.000) |    10.93 | DemQQ, dycha, hades, kRaSnaL, STYKO  |
|           34 |      135 | 2024-07-28 | Sangal          | L   | 1.000      | -            | -                | -                | -         |    -9.99 | DemQQ, dycha, hades, kRaSnaL, STYKO  |
|           33 |      144 | 2024-07-27 | Into the Breach | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.05 | DemQQ, dycha, hades, kRaSnaL, STYKO  |
|           32 |      151 | 2024-07-27 | 9z              | W   | 1.000      | 0.435        | 0.412 (0.179)    | 0.625 (0.272)    | 0 (0.000) |    28.31 | DemQQ, dycha, hades, kRaSnaL, STYKO  |
|           31 |      184 | 2024-07-26 | Space           | W   | 1.000      | 0.435        | -                | 0.406 (0.176)    | 0 (0.000) |     9.29 | DemQQ, dycha, hades, kRaSnaL, STYKO  |
|           30 |      222 | 2024-07-25 | Endpoint        | W   | 1.000      | 0.435        | -                | 0.523 (0.227)    | 0 (0.000) |     7.36 | DemQQ, dycha, hades, kRaSnaL, STYKO  |
|           29 |      239 | 2024-07-24 | Sashi           | L   | 1.000      | -            | -                | -                | -         |   -10.34 | DemQQ, dycha, hades, kRaSnaL, STYKO  |
|           28 |      441 | 2024-07-18 | KOI             | W   | 1.000      | 0.500        | 0.060 (0.030)    | 0.382 (0.191)    | 0 (0.000) |    18.43 | DemQQ, dycha, hades, kRaSnaL, STYKO  |
|           27 |      575 | 2024-07-16 | Zero Tenacity   | L   | 1.000      | -            | -                | -                | -         |   -13.68 | DemQQ, dycha, hades, kRaSnaL, STYKO  |
|           26 |      858 | 2024-06-16 | B8              | L   | 0.898      | -            | -                | -                | -         |   -10.69 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           25 |      883 | 2024-06-15 | BLEED           | W   | 0.892      | 0.435        | 0.128 (0.050)    | 0.512 (0.199)    | 0 (0.000) |    23.46 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           24 |      935 | 2024-06-14 | BLEED           | L   | 0.884      | -            | -                | -                | -         |    -4.06 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           23 |      959 | 2024-06-13 | Zero Tenacity   | W   | 0.879      | 0.435        | 0.139 (0.053)    | 1.000 (0.382)    | 0 (0.000) |    15.80 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           22 |      995 | 2024-06-12 | FORZE Reload    | W   | 0.871      | -            | -                | -                | 0 (0.000) |     1.65 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           21 |     1037 | 2024-06-10 | SINNERS         | W   | 0.858      | -            | -                | -                | -         |    12.84 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           20 |     1042 | 2024-06-10 | Aurora          | L   | 0.858      | -            | -                | -                | -         |    -2.94 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           19 |     1048 | 2024-06-10 | RUSH B          | L   | 0.857      | -            | -                | -                | -         |   -17.22 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           18 |     1062 | 2024-06-09 | AMKAL           | L   | 0.853      | -            | -                | -                | -         |    -7.34 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           17 |     1074 | 2024-06-09 | Aurora          | W   | 0.852      | 0.143        | 0.433 (0.053)    | -                | -         |    24.24 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           16 |     1083 | 2024-06-09 | 3DMAX           | W   | 0.852      | 0.143        | 0.504 (0.061)    | -                | -         |    24.73 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           15 |     1089 | 2024-06-09 | SAW             | L   | 0.851      | -            | -                | -                | -         |    -7.42 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           14 |     1097 | 2024-06-09 | PARIVISION      | L   | 0.851      | -            | -                | -                | -         |   -11.10 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           13 |     1104 | 2024-06-09 | 9 Pandas        | L   | 0.851      | -            | -                | -                | -         |   -11.51 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           12 |     1143 | 2024-06-08 | 1WIN            | W   | 0.846      | -            | -                | -                | -         |    11.02 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           11 |     1155 | 2024-06-08 | AMKAL           | L   | 0.845      | -            | -                | -                | -         |    -7.14 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           10 |     1161 | 2024-06-08 | Quixal          | W   | 0.844      | -            | -                | -                | -         |     0.78 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            9 |     1362 | 2024-06-04 | PARIVISION      | L   | 0.820      | -            | -                | -                | -         |   -11.34 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            8 |     1566 | 2024-05-27 | Falcons         | L   | 0.767      | -            | -                | -                | -         |    -2.17 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            7 |     1577 | 2024-05-27 | Vitality        | L   | 0.766      | -            | -                | -                | -         |    -0.24 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            6 |     1734 | 2024-05-21 | Sangal          | L   | 0.725      | -            | -                | -                | -         |    -8.98 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            5 |     1773 | 2024-05-20 | Sashi           | W   | 0.718      | 0.500        | 0.187 (0.067)    | 0.973 (0.349)    | -         |    16.38 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            4 |     1826 | 2024-05-18 | Sashi           | L   | 0.705      | -            | -                | -                | -         |    -5.83 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            3 |     1855 | 2024-05-17 | BLEED           | W   | 0.699      | 0.500        | 0.128 (0.045)    | 0.512 (0.179)    | -         |    19.64 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            2 |     1894 | 2024-05-16 | kONO            | W   | 0.692      | 0.384        | 0.029 (0.008)    | -                | -         |     6.82 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|            1 |     1940 | 2024-05-15 | DMS             | W   | 0.686      | -            | -                | -                | -         |     8.55 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($26,705.20)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-28 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-16 |      0.899 | $5,000.00      | $4,496.34       |
| 2024-06-09 |      0.853 | $4,000.00      | $3,412.37       |
| 2024-06-02 |      0.807 | $4,000.00      | $3,227.52       |
| 2024-05-22 |      0.733 | $12,500.00     | $9,156.61       |
| 2024-05-18 |      0.706 | $2,000.00      | $1,412.36       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
