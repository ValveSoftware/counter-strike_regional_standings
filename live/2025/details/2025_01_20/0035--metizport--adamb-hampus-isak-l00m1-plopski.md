### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, hampus, isak, L00m1, Plopski<br />
Global Rank: [35](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [25]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  1180.8<br />
<br />
Final Rank Value (1180.8) = Starting Rank Value (1366.5) + Head To Head Adjustments (-185.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.575[<sup>1</sup>](#table2)
- Bounty Collected: 0.397[<sup>2</sup>](#table1)
- Opponent Network: 0.233[<sup>2</sup>](#table1)
- LAN Wins: 0.741[<sup>2</sup>](#table1)

The average of these factors is 0.487<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1366.5
- 400 + ( ( 0.487 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 1366.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                              |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           49 |       16 | 2025-01-15 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -0.94 | adamb, hampus, isak, L00m1, Plopski |
|           48 |      101 | 2024-12-22 | PORTUGAL          | L   | 1.000      | -            | -                | -                | -         |   -27.72 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           47 |      105 | 2024-12-22 | Zero Tenacity     | W   | 1.000      | 0.387        | 0.083 (0.032)    | 0.567 (0.220)    | 0 (0.000) |     8.57 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           46 |      218 | 2024-12-14 | 9INE              | L   | 0.958      | -            | -                | -                | -         |   -23.79 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           45 |      245 | 2024-12-13 | Monte             | W   | 0.951      | 0.435        | 0.078 (0.032)    | 0.572 (0.236)    | 0 (0.000) |     9.70 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           44 |      274 | 2024-12-11 | Insilio           | W   | 0.938      | 0.435        | -                | 0.542 (0.221)    | -         |     2.17 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           43 |      287 | 2024-12-10 | Aurora Young Blud | L   | 0.931      | -            | -                | -                | -         |   -23.59 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           42 |      316 | 2024-12-08 | FLuffy Gangsters  | W   | 0.917      | 0.435        | -                | 0.592 (0.236)    | -         |     2.11 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           41 |      390 | 2024-12-05 | Fire Flux         | W   | 0.898      | 0.435        | -                | 0.635 (0.248)    | -         |     3.40 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           40 |      444 | 2024-12-03 | Into the Breach   | L   | 0.884      | -            | -                | -                | -         |   -23.30 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           39 |      745 | 2024-11-17 | Partizan          | L   | 0.778      | -            | -                | -                | -         |   -14.56 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           38 |      750 | 2024-11-17 | Nexus             | L   | 0.777      | -            | -                | -                | -         |   -11.20 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           37 |      776 | 2024-11-16 | The Huns          | W   | 0.771      | 0.617        | 0.056 (0.027)    | 0.359 (0.171)    | 1 (0.771) |     4.06 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           36 |      805 | 2024-11-15 | Canada            | W   | 0.764      | -            | -                | -                | 1 (0.764) |     0.60 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           35 |      811 | 2024-11-15 | Norway            | W   | 0.764      | -            | -                | -                | 1 (0.764) |     0.83 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           34 |      823 | 2024-11-14 | los kogutos       | W   | 0.759      | 0.617        | 0.071 (0.033)    | 0.836 (0.392)    | 1 (0.759) |     4.49 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           33 |      869 | 2024-11-13 | Turkey            | L   | 0.751      | -            | -                | -                | -         |   -22.92 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           32 |      876 | 2024-11-13 | Mindfreak         | W   | 0.751      | -            | -                | -                | 1 (0.751) |     0.93 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           31 |      972 | 2024-11-09 | Ninjas in Pyjamas | W   | 0.726      | 0.432        | 0.078 (0.024)    | -                | 1 (0.726) |     5.19 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           30 |      991 | 2024-11-08 | Johnny Speeds     | W   | 0.720      | 0.432        | 0.108 (0.034)    | 0.764 (0.238)    | 1 (0.720) |     5.10 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           29 |     1007 | 2024-11-07 | Kappa Bar         | W   | 0.714      | -            | -                | -                | 1 (0.714) |     1.37 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           28 |     1149 | 2024-10-31 | Johnny Speeds     | L   | 0.666      | -            | -                | -                | -         |   -16.53 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           27 |     1168 | 2024-10-30 | ECSTATIC          | W   | 0.659      | 0.333        | 0.079 (0.017)    | 1.000 (0.220)    | -         |     3.19 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           26 |     1173 | 2024-10-30 | KOI               | W   | 0.658      | -            | -                | -                | -         |     2.25 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           25 |     1520 | 2024-10-12 | Aurora            | L   | 0.538      | -            | -                | -                | -         |   -14.70 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           24 |     1544 | 2024-10-10 | fnatic            | W   | 0.524      | 0.435        | 0.180 (0.041)    | -                | -         |     4.54 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           23 |     1621 | 2024-10-08 | ALTERNATE aTTaX   | W   | 0.510      | 0.435        | -                | 0.680 (0.151)    | -         |     2.78 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           22 |     1647 | 2024-10-07 | Monte             | L   | 0.504      | -            | -                | -                | -         |   -12.90 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           21 |     1728 | 2024-10-04 | CYBERSHOKE        | W   | 0.486      | -            | -                | -                | -         |     1.14 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           20 |     1773 | 2024-10-03 | Zero Tenacity     | L   | 0.478      | -            | -                | -                | -         |   -12.08 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           19 |     1850 | 2024-10-01 | G2 Ares           | W   | 0.466      | -            | -                | -                | -         |     0.25 | adamb, L00m1, nilo, Plopski, SHiNE  |
|           18 |     2187 | 2024-09-23 | Into the Breach   | L   | 0.410      | -            | -                | -                | -         |   -11.80 | adamb, L00m1, nilo, Plopski, Sapec  |
|           17 |     2375 | 2024-09-16 | 9INE              | W   | 0.364      | 0.384        | 0.125 (0.018)    | -                | -         |     1.43 | adamb, L00m1, nilo, Plopski, Sapec  |
|           16 |     2531 | 2024-09-11 | Zero Tenacity     | L   | 0.331      | -            | -                | -                | -         |    -8.67 | adamb, L00m1, nilo, Plopski, Sapec  |
|           15 |     2585 | 2024-09-09 | Zero Tenacity     | L   | 0.318      | -            | -                | -                | -         |    -8.44 | adamb, L00m1, nilo, Plopski, Sapec  |
|           14 |     2731 | 2024-09-04 | Sampi             | W   | 0.285      | -            | -                | -                | -         |     1.04 | adamb, L00m1, nilo, Plopski, Sapec  |
|           13 |     2793 | 2024-09-02 | FAVBET            | W   | 0.271      | -            | -                | -                | -         |     0.70 | adamb, L00m1, nilo, Plopski, Sapec  |
|           12 |     2945 | 2024-08-28 | Nemiga            | W   | 0.237      | 0.384        | 0.504 (0.046)    | -                | -         |     2.88 | adamb, L00m1, nilo, Plopski, Sapec  |
|           11 |     3010 | 2024-08-27 | ex-Enterprise     | W   | 0.230      | -            | -                | -                | -         |     0.46 | adamb, L00m1, nilo, Plopski, Sapec  |
|           10 |     3190 | 2024-08-22 | Complexity        | L   | 0.199      | -            | -                | -                | -         |    -3.31 | adamb, L00m1, nilo, Plopski, Sapec  |
|            9 |     3261 | 2024-08-21 | 9INE              | L   | 0.191      | -            | -                | -                | -         |    -5.31 | adamb, L00m1, nilo, Plopski, Sapec  |
|            8 |     3310 | 2024-08-20 | TSM               | L   | 0.183      | -            | -                | -                | -         |    -5.40 | adamb, L00m1, nilo, Plopski, Sapec  |
|            7 |     3327 | 2024-08-19 | Sashi             | L   | 0.179      | -            | -                | -                | -         |    -4.94 | adamb, L00m1, nilo, Plopski, Sapec  |
|            6 |     3443 | 2024-08-15 | PARIVISION        | L   | 0.150      | -            | -                | -                | -         |    -4.47 | adamb, L00m1, nilo, Plopski, Sapec  |
|            5 |     3544 | 2024-08-12 | Sampi             | W   | 0.131      | -            | -                | -                | -         |     0.44 | adamb, L00m1, nilo, Plopski, Sapec  |
|            4 |     3645 | 2024-08-08 | Into the Breach   | W   | 0.104      | -            | -                | -                | -         |     0.20 | adamb, L00m1, nilo, Plopski, Sapec  |
|            3 |     3674 | 2024-08-07 | Johnny Speeds     | W   | 0.099      | -            | -                | -                | -         |     0.51 | adamb, L00m1, nilo, Plopski, Sapec  |
|            2 |     3683 | 2024-08-07 | TSM               | W   | 0.098      | -            | -                | -                | -         |     0.18 | adamb, L00m1, nilo, Plopski, Sapec  |
|            1 |     3895 | 2024-08-01 | ALTERNATE aTTaX   | W   | 0.059      | -            | -                | -                | -         |     0.38 | adamb, L00m1, nilo, Plopski, Sapec  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($40,344.43)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.18) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-22 |      1.000 | $6,557.00      | $6,557.00       |
| 2024-12-15 |      0.965 | $2,000.00      | $1,930.92       |
| 2024-11-17 |      0.779 | $15,000.00     | $11,683.76      |
| 2024-11-09 |      0.726 | $24,239.00     | $17,591.84      |
| 2024-10-13 |      0.546 | $2,000.00      | $1,091.85       |
| 2024-09-26 |      0.432 | $500.00        | $216.05         |
| 2024-09-14 |      0.352 | $500.00        | $176.23         |
| 2024-08-25 |      0.219 | $5,000.00      | $1,096.78       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
