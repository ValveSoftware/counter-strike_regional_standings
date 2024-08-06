### Roster Details<br />
Team Name: Insilio<br />
Roster: faydett, FpSSS, Pipw, Polt, sugaR<br />
Global Rank: [77](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [54]( ../standings_europe.md)<br />
<br />
Final Rank Value:  956.9<br />
<br />
Final Rank Value (956.9) = Starting Rank Value (895.6) + Head To Head Adjustments (61.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.378[<sup>1</sup>](#table2)
- Bounty Collected: 0.370[<sup>2</sup>](#table1)
- Opponent Network: 0.215[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.241<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 895.6
- 400 + ( ( 0.241 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 895.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           53 |       74 | 2024-08-04 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -10.73 | faydett, FpSSS, Pipw, Polt, sugaR |
|           52 |      108 | 2024-08-03 | 1WIN              | W   | 1.000      | -            | -                | -                | 0 (0.000) |    17.00 | faydett, FpSSS, Pipw, Polt, sugaR |
|           51 |      140 | 2024-08-02 | ARCRED            | L   | 1.000      | -            | -                | -                | -         |   -14.72 | faydett, FpSSS, Pipw, Polt, sugaR |
|           50 |      180 | 2024-08-01 | Metizport         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.06 | faydett, FpSSS, Pipw, Polt, sugaR |
|           49 |      220 | 2024-07-31 | Sashi             | L   | 1.000      | -            | -                | -                | -         |    -7.03 | faydett, FpSSS, Pipw, Polt, sugaR |
|           48 |      265 | 2024-07-30 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |   -11.06 | faydett, FpSSS, Pipw, Polt, sugaR |
|           47 |      332 | 2024-07-28 | Metizport         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    14.45 | faydett, FpSSS, Pipw, Polt, sugaR |
|           46 |      454 | 2024-07-24 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |    -8.44 | faydett, FpSSS, Pipw, Polt, sugaR |
|           45 |      526 | 2024-07-22 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -13.92 | faydett, FpSSS, Pipw, Polt, sugaR |
|           44 |      591 | 2024-07-20 | UNiTY             | W   | 1.000      | 0.371        | 0.024 (0.009)    | -                | 0 (0.000) |    15.20 | faydett, FpSSS, Pipw, Polt, sugaR |
|           43 |      629 | 2024-07-19 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -17.25 | faydett, FpSSS, Pipw, Polt, sugaR |
|           42 |      666 | 2024-07-18 | EYEBALLERS        | W   | 1.000      | 0.500        | -                | 0.488 (0.244)    | 0 (0.000) |    10.07 | faydett, FpSSS, Pipw, Polt, sugaR |
|           41 |      790 | 2024-07-16 | KOI               | L   | 1.000      | -            | -                | -                | -         |   -10.25 | faydett, FpSSS, Pipw, Polt, sugaR |
|           40 |      869 | 2024-07-14 | Permitta          | W   | 1.000      | 0.371        | 0.039 (0.014)    | 0.919 (0.341)    | 0 (0.000) |    16.09 | faydett, FpSSS, Pipw, Polt, sugaR |
|           39 |      930 | 2024-07-10 | Preasy            | W   | 1.000      | -            | -                | -                | 0 (0.000) |     8.69 | faydett, FpSSS, Pipw, Polt, sugaR |
|           38 |      953 | 2024-07-09 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |   -11.53 | faydett, FpSSS, Pipw, Polt, sugaR |
|           37 |      972 | 2024-07-08 | FLuffy Gangsters  | L   | 1.000      | -            | -                | -                | -         |   -27.87 | faydett, FpSSS, Pipw, Polt, sugaR |
|           36 |     1230 | 2024-06-10 | ARCRED            | W   | 0.821      | 0.372        | 0.041 (0.013)    | -                | 0 (0.000) |    11.86 | faydett, FpSSS, Pipw, Polt, sugaR |
|           35 |     1278 | 2024-06-09 | RUBY              | W   | 0.813      | 0.372        | 0.095 (0.029)    | 0.479 (0.145)    | 0 (0.000) |    10.69 | faydett, FpSSS, Pipw, Polt, sugaR |
|           34 |     1332 | 2024-06-08 | Zero Tenacity     | W   | 0.808      | 0.372        | 0.143 (0.043)    | 1.000 (0.301)    | 0 (0.000) |    17.54 | faydett, FpSSS, Pipw, Polt, sugaR |
|           33 |     1399 | 2024-06-07 | Aurora Young Blud | W   | 0.800      | 0.372        | -                | 0.521 (0.155)    | -         |    11.04 | faydett, FpSSS, Pipw, Polt, sugaR |
|           32 |     1601 | 2024-06-03 | RUBY              | L   | 0.774      | -            | -                | -                | -         |   -12.21 | faydett, FpSSS, Pipw, Polt, sugaR |
|           31 |     1658 | 2024-06-01 | 1WIN              | W   | 0.760      | 0.372        | 0.033 (0.009)    | 0.718 (0.203)    | -         |    14.48 | faydett, FpSSS, Pipw, Polt, sugaR |
|           30 |     1709 | 2024-05-30 | VP.Prodigy        | W   | 0.747      | -            | -                | -                | -         |    11.46 | faydett, FpSSS, Pipw, Polt, sugaR |
|           29 |     2367 | 2024-05-07 | RUBY              | L   | 0.593      | -            | -                | -                | -         |    -9.44 | faydett, FpSSS, Pipw, Polt, sugaR |
|           28 |     2386 | 2024-05-06 | Zero Tenacity     | L   | 0.586      | -            | -                | -                | -         |    -6.47 | faydett, FpSSS, Pipw, Polt, sugaR |
|           27 |     2390 | 2024-05-06 | BLEED             | L   | 0.585      | -            | -                | -                | -         |    -6.30 | faydett, FpSSS, Pipw, Polt, sugaR |
|           26 |     2436 | 2024-05-03 | Permitta          | W   | 0.566      | 0.435        | 0.039 (0.010)    | 0.919 (0.226)    | -         |     8.98 | faydett, FpSSS, Pipw, Polt, sugaR |
|           25 |     2448 | 2024-05-03 | BetBoom           | L   | 0.564      | -            | -                | -                | -         |    -1.25 | faydett, FpSSS, Pipw, Polt, sugaR |
|           24 |     2480 | 2024-05-01 | OG                | W   | 0.554      | 0.435        | 0.137 (0.033)    | -                | -         |    11.56 | faydett, FpSSS, Pipw, Polt, sugaR |
|           23 |     2491 | 2024-05-01 | Nexus             | W   | 0.552      | -            | -                | -                | -         |     6.42 | faydett, FpSSS, Pipw, Polt, sugaR |
|           22 |     2532 | 2024-04-29 | HAVU              | L   | 0.539      | -            | -                | -                | -         |   -13.56 | faydett, FpSSS, Pipw, Polt, sugaR |
|           21 |     2568 | 2024-04-27 | ex-Guild Eagles   | W   | 0.527      | -            | -                | -                | -         |     6.44 | faydett, FpSSS, Pipw, Polt, sugaR |
|           20 |     2575 | 2024-04-27 | Permitta          | W   | 0.526      | 0.396        | 0.039 (0.008)    | 0.919 (0.192)    | -         |     9.46 | faydett, FpSSS, Pipw, Polt, sugaR |
|           19 |     2597 | 2024-04-26 | ARCRED            | L   | 0.520      | -            | -                | -                | -         |    -8.45 | faydett, FpSSS, Pipw, Polt, sugaR |
|           18 |     2602 | 2024-04-26 | Enterprise        | W   | 0.519      | 0.396        | -                | 0.641 (0.132)    | -         |     7.72 | faydett, FpSSS, Pipw, Polt, sugaR |
|           17 |     2636 | 2024-04-25 | MOUZ NXT          | W   | 0.511      | 0.435        | 0.139 (0.031)    | 0.961 (0.214)    | -         |    10.73 | faydett, FpSSS, Pipw, Polt, sugaR |
|           16 |     2662 | 2024-04-23 | EYEBALLERS        | W   | 0.500      | -            | -                | -                | -         |     7.29 | faydett, FpSSS, Pipw, Polt, sugaR |
|           15 |     2711 | 2024-04-21 | Permitta          | L   | 0.484      | -            | -                | -                | -         |    -6.09 | faydett, FpSSS, Pipw, Polt, sugaR |
|           14 |     3249 | 2024-04-03 | AMKAL             | L   | 0.367      | -            | -                | -                | -         |    -2.66 | faydett, FpSSS, Pipw, Polt, sugaR |
|           13 |     3290 | 2024-04-02 | ex-Guild Eagles   | W   | 0.361      | -            | -                | -                | -         |     4.16 | faydett, FpSSS, Pipw, Polt, sugaR |
|           12 |     3306 | 2024-04-02 | PARIVISION        | W   | 0.359      | -            | -                | -                | -         |     8.72 | faydett, FpSSS, Pipw, Polt, sugaR |
|           11 |     3531 | 2024-03-18 | Sashi             | L   | 0.260      | -            | -                | -                | -         |    -1.77 | faydett, FpSSS, Pipw, Polt, sugaR |
|           10 |     3589 | 2024-03-15 | CYBERSHOKE        | W   | 0.241      | -            | -                | -                | -         |     1.63 | faydett, FpSSS, Pipw, Polt, sugaR |
|            9 |     3663 | 2024-03-13 | INGLORIOUS        | W   | 0.227      | -            | -                | -                | -         |     0.83 | faydett, FpSSS, Pipw, Polt, sugaR |
|            8 |     3714 | 2024-03-11 | 1WIN              | W   | 0.213      | -            | -                | -                | -         |     3.66 | faydett, FpSSS, Pipw, Polt, sugaR |
|            7 |     3758 | 2024-03-09 | Fraud5            | W   | 0.200      | -            | -                | -                | -         |     1.24 | faydett, FpSSS, Pipw, Polt, sugaR |
|            6 |     3799 | 2024-03-07 | Sashi             | L   | 0.188      | -            | -                | -                | -         |    -1.19 | faydett, FpSSS, Pipw, Polt, sugaR |
|            5 |     3830 | 2024-03-06 | The Chosen Few    | W   | 0.181      | -            | -                | -                | -         |     1.27 | faydett, FpSSS, Pipw, Polt, sugaR |
|            4 |     3871 | 2024-03-05 | Johnny Speeds     | L   | 0.174      | -            | -                | -                | -         |    -0.50 | faydett, FpSSS, Pipw, Polt, sugaR |
|            3 |     3879 | 2024-03-05 | Betera            | W   | 0.173      | -            | -                | -                | -         |     1.34 | faydett, FpSSS, Pipw, Polt, sugaR |
|            2 |     4413 | 2024-02-09 | Sashi             | L   | 0.006      | -            | -                | -                | -         |    -0.04 | faydett, FpSSS, Pipw, Polt, sugaR |
|            1 |     4423 | 2024-02-08 | ex-Guild Eagles   | W   | 0.001      | -            | -                | -                | -         |     0.01 | faydett, FpSSS, Pipw, Polt, sugaR |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($7,276.90)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.02) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-10 |      0.821 | $7,000.00      | $5,746.83       |
| 2024-05-04 |      0.573 | $2,000.00      | $1,146.55       |
| 2024-03-25 |      0.307 | $1,250.00      | $383.51         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
