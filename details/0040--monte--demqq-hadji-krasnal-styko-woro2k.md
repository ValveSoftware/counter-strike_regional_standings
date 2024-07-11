### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, hAdji, kRaSnaL, STYKO, Woro2k<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [40](../standings_global.md)<br />
Regional Rank: [29]( ../standings_europe.md)<br />
Final Rank Value:  1186.4<br />
<br />
Final Rank Value (1186.4) = Starting Rank Value (1284.0) + Head To Head Adjustments (-97.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.579[<sup>1</sup>](#table2)
- Bounty Collected: 0.496[<sup>2</sup>](#table1)
- Opponent Network: 0.299[<sup>2</sup>](#table1)
- LAN Wins: 0.303[<sup>2</sup>](#table1)

The average of these factors is 0.419<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1284.0
- 400 + ( ( 0.419 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1284.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           61 |      164 | 2024-06-16 | B8                | L   | 1.000      | -            | -                | -                | -         |   -15.18 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           60 |      189 | 2024-06-15 | BLEED             | W   | 1.000      | 0.435        | 0.348 (0.151)    | 0.908 (0.395)    | 0 (0.000) |    19.41 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           59 |      241 | 2024-06-14 | BLEED             | L   | 1.000      | -            | -                | -                | -         |   -11.04 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           58 |      265 | 2024-06-13 | Zero Tenacity     | W   | 1.000      | 0.435        | 0.153 (0.067)    | 1.000 (0.435)    | 0 (0.000) |    12.66 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           57 |      301 | 2024-06-12 | FORZE Reload      | W   | 1.000      | -            | -                | -                | 0 (0.000) |     0.39 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           56 |      343 | 2024-06-10 | SINNERS           | W   | 0.992      | -            | -                | -                | 0 (0.000) |    10.36 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           55 |      348 | 2024-06-10 | Aurora            | L   | 0.992      | -            | -                | -                | -         |    -8.22 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           54 |      354 | 2024-06-10 | RUSH B            | L   | 0.991      | -            | -                | -                | -         |   -24.05 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           53 |      368 | 2024-06-09 | AMKAL             | L   | 0.987      | -            | -                | -                | -         |   -12.53 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           52 |      380 | 2024-06-09 | Aurora            | W   | 0.986      | 0.143        | 0.518 (0.073)    | -                | 0 (0.000) |    22.91 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           51 |      389 | 2024-06-09 | 3DMAX             | W   | 0.986      | -            | -                | -                | -         |    15.88 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           50 |      395 | 2024-06-09 | SAW               | L   | 0.985      | -            | -                | -                | -         |   -13.08 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           49 |      403 | 2024-06-09 | PARIVISION        | L   | 0.985      | -            | -                | -                | -         |   -21.75 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           48 |      410 | 2024-06-09 | 9 Pandas          | L   | 0.985      | -            | -                | -                | -         |   -18.27 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           47 |      449 | 2024-06-08 | 1WIN              | W   | 0.980      | -            | -                | -                | -         |     7.94 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           46 |      461 | 2024-06-08 | AMKAL             | L   | 0.979      | -            | -                | -                | -         |   -14.38 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           45 |      467 | 2024-06-08 | Quixal            | W   | 0.978      | -            | -                | -                | -         |     0.28 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           44 |      668 | 2024-06-04 | PARIVISION        | L   | 0.954      | -            | -                | -                | -         |   -23.04 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           43 |      872 | 2024-05-27 | Falcons           | L   | 0.902      | -            | -                | -                | -         |    -4.10 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           42 |      883 | 2024-05-27 | Vitality          | L   | 0.900      | -            | -                | -                | -         |    -0.51 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           41 |     1040 | 2024-05-21 | Sangal            | L   | 0.859      | -            | -                | -                | -         |   -18.11 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           40 |     1079 | 2024-05-20 | Sashi             | W   | 0.852      | 0.500        | 0.202 (0.086)    | 1.000 (0.426)    | -         |    12.76 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           39 |     1132 | 2024-05-18 | Sashi             | L   | 0.839      | -            | -                | -                | -         |   -13.68 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           38 |     1161 | 2024-05-17 | BLEED             | W   | 0.833      | 0.500        | 0.348 (0.145)    | 0.908 (0.378)    | -         |    13.83 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           37 |     1200 | 2024-05-16 | kONO              | W   | 0.826      | 0.384        | -                | 0.569 (0.181)    | -         |     3.39 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           36 |     1246 | 2024-05-15 | DMS               | W   | 0.820      | 0.500        | -                | 0.471 (0.193)    | -         |     3.31 | DemQQ, hAdji, kRaSnaL, STYKO, Woro2k |
|           35 |     1461 | 2024-05-07 | FaZe              | L   | 0.767      | -            | -                | -                | -         |    -0.56 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           34 |     1501 | 2024-05-05 | FURIA             | W   | 0.753      | 0.889        | 0.253 (0.170)    | 0.509 (0.341)    | 1 (0.753) |    20.36 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           33 |     1522 | 2024-05-04 | FORZE             | W   | 0.746      | 0.889        | 0.095 (0.063)    | 0.293 (0.195)    | 1 (0.746) |     6.11 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           32 |     1555 | 2024-05-02 | ENCE              | L   | 0.734      | -            | -                | -                | -         |    -6.18 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           31 |     1576 | 2024-05-01 | Liquid            | L   | 0.727      | -            | -                | -                | -         |    -2.63 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           30 |     1602 | 2024-04-30 | FORZE             | W   | 0.720      | 0.889        | 0.095 (0.061)    | 0.293 (0.188)    | 1 (0.720) |     5.59 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           29 |     1855 | 2024-04-19 | OG                | L   | 0.648      | -            | -                | -                | -         |   -10.87 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           28 |     1923 | 2024-04-18 | paiN              | L   | 0.639      | -            | -                | -                | -         |    -2.97 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           27 |     2042 | 2024-04-13 | Rebels            | W   | 0.607      | -            | -                | -                | -         |     5.51 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           26 |     2057 | 2024-04-12 | Sangal            | W   | 0.600      | 0.500        | 0.231 (0.069)    | 0.853 (0.256)    | -         |     6.36 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           25 |     2346 | 2024-04-03 | Metizport         | L   | 0.541      | -            | -                | -                | -         |   -13.49 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           24 |     2362 | 2024-04-03 | Apeks             | W   | 0.539      | -            | -                | -                | -         |     4.32 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           23 |     2387 | 2024-04-02 | GamerLegion       | W   | 0.534      | -            | -                | -                | -         |     8.66 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           22 |     2397 | 2024-04-02 | Ninjas in Pyjamas | L   | 0.533      | -            | -                | -                | -         |    -0.67 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           21 |     2422 | 2024-03-31 | RUSH B            | L   | 0.520      | -            | -                | -                | -         |   -14.63 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           20 |     2452 | 2024-03-28 | Betera            | L   | 0.500      | -            | -                | -                | -         |   -14.91 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           19 |     2520 | 2024-03-26 | System5           | W   | 0.487      | -            | -                | -                | -         |     0.64 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           18 |     2748 | 2024-03-13 | PERA              | W   | 0.401      | -            | -                | -                | -         |     2.06 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           17 |     2852 | 2024-03-09 | Metizport         | L   | 0.373      | -            | -                | -                | -         |    -9.85 | DemQQ, kRaSnaL, leen, sdy, Woro2k    |
|           16 |     2891 | 2024-03-07 | Imperial          | W   | 0.361      | 0.535        | 0.390 (0.075)    | -                | -         |     8.89 | DemQQ, kRaSnaL, leen, sdy, Woro2k    |
|           15 |     2962 | 2024-03-05 | SAW               | L   | 0.347      | -            | -                | -                | -         |    -5.52 | DemQQ, Gizmy, kRaSnaL, ryu, Woro2k   |
|           14 |     3028 | 2024-03-03 | Gaimin Gladiators | L   | 0.332      | -            | -                | -                | -         |    -7.18 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k  |
|           13 |     3033 | 2024-03-02 | 3DMAX             | L   | 0.327      | -            | -                | -                | -         |    -5.91 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k  |
|           12 |     3076 | 2024-02-29 | PARIVISION        | W   | 0.312      | -            | -                | -                | -         |     1.54 | DemQQ, Gizmy, kRaSnaL, Kvem, Woro2k  |
|           11 |     3244 | 2024-02-21 | Astralis          | L   | 0.259      | -            | -                | -                | -         |    -0.24 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|           10 |     3274 | 2024-02-20 | Apeks             | L   | 0.252      | -            | -                | -                | -         |    -6.21 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            9 |     3290 | 2024-02-19 | Romania           | W   | 0.247      | -            | -                | -                | 1 (0.247) |     0.63 | br0, DemQQ, Gizmy, kRaSnaL, Woro2k   |
|            8 |     3299 | 2024-02-19 | Gaimin Gladiators | L   | 0.245      | -            | -                | -                | -         |    -5.52 | br0, DemQQ, Gizmy, kRaSnaL, Woro2k   |
|            7 |     3308 | 2024-02-18 | Aurora            | W   | 0.241      | -            | -                | -                | -         |     6.80 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            6 |     3311 | 2024-02-18 | SINNERS           | W   | 0.240      | -            | -                | -                | -         |     2.02 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            5 |     3339 | 2024-02-17 | Aurora            | W   | 0.233      | -            | -                | -                | -         |     6.62 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            4 |     3344 | 2024-02-17 | The Chosen Few    | W   | 0.232      | -            | -                | -                | -         |     0.27 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            3 |     3543 | 2024-02-06 | G2                | L   | 0.159      | -            | -                | -                | -         |    -0.14 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            2 |     3553 | 2024-02-05 | Cloud9            | W   | 0.152      | -            | -                | -                | 1 (0.152) |     2.15 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |
|            1 |     3576 | 2024-02-04 | GamerLegion       | L   | 0.146      | -            | -                | -                | -         |    -3.92 | br0, DemQQ, kRaSnaL, sdy, Woro2k     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($48,452.28)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.19) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-06-09 |      0.987 | $4,000.00      | $3,948.86       |
| 2024-06-02 |      0.941 | $4,000.00      | $3,764.01       |
| 2024-05-22 |      0.867 | $12,500.00     | $10,833.15      |
| 2024-05-18 |      0.840 | $2,000.00      | $1,680.61       |
| 2024-05-12 |      0.800 | $17,500.00     | $13,997.47      |
| 2024-04-20 |      0.655 | $5,000.00      | $3,274.00       |
| 2024-03-10 |      0.381 | $7,500.00      | $2,857.44       |
| 2024-02-11 |      0.194 | $16,000.00     | $3,096.73       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
