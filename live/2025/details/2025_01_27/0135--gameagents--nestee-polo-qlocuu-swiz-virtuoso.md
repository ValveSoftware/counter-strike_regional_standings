### Roster Details<br />
Team Name: GameAgents<br />
Roster: nestee, POLO, Qlocuu, swiz, virtuoso<br />
Global Rank: [135](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [96]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  764.4<br />
<br />
Final Rank Value (764.4) = Starting Rank Value (742.2) + Head To Head Adjustments (22.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.336[<sup>1</sup>](#table2)
- Bounty Collected: 0.310[<sup>2</sup>](#table1)
- Opponent Network: 0.053[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.175<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 742.2
- 400 + ( ( 0.175 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 742.2


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
|           34 |       44 | 2025-01-24 | FAVBET            | L   | 1.000      | -            | -                | -                | -         |    -8.64 | nestee, POLO, Qlocuu, swiz, virtuoso |
|           33 |      145 | 2025-01-22 | Aurora            | L   | 1.000      | -            | -                | -                | -         |    -8.14 | nestee, POLO, Qlocuu, swiz, virtuoso |
|           32 |     1607 | 2024-10-18 | NewBALLS          | L   | 0.525      | -            | -                | -                | -         |   -13.38 | Demho, Prism, Qlocuu, swiz, virtuoso |
|           31 |     1691 | 2024-10-14 | ECLOT             | L   | 0.500      | -            | -                | -                | -         |    -1.23 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           30 |     1731 | 2024-10-11 | Insomnia          | L   | 0.480      | -            | -                | -                | -         |   -10.78 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           29 |     1743 | 2024-10-10 | 500 Rush          | L   | 0.473      | -            | -                | -                | -         |   -10.98 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           28 |     1946 | 2024-10-04 | TSM               | L   | 0.431      | -            | -                | -                | -         |    -5.47 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           27 |     1977 | 2024-10-03 | Passion UA        | L   | 0.425      | -            | -                | -                | -         |    -2.16 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           26 |     2002 | 2024-10-02 | Betera            | W   | 0.420      | -            | -                | -                | 0 (0.000) |     2.20 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           25 |     2052 | 2024-10-01 | Rebels            | W   | 0.414      | 0.500        | 0.033 (0.007)    | 0.330 (0.068)    | 0 (0.000) |     7.45 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           24 |     2068 | 2024-10-01 | TSM               | W   | 0.412      | 0.371        | 0.032 (0.005)    | 0.366 (0.056)    | 0 (0.000) |     7.99 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           23 |     2119 | 2024-09-29 | ALTERNATE aTTaX   | W   | 0.398      | 0.371        | 0.070 (0.010)    | 0.666 (0.098)    | 0 (0.000) |    10.15 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           22 |     2146 | 2024-09-28 | 9z                | L   | 0.393      | -            | -                | -                | -         |    -3.57 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           21 |     2177 | 2024-09-27 | OG                | W   | 0.387      | 0.143        | 0.168 (0.009)    | -                | 0 (0.000) |     8.28 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           20 |     2192 | 2024-09-27 | SAW               | L   | 0.386      | -            | -                | -                | -         |    -0.73 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           19 |     2199 | 2024-09-27 | ALASKA            | W   | 0.385      | 0.371        | 0.052 (0.007)    | 0.489 (0.070)    | 0 (0.000) |     8.16 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           18 |     2227 | 2024-09-26 | ARCRED            | W   | 0.380      | 0.143        | 0.046 (0.003)    | -                | 0 (0.000) |     5.84 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           17 |     2235 | 2024-09-26 | Gaimin Gladiators | W   | 0.380      | 0.143        | 0.081 (0.004)    | 0.874 (0.047)    | 0 (0.000) |     8.66 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           16 |     2337 | 2024-09-24 | Monte             | L   | 0.367      | -            | -                | -                | -         |    -2.14 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           15 |     2371 | 2024-09-23 | Illuminar         | W   | 0.361      | -            | -                | -                | 0 (0.000) |     8.33 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           14 |     2385 | 2024-09-23 | Johnny Speeds     | L   | 0.359      | -            | -                | -                | -         |    -1.95 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           13 |     2496 | 2024-09-19 | ALASKA            | W   | 0.331      | 0.371        | 0.052 (0.006)    | 0.489 (0.060)    | 0 (0.000) |     7.56 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           12 |     2582 | 2024-09-16 | NAVI Junior       | L   | 0.311      | -            | -                | -                | -         |    -1.54 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           11 |     2605 | 2024-09-15 | L&G               | L   | 0.306      | -            | -                | -                | -         |    -3.86 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|           10 |     2617 | 2024-09-15 | Astralis Talent   | W   | 0.304      | 0.333        | -                | 0.494 (0.050)    | -         |     4.97 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            9 |     2649 | 2024-09-14 | ENCE Academy      | W   | 0.298      | 0.333        | 0.015 (0.001)    | 0.285 (0.028)    | -         |     4.73 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            8 |     2665 | 2024-09-13 | NAVI Junior       | L   | 0.293      | -            | -                | -                | -         |    -1.41 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            7 |     2674 | 2024-09-13 | UNiTY             | W   | 0.292      | 0.333        | 0.069 (0.007)    | 0.266 (0.026)    | -         |     6.62 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            6 |     2699 | 2024-09-12 | NAVI Junior       | L   | 0.286      | -            | -                | -                | -         |    -1.35 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            5 |     2736 | 2024-09-11 | JiJieHao          | W   | 0.279      | -            | -                | -                | -         |     3.46 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            4 |     2774 | 2024-09-10 | CPH Wolves        | W   | 0.271      | 0.333        | -                | 0.326 (0.029)    | -         |     4.35 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            3 |     2849 | 2024-09-06 | GUN5              | L   | 0.248      | -            | -                | -                | -         |    -1.07 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            2 |     2880 | 2024-09-05 | SovvyKiNG         | W   | 0.241      | -            | -                | -                | -         |     2.04 | POLO, Prism, Qlocuu, swiz, virtuoso  |
|            1 |     3932 | 2024-08-06 | SINNERS           | L   | 0.040      | -            | -                | -                | -         |    -0.17 | POLO, Prism, Qlocuu, swiz, virtuoso  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,171.11)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.540 | $1,000.00      | $539.58         |
| 2024-10-05 |      0.438 | $3,000.00      | $1,313.57       |
| 2024-09-17 |      0.318 | $1,000.00      | $317.96         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
