### Roster Details<br />
Team Name: Zero Tenacity<br />
Roster: aVN, brutmonster, Cjoffo, nEMANHA, simke<br />
Global Rank: [73](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [46]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  821.5<br />
<br />
Final Rank Value (821.5) = Starting Rank Value (851.9) + Head To Head Adjustments (-30.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.375[<sup>1</sup>](#table2)
- Bounty Collected: 0.349[<sup>2</sup>](#table1)
- Opponent Network: 0.203[<sup>2</sup>](#table1)
- LAN Wins: 0.055[<sup>2</sup>](#table1)

The average of these factors is 0.245<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 851.9
- 400 + ( ( 0.245 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 851.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           51 |      343 | 2025-03-24 | Hesta             | L   | 1.000      | -            | -                | -                | -         |   -24.45 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           50 |      355 | 2025-03-23 | ECSTATIC          | L   | 1.000      | -            | -                | -                | -         |   -13.38 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           49 |      391 | 2025-03-21 | WildLotus         | W   | 1.000      | 0.396        | -                | 0.372 (0.148)    | 0 (0.000) |     4.77 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           48 |      419 | 2025-03-19 | ALASKA            | W   | 1.000      | 0.396        | 0.025 (0.010)    | 0.428 (0.170)    | 0 (0.000) |    10.48 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           47 |      460 | 2025-03-15 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -15.57 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           46 |      469 | 2025-03-15 | PARIVISION        | L   | 1.000      | -            | -                | -                | -         |   -10.01 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           45 |      489 | 2025-03-14 | Passion UA        | W   | 1.000      | 0.435        | 0.040 (0.018)    | 0.488 (0.212)    | 0 (0.000) |    19.37 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           44 |      519 | 2025-03-11 | Alliance          | L   | 1.000      | -            | -                | -                | -         |   -18.12 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           43 |      599 | 2025-03-09 | BetBoom           | L   | 1.000      | -            | -                | -                | -         |   -10.90 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           42 |      631 | 2025-03-09 | Sashi             | W   | 1.000      | 0.143        | -                | 0.683 (0.098)    | 0 (0.000) |    14.01 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           41 |      665 | 2025-03-08 | 500               | W   | 1.000      | 0.435        | 0.122 (0.053)    | 1.000 (0.435)    | 0 (0.000) |    24.73 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           40 |      676 | 2025-03-08 | Nemiga            | L   | 1.000      | -            | -                | -                | -         |   -10.56 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           39 |      758 | 2025-03-07 | GTZ               | W   | 0.993      | 0.143        | 0.051 (0.007)    | -                | 0 (0.000) |    18.53 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           38 |      795 | 2025-03-06 | Sashi             | W   | 0.987      | 0.435        | 0.005 (0.002)    | 0.683 (0.293)    | 0 (0.000) |    17.42 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           37 |      853 | 2025-03-04 | Monte             | L   | 0.973      | -            | -                | -                | -         |   -12.97 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           36 |      864 | 2025-03-03 | GTZ               | W   | 0.967      | 0.435        | 0.051 (0.021)    | 0.430 (0.181)    | 0 (0.000) |    19.03 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           35 |      885 | 2025-03-02 | GTZ               | L   | 0.961      | -            | -                | -                | -         |   -11.10 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           34 |      939 | 2025-02-28 | Sashi             | W   | 0.947      | 0.435        | 0.005 (0.002)    | 0.683 (0.281)    | -         |    17.55 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           33 |      954 | 2025-02-27 | Spirit Academy    | L   | 0.939      | -            | -                | -                | -         |   -11.32 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           32 |     1294 | 2025-02-11 | Astralis          | L   | 0.833      | -            | -                | -                | -         |    -0.51 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           31 |     1318 | 2025-02-10 | NEVERMORE         | W   | 0.828      | -            | -                | -                | -         |    10.76 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           30 |     1326 | 2025-02-10 | HEROIC            | L   | 0.827      | -            | -                | -                | -         |    -6.50 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           29 |     1380 | 2025-02-08 | Little Red Door   | W   | 0.816      | -            | -                | -                | -         |     4.18 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           28 |     1407 | 2025-02-08 | BC.Game           | L   | 0.814      | -            | -                | -                | -         |    -5.59 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           27 |     1411 | 2025-02-08 | ENCE              | W   | 0.814      | 0.143        | 0.116 (0.014)    | 0.666 (0.077)    | -         |    18.32 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           26 |     1423 | 2025-02-08 | RUSH B            | L   | 0.813      | -            | -                | -                | -         |   -11.65 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           25 |     1498 | 2025-02-05 | kONO              | L   | 0.794      | -            | -                | -                | -         |   -19.35 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           24 |     1529 | 2025-02-04 | RUSH B            | W   | 0.788      | 0.143        | 0.024 (0.003)    | -                | -         |    13.01 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           23 |     1604 | 2025-01-28 | moneyF            | L   | 0.739      | -            | -                | -                | -         |   -18.86 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           22 |     1608 | 2025-01-27 | Adventurers       | W   | 0.733      | -            | -                | -                | -         |     5.55 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           21 |     1611 | 2025-01-26 | AMKAL             | L   | 0.728      | -            | -                | -                | -         |   -14.08 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           20 |     1730 | 2024-12-22 | RUSH B            | L   | 0.495      | -            | -                | -                | -         |    -8.06 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           19 |     1733 | 2024-12-22 | Metizport         | L   | 0.494      | -            | -                | -                | -         |    -4.73 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           18 |     1851 | 2024-12-14 | ECSTATIC          | L   | 0.439      | -            | -                | -                | -         |    -6.35 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           17 |     1885 | 2024-12-12 | AMKAL             | W   | 0.428      | 0.435        | -                | 0.718 (0.134)    | -         |     4.81 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           16 |     2260 | 2024-11-23 | ENCE              | L   | 0.301      | -            | -                | -                | -         |    -3.34 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           15 |     2377 | 2024-11-17 | ENTiTY            | W   | 0.262      | -            | -                | -                | 1 (0.262) |     1.96 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           14 |     2416 | 2024-11-16 | Juggernauts       | W   | 0.252      | -            | -                | -                | 1 (0.252) |     1.09 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           13 |     2570 | 2024-11-11 | Ninjas in Pyjamas | L   | 0.221      | -            | -                | -                | -         |    -4.62 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           12 |     2595 | 2024-11-10 | Gaimin Gladiators | W   | 0.215      | -            | -                | -                | -         |     2.42 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           11 |     2609 | 2024-11-09 | GUN5              | W   | 0.208      | 0.354        | 0.081 (0.006)    | -                | -         |     4.00 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|           10 |     2643 | 2024-11-08 | Johnny Speeds     | W   | 0.199      | -            | -                | -                | -         |     2.45 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            9 |     2674 | 2024-11-06 | HOTU              | W   | 0.186      | -            | -                | -                | -         |     0.74 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            8 |     2710 | 2024-11-04 | 500               | L   | 0.173      | -            | -                | -                | -         |    -1.67 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            7 |     2750 | 2024-11-02 | Sangal            | W   | 0.161      | -            | -                | -                | -         |     1.82 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            6 |     2842 | 2024-10-29 | OG                | L   | 0.133      | -            | -                | -                | -         |    -1.27 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            5 |     2851 | 2024-10-28 | 500               | L   | 0.128      | -            | -                | -                | -         |    -1.21 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            4 |     2855 | 2024-10-28 | ECLOT             | L   | 0.127      | -            | -                | -                | -         |    -1.00 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            3 |     2857 | 2024-10-28 | Wu-Tang           | W   | 0.126      | -            | -                | -                | -         |     0.29 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            2 |     3121 | 2024-10-15 | 9 Pandas          | L   | 0.041      | -            | -                | -                | -         |    -0.38 | aVN, brutmonster, Cjoffo, nEMANHA, simke |
|            1 |     3194 | 2024-10-10 | Aurora            | L   | 0.005      | -            | -                | -                | -         |    -0.07 | aVN, brutmonster, Cjoffo, nEMANHA, simke |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($5,897.44)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-16 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-12-15 |      0.447 | $2,000.00      | $894.36         |
| 2024-11-24 |      0.306 | $1,000.00      | $306.48         |
| 2024-11-17 |      0.262 | $8,038.00      | $2,102.66       |
| 2024-11-12 |      0.227 | $1,000.00      | $226.91         |
| 2024-10-20 |      0.073 | $5,000.00      | $367.03         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
