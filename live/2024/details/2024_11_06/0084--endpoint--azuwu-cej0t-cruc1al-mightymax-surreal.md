### Roster Details<br />
Team Name: Endpoint<br />
Roster: AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal<br />
Global Rank: [84](../../standings_global_2024_11_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_11_06.md)<br />
Regional Rank: [59]( ../../standings_europe_2024_11_06.md)<br />
<br />
Final Rank Value:  884.9<br />
<br />
Final Rank Value (884.9) = Starting Rank Value (897.4) + Head To Head Adjustments (-12.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.389[<sup>1</sup>](#table2)
- Bounty Collected: 0.360[<sup>2</sup>](#table1)
- Opponent Network: 0.265[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.253<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 897.4
- 400 + ( ( 0.253 - 0.000 ) / ( 0.815 - 0.000 ) ) * 1600 = 897.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           79 |       54 | 2024-11-03 | Aurora Young Blud | W   | 1.000      | 0.384        | -                | 0.670 (0.258)    | 0 (0.000) |    15.60 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           78 |       84 | 2024-11-02 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |    -6.93 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           77 |       89 | 2024-11-02 | Rebels            | L   | 1.000      | -            | -                | -                | -         |   -13.56 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           76 |      105 | 2024-11-01 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |    -9.16 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           75 |      158 | 2024-10-29 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |   -11.52 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           74 |      163 | 2024-10-29 | Rare Atom         | W   | 1.000      | -            | -                | -                | 0 (0.000) |    13.80 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           73 |      166 | 2024-10-29 | Gaimin Gladiators | L   | 1.000      | -            | -                | -                | -         |   -12.43 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           72 |      199 | 2024-10-27 | Rebels            | W   | 1.000      | 0.371        | 0.032 (0.012)    | -                | 0 (0.000) |    17.65 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           71 |      263 | 2024-10-24 | NewBALLS          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.50 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           70 |      309 | 2024-10-20 | DMS               | L   | 1.000      | -            | -                | -                | -         |   -16.06 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           69 |      501 | 2024-10-11 | ARCRED            | W   | 1.000      | 0.384        | 0.037 (0.014)    | -                | 0 (0.000) |    11.73 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           68 |      967 | 2024-09-27 | WW                | L   | 0.932      | -            | -                | -                | -         |   -24.90 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           67 |     1048 | 2024-09-25 | Aurora            | L   | 0.921      | -            | -                | -                | -         |    -7.55 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           66 |     1061 | 2024-09-25 | CPH Wolves        | L   | 0.919      | -            | -                | -                | -         |   -20.45 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           65 |     1100 | 2024-09-24 | Into the Breach   | L   | 0.914      | -            | -                | -                | -         |   -12.96 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           64 |     1212 | 2024-09-20 | CYBERSHOKE        | W   | 0.887      | 0.435        | 0.021 (0.008)    | 0.722 (0.279)    | 0 (0.000) |    14.74 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           63 |     1280 | 2024-09-18 | Insilio           | W   | 0.875      | 0.435        | -                | 0.730 (0.277)    | 0 (0.000) |    15.34 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           62 |     1341 | 2024-09-16 | FAVBET            | L   | 0.860      | -            | -                | -                | -         |   -13.57 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           61 |     1374 | 2024-09-15 | Nexus             | W   | 0.853      | -            | -                | -                | 0 (0.000) |     8.86 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           60 |     1546 | 2024-09-09 | NAVI Junior       | L   | 0.814      | -            | -                | -                | -         |   -12.79 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           59 |     1598 | 2024-09-07 | CPH Wolves        | W   | 0.800      | -            | -                | -                | 0 (0.000) |     8.20 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           58 |     1626 | 2024-09-06 | GamerLegion       | L   | 0.794      | -            | -                | -                | -         |    -9.88 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           57 |     1655 | 2024-09-05 | GL Academy        | W   | 0.787      | -            | -                | -                | 0 (0.000) |     1.81 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           56 |     1728 | 2024-09-03 | Anonymo           | W   | 0.774      | -            | -                | -                | -         |     3.19 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           55 |     1756 | 2024-09-02 | 9INE              | W   | 0.768      | 0.435        | 0.054 (0.018)    | 0.813 (0.271)    | -         |    14.12 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           54 |     1809 | 2024-08-30 | CPH Wolves        | W   | 0.748      | -            | -                | -                | -         |     8.03 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           53 |     1816 | 2024-08-30 | OG                | L   | 0.746      | -            | -                | -                | -         |    -8.47 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           52 |     1914 | 2024-08-28 | EYEBALLERS        | W   | 0.733      | -            | -                | -                | -         |     6.65 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           51 |     1954 | 2024-08-27 | B8                | L   | 0.728      | -            | -                | -                | -         |    -3.58 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           50 |     1966 | 2024-08-27 | Revenant          | L   | 0.726      | -            | -                | -                | -         |   -12.32 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           49 |     2031 | 2024-08-26 | Passion UA        | W   | 0.720      | 0.435        | 0.106 (0.033)    | 1.000 (0.313)    | -         |    15.71 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           48 |     2173 | 2024-08-22 | DASH              | L   | 0.692      | -            | -                | -                | -         |   -18.93 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           47 |     2320 | 2024-08-18 | Permitta          | W   | 0.668      | 0.435        | 0.029 (0.009)    | 1.000 (0.290)    | -         |    11.97 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           46 |     2326 | 2024-08-18 | BetBoom           | L   | 0.666      | -            | -                | -                | -         |    -6.32 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           45 |     2349 | 2024-08-17 | Insilio           | W   | 0.660      | 0.435        | -                | 0.730 (0.209)    | -         |     9.88 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           44 |     2366 | 2024-08-16 | RUBY              | W   | 0.655      | -            | -                | -                | -         |     6.19 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           43 |     2416 | 2024-08-15 | Rhyno             | L   | 0.645      | -            | -                | -                | -         |   -11.36 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           42 |     2462 | 2024-08-13 | DMS               | W   | 0.633      | -            | -                | -                | -         |     7.34 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           41 |     2512 | 2024-08-12 | SINNERS           | W   | 0.626      | 0.435        | 0.090 (0.024)    | 0.974 (0.265)    | -         |    14.35 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           40 |     2538 | 2024-08-11 | Nemiga            | L   | 0.620      | -            | -                | -                | -         |    -1.54 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           39 |     2551 | 2024-08-10 | CYBERSHOKE        | L   | 0.614      | -            | -                | -                | -         |    -9.16 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           38 |     2558 | 2024-08-10 | Sashi             | W   | 0.613      | 0.426        | 0.052 (0.014)    | -                | -         |    11.60 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           37 |     2585 | 2024-08-09 | MOUZ NXT          | W   | 0.606      | -            | -                | -                | -         |     9.21 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           36 |     2604 | 2024-08-08 | SovvyKiNG         | W   | 0.600      | -            | -                | -                | -         |     5.82 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           35 |     2619 | 2024-08-08 | Passion UA        | W   | 0.599      | 0.426        | 0.106 (0.027)    | 1.000 (0.255)    | -         |    13.58 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           34 |     2702 | 2024-08-06 | DMS               | W   | 0.586      | -            | -                | -                | -         |     8.14 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           33 |     2916 | 2024-07-31 | K27               | W   | 0.547      | -            | -                | -                | -         |     2.97 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           32 |     2923 | 2024-07-31 | Permitta          | W   | 0.546      | 0.426        | -                | 1.000 (0.233)    | -         |    12.77 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           31 |     2973 | 2024-07-30 | GUN5              | L   | 0.539      | -            | -                | -                | -         |    -7.21 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           30 |     3039 | 2024-07-28 | SovvyKiNG         | W   | 0.526      | -            | -                | -                | -         |     6.48 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           29 |     3072 | 2024-07-26 | Sampi             | L   | 0.514      | -            | -                | -                | -         |    -6.12 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           28 |     3125 | 2024-07-25 | Monte             | L   | 0.505      | -            | -                | -                | -         |    -4.52 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           27 |     3243 | 2024-07-21 | GUN5              | L   | 0.480      | -            | -                | -                | -         |    -6.09 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           26 |     3318 | 2024-07-19 | ALTERNATE aTTaX   | W   | 0.466      | 0.435        | 0.040 (0.008)    | -                | -         |     8.31 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           25 |     3435 | 2024-07-17 | SINNERS           | L   | 0.453      | -            | -                | -                | -         |    -2.85 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           24 |     3438 | 2024-07-17 | 9INE              | L   | 0.453      | -            | -                | -                | -         |    -5.46 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           23 |     3491 | 2024-07-16 | Metizport         | L   | 0.447      | -            | -                | -                | -         |    -6.97 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           22 |     3539 | 2024-07-15 | Johnny Speeds     | L   | 0.440      | -            | -                | -                | -         |    -4.77 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           21 |     3600 | 2024-07-11 | Sashi             | L   | 0.413      | -            | -                | -                | -         |    -5.02 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           20 |     3604 | 2024-07-11 | 9INE              | W   | 0.412      | -            | -                | -                | -         |     7.99 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           19 |     3626 | 2024-07-10 | Johnny Speeds     | L   | 0.406      | -            | -                | -                | -         |    -4.47 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           18 |     3642 | 2024-07-09 | SkyFury           | W   | 0.400      | -            | -                | -                | -         |     1.48 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           17 |     3825 | 2024-06-14 | GamerLegion       | L   | 0.234      | -            | -                | -                | -         |    -2.31 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           16 |     3936 | 2024-06-10 | MOUZ NXT          | W   | 0.206      | -            | -                | -                | -         |     2.91 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           15 |     4065 | 2024-06-08 | Entropiq          | W   | 0.192      | -            | -                | -                | -         |     0.38 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           14 |     4092 | 2024-06-07 | 9INE              | L   | 0.188      | -            | -                | -                | -         |    -2.20 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           13 |     4179 | 2024-06-06 | NAVI Junior       | L   | 0.179      | -            | -                | -                | -         |    -2.42 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           12 |     4191 | 2024-06-06 | 5W                | L   | 0.178      | -            | -                | -                | -         |    -3.84 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           11 |     4263 | 2024-06-04 | Rhyno             | L   | 0.168      | -            | -                | -                | -         |    -2.81 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|           10 |     4485 | 2024-05-27 | Rhyno             | L   | 0.113      | -            | -                | -                | -         |    -1.91 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            9 |     4537 | 2024-05-24 | ALTERNATE aTTaX   | W   | 0.093      | -            | -                | -                | -         |     1.64 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            8 |     4591 | 2024-05-22 | Permitta          | L   | 0.080      | -            | -                | -                | -         |    -0.61 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            7 |     4640 | 2024-05-21 | RUBY              | L   | 0.072      | -            | -                | -                | -         |    -1.55 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            6 |     4694 | 2024-05-19 | Sangal            | L   | 0.060      | -            | -                | -                | -         |    -0.12 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            5 |     4759 | 2024-05-17 | Zero Tenacity     | L   | 0.047      | -            | -                | -                | -         |    -0.54 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            4 |     4845 | 2024-05-15 | Passion UA        | W   | 0.034      | -            | -                | -                | -         |     0.70 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            3 |     4853 | 2024-05-15 | Sashi             | L   | 0.032      | -            | -                | -                | -         |    -0.42 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            2 |     4909 | 2024-05-14 | ALTERNATE aTTaX   | L   | 0.026      | -            | -                | -                | -         |    -0.35 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |
|            1 |     4968 | 2024-05-11 | MOUZ NXT          | L   | 0.008      | -            | -                | -                | -         |    -0.15 | AZUWU, cej0t, CRUC1AL, MiGHTYMAX, Surreal |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($12,805.60)
- Divide that value by the 5th highest value among all rosters ($478,523.89)
- The final value (0.03) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-21 |      0.893 | $1,250.00      | $1,116.80       |
| 2024-08-28 |      0.734 | $2,000.00      | $1,468.66       |
| 2024-08-18 |      0.667 | $5,000.00      | $3,336.42       |
| 2024-08-11 |      0.620 | $10,000.00     | $6,195.64       |
| 2024-06-17 |      0.253 | $2,500.00      | $632.54         |
| 2024-05-18 |      0.054 | $500.00        | $27.11          |
| 2024-05-12 |      0.014 | $2,000.00      | $28.42          |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
