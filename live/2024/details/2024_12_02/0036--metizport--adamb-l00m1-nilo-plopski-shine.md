### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, L00m1, nilo, Plopski, SHiNE<br />
Global Rank: [36](../../standings_global_2024_12_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_02.md)<br />
Regional Rank: [27]( ../../standings_europe_2024_12_02.md)<br />
<br />
Final Rank Value:  1236.6<br />
<br />
Final Rank Value (1236.6) = Starting Rank Value (1445.1) + Head To Head Adjustments (-208.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.521[<sup>1</sup>](#table2)
- Bounty Collected: 0.416[<sup>2</sup>](#table1)
- Opponent Network: 0.269[<sup>2</sup>](#table1)
- LAN Wins: 0.877[<sup>2</sup>](#table1)

The average of these factors is 0.520<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1445.1
- 400 + ( ( 0.520 - 0.000 ) / ( 0.797 - 0.000 ) ) * 1600 = 1445.1


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
|           50 |      286 | 2024-11-17 | Partizan          | L   | 1.000      | -            | -                | -                | -         |   -15.86 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           49 |      291 | 2024-11-17 | Nexus             | L   | 1.000      | -            | -                | -                | -         |   -20.61 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           48 |      317 | 2024-11-16 | The Huns          | W   | 1.000      | 0.617        | 0.039 (0.024)    | 0.262 (0.162)    | 1 (1.000) |     3.23 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           47 |      346 | 2024-11-15 | Canada            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.81 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           46 |      352 | 2024-11-15 | Norway            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.38 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           45 |      364 | 2024-11-14 | Permitta          | W   | 1.000      | 0.617        | 0.064 (0.040)    | 1.000 (0.617)    | 1 (1.000) |     5.98 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           44 |      410 | 2024-11-13 | Turkey            | L   | 1.000      | -            | -                | -                | -         |   -30.29 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           43 |      417 | 2024-11-13 | Mindfreak         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.46 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           42 |      513 | 2024-11-09 | Ninjas in Pyjamas | W   | 1.000      | 0.432        | 0.086 (0.037)    | -                | 1 (1.000) |    11.33 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           41 |      532 | 2024-11-08 | Johnny Speeds     | W   | 1.000      | 0.432        | 0.100 (0.043)    | 1.000 (0.432)    | 1 (1.000) |     9.73 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           40 |      548 | 2024-11-07 | Kappa Bar         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.13 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           39 |      690 | 2024-10-31 | Johnny Speeds     | L   | 0.987      | -            | -                | -                | -         |   -21.84 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           38 |      709 | 2024-10-30 | ECSTATIC          | W   | 0.981      | 0.333        | 0.034 (0.011)    | 0.812 (0.266)    | 0 (0.000) |     5.80 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           37 |      714 | 2024-10-30 | KOI               | W   | 0.980      | 0.333        | 0.038 (0.012)    | -                | 0 (0.000) |     3.31 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           36 |     1061 | 2024-10-12 | Aurora            | L   | 0.859      | -            | -                | -                | -         |   -19.42 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           35 |     1085 | 2024-10-10 | fnatic            | W   | 0.846      | 0.435        | 0.215 (0.079)    | 0.447 (0.164)    | -         |    12.70 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           34 |     1162 | 2024-10-08 | ALTERNATE aTTaX   | W   | 0.832      | 0.435        | 0.072 (0.026)    | 0.795 (0.287)    | -         |     5.06 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           33 |     1188 | 2024-10-07 | Monte             | L   | 0.826      | -            | -                | -                | -         |   -18.13 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           32 |     1269 | 2024-10-04 | CYBERSHOKE        | W   | 0.807      | 0.435        | -                | 0.640 (0.225)    | -         |     3.40 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           31 |     1314 | 2024-10-03 | Zero Tenacity     | L   | 0.799      | -            | -                | -                | -         |   -16.93 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           30 |     1391 | 2024-10-01 | G2 Ares           | W   | 0.788      | -            | -                | -                | -         |     0.56 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           29 |     1728 | 2024-09-23 | Into the Breach   | L   | 0.732      | -            | -                | -                | -         |   -19.94 | adamb, L00m1, nilo, Plopski, Sapec    |
|           28 |     1916 | 2024-09-16 | 9INE              | W   | 0.686      | 0.384        | 0.056 (0.015)    | 0.743 (0.196)    | -         |     2.94 | adamb, L00m1, nilo, Plopski, Sapec    |
|           27 |     2072 | 2024-09-11 | Zero Tenacity     | L   | 0.653      | -            | -                | -                | -         |   -14.88 | adamb, L00m1, nilo, Plopski, Sapec    |
|           26 |     2126 | 2024-09-09 | Zero Tenacity     | L   | 0.639      | -            | -                | -                | -         |   -15.23 | adamb, L00m1, nilo, Plopski, Sapec    |
|           25 |     2272 | 2024-09-04 | Sampi             | W   | 0.607      | -            | -                | -                | -         |     2.67 | adamb, L00m1, nilo, Plopski, Sapec    |
|           24 |     2334 | 2024-09-02 | FAVBET            | W   | 0.593      | 0.384        | -                | 0.738 (0.168)    | -         |     1.70 | adamb, L00m1, nilo, Plopski, Sapec    |
|           23 |     2486 | 2024-08-28 | Nemiga            | W   | 0.559      | 0.384        | 0.490 (0.105)    | 0.784 (0.169)    | -         |     9.85 | adamb, L00m1, nilo, Plopski, Sapec    |
|           22 |     2551 | 2024-08-27 | ex-Enterprise     | W   | 0.552      | -            | -                | -                | -         |     1.76 | adamb, L00m1, nilo, Plopski, Sapec    |
|           21 |     2731 | 2024-08-22 | Complexity        | L   | 0.520      | -            | -                | -                | -         |    -4.83 | adamb, L00m1, nilo, Plopski, Sapec    |
|           20 |     2802 | 2024-08-21 | 9INE              | L   | 0.512      | -            | -                | -                | -         |   -14.31 | adamb, L00m1, nilo, Plopski, Sapec    |
|           19 |     2851 | 2024-08-20 | TSM               | L   | 0.505      | -            | -                | -                | -         |   -13.89 | adamb, L00m1, nilo, Plopski, Sapec    |
|           18 |     2868 | 2024-08-19 | Sashi             | L   | 0.500      | -            | -                | -                | -         |   -13.50 | adamb, L00m1, nilo, Plopski, Sapec    |
|           17 |     2984 | 2024-08-15 | PARIVISION        | L   | 0.472      | -            | -                | -                | -         |   -12.98 | adamb, L00m1, nilo, Plopski, Sapec    |
|           16 |     3085 | 2024-08-12 | Sampi             | W   | 0.453      | -            | -                | -                | -         |     1.78 | adamb, L00m1, nilo, Plopski, Sapec    |
|           15 |     3186 | 2024-08-08 | Into the Breach   | W   | 0.426      | -            | -                | -                | -         |     0.88 | adamb, L00m1, nilo, Plopski, Sapec    |
|           14 |     3215 | 2024-08-07 | Johnny Speeds     | W   | 0.421      | -            | -                | -                | -         |     3.33 | adamb, L00m1, nilo, Plopski, Sapec    |
|           13 |     3224 | 2024-08-07 | TSM               | W   | 0.420      | -            | -                | -                | -         |     1.21 | adamb, L00m1, nilo, Plopski, Sapec    |
|           12 |     3271 | 2024-08-06 | UNPAID            | W   | 0.413      | -            | -                | -                | -         |     3.15 | adamb, Jackinho, nilo, Plopski, Sapec |
|           11 |     3275 | 2024-08-06 | HAVU              | W   | 0.413      | -            | -                | -                | -         |     0.09 | adamb, Jackinho, nilo, Plopski, Sapec |
|           10 |     3280 | 2024-08-06 | Johnny Speeds     | L   | 0.412      | -            | -                | -                | -         |    -9.98 | adamb, Jackinho, nilo, Plopski, Sapec |
|            9 |     3436 | 2024-08-01 | ALTERNATE aTTaX   | W   | 0.381      | -            | -                | -                | -         |     2.93 | adamb, L00m1, nilo, Plopski, Sapec    |
|            8 |     3446 | 2024-08-01 | Insilio           | L   | 0.379      | -            | -                | -                | -         |   -11.23 | adamb, Jackinho, nilo, Plopski, Sapec |
|            7 |     3543 | 2024-07-30 | QUAZAR            | W   | 0.365      | -            | -                | -                | -         |     0.20 | adamb, Jackinho, nilo, Plopski, Sapec |
|            6 |     3598 | 2024-07-28 | Insilio           | L   | 0.353      | -            | -                | -                | -         |   -10.52 | adamb, Jackinho, nilo, Plopski, Sapec |
|            5 |     3764 | 2024-07-23 | RUBY              | L   | 0.319      | -            | -                | -                | -         |    -9.81 | adamb, Jackinho, nilo, Plopski, Sapec |
|            4 |     3782 | 2024-07-22 | Permitta          | L   | 0.314      | -            | -                | -                | -         |    -6.43 | adamb, Jackinho, nilo, Plopski, Sapec |
|            3 |     3883 | 2024-07-19 | Sampi             | W   | 0.294      | -            | -                | -                | -         |     1.11 | adamb, Jackinho, nilo, Plopski, Sapec |
|            2 |     3939 | 2024-07-18 | BC.Game           | L   | 0.286      | -            | -                | -                | -         |    -8.70 | adamb, Jackinho, nilo, Plopski, Sapec |
|            1 |     4062 | 2024-07-16 | Endpoint          | W   | 0.273      | -            | -                | -                | -         |     0.39 | adamb, Jackinho, nilo, Plopski, Sapec |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($44,393.94)
- Divide that value by the 5th highest value among all rosters ($370,006.61)
- The final value (0.12) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-17 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-11-09 |      1.000 | $24,239.00     | $24,239.00      |
| 2024-10-13 |      0.868 | $2,000.00      | $1,735.36       |
| 2024-09-26 |      0.754 | $500.00        | $376.92         |
| 2024-09-14 |      0.674 | $500.00        | $337.10         |
| 2024-08-25 |      0.541 | $5,000.00      | $2,705.55       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
