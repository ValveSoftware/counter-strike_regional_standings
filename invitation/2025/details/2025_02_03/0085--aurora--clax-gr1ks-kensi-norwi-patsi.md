### Roster Details<br />
Team Name: Aurora<br />
Roster: clax, gr1ks, KENSI, Norwi, Patsi<br />
Global Rank: [85](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [58]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  884.5<br />
<br />
Final Rank Value (884.5) = Starting Rank Value (896.7) + Head To Head Adjustments (-12.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.443[<sup>1</sup>](#table2)
- Bounty Collected: 0.357[<sup>2</sup>](#table1)
- Opponent Network: 0.135[<sup>2</sup>](#table1)
- LAN Wins: 0.088[<sup>2</sup>](#table1)

The average of these factors is 0.256<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 896.7
- 400 + ( ( 0.256 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 896.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           38 |       81 | 2025-01-28 | GUN5              | L   | 1.000      | -            | -                | -                | -         |    -8.17 | clax, gr1ks, KENSI, Norwi, Patsi |
|           37 |       82 | 2025-01-28 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -27.36 | clax, gr1ks, KENSI, Norwi, Patsi |
|           36 |      118 | 2025-01-27 | FAVBET            | L   | 1.000      | -            | -                | -                | -         |   -14.65 | clax, gr1ks, KENSI, Norwi, Patsi |
|           35 |      132 | 2025-01-26 | Ninjas in Pyjamas | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.02 | clax, gr1ks, KENSI, Norwi, Patsi |
|           34 |      165 | 2025-01-24 | NAVI Junior       | L   | 1.000      | -            | -                | -                | -         |    -9.44 | clax, gr1ks, KENSI, Norwi, Patsi |
|           33 |      263 | 2025-01-22 | GameAgents        | W   | 1.000      | 0.500        | 0.010 (0.005)    | 0.275 (0.137)    | 0 (0.000) |     8.53 | clax, gr1ks, KENSI, Norwi, Patsi |
|           32 |      587 | 2024-12-11 | GUN5              | L   | 0.841      | -            | -                | -                | -         |    -8.39 | clax, gr1ks, KENSI, Norwi, Patsi |
|           31 |      604 | 2024-12-10 | Monte             | L   | 0.833      | -            | -                | -                | -         |    -9.14 | clax, gr1ks, KENSI, Norwi, Patsi |
|           30 |      610 | 2024-12-09 | Sashi             | W   | 0.827      | 0.435        | 0.039 (0.014)    | 0.638 (0.229)    | 0 (0.000) |    16.02 | clax, gr1ks, KENSI, Norwi, Patsi |
|           29 |      965 | 2024-11-22 | 9 Pandas          | L   | 0.716      | -            | -                | -                | -         |    -5.11 | clax, deko, KENSI, Lack1, Norwi  |
|           28 |      995 | 2024-11-21 | Spirit            | L   | 0.710      | -            | -                | -                | -         |    -0.08 | clax, deko, KENSI, Lack1, Norwi  |
|           27 |     1008 | 2024-11-21 | B8                | W   | 0.705      | 0.143        | 0.146 (0.015)    | 0.560 (0.056)    | 1 (0.705) |    17.43 | clax, deko, KENSI, Lack1, Norwi  |
|           26 |     1020 | 2024-11-20 | Eternal Fire      | L   | 0.703      | -            | -                | -                | -         |    -0.30 | clax, deko, KENSI, Lack1, Norwi  |
|           25 |     1322 | 2024-11-08 | NAVI Junior       | L   | 0.618      | -            | -                | -                | -         |    -5.97 | clax, deko, KENSI, Lack1, Norwi  |
|           24 |     1334 | 2024-11-07 | 9 Pandas          | W   | 0.613      | 0.426        | 0.167 (0.044)    | 0.865 (0.226)    | 0 (0.000) |    14.62 | clax, deko, KENSI, Lack1, Norwi  |
|           23 |     1373 | 2024-11-05 | 9INE              | W   | 0.599      | 0.426        | 0.044 (0.011)    | 0.490 (0.125)    | 0 (0.000) |     9.29 | clax, deko, KENSI, Lack1, Norwi  |
|           22 |     1610 | 2024-10-24 | M80               | L   | 0.520      | -            | -                | -                | -         |    -3.75 | clax, deko, KENSI, Lack1, Norwi  |
|           21 |     1618 | 2024-10-24 | BIG               | L   | 0.518      | -            | -                | -                | -         |    -1.04 | clax, deko, KENSI, Lack1, Norwi  |
|           20 |     1753 | 2024-10-17 | Nemiga            | L   | 0.471      | -            | -                | -                | -         |    -2.38 | clax, deko, KENSI, Lack1, Norwi  |
|           19 |     1785 | 2024-10-16 | Fluxo             | L   | 0.465      | -            | -                | -                | -         |    -3.78 | clax, deko, KENSI, Lack1, Norwi  |
|           18 |     1798 | 2024-10-15 | PARIVISION        | L   | 0.460      | -            | -                | -                | -         |    -8.79 | clax, deko, KENSI, Lack1, Norwi  |
|           17 |     1820 | 2024-10-13 | FAVBET            | L   | 0.446      | -            | -                | -                | -         |    -7.66 | clax, deko, KENSI, Lack1, Norwi  |
|           16 |     1841 | 2024-10-12 | Metizport         | W   | 0.439      | 0.435        | 0.185 (0.035)    | 0.791 (0.151)    | 0 (0.000) |    11.94 | clax, deko, KENSI, Lack1, Norwi  |
|           15 |     1868 | 2024-10-10 | Zero Tenacity     | W   | 0.424      | 0.435        | 0.078 (0.014)    | 0.715 (0.132)    | 0 (0.000) |     9.07 | clax, deko, KENSI, Lack1, Norwi  |
|           14 |     2058 | 2024-10-04 | Passion UA        | L   | 0.385      | -            | -                | -                | -         |    -3.31 | clax, deko, KENSI, Lack1, Norwi  |
|           13 |     2262 | 2024-09-28 | GamerLegion       | L   | 0.346      | -            | -                | -                | -         |    -0.41 | clax, deko, KENSI, Lack1, Norwi  |
|           12 |     2304 | 2024-09-27 | ECSTATIC          | W   | 0.340      | 0.435        | 0.081 (0.012)    | 1.000 (0.148)    | 0 (0.000) |     6.14 | clax, deko, KENSI, Lack1, Norwi  |
|           11 |     2349 | 2024-09-26 | 3DMAX             | L   | 0.333      | -            | -                | -                | -         |    -0.32 | clax, deko, KENSI, Lack1, Norwi  |
|           10 |     2361 | 2024-09-26 | moneyF            | W   | 0.332      | 0.384        | -                | 0.639 (0.082)    | 0 (0.000) |     4.79 | clax, deko, KENSI, Lack1, Norwi  |
|            9 |     2399 | 2024-09-25 | Endpoint          | W   | 0.327      | 0.435        | 0.026 (0.004)    | 0.463 (0.066)    | -         |     3.94 | clax, deko, KENSI, Lack1, Norwi  |
|            8 |     2450 | 2024-09-24 | AMKAL             | W   | 0.321      | 0.384        | 0.040 (0.005)    | -                | -         |     4.20 | clax, deko, KENSI, Lack1, Norwi  |
|            7 |     3159 | 2024-08-30 | Monte             | L   | 0.154      | -            | -                | -                | -         |    -1.67 | deko, gr1ks, KENSI, Lack1, Norwi |
|            6 |     3165 | 2024-08-30 | Sashi             | W   | 0.152      | -            | -                | -                | -         |     2.96 | deko, gr1ks, KENSI, Lack1, Norwi |
|            5 |     3191 | 2024-08-29 | GenOne            | W   | 0.147      | -            | -                | -                | -         |     1.77 | deko, gr1ks, KENSI, Lack1, Norwi |
|            4 |     3206 | 2024-08-29 | GamerLegion       | L   | 0.146      | -            | -                | -                | -         |    -3.07 | deko, gr1ks, KENSI, Lack1, Norwi |
|            3 |     3398 | 2024-08-26 | FURIA             | L   | 0.125      | -            | -                | -                | -         |    -0.09 | clax, deko, KENSI, Lack1, Norwi  |
|            2 |     3437 | 2024-08-25 | Eternal Fire      | L   | 0.120      | -            | -                | -                | -         |    -0.04 | clax, deko, KENSI, Lack1, Norwi  |
|            1 |     3655 | 2024-08-19 | Sashi             | L   | 0.079      | -            | -                | -                | -         |    -0.96 | clax, deko, KENSI, Lack1, Norwi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($10,484.59)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.626 | $5,000.00      | $3,130.95       |
| 2024-10-20 |      0.493 | $4,500.00      | $2,217.66       |
| 2024-10-13 |      0.447 | $5,000.00      | $2,235.29       |
| 2024-09-28 |      0.347 | $5,000.00      | $1,734.40       |
| 2024-09-26 |      0.333 | $3,500.00      | $1,166.29       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
