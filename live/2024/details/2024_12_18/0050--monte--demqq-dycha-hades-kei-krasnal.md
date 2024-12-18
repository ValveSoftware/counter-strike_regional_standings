### Roster Details<br />
Team Name: Monte<br />
Roster: DemQQ, dycha, hades, KEi, kRaSnaL<br />
Global Rank: [50](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [37]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  1115.8<br />
<br />
Final Rank Value (1115.8) = Starting Rank Value (1032.9) + Head To Head Adjustments (82.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.457[<sup>1</sup>](#table2)
- Bounty Collected: 0.415[<sup>2</sup>](#table1)
- Opponent Network: 0.274[<sup>2</sup>](#table1)
- LAN Wins: 0.175[<sup>2</sup>](#table1)

The average of these factors is 0.330<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1032.9
- 400 + ( ( 0.330 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 1032.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           60 |       21 | 2024-12-16 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |   -12.89 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           59 |       93 | 2024-12-13 | Metizport         | L   | 1.000      | -            | -                | -                | -         |   -14.33 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           58 |      131 | 2024-12-10 | Aurora            | W   | 1.000      | 0.435        | 0.051 (0.022)    | -                | 0 (0.000) |    10.95 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           57 |      140 | 2024-12-09 | GUN5              | W   | 1.000      | 0.435        | 0.162 (0.070)    | 1.000 (0.435)    | 0 (0.000) |    14.40 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           56 |      452 | 2024-11-24 | ENCE              | L   | 1.000      | -            | -                | -                | -         |   -11.61 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           55 |      807 | 2024-11-10 | FAVBET            | W   | 0.946      | 0.354        | 0.056 (0.019)    | 0.972 (0.326)    | 0 (0.000) |     8.57 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           54 |      863 | 2024-11-07 | 500               | L   | 0.926      | -            | -                | -                | -         |   -18.50 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           53 |      879 | 2024-11-06 | Spirit Academy    | W   | 0.919      | 0.426        | 0.129 (0.050)    | 0.999 (0.391)    | 0 (0.000) |    13.47 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           52 |     1078 | 2024-10-27 | SAW               | L   | 0.852      | -            | -                | -                | -         |    -4.18 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           51 |     1102 | 2024-10-26 | Legacy            | W   | 0.846      | 0.500        | -                | 0.534 (0.226)    | 1 (0.846) |    13.68 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           50 |     1119 | 2024-10-25 | MIBR              | W   | 0.840      | 0.500        | 0.184 (0.077)    | 0.681 (0.286)    | 1 (0.840) |    21.35 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           49 |     1128 | 2024-10-25 | paiN              | L   | 0.839      | -            | -                | -                | -         |    -2.70 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           48 |     1375 | 2024-10-11 | SINNERS           | L   | 0.747      | -            | -                | -                | -         |   -12.28 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           47 |     1495 | 2024-10-07 | Metizport         | W   | 0.718      | 0.435        | 0.128 (0.040)    | 0.843 (0.263)    | 0 (0.000) |    15.86 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           46 |     1550 | 2024-10-05 | DRILLAS           | W   | 0.705      | -            | -                | -                | 0 (0.000) |     5.08 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           45 |     1617 | 2024-10-03 | Spirit Academy    | L   | 0.693      | -            | -                | -                | -         |   -12.54 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           44 |     1730 | 2024-09-30 | ECSTATIC          | W   | 0.673      | 0.435        | 0.061 (0.018)    | 1.000 (0.292)    | 0 (0.000) |     7.79 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           43 |     1897 | 2024-09-26 | 3DMAX             | L   | 0.644      | -            | -                | -                | -         |    -2.33 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           42 |     1980 | 2024-09-24 | Rebels            | W   | 0.634      | -            | -                | -                | 0 (0.000) |     5.87 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           41 |     1982 | 2024-09-24 | Apogee            | W   | 0.633      | -            | -                | -                | -         |     3.55 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           40 |     1991 | 2024-09-24 | BIG               | W   | 0.632      | 0.384        | 0.216 (0.053)    | -                | -         |    16.94 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           39 |     2013 | 2024-09-23 | 4wb               | W   | 0.627      | -            | -                | -                | -         |     0.46 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           38 |     2031 | 2024-09-23 | PARIVISION        | W   | 0.625      | -            | -                | -                | -         |     8.16 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           37 |     2136 | 2024-09-19 | Sashi             | W   | 0.599      | 0.384        | -                | 0.735 (0.169)    | -         |     8.87 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           36 |     2204 | 2024-09-17 | EYEBALLERS        | W   | 0.585      | -            | -                | -                | -         |     3.32 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           35 |     2350 | 2024-09-12 | Nemiga            | L   | 0.552      | -            | -                | -                | -         |    -3.79 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           34 |     2489 | 2024-09-07 | GamerLegion       | L   | 0.518      | -            | -                | -                | -         |    -3.20 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           33 |     2557 | 2024-09-05 | SINNERS           | W   | 0.504      | 0.435        | 0.082 (0.018)    | 0.826 (0.181)    | -         |     9.94 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           32 |     2587 | 2024-09-04 | PARIVISION        | L   | 0.499      | -            | -                | -                | -         |    -9.07 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           31 |     2638 | 2024-09-02 | BetBoom           | L   | 0.486      | -            | -                | -                | -         |    -6.18 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           30 |     2677 | 2024-08-31 | GUN5              | L   | 0.472      | -            | -                | -                | -         |    -7.66 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           29 |     2686 | 2024-08-30 | Aurora            | W   | 0.467      | -            | -                | -                | -         |     5.10 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           28 |     2693 | 2024-08-30 | GamerLegion       | W   | 0.466      | -            | -                | -                | -         |    12.21 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           27 |     2716 | 2024-08-29 | Ninjas in Pyjamas | W   | 0.461      | -            | -                | -                | -         |     9.19 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           26 |     2730 | 2024-08-29 | Sashi             | L   | 0.459      | -            | -                | -                | -         |    -7.55 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           25 |     2777 | 2024-08-28 | MOUZ NXT          | W   | 0.453      | -            | -                | -                | -         |     2.76 | DemQQ, dycha, Gizmy, hades, KEi     |
|           24 |     2811 | 2024-08-28 | Passion UA        | W   | 0.451      | 0.384        | 0.115 (0.020)    | 1.000 (0.173)    | -         |     9.98 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           23 |     3008 | 2024-08-23 | B8                | L   | 0.420      | -            | -                | -                | -         |    -4.35 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           22 |     3023 | 2024-08-23 | ENCE              | W   | 0.418      | -            | -                | -                | -         |     9.44 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           21 |     3060 | 2024-08-22 | ECLOT             | L   | 0.411      | -            | -                | -                | -         |    -2.16 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           20 |     3082 | 2024-08-21 | KOI               | L   | 0.406      | -            | -                | -                | -         |    -8.36 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           19 |     3115 | 2024-08-21 | UNiTY             | W   | 0.405      | -            | -                | -                | -         |     5.24 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           18 |     3168 | 2024-08-19 | B8                | L   | 0.394      | -            | -                | -                | -         |    -4.07 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           17 |     3173 | 2024-08-19 | KOI               | W   | 0.393      | -            | -                | -                | -         |     4.20 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           16 |     3181 | 2024-08-19 | NewBALLS          | W   | 0.393      | -            | -                | -                | -         |     0.71 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           15 |     3219 | 2024-08-17 | FAVBET            | W   | 0.380      | -            | -                | -                | -         |     4.48 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           14 |     3228 | 2024-08-17 | ex-Enterprise     | W   | 0.380      | -            | -                | -                | -         |     3.76 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           13 |     3332 | 2024-08-13 | ARCRED            | L   | 0.354      | -            | -                | -                | -         |    -8.87 | DemQQ, dycha, hades, KEi, kRaSnaL   |
|           12 |     3374 | 2024-08-12 | PARIVISION        | L   | 0.348      | -            | -                | -                | -         |    -6.71 | dycha, hades, KEi, kRaSnaL, STYKO   |
|           11 |     3525 | 2024-08-07 | Insilio           | W   | 0.313      | -            | -                | -                | -         |     2.38 | DemQQ, dycha, hades, kRaSnaL, STYKO |
|           10 |     3786 | 2024-07-31 | EYEBALLERS        | W   | 0.267      | -            | -                | -                | -         |     1.55 | DemQQ, dycha, hades, kRaSnaL, STYKO |
|            9 |     3868 | 2024-07-29 | 9INE              | W   | 0.253      | -            | -                | -                | -         |     3.31 | DemQQ, dycha, hades, kRaSnaL, STYKO |
|            8 |     3916 | 2024-07-28 | Sangal            | L   | 0.245      | -            | -                | -                | -         |    -1.64 | DemQQ, dycha, hades, kRaSnaL, STYKO |
|            7 |     3925 | 2024-07-27 | Into the Breach   | W   | 0.241      | -            | -                | -                | -         |     2.50 | DemQQ, dycha, hades, kRaSnaL, STYKO |
|            6 |     3932 | 2024-07-27 | 9z                | W   | 0.239      | -            | -                | -                | -         |     3.70 | DemQQ, dycha, hades, kRaSnaL, STYKO |
|            5 |     3965 | 2024-07-26 | SovvyKiNG         | W   | 0.231      | -            | -                | -                | -         |     0.63 | DemQQ, dycha, hades, kRaSnaL, STYKO |
|            4 |     4003 | 2024-07-25 | Endpoint          | W   | 0.225      | -            | -                | -                | -         |     2.13 | DemQQ, dycha, hades, kRaSnaL, STYKO |
|            3 |     4020 | 2024-07-24 | Sashi             | L   | 0.221      | -            | -                | -                | -         |    -3.44 | DemQQ, dycha, hades, kRaSnaL, STYKO |
|            2 |     4222 | 2024-07-18 | KOI               | W   | 0.181      | -            | -                | -                | -         |     2.08 | DemQQ, dycha, hades, kRaSnaL, STYKO |
|            1 |     4356 | 2024-07-16 | Zero Tenacity     | L   | 0.168      | -            | -                | -                | -         |    -2.33 | DemQQ, dycha, hades, kRaSnaL, STYKO |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22,405.80)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-11-24 |      1.000 | $4,000.00      | $4,000.00       |
| 2024-10-27 |      0.854 | $10,000.00     | $8,535.16       |
| 2024-10-20 |      0.806 | $2,000.00      | $1,612.35       |
| 2024-09-26 |      0.647 | $1,500.00      | $969.88         |
| 2024-09-08 |      0.527 | $2,000.00      | $1,053.61       |
| 2024-07-28 |      0.247 | $5,000.00      | $1,234.80       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
