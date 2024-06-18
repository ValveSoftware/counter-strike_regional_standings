### Roster Details<br />
Team Name: Metizport<br />
Roster: abdi, adamb, Jackinho, nilo, Plopski<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [58](../standings_global.md)<br />
Regional Rank: [42]( ../standings_europe.md)<br />
Final Rank Value:  1067.8<br />
<br />
Final Rank Value (1067.8) = Starting Rank Value (969.4) + Head To Head Adjustments (98.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.468[<sup>1</sup>](#table2)
- Bounty Collected: 0.448[<sup>2</sup>](#table1)
- Opponent Network: 0.206[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.280<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 969.4
- 400 + ( ( 0.280 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 969.4


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
|           69 |      824 | 2024-05-23 | Space             | L   | 1.000      | -            | -                | -                | -         |   -22.55 | abdi, adamb, Jackinho, nilo, Plopski |
|           68 |      929 | 2024-05-20 | Zero Tenacity     | L   | 1.000      | -            | -                | -                | -         |   -15.23 | adamb, Jackinho, nilo, Plopski, ztr  |
|           67 |      983 | 2024-05-18 | Ninjas in Pyjamas | W   | 0.996      | 0.500        | 0.315 (0.157)    | 0.497 (0.248)    | 0 (0.000) |    29.75 | adamb, Jackinho, nilo, Plopski, ztr  |
|           66 |     1070 | 2024-05-16 | Rare Atom         | W   | 0.981      | 0.500        | -                | 0.218 (0.107)    | 0 (0.000) |     2.84 | adamb, Jackinho, nilo, Plopski, ztr  |
|           65 |     1254 | 2024-05-11 | BetBoom           | L   | 0.948      | -            | -                | -                | -         |    -2.57 | adamb, Jackinho, nilo, Plopski, ztr  |
|           64 |     1269 | 2024-05-10 | EYEBALLERS        | W   | 0.942      | 0.435        | -                | 0.653 (0.267)    | 0 (0.000) |    10.45 | adamb, Jackinho, nilo, Plopski, ztr  |
|           63 |     1394 | 2024-05-04 | AMKAL             | L   | 0.901      | -            | -                | -                | -         |    -7.76 | adamb, Jackinho, nilo, susp, ztr     |
|           62 |     1409 | 2024-05-03 | Zero Tenacity     | W   | 0.894      | 0.435        | 0.153 (0.060)    | 1.000 (0.389)    | 0 (0.000) |    14.47 | adamb, Jackinho, nilo, susp, ztr     |
|           61 |     1429 | 2024-05-02 | Sangal            | W   | 0.888      | 0.435        | 0.216 (0.083)    | 0.884 (0.341)    | 0 (0.000) |    16.85 | adamb, Jackinho, nilo, susp, ztr     |
|           60 |     1587 | 2024-04-25 | Nexus             | L   | 0.843      | -            | -                | -                | -         |   -19.26 | adamb, Jackinho, nilo, susp, ztr     |
|           59 |     1631 | 2024-04-23 | Alliance          | W   | 0.828      | 0.384        | -                | 0.432 (0.138)    | 0 (0.000) |     8.80 | adamb, Jackinho, nilo, p1ke, susp    |
|           58 |     1736 | 2024-04-19 | FURIA             | L   | 0.802      | -            | -                | -                | -         |    -1.21 | adamb, Jackinho, Plopski, susp, ztr  |
|           57 |     1774 | 2024-04-18 | Imperial          | L   | 0.796      | -            | -                | -                | -         |    -1.72 | adamb, Jackinho, Plopski, susp, ztr  |
|           56 |     2056 | 2024-04-09 | ex-Guild Eagles   | L   | 0.735      | -            | -                | -                | -         |   -15.85 | adamb, Jackinho, nilo, susp, ztr     |
|           55 |     2072 | 2024-04-08 | Aurora            | L   | 0.730      | -            | -                | -                | -         |    -1.08 | adamb, Jackinho, nilo, susp, ztr     |
|           54 |     2084 | 2024-04-08 | 9 Pandas          | L   | 0.728      | -            | -                | -                | -         |    -9.05 | adamb, Jackinho, nilo, susp, ztr     |
|           53 |     2109 | 2024-04-07 | EYEBALLERS        | W   | 0.722      | 0.330        | -                | 0.653 (0.156)    | 0 (0.000) |     7.09 | adamb, Jackinho, nilo, susp, ztr     |
|           52 |     2118 | 2024-04-07 | Johnny Speeds     | W   | 0.720      | 0.330        | 0.118 (0.028)    | 0.507 (0.121)    | 0 (0.000) |    17.23 | adamb, Jackinho, nilo, susp, ztr     |
|           51 |     2134 | 2024-04-06 | Young Gods        | W   | 0.714      | -            | -                | -                | 0 (0.000) |     3.12 | adamb, Jackinho, nilo, susp, ztr     |
|           50 |     2186 | 2024-04-04 | Ninjas in Pyjamas | L   | 0.702      | -            | -                | -                | -         |    -0.46 | adamb, Jackinho, nilo, susp, ztr     |
|           49 |     2212 | 2024-04-03 | Monte             | W   | 0.696      | 0.143        | 0.189 (0.019)    | -                | 0 (0.000) |    17.07 | adamb, Jackinho, nilo, susp, ztr     |
|           48 |     2225 | 2024-04-03 | FAVBET            | W   | 0.695      | -            | -                | -                | -         |     5.48 | adamb, Jackinho, nilo, susp, ztr     |
|           47 |     2259 | 2024-04-02 | B8                | W   | 0.689      | 0.143        | 0.229 (0.023)    | 1.000 (0.098)    | -         |    14.72 | adamb, Jackinho, nilo, susp, ztr     |
|           46 |     2265 | 2024-04-02 | Aurora            | L   | 0.688      | -            | -                | -                | -         |    -0.81 | adamb, Jackinho, nilo, susp, ztr     |
|           45 |     2281 | 2024-04-01 | PARIVISION        | L   | 0.682      | -            | -                | -                | -         |   -10.64 | adamb, Jackinho, nilo, susp, ztr     |
|           44 |     2349 | 2024-03-27 | Aurora            | L   | 0.650      | -            | -                | -                | -         |    -0.73 | adamb, Jackinho, nilo, susp, ztr     |
|           43 |     2355 | 2024-03-27 | NAVI Junior       | W   | 0.649      | -            | -                | -                | -         |     2.94 | adamb, Jackinho, nilo, susp, ztr     |
|           42 |     2558 | 2024-03-15 | kONO              | L   | 0.569      | -            | -                | -                | -         |   -13.55 | adamb, Jackinho, nilo, susp, ztr     |
|           41 |     2595 | 2024-03-14 | ALTERNATE aTTaX   | L   | 0.562      | -            | -                | -                | -         |   -10.20 | adamb, Jackinho, nilo, susp, ztr     |
|           40 |     2629 | 2024-03-13 | HEROIC            | L   | 0.555      | -            | -                | -                | -         |    -0.32 | adamb, Jackinho, nilo, susp, ztr     |
|           39 |     2652 | 2024-03-12 | B8                | W   | 0.550      | -            | -                | -                | -         |    11.84 | adamb, Jackinho, nilo, susp, ztr     |
|           38 |     2660 | 2024-03-12 | Apeks             | W   | 0.549      | -            | -                | -                | -         |    11.23 | adamb, Jackinho, nilo, susp, ztr     |
|           37 |     2670 | 2024-03-11 | ex-Preasy         | W   | 0.543      | -            | -                | -                | -         |     7.41 | adamb, Jackinho, nilo, susp, ztr     |
|           36 |     2684 | 2024-03-11 | ENCE              | L   | 0.542      | -            | -                | -                | -         |    -0.79 | adamb, Jackinho, nilo, susp, ztr     |
|           35 |     2692 | 2024-03-10 | Spirit            | L   | 0.537      | -            | -                | -                | -         |    -0.07 | adamb, Jackinho, nilo, susp, ztr     |
|           34 |     2719 | 2024-03-09 | Monte             | W   | 0.529      | 0.535        | 0.189 (0.054)    | 0.674 (0.191)    | -         |    13.95 | adamb, Jackinho, nilo, susp, ztr     |
|           33 |     2726 | 2024-03-09 | EYEBALLERS        | L   | 0.528      | -            | -                | -                | -         |   -10.15 | adamb, Jackinho, nilo, susp, ztr     |
|           32 |     2732 | 2024-03-09 | Lemondogs         | W   | 0.528      | -            | -                | -                | -         |     0.51 | adamb, Jackinho, nilo, susp, ztr     |
|           31 |     2750 | 2024-03-08 | Secret            | W   | 0.521      | -            | -                | -                | -         |     1.31 | adamb, Jackinho, nilo, susp, ztr     |
|           30 |     2791 | 2024-03-06 | Falcons           | W   | 0.510      | 0.535        | 0.381 (0.104)    | -                | -         |    15.54 | adamb, Jackinho, nilo, susp, ztr     |
|           29 |     2871 | 2024-03-03 | The Chosen Few    | W   | 0.490      | -            | -                | -                | -         |     2.62 | adamb, Jackinho, nilo, susp, ztr     |
|           28 |     2880 | 2024-03-03 | ILIN              | W   | 0.489      | -            | -                | -                | -         |     0.98 | adamb, Jackinho, nilo, susp, ztr     |
|           27 |     2884 | 2024-03-03 | RUSH B            | W   | 0.489      | -            | -                | -                | -         |     4.62 | adamb, Jackinho, nilo, susp, ztr     |
|           26 |     2893 | 2024-03-03 | ECLOT             | L   | 0.488      | -            | -                | -                | -         |    -3.42 | adamb, Jackinho, nilo, susp, ztr     |
|           25 |     2939 | 2024-02-29 | Endpoint          | W   | 0.469      | -            | -                | -                | -         |     5.75 | adamb, Jackinho, nilo, susp, ztr     |
|           24 |     2976 | 2024-02-27 | ex-Guild Eagles   | L   | 0.456      | -            | -                | -                | -         |    -8.06 | adamb, Jackinho, nilo, susp, ztr     |
|           23 |     3348 | 2024-02-11 | Apeks             | W   | 0.350      | -            | -                | -                | -         |     7.52 | adamb, Jackinho, nilo, susp, ztr     |
|           22 |     3353 | 2024-02-11 | ex-Sprout         | W   | 0.348      | -            | -                | -                | -         |     1.09 | adamb, Jackinho, nilo, susp, ztr     |
|           21 |     3361 | 2024-02-10 | FURIA             | W   | 0.342      | -            | -                | -                | -         |    10.51 | adamb, Jackinho, nilo, susp, ztr     |
|           20 |     3364 | 2024-02-10 | Apeks             | L   | 0.342      | -            | -                | -                | -         |    -3.40 | adamb, Jackinho, nilo, susp, ztr     |
|           19 |     3365 | 2024-02-10 | FURIA             | W   | 0.341      | -            | -                | -                | -         |    10.51 | adamb, Jackinho, nilo, susp, ztr     |
|           18 |     3400 | 2024-02-07 | ex-Sprout         | W   | 0.322      | -            | -                | -                | -         |     1.01 | adamb, Jackinho, nilo, susp, ztr     |
|           17 |     3408 | 2024-02-06 | Into the Breach   | L   | 0.315      | -            | -                | -                | -         |    -8.07 | adamb, Jackinho, nilo, susp, ztr     |
|           16 |     3421 | 2024-02-05 | TSM               | L   | 0.308      | -            | -                | -                | -         |    -7.72 | adamb, Jackinho, nilo, susp, ztr     |
|           15 |     3428 | 2024-02-04 | 500               | L   | 0.303      | -            | -                | -                | -         |    -7.61 | adamb, Jackinho, nilo, susp, ztr     |
|           14 |     3434 | 2024-02-04 | TMVG              | W   | 0.302      | -            | -                | -                | -         |     0.69 | adamb, Jackinho, nilo, susp, ztr     |
|           13 |     3445 | 2024-02-04 | DUSTY             | W   | 0.301      | -            | -                | -                | -         |     1.43 | adamb, Jackinho, nilo, susp, ztr     |
|           12 |     3475 | 2024-02-03 | Sangal            | W   | 0.294      | 0.371        | 0.216 (0.024)    | -                | -         |     6.83 | adamb, Jackinho, nilo, susp, ztr     |
|           11 |     3487 | 2024-02-02 | EYEBALLERS        | W   | 0.290      | -            | -                | -                | -         |     3.94 | adamb, Jackinho, nilo, susp, ztr     |
|           10 |     3489 | 2024-02-02 | ex-Preasy         | W   | 0.289      | -            | -                | -                | -         |     3.62 | adamb, Jackinho, nilo, susp, ztr     |
|            9 |     3526 | 2024-02-01 | Sampi             | W   | 0.282      | -            | -                | -                | -         |     3.96 | adamb, Jackinho, nilo, susp, ztr     |
|            8 |     3577 | 2024-01-29 | BLEED             | W   | 0.261      | 0.371        | 0.347 (0.034)    | -                | -         |     7.46 | adamb, Jackinho, nilo, susp, ztr     |
|            7 |     3638 | 2024-01-25 | BIG Academy       | W   | 0.234      | -            | -                | -                | -         |     0.30 | adamb, Jackinho, nilo, susp, ztr     |
|            6 |     4236 | 2024-01-09 | IKLA              | L   | 0.129      | -            | -                | -                | -         |    -3.73 | adamb, Jackinho, nilo, susp, ztr     |
|            5 |     4256 | 2023-12-30 | The Witchers      | L   | 0.062      | -            | -                | -                | -         |    -1.66 | adamb, Jackinho, nilo, susp, ztr     |
|            4 |     4258 | 2023-12-30 | VP.Prodigy        | W   | 0.060      | -            | -                | -                | -         |     0.77 | adamb, Jackinho, nilo, susp, ztr     |
|            3 |     4260 | 2023-12-29 | Aurora Young Blud | W   | 0.056      | -            | -                | -                | -         |     0.40 | adamb, Jackinho, nilo, susp, ztr     |
|            2 |     4261 | 2023-12-29 | esmagaB           | W   | 0.055      | -            | -                | -                | -         |     0.41 | adamb, Jackinho, nilo, susp, ztr     |
|            1 |     4267 | 2023-12-27 | Aurora Young Blud | L   | 0.042      | -            | -                | -                | -         |    -1.02 | adamb, Jackinho, nilo, susp, ztr     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,907.37)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-05-12 |      0.956 | $2,000.00      | $1,911.94       |
| 2024-05-04 |      0.902 | $5,000.00      | $4,511.19       |
| 2024-04-20 |      0.810 | $5,000.00      | $4,052.37       |
| 2024-04-07 |      0.722 | $6,110.00      | $4,414.18       |
| 2024-03-10 |      0.537 | $12,500.00     | $6,708.32       |
| 2023-12-30 |      0.062 | $5,000.00      | $309.38         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
