### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, L00m1, nilo, Plopski, SHiNE<br />
Global Rank: [44](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [32]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  1152.0<br />
<br />
Final Rank Value (1152.0) = Starting Rank Value (1371.8) + Head To Head Adjustments (-219.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.528[<sup>1</sup>](#table2)
- Bounty Collected: 0.408[<sup>2</sup>](#table1)
- Opponent Network: 0.294[<sup>2</sup>](#table1)
- LAN Wins: 0.799[<sup>2</sup>](#table1)

The average of these factors is 0.507<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1371.8
- 400 + ( ( 0.507 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 1371.8


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           57 |       66 | 2024-12-14 | 9INE              | L   | 1.000      | -            | -                | -                | -         |   -23.16 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           56 |       93 | 2024-12-13 | Monte             | W   | 1.000      | 0.435        | 0.065 (0.028)    | 0.736 (0.320)    | 0 (0.000) |    14.33 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           55 |      122 | 2024-12-11 | Insilio           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     3.62 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           54 |      135 | 2024-12-10 | Aurora Young Blud | L   | 1.000      | -            | -                | -                | -         |   -23.50 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           53 |      164 | 2024-12-08 | FLuffy Gangsters  | W   | 1.000      | 0.435        | -                | 0.541 (0.235)    | -         |     3.20 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           52 |      238 | 2024-12-05 | Fire Flux         | W   | 1.000      | 0.435        | -                | 0.600 (0.261)    | -         |     4.97 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           51 |      292 | 2024-12-03 | Into the Breach   | L   | 1.000      | -            | -                | -                | -         |   -23.77 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           50 |      593 | 2024-11-17 | Partizan          | L   | 0.993      | -            | -                | -                | -         |   -16.27 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           49 |      598 | 2024-11-17 | Nexus             | L   | 0.992      | -            | -                | -                | -         |   -17.99 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           48 |      624 | 2024-11-16 | The Huns          | W   | 0.986      | 0.617        | 0.041 (0.025)    | -                | 1 (0.986) |     3.40 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           47 |      653 | 2024-11-15 | Canada            | W   | 0.979      | -            | -                | -                | 1 (0.979) |     0.93 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           46 |      659 | 2024-11-15 | Norway            | W   | 0.978      | -            | -                | -                | 1 (0.978) |     1.46 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           45 |      671 | 2024-11-14 | los kogutos       | W   | 0.974      | 0.617        | 0.063 (0.038)    | 0.981 (0.590)    | 1 (0.974) |     6.20 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           44 |      717 | 2024-11-13 | Turkey            | L   | 0.966      | -            | -                | -                | -         |   -29.11 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           43 |      724 | 2024-11-13 | Mindfreak         | W   | 0.965      | -            | -                | -                | 1 (0.965) |     1.55 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           42 |      820 | 2024-11-09 | Ninjas in Pyjamas | W   | 0.940      | 0.432        | 0.075 (0.031)    | -                | 1 (0.940) |     9.61 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           41 |      839 | 2024-11-08 | Johnny Speeds     | W   | 0.934      | 0.432        | 0.097 (0.039)    | 0.952 (0.384)    | 1 (0.934) |     8.54 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           40 |      855 | 2024-11-07 | Kappa Bar         | W   | 0.928      | -            | -                | -                | 1 (0.928) |     2.19 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           39 |      997 | 2024-10-31 | Johnny Speeds     | L   | 0.880      | -            | -                | -                | -         |   -19.96 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           38 |     1016 | 2024-10-30 | ECSTATIC          | W   | 0.874      | 0.333        | 0.061 (0.018)    | 1.000 (0.291)    | -         |     5.66 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           37 |     1021 | 2024-10-30 | KOI               | W   | 0.873      | -            | -                | -                | -         |     3.77 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           36 |     1368 | 2024-10-12 | Aurora            | L   | 0.752      | -            | -                | -                | -         |   -18.97 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           35 |     1392 | 2024-10-10 | fnatic            | W   | 0.739      | 0.435        | 0.188 (0.060)    | -                | -         |     9.16 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           34 |     1469 | 2024-10-08 | ALTERNATE aTTaX   | W   | 0.725      | 0.435        | 0.071 (0.022)    | 0.786 (0.248)    | -         |     4.71 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           33 |     1495 | 2024-10-07 | Monte             | L   | 0.718      | -            | -                | -                | -         |   -15.86 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           32 |     1576 | 2024-10-04 | CYBERSHOKE        | W   | 0.700      | 0.435        | -                | 0.738 (0.225)    | -         |     3.03 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           31 |     1621 | 2024-10-03 | Zero Tenacity     | L   | 0.692      | -            | -                | -                | -         |   -14.81 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           30 |     1698 | 2024-10-01 | G2 Ares           | W   | 0.681      | -            | -                | -                | -         |     0.55 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           29 |     2035 | 2024-09-23 | Into the Breach   | L   | 0.624      | -            | -                | -                | -         |   -16.87 | adamb, L00m1, nilo, Plopski, Sapec    |
|           28 |     2223 | 2024-09-16 | 9INE              | W   | 0.579      | 0.384        | 0.065 (0.014)    | 0.906 (0.201)    | -         |     2.74 | adamb, L00m1, nilo, Plopski, Sapec    |
|           27 |     2379 | 2024-09-11 | Zero Tenacity     | L   | 0.546      | -            | -                | -                | -         |   -12.57 | adamb, L00m1, nilo, Plopski, Sapec    |
|           26 |     2433 | 2024-09-09 | Zero Tenacity     | L   | 0.532      | -            | -                | -                | -         |   -12.71 | adamb, L00m1, nilo, Plopski, Sapec    |
|           25 |     2579 | 2024-09-04 | Sampi             | W   | 0.499      | -            | -                | -                | -         |     2.30 | adamb, L00m1, nilo, Plopski, Sapec    |
|           24 |     2641 | 2024-09-02 | FAVBET            | W   | 0.486      | 0.384        | -                | 0.972 (0.181)    | -         |     1.69 | adamb, L00m1, nilo, Plopski, Sapec    |
|           23 |     2793 | 2024-08-28 | Nemiga            | W   | 0.452      | 0.384        | 0.455 (0.079)    | -                | -         |     6.94 | adamb, L00m1, nilo, Plopski, Sapec    |
|           22 |     2858 | 2024-08-27 | ex-Enterprise     | W   | 0.444      | -            | -                | -                | -         |     1.33 | adamb, L00m1, nilo, Plopski, Sapec    |
|           21 |     3038 | 2024-08-22 | Complexity        | L   | 0.413      | -            | -                | -                | -         |    -4.64 | adamb, L00m1, nilo, Plopski, Sapec    |
|           20 |     3109 | 2024-08-21 | 9INE              | L   | 0.405      | -            | -                | -                | -         |   -11.07 | adamb, L00m1, nilo, Plopski, Sapec    |
|           19 |     3158 | 2024-08-20 | TSM               | L   | 0.398      | -            | -                | -                | -         |   -11.10 | adamb, L00m1, nilo, Plopski, Sapec    |
|           18 |     3175 | 2024-08-19 | Sashi             | L   | 0.393      | -            | -                | -                | -         |   -10.39 | adamb, L00m1, nilo, Plopski, Sapec    |
|           17 |     3291 | 2024-08-15 | PARIVISION        | L   | 0.365      | -            | -                | -                | -         |   -10.20 | adamb, L00m1, nilo, Plopski, Sapec    |
|           16 |     3392 | 2024-08-12 | Sampi             | W   | 0.345      | -            | -                | -                | -         |     1.40 | adamb, L00m1, nilo, Plopski, Sapec    |
|           15 |     3493 | 2024-08-08 | Into the Breach   | W   | 0.319      | -            | -                | -                | -         |     0.81 | adamb, L00m1, nilo, Plopski, Sapec    |
|           14 |     3522 | 2024-08-07 | Johnny Speeds     | W   | 0.313      | -            | -                | -                | -         |     2.22 | adamb, L00m1, nilo, Plopski, Sapec    |
|           13 |     3531 | 2024-08-07 | TSM               | W   | 0.313      | -            | -                | -                | -         |     0.90 | adamb, L00m1, nilo, Plopski, Sapec    |
|           12 |     3578 | 2024-08-06 | UNPAID            | W   | 0.306      | -            | -                | -                | -         |     1.90 | adamb, Jackinho, nilo, Plopski, Sapec |
|           11 |     3582 | 2024-08-06 | HAVU              | W   | 0.305      | -            | -                | -                | -         |     0.09 | adamb, Jackinho, nilo, Plopski, Sapec |
|           10 |     3587 | 2024-08-06 | Johnny Speeds     | L   | 0.305      | -            | -                | -                | -         |    -7.59 | adamb, Jackinho, nilo, Plopski, Sapec |
|            9 |     3743 | 2024-08-01 | ALTERNATE aTTaX   | W   | 0.273      | -            | -                | -                | -         |     2.13 | adamb, L00m1, nilo, Plopski, Sapec    |
|            8 |     3753 | 2024-08-01 | Insilio           | L   | 0.272      | -            | -                | -                | -         |    -8.11 | adamb, Jackinho, nilo, Plopski, Sapec |
|            7 |     3850 | 2024-07-30 | QUAZAR            | W   | 0.258      | -            | -                | -                | -         |     0.18 | adamb, Jackinho, nilo, Plopski, Sapec |
|            6 |     3905 | 2024-07-28 | Insilio           | L   | 0.246      | -            | -                | -                | -         |    -7.37 | adamb, Jackinho, nilo, Plopski, Sapec |
|            5 |     4071 | 2024-07-23 | RUBY              | L   | 0.212      | -            | -                | -                | -         |    -6.58 | adamb, Jackinho, nilo, Plopski, Sapec |
|            4 |     4089 | 2024-07-22 | los kogutos       | L   | 0.207      | -            | -                | -                | -         |    -4.41 | adamb, Jackinho, nilo, Plopski, Sapec |
|            3 |     4190 | 2024-07-19 | Sampi             | W   | 0.186      | -            | -                | -                | -         |     0.73 | adamb, Jackinho, nilo, Plopski, Sapec |
|            2 |     4246 | 2024-07-18 | BC.Game           | L   | 0.179      | -            | -                | -                | -         |    -5.34 | adamb, Jackinho, nilo, Plopski, Sapec |
|            1 |     4369 | 2024-07-16 | Endpoint          | W   | 0.166      | -            | -                | -                | -         |     0.31 | adamb, Jackinho, nilo, Plopski, Sapec |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($43,988.94)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.13) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      1.000 | $2,000.00      | $2,000.00       |
| 2024-11-17 |      0.993 | $15,000.00     | $14,901.15      |
| 2024-11-09 |      0.940 | $24,239.00     | $22,790.93      |
| 2024-10-13 |      0.760 | $2,000.00      | $1,520.84       |
| 2024-09-26 |      0.647 | $500.00        | $323.29         |
| 2024-09-14 |      0.567 | $500.00        | $283.47         |
| 2024-08-25 |      0.434 | $5,000.00      | $2,169.25       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
