### Roster Details<br />
Team Name: Insilio<br />
Roster: faydett, FpSSS, Pipw, Polt, sugaR<br />
Global Rank: [115](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [84]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  822.0<br />
<br />
Final Rank Value (822.0) = Starting Rank Value (789.5) + Head To Head Adjustments (32.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.359[<sup>1</sup>](#table2)
- Bounty Collected: 0.344[<sup>2</sup>](#table1)
- Opponent Network: 0.081[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.196<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 789.5
- 400 + ( ( 0.196 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 789.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           50 |      256 | 2024-12-12 | Fire Flux        | L   | 0.946      | -            | -                | -                | -         |   -11.38 | faydett, FpSSS, Pipw, Polt, sugaR |
|           49 |      268 | 2024-12-11 | CYBERSHOKE       | L   | 0.940      | -            | -                | -                | -         |   -13.78 | faydett, FpSSS, Pipw, Polt, sugaR |
|           48 |      282 | 2024-12-10 | FLuffy Gangsters | W   | 0.932      | 0.143        | -                | 0.592 (0.079)    | 0 (0.000) |    11.73 | faydett, FpSSS, Pipw, Polt, sugaR |
|           47 |     1779 | 2024-10-03 | WW               | L   | 0.477      | -            | -                | -                | -         |   -12.49 | faydett, FpSSS, Pipw, Polt, sugaR |
|           46 |     1812 | 2024-10-02 | Partizan         | L   | 0.471      | -            | -                | -                | -         |    -1.71 | faydett, FpSSS, Pipw, Polt, sugaR |
|           45 |     1880 | 2024-09-30 | SovvyKiNG        | W   | 0.458      | 0.384        | -                | 0.177 (0.031)    | 0 (0.000) |     2.74 | faydett, FpSSS, Pipw, Polt, sugaR |
|           44 |     1913 | 2024-09-29 | 500              | W   | 0.451      | 0.354        | 0.060 (0.010)    | 0.860 (0.137)    | 0 (0.000) |     8.65 | faydett, FpSSS, Pipw, Polt, sugaR |
|           43 |     2048 | 2024-09-26 | B8               | L   | 0.430      | -            | -                | -                | -         |    -2.39 | faydett, FpSSS, Pipw, Polt, sugaR |
|           42 |     2201 | 2024-09-22 | Lynn Vision      | W   | 0.405      | 0.435        | 0.032 (0.006)    | 0.217 (0.038)    | 0 (0.000) |     8.69 | faydett, FpSSS, Pipw, Polt, sugaR |
|           41 |     2249 | 2024-09-20 | Rebels           | L   | 0.392      | -            | -                | -                | -         |    -5.96 | faydett, FpSSS, Pipw, Polt, sugaR |
|           40 |     2257 | 2024-09-20 | los kogutos      | W   | 0.390      | 0.435        | 0.071 (0.012)    | 0.836 (0.142)    | 0 (0.000) |    10.53 | faydett, FpSSS, Pipw, Polt, sugaR |
|           39 |     2310 | 2024-09-18 | Endpoint         | L   | 0.379      | -            | -                | -                | -         |    -5.53 | faydett, FpSSS, Pipw, Polt, sugaR |
|           38 |     2376 | 2024-09-16 | Kosovo           | W   | 0.364      | -            | -                | -                | 0 (0.000) |     2.24 | faydett, FpSSS, Pipw, Polt, sugaR |
|           37 |     2397 | 2024-09-15 | SINNERS          | L   | 0.358      | -            | -                | -                | -         |    -2.26 | faydett, FpSSS, Pipw, Polt, sugaR |
|           36 |     2418 | 2024-09-14 | UNPAID           | W   | 0.353      | 0.435        | 0.140 (0.022)    | -                | 0 (0.000) |     8.01 | faydett, FpSSS, Pipw, Polt, sugaR |
|           35 |     2500 | 2024-09-12 | SAW              | W   | 0.338      | 0.435        | 0.253 (0.037)    | 0.433 (0.063)    | 0 (0.000) |    10.12 | faydett, FpSSS, Pipw, Polt, sugaR |
|           34 |     2555 | 2024-09-10 | Revenant         | W   | 0.326      | -            | -                | -                | 0 (0.000) |     4.38 | faydett, FpSSS, Pipw, Polt, sugaR |
|           33 |     2596 | 2024-09-08 | Rhyno            | W   | 0.312      | -            | -                | -                | 0 (0.000) |     4.16 | faydett, FpSSS, Pipw, Polt, sugaR |
|           32 |     2605 | 2024-09-08 | SINNERS          | W   | 0.310      | 0.384        | 0.100 (0.012)    | 0.676 (0.081)    | -         |     8.12 | faydett, FpSSS, Pipw, Polt, sugaR |
|           31 |     2642 | 2024-09-07 | Monte Gen        | L   | 0.303      | -            | -                | -                | -         |    -4.36 | faydett, FpSSS, Pipw, Polt, sugaR |
|           30 |     2653 | 2024-09-06 | SovvyKiNG        | W   | 0.299      | -            | -                | -                | -         |     2.02 | faydett, FpSSS, Pipw, Polt, sugaR |
|           29 |     2661 | 2024-09-06 | UNPAID           | L   | 0.298      | -            | -                | -                | -         |    -2.48 | faydett, FpSSS, Pipw, Polt, sugaR |
|           28 |     2698 | 2024-09-05 | Spirit Academy   | L   | 0.292      | -            | -                | -                | -         |    -2.17 | faydett, FpSSS, Pipw, Polt, sugaR |
|           27 |     2705 | 2024-09-05 | GUN5             | L   | 0.291      | -            | -                | -                | -         |    -1.51 | faydett, FpSSS, Pipw, Polt, sugaR |
|           26 |     2751 | 2024-09-03 | SovvyKiNG        | W   | 0.279      | -            | -                | -                | -         |     1.92 | faydett, FpSSS, Pipw, Polt, sugaR |
|           25 |     2811 | 2024-09-01 | RUSH B           | W   | 0.265      | 0.384        | 0.067 (0.007)    | -                | -         |     5.16 | faydett, FpSSS, Pipw, Polt, sugaR |
|           24 |     2823 | 2024-08-31 | los kogutos      | W   | 0.260      | 0.435        | 0.071 (0.008)    | 0.836 (0.094)    | -         |     7.26 | faydett, FpSSS, Pipw, Polt, sugaR |
|           23 |     2872 | 2024-08-29 | SovvyKiNG        | W   | 0.246      | -            | -                | -                | -         |     1.76 | faydett, FpSSS, Pipw, Polt, sugaR |
|           22 |     2878 | 2024-08-29 | Cloud9           | L   | 0.245      | -            | -                | -                | -         |    -1.41 | faydett, FpSSS, Pipw, Polt, sugaR |
|           21 |     3008 | 2024-08-27 | FAVBET           | W   | 0.230      | 0.435        | 0.073 (0.007)    | 0.894 (0.090)    | -         |     5.05 | faydett, FpSSS, Pipw, Polt, sugaR |
|           20 |     3157 | 2024-08-23 | Nemiga           | L   | 0.206      | -            | -                | -                | -         |    -0.41 | faydett, FpSSS, Pipw, Polt, sugaR |
|           19 |     3177 | 2024-08-23 | Qiang            | W   | 0.203      | -            | -                | -                | -         |     1.21 | faydett, FpSSS, Pipw, Polt, sugaR |
|           18 |     3187 | 2024-08-22 | AMKAL            | W   | 0.199      | -            | -                | -                | -         |     3.63 | faydett, FpSSS, Pipw, Polt, sugaR |
|           17 |     3233 | 2024-08-21 | BIG              | L   | 0.192      | -            | -                | -                | -         |    -0.18 | faydett, FpSSS, Pipw, Polt, sugaR |
|           16 |     3265 | 2024-08-21 | 9 Pandas         | L   | 0.191      | -            | -                | -                | -         |    -0.77 | faydett, FpSSS, Pipw, Polt, sugaR |
|           15 |     3321 | 2024-08-19 | ALTERNATE aTTaX  | L   | 0.179      | -            | -                | -                | -         |    -0.81 | faydett, FpSSS, Pipw, Polt, sugaR |
|           14 |     3369 | 2024-08-17 | Monte Gen        | L   | 0.166      | -            | -                | -                | -         |    -2.40 | faydett, FpSSS, Pipw, Polt, sugaR |
|           13 |     3379 | 2024-08-17 | Endpoint         | L   | 0.165      | -            | -                | -                | -         |    -2.16 | faydett, FpSSS, Pipw, Polt, sugaR |
|           12 |     3423 | 2024-08-15 | Illuminar        | W   | 0.152      | -            | -                | -                | -         |     1.62 | faydett, FpSSS, Pipw, Polt, sugaR |
|           11 |     3442 | 2024-08-15 | los kogutos      | W   | 0.150      | 0.435        | 0.071 (0.005)    | 0.836 (0.055)    | -         |     4.30 | faydett, FpSSS, Pipw, Polt, sugaR |
|           10 |     3460 | 2024-08-14 | RUBY             | L   | 0.144      | -            | -                | -                | -         |    -3.55 | faydett, FpSSS, Pipw, Polt, sugaR |
|            9 |     3677 | 2024-08-07 | Monte            | L   | 0.099      | -            | -                | -                | -         |    -0.67 | faydett, FpSSS, Pipw, Polt, sugaR |
|            8 |     3799 | 2024-08-04 | 9 Pandas         | L   | 0.077      | -            | -                | -                | -         |    -1.40 | faydett, FpSSS, Pipw, Polt, sugaR |
|            7 |     3833 | 2024-08-03 | 1WIN             | W   | 0.071      | -            | -                | -                | -         |     0.70 | faydett, FpSSS, Pipw, Polt, sugaR |
|            6 |     3865 | 2024-08-02 | ARCRED           | L   | 0.064      | -            | -                | -                | -         |    -1.03 | faydett, FpSSS, Pipw, Polt, sugaR |
|            5 |     3905 | 2024-08-01 | Metizport        | W   | 0.058      | -            | -                | -                | -         |     0.31 | faydett, FpSSS, Pipw, Polt, sugaR |
|            4 |     3945 | 2024-07-31 | Sashi            | L   | 0.052      | -            | -                | -                | -         |    -0.36 | faydett, FpSSS, Pipw, Polt, sugaR |
|            3 |     3990 | 2024-07-30 | 9 Pandas         | L   | 0.045      | -            | -                | -                | -         |    -0.83 | faydett, FpSSS, Pipw, Polt, sugaR |
|            2 |     4057 | 2024-07-28 | Metizport        | W   | 0.032      | -            | -                | -                | -         |     0.17 | faydett, FpSSS, Pipw, Polt, sugaR |
|            1 |     4179 | 2024-07-24 | Zero Tenacity    | L   | 0.005      | -            | -                | -                | -         |    -0.03 | faydett, FpSSS, Pipw, Polt, sugaR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,632.20)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.592 | $500.00        | $295.84         |
| 2024-10-03 |      0.479 | $2,500.00      | $1,196.42       |
| 2024-09-15 |      0.359 | $5,000.00      | $1,795.57       |
| 2024-08-18 |      0.172 | $2,000.00      | $344.36         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
