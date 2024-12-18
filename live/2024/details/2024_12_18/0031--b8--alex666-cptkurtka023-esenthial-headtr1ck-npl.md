### Roster Details<br />
Team Name: B8<br />
Roster: alex666, cptkurtka023, esenthial, headtr1ck, npl<br />
Global Rank: [31](../../standings_global_2024_12_18.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_18.md)<br />
Regional Rank: [22]( ../../standings_europe_2024_12_18.md)<br />
<br />
Final Rank Value:  1201.1<br />
<br />
Final Rank Value (1201.1) = Starting Rank Value (1177.7) + Head To Head Adjustments (23.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.553[<sup>1</sup>](#table2)
- Bounty Collected: 0.453[<sup>2</sup>](#table1)
- Opponent Network: 0.191[<sup>2</sup>](#table1)
- LAN Wins: 0.427[<sup>2</sup>](#table1)

The average of these factors is 0.406<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1177.7
- 400 + ( ( 0.406 - 0.000 ) / ( 0.835 - 0.000 ) ) * 1600 = 1177.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           72 |      111 | 2024-12-12 | ECSTATIC          | L   | 1.000      | -            | -                | -                | -         |   -23.47 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           71 |      511 | 2024-11-22 | Astralis          | L   | 1.000      | -            | -                | -                | -         |   -10.61 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           70 |      535 | 2024-11-21 | Aurora            | L   | 1.000      | -            | -                | -                | -         |   -25.02 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           69 |      550 | 2024-11-20 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -0.74 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           68 |     1069 | 2024-10-27 | SAW               | L   | 0.854      | -            | -                | -                | -         |    -7.48 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           67 |     1073 | 2024-10-27 | paiN              | W   | 0.853      | 0.500        | 0.234 (0.100)    | 0.744 (0.317)    | 1 (0.853) |    20.91 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           66 |     1096 | 2024-10-26 | Eternal Fire      | W   | 0.847      | 0.500        | 0.365 (0.155)    | 0.391 (0.165)    | 1 (0.847) |    22.18 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           65 |     1123 | 2024-10-25 | SAW               | L   | 0.839      | -            | -                | -                | -         |    -6.64 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           64 |     1133 | 2024-10-25 | Eternal Fire      | W   | 0.838      | 0.500        | 0.365 (0.153)    | 0.391 (0.164)    | 1 (0.838) |    22.66 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           63 |     1209 | 2024-10-19 | HEROIC            | L   | 0.800      | -            | -                | -                | -         |    -1.54 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           62 |     1248 | 2024-10-18 | JANO              | W   | 0.792      | -            | -                | -                | 1 (0.792) |     3.37 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           61 |     1303 | 2024-10-16 | The MongolZ       | L   | 0.779      | -            | -                | -                | -         |    -0.90 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           60 |     1308 | 2024-10-16 | Ninjas in Pyjamas | W   | 0.779      | 0.589        | 0.075 (0.035)    | 0.294 (0.135)    | 1 (0.779) |     9.79 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           59 |     1534 | 2024-10-05 | GamerLegion       | L   | 0.707      | -            | -                | -                | -         |    -8.56 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           58 |     1620 | 2024-10-03 | ALTERNATE aTTaX   | W   | 0.692      | 0.435        | 0.071 (0.021)    | 0.786 (0.237)    | 0 (0.000) |     5.58 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           57 |     1781 | 2024-09-28 | 3DMAX             | W   | 0.661      | 0.143        | 0.421 (0.040)    | -                | 0 (0.000) |    16.82 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           56 |     1827 | 2024-09-27 | SAW               | W   | 0.654      | 0.143        | 0.258 (0.024)    | -                | 0 (0.000) |    17.20 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           55 |     1832 | 2024-09-27 | OG                | W   | 0.653      | -            | -                | -                | 0 (0.000) |     5.47 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           54 |     1841 | 2024-09-27 | GamerLegion       | L   | 0.652      | -            | -                | -                | -         |    -6.87 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           53 |     1873 | 2024-09-26 | Fire Flux         | W   | 0.647      | -            | -                | -                | 0 (0.000) |     2.75 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           52 |     1882 | 2024-09-26 | Illuminar         | W   | 0.646      | -            | -                | -                | -         |     5.02 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           51 |     1896 | 2024-09-26 | Insilio           | W   | 0.644      | -            | -                | -                | -         |     4.22 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           50 |     2226 | 2024-09-16 | Sampi             | L   | 0.578      | -            | -                | -                | -         |   -13.39 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           49 |     2355 | 2024-09-12 | AMKAL             | L   | 0.551      | -            | -                | -                | -         |   -14.99 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           48 |     2441 | 2024-09-08 | GamerLegion       | W   | 0.527      | 0.435        | 0.171 (0.039)    | 0.685 (0.157)    | -         |    11.28 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           47 |     2447 | 2024-09-08 | Zero Tenacity     | W   | 0.526      | 0.435        | -                | 0.706 (0.161)    | -         |     6.74 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           46 |     2473 | 2024-09-07 | UNPAID            | W   | 0.520      | 0.435        | 0.124 (0.028)    | -                | -         |     5.86 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           45 |     2496 | 2024-09-06 | 9 Pandas          | L   | 0.514      | -            | -                | -                | -         |    -8.41 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           44 |     2524 | 2024-09-05 | SINNERS           | W   | 0.507      | 0.500        | -                | 0.826 (0.209)    | -         |     7.23 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           43 |     2548 | 2024-09-05 | 9INE              | W   | 0.506      | 0.435        | -                | 0.906 (0.199)    | -         |     4.47 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           42 |     2614 | 2024-09-03 | TSM               | L   | 0.493      | -            | -                | -                | -         |   -11.58 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           41 |     2648 | 2024-09-02 | UNPAID            | W   | 0.484      | 0.384        | 0.124 (0.023)    | -                | -         |     5.44 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           40 |     2746 | 2024-08-29 | Revenant          | W   | 0.458      | -            | -                | -                | -         |     2.12 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           39 |     2772 | 2024-08-28 | ALTERNATE aTTaX   | L   | 0.454      | -            | -                | -                | -         |    -8.20 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           38 |     2781 | 2024-08-28 | SINNERS           | W   | 0.453      | 0.435        | -                | 0.826 (0.162)    | -         |     7.31 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           37 |     2832 | 2024-08-27 | Endpoint          | W   | 0.447      | -            | -                | -                | -         |     2.84 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           36 |     2848 | 2024-08-27 | 9INE              | L   | 0.445      | -            | -                | -                | -         |   -10.29 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           35 |     2901 | 2024-08-26 | HEROIC            | L   | 0.440      | -            | -                | -                | -         |    -0.62 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           34 |     2923 | 2024-08-26 | Eternal Fire      | L   | 0.439      | -            | -                | -                | -         |    -2.28 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           33 |     2966 | 2024-08-25 | Revenant          | W   | 0.432      | -            | -                | -                | -         |     1.85 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           32 |     3008 | 2024-08-23 | Monte             | W   | 0.420      | -            | -                | -                | -         |     4.35 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           31 |     3028 | 2024-08-23 | Rhyno             | W   | 0.418      | -            | -                | -                | -         |     7.46 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           30 |     3053 | 2024-08-22 | PARIVISION        | L   | 0.411      | -            | -                | -                | -         |    -9.47 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           29 |     3080 | 2024-08-21 | ex-Enterprise     | W   | 0.407      | -            | -                | -                | -         |     2.33 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           28 |     3121 | 2024-08-21 | SINNERS           | L   | 0.405      | -            | -                | -                | -         |    -6.86 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           27 |     3143 | 2024-08-20 | RUSH B            | W   | 0.401      | -            | -                | -                | -         |     1.88 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           26 |     3168 | 2024-08-19 | Monte             | W   | 0.394      | -            | -                | -                | -         |     4.07 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           25 |     3171 | 2024-08-19 | Sashi             | W   | 0.393      | -            | -                | -                | -         |     4.17 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           24 |     3176 | 2024-08-19 | AMKAL             | W   | 0.393      | -            | -                | -                | -         |     1.78 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           23 |     3222 | 2024-08-17 | GenOne            | W   | 0.380      | -            | -                | -                | -         |     1.30 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           22 |     3225 | 2024-08-17 | Lazer Cats        | W   | 0.380      | -            | -                | -                | -         |     0.60 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           21 |     3269 | 2024-08-15 | OG                | L   | 0.367      | -            | -                | -                | -         |    -8.77 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           20 |     3273 | 2024-08-15 | Spirit Academy    | W   | 0.367      | -            | -                | -                | -         |     3.40 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           19 |     3281 | 2024-08-15 | UNPAID            | W   | 0.366      | -            | -                | -                | -         |     4.52 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           18 |     3327 | 2024-08-13 | KOI               | W   | 0.354      | -            | -                | -                | -         |     2.35 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           17 |     3380 | 2024-08-12 | SINNERS           | L   | 0.347      | -            | -                | -                | -         |    -6.13 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           16 |     3440 | 2024-08-10 | Nemiga            | L   | 0.332      | -            | -                | -                | -         |    -3.37 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           15 |     3469 | 2024-08-09 | TALON             | W   | 0.325      | -            | -                | -                | -         |     0.44 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           14 |     3513 | 2024-08-07 | Nemiga            | L   | 0.314      | -            | -                | -                | -         |    -3.33 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           13 |     3542 | 2024-08-07 | 9INE              | W   | 0.312      | -            | -                | -                | -         |     2.46 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           12 |     3596 | 2024-08-05 | los kogutos       | L   | 0.300      | -            | -                | -                | -         |    -4.12 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           11 |     3629 | 2024-08-04 | BC.Game           | W   | 0.293      | -            | -                | -                | -         |     1.52 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|           10 |     3700 | 2024-08-02 | SovvyKiNG         | W   | 0.280      | -            | -                | -                | -         |     0.35 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            9 |     3782 | 2024-07-31 | Qiang             | W   | 0.267      | -            | -                | -                | -         |     0.45 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            8 |     3836 | 2024-07-30 | ARCRED            | W   | 0.260      | -            | -                | -                | -         |     0.86 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            7 |     3937 | 2024-07-27 | Sangal            | L   | 0.238      | -            | -                | -                | -         |    -2.75 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            6 |     3987 | 2024-07-25 | SINNERS           | W   | 0.227      | -            | -                | -                | -         |     3.25 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            5 |     4145 | 2024-07-20 | Zero Tenacity     | L   | 0.194      | -            | -                | -                | -         |    -3.82 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            4 |     4200 | 2024-07-19 | Rebels            | W   | 0.185      | -            | -                | -                | -         |     0.86 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            3 |     4230 | 2024-07-18 | Aurora            | L   | 0.180      | -            | -                | -                | -         |    -5.04 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            2 |     4308 | 2024-07-17 | Sangal            | L   | 0.173      | -            | -                | -                | -         |    -2.06 | alex666, cptkurtka023, esenthial, headtr1ck, npl |
|            1 |     4416 | 2024-07-15 | 9INE              | W   | 0.159      | -            | -                | -                | -         |     1.17 | alex666, cptkurtka023, esenthial, headtr1ck, npl |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($53,674.24)
- Divide that value by the 5th highest value among all rosters ($344,999.34)
- The final value (0.16) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-27 |      0.854 | $20,000.00     | $17,070.31      |
| 2024-10-20 |      0.807 | $15,000.00     | $12,104.63      |
| 2024-10-20 |      0.806 | $3,500.00      | $2,821.61       |
| 2024-10-06 |      0.714 | $2,000.00      | $1,428.17       |
| 2024-09-28 |      0.660 | $2,000.00      | $1,320.48       |
| 2024-09-08 |      0.527 | $22,000.00     | $11,589.75      |
| 2024-08-28 |      0.454 | $10,000.00     | $4,537.23       |
| 2024-08-11 |      0.339 | $5,000.00      | $1,694.78       |
| 2024-08-06 |      0.307 | $2,000.00      | $613.34         |
| 2024-07-28 |      0.247 | $2,000.00      | $493.92         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
