### Roster Details<br />
Team Name: DMS<br />
Roster: AW, h1te, kAlash, sFade8, sm3t<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [89](../standings_global.md)<br />
Regional Rank: [63]( ../standings_europe.md)<br />
Final Rank Value:  929.0<br />
<br />
Final Rank Value (929.0) = Starting Rank Value (879.8) + Head To Head Adjustments (49.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.301[<sup>1</sup>](#table2)
- Bounty Collected: 0.425[<sup>2</sup>](#table1)
- Opponent Network: 0.183[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.228<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 879.8
- 400 + ( ( 0.228 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 879.8


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
|           36 |      285 | 2024-06-12 | Verdant        | L   | 1.000      | -            | -                | -                | -         |   -19.56 | AW, h1te, kAlash, sFade8, sm3t |
|           35 |      310 | 2024-06-11 | Zero Tenacity  | L   | 1.000      | -            | -                | -                | -         |    -9.00 | AW, h1te, kAlash, sFade8, sm3t |
|           34 |      488 | 2024-06-07 | Zero Tenacity  | L   | 0.974      | -            | -                | -                | -         |    -9.24 | AW, h1te, kAlash, sFade8, sm3t |
|           33 |      589 | 2024-06-06 | CYBERSHOKE     | L   | 0.965      | -            | -                | -                | -         |   -21.07 | AW, h1te, kAlash, sFade8, sm3t |
|           32 |      689 | 2024-06-04 | Slovakia       | L   | 0.951      | -            | -                | -                | -         |   -17.18 | AW, h1te, kAlash, sFade8, sm3t |
|           31 |      705 | 2024-06-03 | ARCRED         | L   | 0.946      | -            | -                | -                | -         |   -17.81 | AW, h1te, kAlash, sFade8, sm3t |
|           30 |      716 | 2024-06-02 | Zero Tenacity  | L   | 0.941      | -            | -                | -                | -         |    -9.53 | AW, h1te, kAlash, sFade8, sm3t |
|           29 |      726 | 2024-06-02 | fnatic         | W   | 0.939      | 0.143        | 0.298 (0.040)    | 0.623 (0.084)    | 0 (0.000) |    27.37 | AW, h1te, kAlash, sFade8, sm3t |
|           28 |      749 | 2024-06-01 | ENCE           | W   | 0.934      | 0.143        | 0.216 (0.029)    | 0.399 (0.053)    | 0 (0.000) |    26.31 | AW, h1te, kAlash, sFade8, sm3t |
|           27 |      759 | 2024-06-01 | Zero Tenacity  | L   | 0.933      | -            | -                | -                | -         |    -8.23 | AW, h1te, kAlash, sFade8, sm3t |
|           26 |      764 | 2024-06-01 | ENCE           | W   | 0.932      | 0.143        | 0.216 (0.029)    | 0.399 (0.053)    | 0 (0.000) |    26.82 | AW, h1te, kAlash, sFade8, sm3t |
|           25 |      781 | 2024-05-31 | Spirit Academy | W   | 0.927      | 0.372        | 0.019 (0.007)    | -                | 0 (0.000) |     7.76 | AW, h1te, kAlash, sFade8, sm3t |
|           24 |      817 | 2024-05-30 | Nemiga         | W   | 0.919      | 0.372        | 0.498 (0.170)    | 0.678 (0.232)    | 0 (0.000) |    24.57 | AW, h1te, kAlash, sFade8, sm3t |
|           23 |      836 | 2024-05-29 | Verdant        | W   | 0.914      | 0.372        | -                | 0.327 (0.111)    | 0 (0.000) |    11.69 | AW, h1te, kAlash, sFade8, sm3t |
|           22 |      907 | 2024-05-26 | GUN5           | L   | 0.891      | -            | -                | -                | -         |   -11.94 | AW, h1te, kAlash, sFade8, sm3t |
|           21 |      936 | 2024-05-24 | VP.Prodigy     | L   | 0.880      | -            | -                | -                | -         |   -13.78 | AW, h1te, kAlash, sFade8, sm3t |
|           20 |      945 | 2024-05-24 | BetBoom        | L   | 0.878      | -            | -                | -                | -         |    -1.07 | AW, h1te, kAlash, sFade8, sm3t |
|           19 |      955 | 2024-05-23 | B8             | L   | 0.872      | -            | -                | -                | -         |    -4.84 | AW, h1te, kAlash, sFade8, sm3t |
|           18 |     1035 | 2024-05-21 | EYEBALLERS     | W   | 0.860      | 0.435        | -                | 0.646 (0.241)    | 0 (0.000) |    12.89 | AW, h1te, kAlash, sFade8, sm3t |
|           17 |     1038 | 2024-05-21 | MOUZ NXT       | W   | 0.859      | 0.435        | 0.152 (0.057)    | 1.000 (0.373)    | 0 (0.000) |    19.67 | AW, h1te, kAlash, sFade8, sm3t |
|           16 |     1093 | 2024-05-19 | Space          | L   | 0.847      | -            | -                | -                | -         |   -14.60 | AW, h1te, kAlash, sFade8, sm3t |
|           15 |     1125 | 2024-05-18 | 777            | W   | 0.840      | -            | -                | -                | 0 (0.000) |     7.62 | AW, h1te, kAlash, sFade8, sm3t |
|           14 |     1130 | 2024-05-18 | Slovakia       | W   | 0.839      | 0.435        | 0.045 (0.016)    | 0.891 (0.325)    | 0 (0.000) |    15.38 | AW, h1te, kAlash, sFade8, sm3t |
|           13 |     1174 | 2024-05-17 | MOUZ NXT       | L   | 0.831      | -            | -                | -                | -         |    -6.46 | AW, h1te, kAlash, sFade8, sm3t |
|           12 |     1194 | 2024-05-16 | B8             | L   | 0.827      | -            | -                | -                | -         |    -4.81 | AW, h1te, kAlash, sFade8, sm3t |
|           11 |     1246 | 2024-05-15 | Monte          | L   | 0.820      | -            | -                | -                | -         |    -3.31 | AW, h1te, kAlash, sFade8, sm3t |
|           10 |     1306 | 2024-05-14 | Rare Atom      | W   | 0.813      | -            | -                | -                | -         |     5.65 | AW, h1te, kAlash, sFade8, sm3t |
|            9 |     1317 | 2024-05-14 | Sangal         | W   | 0.811      | 0.435        | 0.231 (0.081)    | 0.853 (0.301)    | -         |    19.68 | AW, h1te, kAlash, sFade8, sm3t |
|            8 |     1333 | 2024-05-13 | Heimo          | W   | 0.806      | -            | -                | -                | -         |     7.35 | AW, h1te, kAlash, sFade8, sm3t |
|            7 |     1386 | 2024-05-11 | CYBERSHOKE     | W   | 0.793      | 0.143        | 0.058 (0.007)    | -                | -         |    11.23 | AW, h1te, kAlash, sFade8, sm3t |
|            6 |     1651 | 2024-04-28 | Alliance       | L   | 0.706      | -            | -                | -                | -         |    -9.58 | AW, h1te, kAlash, sFade8, sm3t |
|            5 |     1702 | 2024-04-26 | BLEED          | L   | 0.692      | -            | -                | -                | -         |    -1.37 | AW, h1te, kAlash, sFade8, sm3t |
|            4 |     1907 | 2024-04-18 | Apeks          | L   | 0.640      | -            | -                | -                | -         |    -5.02 | AW, h1te, kAlash, sFade8, sm3t |
|            3 |     1916 | 2024-04-18 | EYEBALLERS     | W   | 0.640      | 0.143        | -                | 0.646 (0.059)    | -         |    10.85 | AW, h1te, kAlash, sFade8, sm3t |
|            2 |     3101 | 2024-02-27 | kONO           | L   | 0.301      | -            | -                | -                | -         |    -5.10 | AW, h1te, kAlash, sFade8, sm3t |
|            1 |     3105 | 2024-02-27 | B8             | W   | 0.300      | 0.143        | 0.242 (0.010)    | -                | -         |     7.85 | AW, h1te, kAlash, sFade8, sm3t |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,242.83)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
