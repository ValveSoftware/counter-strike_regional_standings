### Roster Details<br />
Team Name: DMS<br />
Roster: AW, h1te, kAlash, sFade8, sm3t<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [88](../standings_global.md)<br />
Regional Rank: [64]( ../standings_europe.md)<br />
Final Rank Value:  945.0<br />
<br />
Final Rank Value (945.0) = Starting Rank Value (898.2) + Head To Head Adjustments (46.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.302[<sup>1</sup>](#table2)
- Bounty Collected: 0.424[<sup>2</sup>](#table1)
- Opponent Network: 0.202[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.232<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 898.2
- 400 + ( ( 0.232 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 898.2


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
|           37 |       47 | 2024-07-16 | ALTERNATE aTTaX | W   | 1.000      | 0.435        | 0.050 (0.022)    | 0.644 (0.280)    | 0 (0.000) |    13.96 | AW, h1te, kAlash, sFade8, sm3t |
|           36 |      449 | 2024-06-12 | Verdant         | L   | 0.968      | -            | -                | -                | -         |   -18.84 | AW, h1te, kAlash, sFade8, sm3t |
|           35 |      474 | 2024-06-11 | Zero Tenacity   | L   | 0.961      | -            | -                | -                | -         |    -8.68 | AW, h1te, kAlash, sFade8, sm3t |
|           34 |      652 | 2024-06-07 | Zero Tenacity   | L   | 0.934      | -            | -                | -                | -         |    -8.88 | AW, h1te, kAlash, sFade8, sm3t |
|           33 |      753 | 2024-06-06 | CYBERSHOKE      | L   | 0.925      | -            | -                | -                | -         |   -19.98 | AW, h1te, kAlash, sFade8, sm3t |
|           32 |      853 | 2024-06-04 | Sampi           | L   | 0.912      | -            | -                | -                | -         |   -16.27 | AW, h1te, kAlash, sFade8, sm3t |
|           31 |      869 | 2024-06-03 | ARCRED          | L   | 0.907      | -            | -                | -                | -         |   -16.83 | AW, h1te, kAlash, sFade8, sm3t |
|           30 |      880 | 2024-06-02 | Zero Tenacity   | L   | 0.901      | -            | -                | -                | -         |    -9.15 | AW, h1te, kAlash, sFade8, sm3t |
|           29 |      890 | 2024-06-02 | fnatic          | W   | 0.899      | 0.143        | 0.300 (0.039)    | 0.632 (0.081)    | 0 (0.000) |    26.28 | AW, h1te, kAlash, sFade8, sm3t |
|           28 |      913 | 2024-06-01 | ENCE            | W   | 0.894      | 0.143        | 0.212 (0.027)    | 0.377 (0.048)    | 0 (0.000) |    24.83 | AW, h1te, kAlash, sFade8, sm3t |
|           27 |      923 | 2024-06-01 | Zero Tenacity   | L   | 0.893      | -            | -                | -                | -         |    -7.97 | AW, h1te, kAlash, sFade8, sm3t |
|           26 |      928 | 2024-06-01 | ENCE            | W   | 0.892      | 0.143        | 0.212 (0.027)    | -                | 0 (0.000) |    25.33 | AW, h1te, kAlash, sFade8, sm3t |
|           25 |      945 | 2024-05-31 | Spirit Academy  | W   | 0.888      | 0.372        | 0.020 (0.007)    | -                | 0 (0.000) |     7.65 | AW, h1te, kAlash, sFade8, sm3t |
|           24 |      981 | 2024-05-30 | Nemiga          | W   | 0.880      | 0.372        | 0.498 (0.163)    | 0.725 (0.238)    | 0 (0.000) |    23.30 | AW, h1te, kAlash, sFade8, sm3t |
|           23 |     1000 | 2024-05-29 | Verdant         | W   | 0.874      | 0.372        | -                | 0.316 (0.103)    | 0 (0.000) |    11.27 | AW, h1te, kAlash, sFade8, sm3t |
|           22 |     1071 | 2024-05-26 | GUN5            | L   | 0.852      | -            | -                | -                | -         |   -11.39 | AW, h1te, kAlash, sFade8, sm3t |
|           21 |     1100 | 2024-05-24 | VP.Prodigy      | L   | 0.840      | -            | -                | -                | -         |   -13.22 | AW, h1te, kAlash, sFade8, sm3t |
|           20 |     1109 | 2024-05-24 | BetBoom         | L   | 0.838      | -            | -                | -                | -         |    -1.07 | AW, h1te, kAlash, sFade8, sm3t |
|           19 |     1119 | 2024-05-23 | B8              | L   | 0.833      | -            | -                | -                | -         |    -5.00 | AW, h1te, kAlash, sFade8, sm3t |
|           18 |     1199 | 2024-05-21 | EYEBALLERS      | W   | 0.820      | 0.435        | -                | 0.619 (0.221)    | 0 (0.000) |    12.21 | AW, h1te, kAlash, sFade8, sm3t |
|           17 |     1202 | 2024-05-21 | MOUZ NXT        | W   | 0.820      | 0.435        | 0.150 (0.053)    | 1.000 (0.356)    | 0 (0.000) |    18.44 | AW, h1te, kAlash, sFade8, sm3t |
|           16 |     1257 | 2024-05-19 | Space           | L   | 0.807      | -            | -                | -                | -         |   -13.58 | AW, h1te, kAlash, sFade8, sm3t |
|           15 |     1289 | 2024-05-18 | 777             | W   | 0.800      | -            | -                | -                | 0 (0.000) |     7.29 | AW, h1te, kAlash, sFade8, sm3t |
|           14 |     1294 | 2024-05-18 | Sampi           | W   | 0.799      | 0.435        | 0.045 (0.015)    | 0.975 (0.339)    | -         |    14.49 | AW, h1te, kAlash, sFade8, sm3t |
|           13 |     1338 | 2024-05-17 | MOUZ NXT        | L   | 0.792      | -            | -                | -                | -         |    -6.47 | AW, h1te, kAlash, sFade8, sm3t |
|           12 |     1358 | 2024-05-16 | B8              | L   | 0.787      | -            | -                | -                | -         |    -4.99 | AW, h1te, kAlash, sFade8, sm3t |
|           11 |     1410 | 2024-05-15 | Monte           | L   | 0.780      | -            | -                | -                | -         |    -9.75 | AW, h1te, kAlash, sFade8, sm3t |
|           10 |     1470 | 2024-05-14 | Rare Atom       | W   | 0.774      | -            | -                | -                | -         |     5.15 | AW, h1te, kAlash, sFade8, sm3t |
|            9 |     1481 | 2024-05-14 | Sangal          | W   | 0.771      | 0.435        | 0.232 (0.078)    | 0.893 (0.299)    | -         |    18.36 | AW, h1te, kAlash, sFade8, sm3t |
|            8 |     1497 | 2024-05-13 | Heimo           | W   | 0.766      | -            | -                | -                | -         |     6.69 | AW, h1te, kAlash, sFade8, sm3t |
|            7 |     1550 | 2024-05-11 | CYBERSHOKE      | W   | 0.753      | -            | -                | -                | -         |    10.51 | AW, h1te, kAlash, sFade8, sm3t |
|            6 |     1815 | 2024-04-28 | Alliance        | L   | 0.666      | -            | -                | -                | -         |    -9.58 | AW, h1te, kAlash, sFade8, sm3t |
|            5 |     1866 | 2024-04-26 | BLEED           | L   | 0.652      | -            | -                | -                | -         |    -3.78 | AW, h1te, kAlash, sFade8, sm3t |
|            4 |     2071 | 2024-04-18 | Apeks           | L   | 0.600      | -            | -                | -                | -         |    -5.48 | AW, h1te, kAlash, sFade8, sm3t |
|            3 |     2080 | 2024-04-18 | EYEBALLERS      | W   | 0.600      | 0.143        | -                | 0.619 (0.053)    | -         |     9.82 | AW, h1te, kAlash, sFade8, sm3t |
|            2 |     3265 | 2024-02-27 | kONO            | L   | 0.261      | -            | -                | -                | -         |    -4.54 | AW, h1te, kAlash, sFade8, sm3t |
|            1 |     3269 | 2024-02-27 | B8              | W   | 0.260      | 0.143        | 0.246 (0.009)    | -                | -         |     6.67 | AW, h1te, kAlash, sFade8, sm3t |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,193.32)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
