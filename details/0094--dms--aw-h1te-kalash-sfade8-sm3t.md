### Roster Details<br />
Team Name: DMS<br />
Roster: AW, h1te, kAlash, sFade8, sm3t<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [94](../standings_global.md)<br />
Regional Rank: [67]( ../standings_europe.md)<br />
Final Rank Value:  881.3<br />
<br />
Final Rank Value (881.3) = Starting Rank Value (854.7) + Head To Head Adjustments (26.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.295[<sup>1</sup>](#table2)
- Bounty Collected: 0.414[<sup>2</sup>](#table1)
- Opponent Network: 0.190[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.225<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 854.7
- 400 + ( ( 0.225 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 854.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           40 |       10 | 2024-07-24 | Eternal Fire    | L   | 1.000      | -            | -                | -                | -         |    -0.55 | AW, h1te, kAlash, sFade8, sm3t |
|           39 |      153 | 2024-07-19 | SINNERS         | L   | 1.000      | -            | -                | -                | -         |   -13.39 | AW, h1te, kAlash, sFade8, sm3t |
|           38 |      202 | 2024-07-18 | Space           | L   | 1.000      | -            | -                | -                | -         |   -14.82 | AW, h1te, kAlash, sFade8, sm3t |
|           37 |      335 | 2024-07-16 | ALTERNATE aTTaX | W   | 1.000      | 0.435        | 0.041 (0.018)    | 0.638 (0.277)    | 0 (0.000) |    14.06 | AW, h1te, kAlash, sFade8, sm3t |
|           36 |      737 | 2024-06-12 | Verdant         | L   | 0.920      | -            | -                | -                | -         |   -14.95 | AW, h1te, kAlash, sFade8, sm3t |
|           35 |      762 | 2024-06-11 | Zero Tenacity   | L   | 0.913      | -            | -                | -                | -         |    -7.96 | AW, h1te, kAlash, sFade8, sm3t |
|           34 |      940 | 2024-06-07 | Zero Tenacity   | L   | 0.887      | -            | -                | -                | -         |    -8.05 | AW, h1te, kAlash, sFade8, sm3t |
|           33 |     1041 | 2024-06-06 | CYBERSHOKE      | L   | 0.878      | -            | -                | -                | -         |   -18.59 | AW, h1te, kAlash, sFade8, sm3t |
|           32 |     1141 | 2024-06-04 | Sampi           | L   | 0.864      | -            | -                | -                | -         |   -15.26 | AW, h1te, kAlash, sFade8, sm3t |
|           31 |     1157 | 2024-06-03 | ARCRED          | L   | 0.859      | -            | -                | -                | -         |   -16.13 | AW, h1te, kAlash, sFade8, sm3t |
|           30 |     1168 | 2024-06-02 | Zero Tenacity   | L   | 0.854      | -            | -                | -                | -         |    -8.16 | AW, h1te, kAlash, sFade8, sm3t |
|           29 |     1178 | 2024-06-02 | fnatic          | W   | 0.852      | 0.143        | 0.428 (0.052)    | 0.666 (0.081)    | 0 (0.000) |    25.27 | AW, h1te, kAlash, sFade8, sm3t |
|           28 |     1201 | 2024-06-01 | ENCE            | W   | 0.847      | 0.143        | 0.171 (0.021)    | 0.380 (0.046)    | 0 (0.000) |    23.59 | AW, h1te, kAlash, sFade8, sm3t |
|           27 |     1211 | 2024-06-01 | Zero Tenacity   | L   | 0.846      | -            | -                | -                | -         |    -7.03 | AW, h1te, kAlash, sFade8, sm3t |
|           26 |     1216 | 2024-06-01 | ENCE            | W   | 0.845      | 0.143        | 0.171 (0.021)    | 0.380 (0.046)    | 0 (0.000) |    24.04 | AW, h1te, kAlash, sFade8, sm3t |
|           25 |     1233 | 2024-05-31 | Spirit Academy  | W   | 0.840      | -            | -                | -                | 0 (0.000) |     7.56 | AW, h1te, kAlash, sFade8, sm3t |
|           24 |     1269 | 2024-05-30 | Nemiga          | W   | 0.833      | 0.372        | 0.415 (0.129)    | 0.707 (0.219)    | 0 (0.000) |    21.59 | AW, h1te, kAlash, sFade8, sm3t |
|           23 |     1288 | 2024-05-29 | Verdant         | W   | 0.827      | 0.372        | 0.019 (0.006)    | 0.336 (0.103)    | 0 (0.000) |    14.41 | AW, h1te, kAlash, sFade8, sm3t |
|           22 |     1359 | 2024-05-26 | GUN5            | L   | 0.804      | -            | -                | -                | -         |   -10.73 | AW, h1te, kAlash, sFade8, sm3t |
|           21 |     1388 | 2024-05-24 | VP.Prodigy      | L   | 0.793      | -            | -                | -                | -         |   -12.33 | AW, h1te, kAlash, sFade8, sm3t |
|           20 |     1397 | 2024-05-24 | BetBoom         | L   | 0.791      | -            | -                | -                | -         |    -1.31 | AW, h1te, kAlash, sFade8, sm3t |
|           19 |     1407 | 2024-05-23 | B8              | L   | 0.785      | -            | -                | -                | -         |    -4.76 | AW, h1te, kAlash, sFade8, sm3t |
|           18 |     1487 | 2024-05-21 | EYEBALLERS      | W   | 0.773      | 0.435        | -                | 0.571 (0.192)    | 0 (0.000) |    11.82 | AW, h1te, kAlash, sFade8, sm3t |
|           17 |     1490 | 2024-05-21 | MOUZ NXT        | W   | 0.772      | 0.435        | 0.169 (0.057)    | 1.000 (0.336)    | 0 (0.000) |    17.52 | AW, h1te, kAlash, sFade8, sm3t |
|           16 |     1545 | 2024-05-19 | Space           | L   | 0.760      | -            | -                | -                | -         |   -12.58 | AW, h1te, kAlash, sFade8, sm3t |
|           15 |     1577 | 2024-05-18 | 777             | W   | 0.753      | -            | -                | -                | 0 (0.000) |     7.34 | AW, h1te, kAlash, sFade8, sm3t |
|           14 |     1582 | 2024-05-18 | Sampi           | W   | 0.752      | 0.435        | 0.037 (0.012)    | 0.994 (0.325)    | -         |    13.68 | AW, h1te, kAlash, sFade8, sm3t |
|           13 |     1626 | 2024-05-17 | MOUZ NXT        | L   | 0.744      | -            | -                | -                | -         |    -6.03 | AW, h1te, kAlash, sFade8, sm3t |
|           12 |     1646 | 2024-05-16 | B8              | L   | 0.740      | -            | -                | -                | -         |    -4.76 | AW, h1te, kAlash, sFade8, sm3t |
|           11 |     1698 | 2024-05-15 | Monte           | L   | 0.733      | -            | -                | -                | -         |    -9.10 | AW, h1te, kAlash, sFade8, sm3t |
|           10 |     1758 | 2024-05-14 | Rare Atom       | W   | 0.726      | -            | -                | -                | -         |     5.35 | AW, h1te, kAlash, sFade8, sm3t |
|            9 |     1769 | 2024-05-14 | Sangal          | W   | 0.724      | 0.435        | 0.195 (0.061)    | 0.860 (0.271)    | -         |    17.23 | AW, h1te, kAlash, sFade8, sm3t |
|            8 |     1785 | 2024-05-13 | Heimo           | W   | 0.719      | -            | -                | -                | -         |     6.91 | AW, h1te, kAlash, sFade8, sm3t |
|            7 |     1838 | 2024-05-11 | CYBERSHOKE      | W   | 0.706      | -            | -                | -                | -         |    10.46 | AW, h1te, kAlash, sFade8, sm3t |
|            6 |     2103 | 2024-04-28 | Alliance        | L   | 0.619      | -            | -                | -                | -         |    -9.07 | AW, h1te, kAlash, sFade8, sm3t |
|            5 |     2154 | 2024-04-26 | BLEED           | L   | 0.605      | -            | -                | -                | -         |    -3.88 | AW, h1te, kAlash, sFade8, sm3t |
|            4 |     2359 | 2024-04-18 | Apeks           | L   | 0.553      | -            | -                | -                | -         |    -5.68 | AW, h1te, kAlash, sFade8, sm3t |
|            3 |     2368 | 2024-04-18 | EYEBALLERS      | W   | 0.553      | -            | -                | -                | -         |     9.24 | AW, h1te, kAlash, sFade8, sm3t |
|            2 |     3553 | 2024-02-27 | kONO            | L   | 0.214      | -            | -                | -                | -         |    -3.67 | AW, h1te, kAlash, sFade8, sm3t |
|            1 |     3557 | 2024-02-27 | B8              | W   | 0.213      | 0.143        | 0.206 (0.006)    | -                | -         |     5.33 | AW, h1te, kAlash, sFade8, sm3t |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,134.28)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
