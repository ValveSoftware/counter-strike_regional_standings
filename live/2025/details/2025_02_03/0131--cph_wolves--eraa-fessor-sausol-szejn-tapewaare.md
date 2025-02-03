### Roster Details<br />
Team Name: CPH Wolves<br />
Roster: eraa, Fessor, sausol, szejn, Tapewaare<br />
Global Rank: [131](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [90]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  770.8<br />
<br />
Final Rank Value (770.8) = Starting Rank Value (730.2) + Head To Head Adjustments (40.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.286[<sup>1</sup>](#table2)
- Bounty Collected: 0.325[<sup>2</sup>](#table1)
- Opponent Network: 0.070[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.170<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 730.2
- 400 + ( ( 0.170 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 730.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                     |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |     2173 | 2024-10-01 | ALTERNATE aTTaX  | L   | 0.367      | -            | -                | -                | -         |    -2.61 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           39 |     2222 | 2024-09-29 | G2 Ares          | L   | 0.354      | -            | -                | -                | -         |    -8.51 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           38 |     2228 | 2024-09-29 | moneyF           | W   | 0.353      | 0.435        | -                | 0.639 (0.098)    | 0 (0.000) |     7.14 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           37 |     2274 | 2024-09-28 | K27              | W   | 0.344      | -            | -                | -                | 0 (0.000) |     2.60 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           36 |     2306 | 2024-09-27 | Passion UA       | L   | 0.340      | -            | -                | -                | -         |    -1.72 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           35 |     2340 | 2024-09-26 | GamerLegion      | L   | 0.334      | -            | -                | -                | -         |    -0.18 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           34 |     2412 | 2024-09-25 | Endpoint         | W   | 0.325      | 0.435        | 0.026 (0.004)    | 0.463 (0.065)    | 0 (0.000) |     5.86 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           33 |     2417 | 2024-09-25 | PeeP             | W   | 0.325      | -            | -                | -                | 0 (0.000) |     2.03 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           32 |     2462 | 2024-09-24 | K27              | L   | 0.319      | -            | -                | -                | -         |    -7.69 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           31 |     2485 | 2024-09-23 | ECSTATIC         | L   | 0.314      | -            | -                | -                | -         |    -2.74 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           30 |     2519 | 2024-09-22 | SovvyKiNG        | W   | 0.307      | -            | -                | -                | 0 (0.000) |     2.31 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           29 |     2525 | 2024-09-22 | Zero Tenacity    | W   | 0.305      | 0.435        | 0.078 (0.010)    | 0.715 (0.095)    | 0 (0.000) |     7.82 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           28 |     2542 | 2024-09-21 | FLuffy Gangsters | W   | 0.300      | 0.143        | -                | 0.608 (0.026)    | 0 (0.000) |     4.47 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           27 |     2561 | 2024-09-20 | RUBY             | L   | 0.294      | -            | -                | -                | -         |    -7.14 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           26 |     2598 | 2024-09-19 | 9 Pandas         | W   | 0.287      | 0.435        | 0.167 (0.021)    | 0.865 (0.108)    | 0 (0.000) |     7.70 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           25 |     2603 | 2024-09-19 | ALASKA           | W   | 0.286      | 0.143        | 0.052 (0.002)    | -                | 0 (0.000) |     6.29 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           24 |     2663 | 2024-09-17 | FAVBET           | L   | 0.274      | -            | -                | -                | -         |    -2.66 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           23 |     2675 | 2024-09-17 | ALTERNATE aTTaX  | W   | 0.272      | 0.435        | 0.066 (0.008)    | 0.643 (0.076)    | 0 (0.000) |     7.12 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           22 |     2706 | 2024-09-15 | FLuffy Gangsters | W   | 0.261      | 0.372        | -                | 0.608 (0.059)    | -         |     4.11 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           21 |     2710 | 2024-09-15 | CYBERSHOKE       | L   | 0.260      | -            | -                | -                | -         |    -3.36 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           20 |     2769 | 2024-09-14 | FLuffy Gangsters | W   | 0.251      | -            | -                | -                | -         |     4.01 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           19 |     2777 | 2024-09-13 | Daystar          | W   | 0.247      | -            | -                | -                | -         |     3.28 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           18 |     2813 | 2024-09-12 | AMKAL            | W   | 0.240      | -            | -                | -                | -         |     2.93 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           17 |     2827 | 2024-09-12 | Astralis Talent  | L   | 0.238      | -            | -                | -                | -         |    -3.58 | eraa, Fessor, sausol, szejn, Tapewaare     |
|           16 |     2848 | 2024-09-11 | ECLOT            | W   | 0.233      | 0.372        | 0.288 (0.025)    | 0.978 (0.085)    | -         |     6.94 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           15 |     2865 | 2024-09-11 | ENCE Academy     | W   | 0.231      | -            | -                | -                | -         |     3.94 | eraa, Fessor, sense, szejn, Tapewaare      |
|           14 |     2892 | 2024-09-10 | GameAgents       | L   | 0.224      | -            | -                | -                | -         |    -3.55 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           13 |     2949 | 2024-09-07 | Endpoint         | L   | 0.206      | -            | -                | -                | -         |    -2.52 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           12 |     3010 | 2024-09-05 | UNiTY            | W   | 0.193      | 0.372        | 0.069 (0.005)    | -                | -         |     4.39 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           11 |     3075 | 2024-09-03 | L&G              | W   | 0.180      | 0.372        | 0.059 (0.004)    | 0.570 (0.038)    | -         |     3.63 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|           10 |     3127 | 2024-09-01 | Monte Gen        | L   | 0.167      | -            | -                | -                | -         |    -2.13 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            9 |     3133 | 2024-09-01 | CYBERSHOKE       | L   | 0.166      | -            | -                | -                | -         |    -2.09 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            8 |     3160 | 2024-08-30 | Endpoint         | L   | 0.154      | -            | -                | -                | -         |    -1.90 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            7 |     3251 | 2024-08-28 | Chimera          | W   | 0.140      | 0.435        | 0.044 (0.003)    | 0.806 (0.049)    | -         |     3.23 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            6 |     3300 | 2024-08-27 | Sampi            | L   | 0.134      | -            | -                | -                | -         |    -1.03 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            5 |     3462 | 2024-08-24 | Kosovo           | W   | 0.112      | -            | -                | -                | -         |     0.88 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            4 |     3477 | 2024-08-23 | Spirit Academy   | W   | 0.107      | 0.143        | 0.170 (0.003)    | -                | -         |     2.78 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            3 |     3521 | 2024-08-22 | Preasy           | W   | 0.098      | -            | -                | -                | -         |     1.65 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            2 |     3548 | 2024-08-21 | Spirit Academy   | L   | 0.094      | -            | -                | -                | -         |    -0.50 | BøghmagiC, Fessor, sense, szejn, Tapewaare |
|            1 |     3871 | 2024-08-12 | Young Ninjas     | L   | 0.031      | -            | -                | -                | -         |    -0.58 | BøghmagiC, Fessor, sense, szejn, Tapewaare |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($598.94)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
