### Roster Details<br />
Team Name: Aurora<br />
Roster: clax, gr1ks, KENSI, Norwi, Patsi<br />
Global Rank: [68](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [49]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  1001.6<br />
<br />
Final Rank Value (1001.6) = Starting Rank Value (948.0) + Head To Head Adjustments (53.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.440[<sup>1</sup>](#table2)
- Bounty Collected: 0.378[<sup>2</sup>](#table1)
- Opponent Network: 0.205[<sup>2</sup>](#table1)
- LAN Wins: 0.102[<sup>2</sup>](#table1)

The average of these factors is 0.281<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 948.0
- 400 + ( ( 0.281 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 948.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           32 |      197 | 2024-12-11 | GUN5            | L   | 1.000      | -            | -                | -                | -         |   -10.91 | clax, gr1ks, KENSI, Norwi, Patsi |
|           31 |      214 | 2024-12-10 | Monte           | L   | 1.000      | -            | -                | -                | -         |   -11.16 | clax, gr1ks, KENSI, Norwi, Patsi |
|           30 |      220 | 2024-12-09 | Sashi           | W   | 1.000      | 0.435        | 0.048 (0.021)    | 0.684 (0.297)    | 0 (0.000) |    18.50 | clax, gr1ks, KENSI, Norwi, Patsi |
|           29 |      575 | 2024-11-22 | 9 Pandas        | L   | 0.956      | -            | -                | -                | -         |    -7.03 | clax, deko, KENSI, Lack1, Norwi  |
|           28 |      605 | 2024-11-21 | Spirit          | L   | 0.949      | -            | -                | -                | -         |    -0.19 | clax, deko, KENSI, Lack1, Norwi  |
|           27 |      618 | 2024-11-21 | B8              | W   | 0.945      | 0.143        | 0.159 (0.021)    | 0.621 (0.084)    | 1 (0.945) |    23.25 | clax, deko, KENSI, Lack1, Norwi  |
|           26 |      630 | 2024-11-20 | Eternal Fire    | L   | 0.943      | -            | -                | -                | -         |    -1.91 | clax, deko, KENSI, Lack1, Norwi  |
|           25 |      932 | 2024-11-08 | NAVI Junior     | L   | 0.858      | -            | -                | -                | -         |    -9.14 | clax, deko, KENSI, Lack1, Norwi  |
|           24 |      944 | 2024-11-07 | 9 Pandas        | W   | 0.853      | 0.426        | 0.103 (0.038)    | 0.811 (0.295)    | 0 (0.000) |    20.19 | clax, deko, KENSI, Lack1, Norwi  |
|           23 |      983 | 2024-11-05 | 9INE            | W   | 0.839      | 0.426        | 0.108 (0.038)    | 1.000 (0.357)    | 0 (0.000) |    14.92 | clax, deko, KENSI, Lack1, Norwi  |
|           22 |     1220 | 2024-10-24 | M80             | L   | 0.759      | -            | -                | -                | -         |    -4.88 | clax, deko, KENSI, Lack1, Norwi  |
|           21 |     1228 | 2024-10-24 | BIG             | L   | 0.758      | -            | -                | -                | -         |    -2.34 | clax, deko, KENSI, Lack1, Norwi  |
|           20 |     1363 | 2024-10-17 | Nemiga          | L   | 0.711      | -            | -                | -                | -         |    -3.80 | clax, deko, KENSI, Lack1, Norwi  |
|           19 |     1395 | 2024-10-16 | Fluxo           | L   | 0.704      | -            | -                | -                | -         |    -5.63 | clax, deko, KENSI, Lack1, Norwi  |
|           18 |     1408 | 2024-10-15 | PARIVISION      | L   | 0.700      | -            | -                | -                | -         |   -11.23 | clax, deko, KENSI, Lack1, Norwi  |
|           17 |     1430 | 2024-10-13 | FAVBET          | L   | 0.686      | -            | -                | -                | -         |   -12.59 | clax, deko, KENSI, Lack1, Norwi  |
|           16 |     1451 | 2024-10-12 | Metizport       | W   | 0.678      | 0.435        | 0.158 (0.046)    | 0.845 (0.249)    | 0 (0.000) |    17.61 | clax, deko, KENSI, Lack1, Norwi  |
|           15 |     1478 | 2024-10-10 | Zero Tenacity   | W   | 0.664      | 0.435        | 0.080 (0.023)    | 0.650 (0.187)    | 0 (0.000) |    14.25 | clax, deko, KENSI, Lack1, Norwi  |
|           14 |     1668 | 2024-10-04 | Passion UA      | L   | 0.625      | -            | -                | -                | -         |    -5.50 | clax, deko, KENSI, Lack1, Norwi  |
|           13 |     1872 | 2024-09-28 | GamerLegion     | L   | 0.586      | -            | -                | -                | -         |    -2.58 | clax, deko, KENSI, Lack1, Norwi  |
|           12 |     1914 | 2024-09-27 | ECSTATIC        | W   | 0.580      | 0.435        | 0.067 (0.017)    | 1.000 (0.252)    | 0 (0.000) |    10.23 | clax, deko, KENSI, Lack1, Norwi  |
|           11 |     1959 | 2024-09-26 | 3DMAX           | L   | 0.573      | -            | -                | -                | -         |    -1.19 | clax, deko, KENSI, Lack1, Norwi  |
|           10 |     1971 | 2024-09-26 | Into the Breach | W   | 0.572      | 0.384        | -                | 0.575 (0.126)    | 0 (0.000) |     9.25 | clax, deko, KENSI, Lack1, Norwi  |
|            9 |     2009 | 2024-09-25 | Endpoint        | W   | 0.567      | 0.435        | 0.035 (0.009)    | 0.585 (0.144)    | 0 (0.000) |     7.34 | clax, deko, KENSI, Lack1, Norwi  |
|            8 |     2060 | 2024-09-24 | AMKAL           | W   | 0.560      | 0.384        | 0.043 (0.009)    | 0.279 (0.060)    | 0 (0.000) |     7.56 | clax, deko, KENSI, Lack1, Norwi  |
|            7 |     2769 | 2024-08-30 | Monte           | L   | 0.393      | -            | -                | -                | -         |    -4.48 | deko, gr1ks, KENSI, Lack1, Norwi |
|            6 |     2775 | 2024-08-30 | Sashi           | W   | 0.392      | 0.143        | 0.048 (0.003)    | -                | -         |     7.61 | deko, gr1ks, KENSI, Lack1, Norwi |
|            5 |     2801 | 2024-08-29 | GenOne          | W   | 0.387      | -            | -                | -                | -         |     3.51 | deko, gr1ks, KENSI, Lack1, Norwi |
|            4 |     2816 | 2024-08-29 | GamerLegion     | L   | 0.386      | -            | -                | -                | -         |    -1.11 | deko, gr1ks, KENSI, Lack1, Norwi |
|            3 |     3008 | 2024-08-26 | FURIA           | L   | 0.365      | -            | -                | -                | -         |    -0.29 | clax, deko, KENSI, Lack1, Norwi  |
|            2 |     3047 | 2024-08-25 | Eternal Fire    | L   | 0.360      | -            | -                | -                | -         |    -0.73 | clax, deko, KENSI, Lack1, Norwi  |
|            1 |     3265 | 2024-08-19 | Sashi           | L   | 0.319      | -            | -                | -                | -         |    -3.87 | clax, deko, KENSI, Lack1, Norwi  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,998.58)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-09 |      0.866 | $5,000.00      | $4,329.64       |
| 2024-10-20 |      0.733 | $4,500.00      | $3,296.48       |
| 2024-10-13 |      0.687 | $5,000.00      | $3,433.98       |
| 2024-09-28 |      0.587 | $5,000.00      | $2,933.09       |
| 2024-09-26 |      0.573 | $3,500.00      | $2,005.37       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
