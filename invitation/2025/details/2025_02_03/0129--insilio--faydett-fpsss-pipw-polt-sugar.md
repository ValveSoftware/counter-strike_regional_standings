### Roster Details<br />
Team Name: Insilio<br />
Roster: faydett, FpSSS, Pipw, Polt, sugaR<br />
Global Rank: [129](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [88]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  781.8<br />
<br />
Final Rank Value (781.8) = Starting Rank Value (756.0) + Head To Head Adjustments (25.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.350[<sup>1</sup>](#table2)
- Bounty Collected: 0.324[<sup>2</sup>](#table1)
- Opponent Network: 0.060[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.184<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 756.0
- 400 + ( ( 0.184 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 756.0


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
|           41 |      577 | 2024-12-12 | Fire Flux        | L   | 0.847      | -            | -                | -                | -         |    -8.99 | faydett, FpSSS, Pipw, Polt, sugaR |
|           40 |      589 | 2024-12-11 | CYBERSHOKE       | L   | 0.841      | -            | -                | -                | -         |   -12.34 | faydett, FpSSS, Pipw, Polt, sugaR |
|           39 |      603 | 2024-12-10 | FLuffy Gangsters | W   | 0.834      | 0.143        | 0.015 (0.002)    | 0.608 (0.072)    | 0 (0.000) |    11.58 | faydett, FpSSS, Pipw, Polt, sugaR |
|           38 |     2100 | 2024-10-03 | WW               | L   | 0.378      | -            | -                | -                | -         |    -9.65 | faydett, FpSSS, Pipw, Polt, sugaR |
|           37 |     2133 | 2024-10-02 | Partizan         | L   | 0.372      | -            | -                | -                | -         |    -1.47 | faydett, FpSSS, Pipw, Polt, sugaR |
|           36 |     2201 | 2024-09-30 | SovvyKiNG        | W   | 0.359      | 0.384        | -                | 0.146 (0.020)    | 0 (0.000) |     2.37 | faydett, FpSSS, Pipw, Polt, sugaR |
|           35 |     2234 | 2024-09-29 | 500              | W   | 0.352      | 0.354        | 0.062 (0.008)    | 0.949 (0.118)    | 0 (0.000) |     7.32 | faydett, FpSSS, Pipw, Polt, sugaR |
|           34 |     2369 | 2024-09-26 | B8               | L   | 0.331      | -            | -                | -                | -         |    -1.59 | faydett, FpSSS, Pipw, Polt, sugaR |
|           33 |     2522 | 2024-09-22 | Lynn Vision      | W   | 0.306      | 0.435        | 0.030 (0.004)    | 0.427 (0.057)    | 0 (0.000) |     7.17 | faydett, FpSSS, Pipw, Polt, sugaR |
|           32 |     2570 | 2024-09-20 | Rebels           | L   | 0.293      | -            | -                | -                | -         |    -3.81 | faydett, FpSSS, Pipw, Polt, sugaR |
|           31 |     2578 | 2024-09-20 | los kogutos      | W   | 0.291      | 0.435        | 0.070 (0.009)    | 0.779 (0.099)    | 0 (0.000) |     7.88 | faydett, FpSSS, Pipw, Polt, sugaR |
|           30 |     2631 | 2024-09-18 | Endpoint         | L   | 0.281      | -            | -                | -                | -         |    -4.04 | faydett, FpSSS, Pipw, Polt, sugaR |
|           29 |     2697 | 2024-09-16 | Kosovo           | W   | 0.265      | -            | -                | -                | 0 (0.000) |     1.79 | faydett, FpSSS, Pipw, Polt, sugaR |
|           28 |     2718 | 2024-09-15 | SINNERS          | L   | 0.259      | -            | -                | -                | -         |    -1.70 | faydett, FpSSS, Pipw, Polt, sugaR |
|           27 |     2739 | 2024-09-14 | UNPAID           | W   | 0.254      | 0.435        | 0.136 (0.015)    | 0.172 (0.019)    | 0 (0.000) |     5.85 | faydett, FpSSS, Pipw, Polt, sugaR |
|           26 |     2821 | 2024-09-12 | SAW              | W   | 0.239      | 0.435        | 0.231 (0.024)    | 0.376 (0.039)    | 0 (0.000) |     6.92 | faydett, FpSSS, Pipw, Polt, sugaR |
|           25 |     2876 | 2024-09-10 | Revenant         | W   | 0.227      | -            | -                | -                | 0 (0.000) |     2.79 | faydett, FpSSS, Pipw, Polt, sugaR |
|           24 |     2917 | 2024-09-08 | Rhyno            | W   | 0.213      | -            | -                | -                | 0 (0.000) |     2.96 | faydett, FpSSS, Pipw, Polt, sugaR |
|           23 |     2926 | 2024-09-08 | SINNERS          | W   | 0.212      | 0.384        | 0.090 (0.007)    | 0.750 (0.061)    | -         |     5.42 | faydett, FpSSS, Pipw, Polt, sugaR |
|           22 |     2963 | 2024-09-07 | Monte Gen        | L   | 0.205      | -            | -                | -                | -         |    -2.87 | faydett, FpSSS, Pipw, Polt, sugaR |
|           21 |     2974 | 2024-09-06 | SovvyKiNG        | W   | 0.200      | -            | -                | -                | -         |     1.45 | faydett, FpSSS, Pipw, Polt, sugaR |
|           20 |     2982 | 2024-09-06 | UNPAID           | L   | 0.199      | -            | -                | -                | -         |    -1.63 | faydett, FpSSS, Pipw, Polt, sugaR |
|           19 |     3019 | 2024-09-05 | Spirit Academy   | L   | 0.193      | -            | -                | -                | -         |    -1.23 | faydett, FpSSS, Pipw, Polt, sugaR |
|           18 |     3026 | 2024-09-05 | GUN5             | L   | 0.192      | -            | -                | -                | -         |    -1.04 | faydett, FpSSS, Pipw, Polt, sugaR |
|           17 |     3072 | 2024-09-03 | SovvyKiNG        | W   | 0.180      | -            | -                | -                | -         |     1.33 | faydett, FpSSS, Pipw, Polt, sugaR |
|           16 |     3132 | 2024-09-01 | RUSH B           | W   | 0.166      | 0.384        | 0.068 (0.004)    | -                | -         |     3.39 | faydett, FpSSS, Pipw, Polt, sugaR |
|           15 |     3144 | 2024-08-31 | los kogutos      | W   | 0.161      | 0.435        | 0.070 (0.005)    | 0.779 (0.054)    | -         |     4.46 | faydett, FpSSS, Pipw, Polt, sugaR |
|           14 |     3193 | 2024-08-29 | SovvyKiNG        | W   | 0.147      | -            | -                | -                | -         |     1.11 | faydett, FpSSS, Pipw, Polt, sugaR |
|           13 |     3199 | 2024-08-29 | Cloud9           | L   | 0.146      | -            | -                | -                | -         |    -0.96 | faydett, FpSSS, Pipw, Polt, sugaR |
|           12 |     3329 | 2024-08-27 | FAVBET           | W   | 0.131      | 0.435        | 0.074 (0.004)    | 1.000 (0.057)    | -         |     2.89 | faydett, FpSSS, Pipw, Polt, sugaR |
|           11 |     3478 | 2024-08-23 | Nemiga           | L   | 0.107      | -            | -                | -                | -         |    -0.23 | faydett, FpSSS, Pipw, Polt, sugaR |
|           10 |     3498 | 2024-08-23 | Qiang            | W   | 0.105      | -            | -                | -                | -         |     0.63 | faydett, FpSSS, Pipw, Polt, sugaR |
|            9 |     3508 | 2024-08-22 | AMKAL            | W   | 0.100      | -            | -                | -                | -         |     1.85 | faydett, FpSSS, Pipw, Polt, sugaR |
|            8 |     3554 | 2024-08-21 | BIG              | L   | 0.093      | -            | -                | -                | -         |    -0.07 | faydett, FpSSS, Pipw, Polt, sugaR |
|            7 |     3586 | 2024-08-21 | 9 Pandas         | L   | 0.092      | -            | -                | -                | -         |    -0.41 | faydett, FpSSS, Pipw, Polt, sugaR |
|            6 |     3642 | 2024-08-19 | ALTERNATE aTTaX  | L   | 0.080      | -            | -                | -                | -         |    -0.41 | faydett, FpSSS, Pipw, Polt, sugaR |
|            5 |     3690 | 2024-08-17 | Monte Gen        | L   | 0.068      | -            | -                | -                | -         |    -0.94 | faydett, FpSSS, Pipw, Polt, sugaR |
|            4 |     3700 | 2024-08-17 | Endpoint         | L   | 0.066      | -            | -                | -                | -         |    -0.88 | faydett, FpSSS, Pipw, Polt, sugaR |
|            3 |     3744 | 2024-08-15 | Illuminar        | W   | 0.053      | -            | -                | -                | -         |     0.57 | faydett, FpSSS, Pipw, Polt, sugaR |
|            2 |     3763 | 2024-08-15 | los kogutos      | W   | 0.052      | -            | -                | -                | -         |     1.45 | faydett, FpSSS, Pipw, Polt, sugaR |
|            1 |     3781 | 2024-08-14 | RUBY             | L   | 0.045      | -            | -                | -                | -         |    -1.10 | faydett, FpSSS, Pipw, Polt, sugaR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,643.50)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.493 | $500.00        | $246.41         |
| 2024-10-03 |      0.380 | $2,500.00      | $949.25         |
| 2024-09-15 |      0.260 | $5,000.00      | $1,301.22       |
| 2024-08-18 |      0.073 | $2,000.00      | $146.63         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
