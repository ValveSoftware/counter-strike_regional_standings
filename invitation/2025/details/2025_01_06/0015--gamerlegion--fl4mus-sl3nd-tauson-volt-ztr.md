### Roster Details<br />
Team Name: GamerLegion<br />
Roster: FL4MUS, sl3nd, Tauson, volt, ztr<br />
Global Rank: [15](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_06.md)<br />
Regional Rank: [11]( ../../standings_europe_2025_01_06.md)<br />
<br />
Final Rank Value:  1363.7<br />
<br />
Final Rank Value (1363.7) = Starting Rank Value (1391.5) + Head To Head Adjustments (-27.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.581[<sup>1</sup>](#table2)
- Bounty Collected: 0.413[<sup>2</sup>](#table1)
- Opponent Network: 0.186[<sup>2</sup>](#table1)
- LAN Wins: 0.826[<sup>2</sup>](#table1)

The average of these factors is 0.502<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1391.5
- 400 + ( ( 0.502 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 1391.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           52 |      296 | 2024-12-06 | Natus Vincere     | L   | 0.997      | -            | -                | -                | -         |    -3.10 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           51 |      322 | 2024-12-05 | Wildcard          | W   | 0.991      | 1.000        | 0.133 (0.131)    | 0.507 (0.502)    | 1 (0.991) |    13.42 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           50 |      350 | 2024-12-05 | Liquid            | L   | 0.985      | -            | -                | -                | -         |    -5.55 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           49 |      359 | 2024-12-04 | Vitality          | L   | 0.983      | -            | -                | -                | -         |    -1.96 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           48 |      411 | 2024-12-02 | Passion UA        | W   | 0.965      | 0.143        | 0.115 (0.016)    | 0.885 (0.122)    | 1 (0.965) |     8.62 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           47 |      429 | 2024-12-01 | The MongolZ       | L   | 0.958      | -            | -                | -                | -         |    -2.02 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           46 |      455 | 2024-11-30 | paiN              | W   | 0.952      | 0.143        | 0.251 (0.034)    | -                | 1 (0.952) |    19.29 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           45 |      470 | 2024-11-29 | FURIA             | W   | 0.950      | 0.143        | 0.202 (0.027)    | -                | 1 (0.950) |    24.04 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           44 |      654 | 2024-11-20 | BetBoom           | W   | 0.887      | -            | -                | -                | 1 (0.887) |     8.98 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           43 |      655 | 2024-11-20 | SINNERS           | W   | 0.885      | -            | -                | -                | 1 (0.885) |     6.68 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           42 |      666 | 2024-11-19 | Falcons           | W   | 0.878      | -            | -                | -                | 1 (0.878) |     5.90 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           41 |      677 | 2024-11-18 | UNiTY             | W   | 0.872      | -            | -                | -                | 1 (0.872) |     3.13 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           40 |      702 | 2024-11-17 | ECLOT             | L   | 0.865      | -            | -                | -                | -         |   -17.82 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           39 |      710 | 2024-11-16 | Vitality          | L   | 0.863      | -            | -                | -                | -         |    -1.40 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           38 |     1475 | 2024-10-11 | GUN5              | L   | 0.620      | -            | -                | -                | -         |   -15.11 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           37 |     1600 | 2024-10-06 | Passion UA        | W   | 0.588      | 0.435        | 0.115 (0.029)    | 0.885 (0.226)    | 0 (0.000) |     5.89 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           36 |     1605 | 2024-10-06 | 9 Pandas          | W   | 0.587      | 0.435        | 0.108 (0.028)    | 0.754 (0.192)    | 0 (0.000) |     4.61 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           35 |     1632 | 2024-10-05 | B8                | W   | 0.581      | 0.435        | 0.162 (0.041)    | 0.556 (0.140)    | -         |     6.00 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           34 |     1670 | 2024-10-04 | DRILLAS           | W   | 0.574      | -            | -                | -                | -         |     1.43 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           33 |     1883 | 2024-09-28 | BetBoom           | L   | 0.534      | -            | -                | -                | -         |   -12.23 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           32 |     1887 | 2024-09-28 | Aurora            | W   | 0.533      | -            | -                | -                | -         |     2.19 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           31 |     1939 | 2024-09-27 | B8                | W   | 0.526      | 0.435        | 0.162 (0.037)    | 0.556 (0.127)    | -         |     4.74 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           30 |     1965 | 2024-09-26 | CPH Wolves        | W   | 0.521      | 0.435        | -                | 0.518 (0.117)    | -         |     1.32 | FL4MUS, sl3nd, Tauson, volt, ztr |
|           29 |     2333 | 2024-09-15 | SINNERS           | L   | 0.447      | -            | -                | -                | -         |   -10.78 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           28 |     2353 | 2024-09-15 | Gaimin Gladiators | W   | 0.446      | 0.435        | -                | 0.876 (0.170)    | -         |     1.85 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           27 |     2374 | 2024-09-14 | Zero Tenacity     | W   | 0.440      | 0.435        | 0.081 (0.016)    | 0.599 (0.114)    | -         |     3.13 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           26 |     2423 | 2024-09-13 | Monte Gen         | W   | 0.431      | -            | -                | -                | -         |     1.03 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           25 |     2509 | 2024-09-10 | Sashi             | L   | 0.413      | -            | -                | -                | -         |   -10.94 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           24 |     2539 | 2024-09-08 | B8                | L   | 0.401      | -            | -                | -                | -         |    -9.22 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           23 |     2550 | 2024-09-08 | Passion UA        | W   | 0.399      | 0.435        | 0.115 (0.020)    | 0.885 (0.153)    | -         |     3.69 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           22 |     2587 | 2024-09-07 | Monte             | W   | 0.392      | -            | -                | -                | -         |     2.07 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           21 |     2602 | 2024-09-06 | Endpoint          | W   | 0.387      | -            | -                | -                | -         |     0.99 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           20 |     2656 | 2024-09-05 | Into the Breach   | L   | 0.378      | -            | -                | -                | -         |   -10.93 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           19 |     2742 | 2024-09-02 | Cloud9            | L   | 0.359      | -            | -                | -                | -         |    -9.14 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           18 |     2791 | 2024-08-30 | Monte             | L   | 0.340      | -            | -                | -                | -         |    -9.13 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           17 |     2817 | 2024-08-29 | SAW               | L   | 0.334      | -            | -                | -                | -         |    -4.59 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           16 |     2831 | 2024-08-29 | Aurora            | W   | 0.333      | -            | -                | -                | -         |     0.92 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           15 |     3014 | 2024-08-26 | SINNERS           | L   | 0.313      | -            | -                | -                | -         |    -7.76 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           14 |     3033 | 2024-08-26 | EYEBALLERS        | W   | 0.312      | -            | -                | -                | -         |     0.34 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           13 |     3101 | 2024-08-23 | BIG               | L   | 0.295      | -            | -                | -                | -         |    -4.26 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           12 |     3104 | 2024-08-23 | UNPAID            | W   | 0.294      | -            | -                | -                | -         |     1.22 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           11 |     3115 | 2024-08-23 | PARIVISION        | L   | 0.293      | -            | -                | -                | -         |    -8.49 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|           10 |     3150 | 2024-08-22 | BC.Game           | W   | 0.285      | -            | -                | -                | -         |     0.56 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|            9 |     3191 | 2024-08-21 | TSM               | W   | 0.280      | -            | -                | -                | -         |     0.62 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|            8 |     3215 | 2024-08-21 | Rhyno             | L   | 0.279      | -            | -                | -                | -         |    -8.50 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|            7 |     3304 | 2024-08-18 | SINNERS           | L   | 0.259      | -            | -                | -                | -         |    -6.71 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|            6 |     3321 | 2024-08-17 | SINNERS           | W   | 0.254      | -            | -                | -                | -         |     1.42 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|            5 |     3324 | 2024-08-17 | 1WIN              | W   | 0.253      | -            | -                | -                | -         |     0.16 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|            4 |     3336 | 2024-08-17 | Zero Tenacity     | W   | 0.252      | -            | -                | -                | -         |     1.03 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|            3 |     3366 | 2024-08-15 | Aurora Young Blud | W   | 0.241      | -            | -                | -                | -         |     0.61 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|            2 |     3932 | 2024-07-30 | Falcons           | L   | 0.134      | -            | -                | -                | -         |    -3.78 | aNdu, FL4MUS, sl3nd, volt, ztr   |
|            1 |     3968 | 2024-07-29 | Vitality          | L   | 0.127      | -            | -                | -                | -         |    -0.32 | aNdu, FL4MUS, sl3nd, volt, ztr   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($50,426.14)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.19) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-15 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-10-06 |      0.588 | $22,000.00     | $12,932.99      |
| 2024-09-28 |      0.534 | $10,000.00     | $5,340.18       |
| 2024-09-15 |      0.447 | $10,000.00     | $4,473.82       |
| 2024-09-08 |      0.401 | $10,000.00     | $4,005.83       |
| 2024-08-25 |      0.308 | $5,000.00      | $1,538.13       |
| 2024-08-18 |      0.260 | $5,000.00      | $1,302.25       |
| 2024-08-04 |      0.167 | $5,000.00      | $832.95         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
