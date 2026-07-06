### Roster Details<br />
Team Name: BRUTE<br />
Roster: hfah, KAD1M, majky, nbqq, realzen<br />
Global Rank: [138](../../standings_global_2026_07_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_07_06.md)<br />
Regional Rank: [94]( ../../standings_europe_2026_07_06.md)<br />
<br />
Final Rank Value:  861.6<br />
<br />
Final Rank Value (861.6) = Starting Rank Value (770.1) + Head To Head Adjustments (91.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.282[<sup>1</sup>](#table2)
- Bounty Collected: 0.282[<sup>2</sup>](#table1)
- Opponent Network: 0.188[<sup>2</sup>](#table1)
- LAN Wins: 0.033[<sup>2</sup>](#table1)

The average of these factors is 0.196<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 770.1
- 400 + ( ( 0.196 - 0.000 ) / ( 0.849 - 0.000 ) ) * 1600 = 770.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |      832 | 2026-05-26 | ALGO           | L   | 0.928      | -            | -                | -                | -         |   -18.36 | aidKiT, hfah, nbqq, realzen, Siko     |
|           39 |      878 | 2026-05-25 | Phantom        | L   | 0.920      | -            | -                | -                | -         |    -9.29 | hfah, KAD1M, majky, nbqq, realzen     |
|           38 |     1018 | 2026-05-22 | PsychoFace     | W   | 0.900      | 0.384        | 0.028 (0.010)    | 1.000 (0.346)    | 0 (0.000) |    18.89 | hfah, KAD1M, majky, nbqq, realzen     |
|           37 |     1068 | 2026-05-21 | fnatic         | L   | 0.893      | -            | -                | -                | -         |    -6.47 | hfah, KAD1M, majky, nbqq, realzen     |
|           36 |     1137 | 2026-05-19 | AM             | W   | 0.879      | 0.384        | 0.014 (0.005)    | 0.670 (0.226)    | 0 (0.000) |    22.00 | aidKiT, hfah, nbqq, realzen, Siko     |
|           35 |     1171 | 2026-05-17 | Rune Eaters    | W   | 0.868      | 0.344        | 0.010 (0.003)    | 0.680 (0.203)    | 0 (0.000) |    15.66 | hfah, KAD1M, majky, nbqq, realzen     |
|           34 |     1235 | 2026-05-15 | Famalicão      | W   | 0.853      | -            | -                | -                | 0 (0.000) |     8.91 | hfah, KAD1M, majky, nbqq, realzen     |
|           33 |     1265 | 2026-05-14 | ex-MANA        | W   | 0.845      | 0.344        | -                | 0.598 (0.174)    | 0 (0.000) |    14.01 | hfah, KAD1M, majky, nbqq, realzen     |
|           32 |     1401 | 2026-05-10 | INOX Division  | L   | 0.820      | -            | -                | -                | -         |    -5.33 | hfah, KAD1M, majky, nbqq, realzen     |
|           31 |     1407 | 2026-05-10 | Atreides       | W   | 0.819      | 0.303        | 0.002 (0.001)    | 0.764 (0.190)    | 0 (0.000) |    13.58 | hfah, KAD1M, majky, nbqq, realzen     |
|           30 |     1443 | 2026-05-09 | INOX Division  | L   | 0.813      | -            | -                | -                | -         |    -5.03 | hfah, KAD1M, majky, nbqq, realzen     |
|           29 |     1480 | 2026-05-07 | NEW VISION     | W   | 0.800      | 0.303        | 0.007 (0.002)    | -                | 0 (0.000) |    12.14 | hfah, KAD1M, majky, nbqq, realzen     |
|           28 |     1529 | 2026-05-04 | Atreides       | W   | 0.780      | 0.303        | 0.002 (0.001)    | 0.764 (0.181)    | 0 (0.000) |    12.54 | hfah, KAD1M, majky, nbqq, realzen     |
|           27 |     1564 | 2026-05-03 | benched gods   | W   | 0.772      | -            | -                | -                | 0 (0.000) |     7.96 | hfah, KAD1M, majky, nbqq, realzen     |
|           26 |     1796 | 2026-04-28 | STATE          | L   | 0.738      | -            | -                | -                | -         |    -3.61 | hfah, KAD1M, majky, nbqq, realzen     |
|           25 |     1835 | 2026-04-27 | Ursa           | L   | 0.733      | -            | -                | -                | -         |    -5.34 | hfah, majky, mASKED, nbqq, realzen    |
|           24 |     1899 | 2026-04-26 | RUSTEC         | L   | 0.726      | -            | -                | -                | -         |    -8.70 | hfah, KAD1M, majky, nbqq, realzen     |
|           23 |     1964 | 2026-04-25 | playersclub    | W   | 0.720      | -            | -                | -                | -         |     7.10 | hfah, KAD1M, majky, nbqq, realzen     |
|           22 |     2026 | 2026-04-24 | DONSTU         | W   | 0.712      | 0.303        | -                | 0.551 (0.119)    | -         |    10.20 | hfah, KAD1M, majky, nbqq, realzen     |
|           21 |     2066 | 2026-04-23 | Atreides       | W   | 0.706      | 0.303        | 0.002 (0.001)    | 0.764 (0.163)    | -         |    11.71 | hfah, majky, mASKED, nbqq, realzen    |
|           20 |     2091 | 2026-04-22 | aimclub        | W   | 0.699      | -            | -                | -                | -         |    13.65 | hfah, majky, mASKED, nbqq, realzen    |
|           19 |     2112 | 2026-04-20 | playersclub    | L   | 0.687      | -            | -                | -                | -         |   -15.54 | hfah, majky, mASKED, nbqq, realzen    |
|           18 |     2140 | 2026-04-19 | Young Ninjas   | W   | 0.680      | 0.303        | 0.004 (0.001)    | 0.619 (0.127)    | -         |    13.39 | hfah, majky, mASKED, nbqq, realzen    |
|           17 |     2370 | 2026-04-08 | Rune Eaters    | L   | 0.606      | -            | -                | -                | -         |    -5.66 | hfah, majky, mASKED, nbqq, realzen    |
|           16 |     2400 | 2026-04-07 | Leo            | L   | 0.600      | -            | -                | -                | -         |    -8.30 | hfah, majky, mASKED, nbqq, realzen    |
|           15 |     2439 | 2026-04-06 | Rune Eaters    | W   | 0.593      | 0.384        | 0.010 (0.002)    | 0.680 (0.155)    | -         |    13.46 | hfah, majky, mASKED, nbqq, realzen    |
|           14 |     4013 | 2026-03-11 | PsychoFace     | L   | 0.421      | -            | -                | -                | -         |    -2.71 | hfah, KAD1M, mASKED, realzen, Siko    |
|           13 |     4085 | 2026-03-09 | ex-FUT Academy | W   | 0.408      | -            | -                | -                | -         |     1.51 | hfah, KAD1M, mASKED, realzen, Siko    |
|           12 |     4315 | 2026-03-05 | cirahvi        | L   | 0.381      | -            | -                | -                | -         |    -6.83 | hfah, KAD1M, mASKED, realzen, Siko    |
|           11 |     4748 | 2026-02-24 | ex-MANA        | L   | 0.322      | -            | -                | -                | -         |    -4.75 | hfah, KAD1M, mASKED, realzen, Siko    |
|           10 |     4770 | 2026-02-24 | 100 Thieves    | L   | 0.320      | -            | -                | -                | -         |    -0.53 | hfah, KAD1M, mASKED, realzen, Siko    |
|            9 |     4788 | 2026-02-24 | LAGUNA         | W   | 0.319      | -            | -                | -                | 1 (0.319) |     1.30 | hfah, KAD1M, mASKED, realzen, Siko    |
|            8 |     4931 | 2026-02-21 | KOLESIE        | L   | 0.301      | -            | -                | -                | -         |    -4.42 | hfah, KAD1M, mASKED, realzen, Siko    |
|            7 |     5052 | 2026-02-19 | ASTRAL         | L   | 0.286      | -            | -                | -                | -         |    -1.03 | hfah, KAD1M, mASKED, realzen, Siko    |
|            6 |     5172 | 2026-02-17 | illwill        | L   | 0.272      | -            | -                | -                | -         |    -2.63 | hfah, KAD1M, mASKED, realzen, Siko    |
|            5 |     5210 | 2026-02-16 | MOUZ NXT       | L   | 0.266      | -            | -                | -                | -         |    -2.90 | hfah, KAD1M, mASKED, realzen, Siko    |
|            4 |     5334 | 2026-02-14 | Fuzos          | W   | 0.253      | -            | -                | -                | -         |     2.85 | hfah, KAD1M, mASKED, realzen, Siko    |
|            3 |     5518 | 2026-02-09 | Bebop          | W   | 0.221      | -            | -                | -                | -         |     3.53 | hfah, KAD1M, mASKED, realzen, Siko    |
|            2 |     5750 | 2026-02-01 | Acend          | W   | 0.167      | 0.396        | 0.070 (0.005)    | -                | -         |     5.11 | hfah, KAD1M, mASKED, realzen, Siko    |
|            1 |     5860 | 2026-01-29 | ARCRED         | L   | 0.145      | -            | -                | -                | -         |    -0.55 | hfah, KAD1M, realzen, Siko, The eLiVe |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,593.66)
- Divide that value by the 5th highest value among all rosters ($562,919.24)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2026-05-10 |      0.820 | $1,500.00      | $1,230.37       |
| 2026-04-26 |      0.727 | $500.00        | $363.29         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
