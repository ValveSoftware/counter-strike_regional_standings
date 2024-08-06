### Roster Details<br />
Team Name: Verdant<br />
Roster: arTisT, Diviiii, Extinct, Girafffe, Vacancy<br />
Global Rank: [109](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [78]( ../standings_europe.md)<br />
<br />
Final Rank Value:  841.5<br />
<br />
Final Rank Value (841.5) = Starting Rank Value (945.1) + Head To Head Adjustments (-103.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.353[<sup>1</sup>](#table2)
- Bounty Collected: 0.337[<sup>2</sup>](#table1)
- Opponent Network: 0.098[<sup>2</sup>](#table1)
- LAN Wins: 0.272[<sup>2</sup>](#table1)

The average of these factors is 0.265<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 945.1
- 400 + ( ( 0.265 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 945.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                      |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           35 |       15 | 2024-08-06 | Enterprise        | L   | 1.000      | -            | -                | -                | -         |   -11.14 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           34 |      551 | 2024-07-21 | Invictum          | W   | 1.000      | 0.296        | 0.003 (0.001)    | 0.038 (0.011)    | 1 (1.000) |     9.76 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           33 |      579 | 2024-07-20 | Invictum          | W   | 1.000      | 0.296        | 0.003 (0.001)    | 0.038 (0.011)    | 1 (1.000) |     9.94 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           32 |      730 | 2024-07-17 | PERA              | L   | 1.000      | -            | -                | -                | -         |    -9.06 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           31 |      894 | 2024-07-12 | Revenant          | L   | 1.000      | -            | -                | -                | -         |   -14.76 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           30 |      975 | 2024-07-08 | Rebels            | L   | 1.000      | -            | -                | -                | -         |    -9.91 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           29 |     1070 | 2024-06-16 | UNiTY             | L   | 0.858      | -            | -                | -                | -         |   -10.05 | arTisT, Diviiii, Ducky, Extinct, Vacancy    |
|           28 |     1081 | 2024-06-15 | Revenant          | L   | 0.854      | -            | -                | -                | -         |   -16.11 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           27 |     1121 | 2024-06-14 | Aurora Young Blud | L   | 0.847      | -            | -                | -                | -         |   -12.60 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           26 |     1160 | 2024-06-13 | Nemiga            | L   | 0.840      | -            | -                | -                | -         |    -5.28 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           25 |     1166 | 2024-06-13 | Revenant          | W   | 0.840      | 0.143        | 0.027 (0.003)    | 0.259 (0.031)    | 0 (0.000) |     9.53 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           24 |     1187 | 2024-06-12 | DMS               | W   | 0.834      | 0.143        | 0.003 (0.000)    | 0.428 (0.051)    | 0 (0.000) |    14.45 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           23 |     1211 | 2024-06-11 | 9INE              | L   | 0.827      | -            | -                | -                | -         |   -23.19 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           22 |     1405 | 2024-06-07 | B8                | L   | 0.800      | -            | -                | -                | -         |    -5.49 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           21 |     1415 | 2024-06-07 | Aurora            | L   | 0.799      | -            | -                | -                | -         |    -0.79 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           20 |     1422 | 2024-06-07 | B8                | W   | 0.799      | 0.143        | 0.170 (0.019)    | 0.912 (0.104)    | 0 (0.000) |    19.97 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           19 |     1459 | 2024-06-06 | Aurora Young Blud | L   | 0.794      | -            | -                | -                | -         |   -12.38 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           18 |     1518 | 2024-06-05 | Enterprise        | W   | 0.787      | 0.372        | 0.039 (0.012)    | 0.641 (0.188)    | 0 (0.000) |    13.30 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           17 |     1566 | 2024-06-04 | K10               | L   | 0.781      | -            | -                | -                | -         |   -18.95 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           16 |     1598 | 2024-06-03 | LEON              | W   | 0.774      | 0.372        | 0.007 (0.002)    | 0.124 (0.036)    | 0 (0.000) |     5.55 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           15 |     1650 | 2024-06-01 | V1dar             | W   | 0.760      | 0.372        | -                | 0.054 (0.015)    | 0 (0.000) |     2.78 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           14 |     1738 | 2024-05-29 | DMS               | L   | 0.741      | -            | -                | -                | -         |   -11.76 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           13 |     1944 | 2024-05-21 | Zero Tenacity     | L   | 0.685      | -            | -                | -                | -         |    -6.00 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           12 |     1980 | 2024-05-20 | Sampi             | W   | 0.679      | 0.435        | 0.027 (0.008)    | 1.000 (0.295)    | 0 (0.000) |    10.31 | arTisT, Diviiii, Extinct, Girafffe, Vacancy |
|           11 |     2043 | 2024-05-18 | Space             | L   | 0.664      | -            | -                | -                | -         |   -12.94 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|           10 |     2156 | 2024-05-15 | Sangal            | W   | 0.646      | 0.435        | 0.219 (0.061)    | 0.846 (0.237)    | -         |    15.02 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            9 |     2211 | 2024-05-14 | B8                | L   | 0.639      | -            | -                | -                | -         |    -5.05 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            8 |     2237 | 2024-05-13 | kONO              | L   | 0.632      | -            | -                | -                | -         |   -12.56 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            7 |     2250 | 2024-05-12 | Johnny Speeds     | L   | 0.627      | -            | -                | -                | -         |    -2.49 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            6 |     2261 | 2024-05-12 | Zero Tenacity     | L   | 0.626      | -            | -                | -                | -         |    -6.82 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            5 |     2281 | 2024-05-11 | V1dar             | W   | 0.620      | -            | -                | -                | -         |     1.81 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            4 |     2309 | 2024-05-10 | ECLOT             | L   | 0.612      | -            | -                | -                | -         |    -2.81 | arTisT, Diviiii, Ducky, Girafffe, Vacancy   |
|            3 |     3320 | 2024-04-01 | Reason            | W   | 0.352      | 0.301        | 0.002 (0.000)    | -                | 1 (0.352) |     1.06 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |
|            2 |     3394 | 2024-03-27 | Ninjas in Pyjamas | L   | 0.320      | -            | -                | -                | -         |    -0.15 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |
|            1 |     3518 | 2024-03-19 | The Neighbours    | L   | 0.267      | -            | -                | -                | -         |    -6.80 | arTisT, Ducky, Girafffe, Vacancy, Zax1e     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,700.42)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-21 |      1.000 | $2,259.00      | $2,259.00       |
| 2024-06-10 |      0.821 | $750.00        | $615.73         |
| 2024-05-13 |      0.631 | $1,000.00      | $631.42         |
| 2024-04-01 |      0.352 | $3,153.00      | $1,109.47       |
| 2024-03-19 |      0.268 | $317.00        | $84.80          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
