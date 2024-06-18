### Roster Details<br />
Team Name: DMS<br />
Roster: AW, h1te, kAlash, sFade8, sm3t<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [85](../standings_global.md)<br />
Regional Rank: [60]( ../standings_europe.md)<br />
Final Rank Value:  931.8<br />
<br />
Final Rank Value (931.8) = Starting Rank Value (878.2) + Head To Head Adjustments (53.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.296[<sup>1</sup>](#table2)
- Bounty Collected: 0.434[<sup>2</sup>](#table1)
- Opponent Network: 0.212[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.235<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 878.2
- 400 + ( ( 0.235 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 878.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |      149 | 2024-06-12 | Verdant        | L   | 1.000      | -            | -                | -                | -         |   -20.02 | AW, h1te, kAlash, sFade8, sm3t |
|           35 |      174 | 2024-06-11 | Zero Tenacity  | L   | 1.000      | -            | -                | -                | -         |    -9.07 | AW, h1te, kAlash, sFade8, sm3t |
|           34 |      352 | 2024-06-07 | Zero Tenacity  | L   | 1.000      | -            | -                | -                | -         |    -9.56 | AW, h1te, kAlash, sFade8, sm3t |
|           33 |      453 | 2024-06-06 | CYBERSHOKE     | L   | 1.000      | -            | -                | -                | -         |   -22.83 | AW, h1te, kAlash, sFade8, sm3t |
|           32 |      553 | 2024-06-04 | Sampi          | L   | 1.000      | -            | -                | -                | -         |   -18.15 | AW, h1te, kAlash, sFade8, sm3t |
|           31 |      569 | 2024-06-03 | ARCRED         | L   | 1.000      | -            | -                | -                | -         |   -19.80 | AW, h1te, kAlash, sFade8, sm3t |
|           30 |      580 | 2024-06-02 | Zero Tenacity  | L   | 1.000      | -            | -                | -                | -         |   -10.09 | AW, h1te, kAlash, sFade8, sm3t |
|           29 |      591 | 2024-06-02 | fnatic         | W   | 1.000      | 0.143        | 0.290 (0.041)    | 0.666 (0.095)    | 0 (0.000) |    28.26 | AW, h1te, kAlash, sFade8, sm3t |
|           28 |      615 | 2024-06-01 | ENCE           | W   | 1.000      | 0.143        | 0.229 (0.033)    | 0.424 (0.061)    | 0 (0.000) |    28.20 | AW, h1te, kAlash, sFade8, sm3t |
|           27 |      625 | 2024-06-01 | Zero Tenacity  | L   | 1.000      | -            | -                | -                | -         |    -8.76 | AW, h1te, kAlash, sFade8, sm3t |
|           26 |      630 | 2024-06-01 | ENCE           | W   | 1.000      | 0.143        | 0.229 (0.033)    | -                | 0 (0.000) |    28.85 | AW, h1te, kAlash, sFade8, sm3t |
|           25 |      647 | 2024-05-31 | Spirit Academy | W   | 1.000      | 0.372        | 0.017 (0.006)    | -                | 0 (0.000) |     7.54 | AW, h1te, kAlash, sFade8, sm3t |
|           24 |      683 | 2024-05-30 | Nemiga         | W   | 1.000      | 0.372        | 0.486 (0.181)    | 0.694 (0.258)    | 0 (0.000) |    26.45 | AW, h1te, kAlash, sFade8, sm3t |
|           23 |      702 | 2024-05-29 | Verdant        | W   | 1.000      | 0.372        | -                | 0.308 (0.115)    | 0 (0.000) |    12.16 | AW, h1te, kAlash, sFade8, sm3t |
|           22 |      773 | 2024-05-26 | GUN5           | L   | 1.000      | -            | -                | -                | -         |   -14.14 | AW, h1te, kAlash, sFade8, sm3t |
|           21 |      802 | 2024-05-24 | VP.Prodigy     | L   | 1.000      | -            | -                | -                | -         |   -16.00 | AW, h1te, kAlash, sFade8, sm3t |
|           20 |      811 | 2024-05-24 | BetBoom        | L   | 1.000      | -            | -                | -                | -         |    -1.41 | AW, h1te, kAlash, sFade8, sm3t |
|           19 |      821 | 2024-05-23 | B8             | L   | 1.000      | -            | -                | -                | -         |    -5.45 | AW, h1te, kAlash, sFade8, sm3t |
|           18 |      901 | 2024-05-21 | EYEBALLERS     | W   | 1.000      | 0.435        | -                | 0.653 (0.284)    | 0 (0.000) |    14.53 | AW, h1te, kAlash, sFade8, sm3t |
|           17 |      904 | 2024-05-21 | MOUZ NXT       | W   | 1.000      | 0.435        | 0.158 (0.069)    | 1.000 (0.435)    | 0 (0.000) |    22.56 | AW, h1te, kAlash, sFade8, sm3t |
|           16 |      959 | 2024-05-19 | Space          | L   | 1.000      | -            | -                | -                | -         |   -17.37 | AW, h1te, kAlash, sFade8, sm3t |
|           15 |      991 | 2024-05-18 | 777            | W   | 0.995      | -            | -                | -                | 0 (0.000) |     8.62 | AW, h1te, kAlash, sFade8, sm3t |
|           14 |      996 | 2024-05-18 | Sampi          | W   | 0.995      | 0.435        | 0.045 (0.020)    | 0.837 (0.362)    | 0 (0.000) |    18.31 | AW, h1te, kAlash, sFade8, sm3t |
|           13 |     1040 | 2024-05-17 | MOUZ NXT       | L   | 0.987      | -            | -                | -                | -         |    -7.72 | AW, h1te, kAlash, sFade8, sm3t |
|           12 |     1060 | 2024-05-16 | B8             | L   | 0.982      | -            | -                | -                | -         |    -5.65 | AW, h1te, kAlash, sFade8, sm3t |
|           11 |     1112 | 2024-05-15 | Monte          | L   | 0.975      | -            | -                | -                | -         |    -3.63 | AW, h1te, kAlash, sFade8, sm3t |
|           10 |     1172 | 2024-05-14 | Rare Atom      | W   | 0.969      | -            | -                | -                | -         |     5.96 | AW, h1te, kAlash, sFade8, sm3t |
|            9 |     1183 | 2024-05-14 | Sangal         | W   | 0.967      | 0.435        | 0.216 (0.091)    | 0.884 (0.371)    | -         |    22.79 | AW, h1te, kAlash, sFade8, sm3t |
|            8 |     1199 | 2024-05-13 | Heimo          | W   | 0.962      | -            | -                | -                | -         |     8.60 | AW, h1te, kAlash, sFade8, sm3t |
|            7 |     1252 | 2024-05-11 | CYBERSHOKE     | W   | 0.949      | 0.143        | 0.050 (0.007)    | -                | -         |    12.24 | AW, h1te, kAlash, sFade8, sm3t |
|            6 |     1517 | 2024-04-28 | Alliance       | L   | 0.862      | -            | -                | -                | -         |   -11.91 | AW, h1te, kAlash, sFade8, sm3t |
|            5 |     1568 | 2024-04-26 | BLEED          | L   | 0.848      | -            | -                | -                | -         |    -1.73 | AW, h1te, kAlash, sFade8, sm3t |
|            4 |     1773 | 2024-04-18 | Apeks          | L   | 0.796      | -            | -                | -                | -         |    -4.98 | AW, h1te, kAlash, sFade8, sm3t |
|            3 |     1782 | 2024-04-18 | EYEBALLERS     | W   | 0.795      | 0.143        | -                | 0.653 (0.074)    | -         |    13.07 | AW, h1te, kAlash, sFade8, sm3t |
|            2 |     2968 | 2024-02-27 | kONO           | L   | 0.456      | -            | -                | -                | -         |    -8.16 | AW, h1te, kAlash, sFade8, sm3t |
|            1 |     2972 | 2024-02-27 | B8             | W   | 0.456      | 0.143        | 0.229 (0.015)    | 1.000 (0.065)    | -         |    11.89 | AW, h1te, kAlash, sFade8, sm3t |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,250.00)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
