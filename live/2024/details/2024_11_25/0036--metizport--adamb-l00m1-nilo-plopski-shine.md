### Roster Details<br />
Team Name: Metizport<br />
Roster: adamb, L00m1, nilo, Plopski, SHiNE<br />
Global Rank: [36](../../standings_global_2024_11_25.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_25.md)<br />
Regional Rank: [27]( ../../standings_europe_2024_11_25.md)<br />
<br />
Final Rank Value:  1225.3<br />
<br />
Final Rank Value (1225.3) = Starting Rank Value (1440.7) + Head To Head Adjustments (-215.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.513[<sup>1</sup>](#table2)
- Bounty Collected: 0.415[<sup>2</sup>](#table1)
- Opponent Network: 0.272[<sup>2</sup>](#table1)
- LAN Wins: 0.880[<sup>2</sup>](#table1)

The average of these factors is 0.520<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1440.7
- 400 + ( ( 0.520 - 0.000 ) / ( 0.799 - 0.000 ) ) * 1600 = 1440.7


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
|           50 |      153 | 2024-11-17 | Serbia            | L   | 1.000      | -            | -                | -                | -         |   -15.85 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           49 |      158 | 2024-11-17 | Nexus             | L   | 1.000      | -            | -                | -                | -         |   -21.35 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           48 |      184 | 2024-11-16 | The Huns          | W   | 1.000      | 0.617        | 0.036 (0.022)    | 0.251 (0.155)    | 1 (1.000) |     3.32 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           47 |      213 | 2024-11-15 | Canada            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     0.84 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           46 |      219 | 2024-11-15 | Norway            | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.46 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           45 |      231 | 2024-11-14 | Permitta          | W   | 1.000      | 0.617        | 0.062 (0.038)    | 1.000 (0.617)    | 1 (1.000) |     6.00 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           44 |      277 | 2024-11-13 | Turkey            | L   | 1.000      | -            | -                | -                | -         |   -30.22 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           43 |      284 | 2024-11-13 | Mindfreak         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     1.56 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           42 |      380 | 2024-11-09 | Ninjas in Pyjamas | W   | 1.000      | 0.432        | 0.090 (0.039)    | -                | 1 (1.000) |    12.28 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           41 |      399 | 2024-11-08 | Johnny Speeds     | W   | 1.000      | 0.432        | 0.097 (0.042)    | 1.000 (0.432)    | 1 (1.000) |    10.01 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           40 |      415 | 2024-11-07 | Kappa Bar         | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.23 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           39 |      557 | 2024-10-31 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -21.84 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           38 |      576 | 2024-10-30 | ECSTATIC          | W   | 1.000      | 0.333        | 0.032 (0.011)    | 0.813 (0.271)    | 0 (0.000) |     6.28 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           37 |      581 | 2024-10-30 | KOI               | W   | 1.000      | -            | -                | -                | 0 (0.000) |     2.86 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           36 |      928 | 2024-10-12 | Aurora            | L   | 0.907      | -            | -                | -                | -         |   -19.62 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           35 |      952 | 2024-10-10 | fnatic            | W   | 0.893      | 0.435        | 0.194 (0.075)    | 0.462 (0.179)    | -         |    14.23 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           34 |     1029 | 2024-10-08 | ALTERNATE aTTaX   | W   | 0.879      | 0.435        | 0.070 (0.027)    | 0.729 (0.279)    | -         |     5.61 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           33 |     1055 | 2024-10-07 | Monte             | L   | 0.873      | -            | -                | -                | -         |   -18.60 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           32 |     1136 | 2024-10-04 | CYBERSHOKE        | W   | 0.855      | 0.435        | -                | 0.560 (0.208)    | -         |     3.94 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           31 |     1181 | 2024-10-03 | Zero Tenacity     | L   | 0.847      | -            | -                | -                | -         |   -17.59 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           30 |     1258 | 2024-10-01 | G2 Ares           | W   | 0.835      | -            | -                | -                | -         |     0.67 | adamb, L00m1, nilo, Plopski, SHiNE    |
|           29 |     1595 | 2024-09-23 | Into the Breach   | L   | 0.779      | -            | -                | -                | -         |   -20.92 | adamb, L00m1, nilo, Plopski, Sapec    |
|           28 |     1783 | 2024-09-16 | 9INE              | W   | 0.733      | 0.384        | 0.056 (0.016)    | 0.750 (0.211)    | -         |     3.39 | adamb, L00m1, nilo, Plopski, Sapec    |
|           27 |     1939 | 2024-09-11 | Zero Tenacity     | L   | 0.701      | -            | -                | -                | -         |   -15.72 | adamb, L00m1, nilo, Plopski, Sapec    |
|           26 |     1993 | 2024-09-09 | Zero Tenacity     | L   | 0.687      | -            | -                | -                | -         |   -16.18 | adamb, L00m1, nilo, Plopski, Sapec    |
|           25 |     2139 | 2024-09-04 | Sampi             | W   | 0.654      | 0.384        | 0.038 (0.010)    | -                | -         |     3.06 | adamb, L00m1, nilo, Plopski, Sapec    |
|           24 |     2201 | 2024-09-02 | FAVBET            | W   | 0.640      | 0.384        | -                | 0.720 (0.177)    | -         |     1.81 | adamb, L00m1, nilo, Plopski, Sapec    |
|           23 |     2353 | 2024-08-28 | Nemiga            | W   | 0.607      | 0.384        | 0.478 (0.112)    | 0.798 (0.186)    | -         |    11.11 | adamb, L00m1, nilo, Plopski, Sapec    |
|           22 |     2418 | 2024-08-27 | ex-Enterprise     | W   | 0.599      | -            | -                | -                | -         |     2.16 | adamb, L00m1, nilo, Plopski, Sapec    |
|           21 |     2598 | 2024-08-22 | Complexity        | L   | 0.568      | -            | -                | -                | -         |    -5.38 | adamb, L00m1, nilo, Plopski, Sapec    |
|           20 |     2669 | 2024-08-21 | 9INE              | L   | 0.560      | -            | -                | -                | -         |   -15.47 | adamb, L00m1, nilo, Plopski, Sapec    |
|           19 |     2718 | 2024-08-20 | TSM               | L   | 0.552      | -            | -                | -                | -         |   -15.01 | adamb, L00m1, nilo, Plopski, Sapec    |
|           18 |     2735 | 2024-08-19 | Sashi             | L   | 0.548      | -            | -                | -                | -         |   -14.58 | adamb, L00m1, nilo, Plopski, Sapec    |
|           17 |     2851 | 2024-08-15 | PARIVISION        | L   | 0.520      | -            | -                | -                | -         |   -14.01 | adamb, L00m1, nilo, Plopski, Sapec    |
|           16 |     2952 | 2024-08-12 | Sampi             | W   | 0.500      | -            | -                | -                | -         |     2.08 | adamb, L00m1, nilo, Plopski, Sapec    |
|           15 |     3053 | 2024-08-08 | Into the Breach   | W   | 0.473      | -            | -                | -                | -         |     1.03 | adamb, L00m1, nilo, Plopski, Sapec    |
|           14 |     3082 | 2024-08-07 | Johnny Speeds     | W   | 0.468      | -            | -                | -                | -         |     4.03 | adamb, L00m1, nilo, Plopski, Sapec    |
|           13 |     3091 | 2024-08-07 | TSM               | W   | 0.467      | -            | -                | -                | -         |     1.41 | adamb, L00m1, nilo, Plopski, Sapec    |
|           12 |     3138 | 2024-08-06 | UNPAID            | W   | 0.461      | -            | -                | -                | -         |     3.96 | adamb, Jackinho, nilo, Plopski, Sapec |
|           11 |     3142 | 2024-08-06 | HAVU              | W   | 0.460      | -            | -                | -                | -         |     0.10 | adamb, Jackinho, nilo, Plopski, Sapec |
|           10 |     3147 | 2024-08-06 | Johnny Speeds     | L   | 0.460      | -            | -                | -                | -         |   -10.83 | adamb, Jackinho, nilo, Plopski, Sapec |
|            9 |     3303 | 2024-08-01 | ALTERNATE aTTaX   | W   | 0.428      | -            | -                | -                | -         |     3.50 | adamb, L00m1, nilo, Plopski, Sapec    |
|            8 |     3313 | 2024-08-01 | Insilio           | L   | 0.427      | -            | -                | -                | -         |   -12.59 | adamb, Jackinho, nilo, Plopski, Sapec |
|            7 |     3410 | 2024-07-30 | QUAZAR            | W   | 0.413      | -            | -                | -                | -         |     0.23 | adamb, Jackinho, nilo, Plopski, Sapec |
|            6 |     3465 | 2024-07-28 | Insilio           | L   | 0.401      | -            | -                | -                | -         |   -11.90 | adamb, Jackinho, nilo, Plopski, Sapec |
|            5 |     3631 | 2024-07-23 | RUBY              | L   | 0.366      | -            | -                | -                | -         |   -11.25 | adamb, Jackinho, nilo, Plopski, Sapec |
|            4 |     3649 | 2024-07-22 | Permitta          | L   | 0.362      | -            | -                | -                | -         |    -7.32 | adamb, Jackinho, nilo, Plopski, Sapec |
|            3 |     3750 | 2024-07-19 | Sampi             | W   | 0.341      | -            | -                | -                | -         |     1.38 | adamb, Jackinho, nilo, Plopski, Sapec |
|            2 |     3806 | 2024-07-18 | BC.Game           | L   | 0.334      | -            | -                | -                | -         |   -10.24 | adamb, Jackinho, nilo, Plopski, Sapec |
|            1 |     3929 | 2024-07-16 | Endpoint          | W   | 0.321      | -            | -                | -                | -         |     0.47 | adamb, Jackinho, nilo, Plopski, Sapec |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($44,773.12)
- Divide that value by the 5th highest value among all rosters ($398,927.16)
- The final value (0.11) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-17 |      1.000 | $15,000.00     | $15,000.00      |
| 2024-11-09 |      1.000 | $24,239.00     | $24,239.00      |
| 2024-10-13 |      0.915 | $2,000.00      | $1,830.15       |
| 2024-09-26 |      0.801 | $500.00        | $400.62         |
| 2024-09-14 |      0.722 | $500.00        | $360.80         |
| 2024-08-25 |      0.589 | $5,000.00      | $2,942.54       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
