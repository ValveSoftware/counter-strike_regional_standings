### Roster Details<br />
Team Name: Nexus<br />
Roster: 7kick, BTN, Ciocardau, ragga, XELLOW<br />
Global Rank: [125](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [87]( ../standings_europe.md)<br />
<br />
Final Rank Value:  786.8<br />
<br />
Final Rank Value (786.8) = Starting Rank Value (843.5) + Head To Head Adjustments (-56.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.350[<sup>1</sup>](#table2)
- Bounty Collected: 0.360[<sup>2</sup>](#table1)
- Opponent Network: 0.149[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.215<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 843.5
- 400 + ( ( 0.215 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 843.5


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
|           64 |       24 | 2024-07-31 | EYEBALLERS        | W   | 1.000      | 0.143        | -                | 0.513 (0.073)    | 0 (0.000) |    15.56 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           63 |       92 | 2024-07-29 | Passion UA        | L   | 1.000      | -            | -                | -                | -         |    -4.82 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           62 |      223 | 2024-07-25 | kONO              | L   | 1.000      | -            | -                | -                | -         |   -13.75 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           61 |      367 | 2024-07-20 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -2.97 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           60 |      410 | 2024-07-19 | PERA              | W   | 1.000      | 0.333        | 0.048 (0.016)    | 0.452 (0.151)    | 0 (0.000) |    23.90 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           59 |      451 | 2024-07-18 | TSM               | W   | 1.000      | 0.333        | 0.039 (0.013)    | 0.345 (0.115)    | 0 (0.000) |    25.97 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           58 |      467 | 2024-07-18 | Rhyno             | L   | 1.000      | -            | -                | -                | -         |    -5.99 | 7kick, BTN, Ciocardau, Ed1m, ragga   |
|           57 |      544 | 2024-07-17 | ALTERNATE aTTaX   | L   | 1.000      | -            | -                | -                | -         |   -11.18 | 7kick, BTN, Ed1m, ragga, XELLOW      |
|           56 |      579 | 2024-07-16 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |    -0.33 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           55 |      638 | 2024-07-15 | SINNERS           | W   | 1.000      | 0.333        | 0.038 (0.013)    | 0.721 (0.240)    | 0 (0.000) |    24.77 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           54 |      649 | 2024-07-14 | kONO              | L   | 1.000      | -            | -                | -                | -         |   -10.40 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           53 |      669 | 2024-07-13 | Serbia            | W   | 1.000      | -            | -                | -                | 0 (0.000) |    18.26 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           52 |      710 | 2024-07-10 | kONO              | L   | 1.000      | -            | -                | -                | -         |   -10.12 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           51 |      742 | 2024-07-09 | Belarus           | W   | 1.000      | -            | -                | -                | 0 (0.000) |     4.13 | 7kick, BTN, Ciocardau, ragga, XELLOW |
|           50 |      980 | 2024-06-12 | Permitta          | L   | 0.873      | -            | -                | -                | -         |    -7.02 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           49 |     1005 | 2024-06-11 | FAVBET            | L   | 0.866      | -            | -                | -                | -         |   -10.89 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           48 |     1100 | 2024-06-09 | EYEBALLERS        | L   | 0.851      | -            | -                | -                | -         |    -7.60 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           47 |     1130 | 2024-06-08 | Enterprise        | L   | 0.846      | -            | -                | -                | -         |    -8.34 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           46 |     1203 | 2024-06-07 | Astralis Talent   | W   | 0.839      | -            | -                | -                | 0 (0.000) |    13.68 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           45 |     1213 | 2024-06-07 | 9INE              | L   | 0.838      | -            | -                | -                | -         |    -8.33 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           44 |     1235 | 2024-06-06 | 3DMAX             | L   | 0.834      | -            | -                | -                | -         |    -0.43 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           43 |     1333 | 2024-06-05 | BLEED             | L   | 0.825      | -            | -                | -                | -         |    -0.74 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           42 |     1573 | 2024-05-27 | The Prodigies     | L   | 0.767      | -            | -                | -                | -         |   -18.94 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           41 |     1584 | 2024-05-27 | MOUZ NXT          | L   | 0.764      | -            | -                | -                | -         |    -4.14 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           40 |     1618 | 2024-05-25 | Permitta          | L   | 0.751      | -            | -                | -                | -         |    -8.65 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           39 |     1647 | 2024-05-23 | RUBY              | L   | 0.739      | -            | -                | -                | -         |    -6.63 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           38 |     1759 | 2024-05-20 | ALTERNATE aTTaX   | W   | 0.720      | 0.435        | 0.032 (0.010)    | 0.564 (0.177)    | 0 (0.000) |    15.35 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           37 |     1765 | 2024-05-20 | PERA              | L   | 0.719      | -            | -                | -                | -         |    -6.84 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           36 |     1862 | 2024-05-17 | Passion UA        | L   | 0.698      | -            | -                | -                | -         |    -4.92 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           35 |     1953 | 2024-05-15 | Space             | L   | 0.684      | -            | -                | -                | -         |    -9.43 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           34 |     2028 | 2024-05-13 | Sampi             | L   | 0.671      | -            | -                | -                | -         |    -7.29 | BTN, Ciocardau, ERSIN, ragga, XELLOW |
|           33 |     2238 | 2024-05-03 | ENCE Academy      | L   | 0.604      | -            | -                | -                | -         |   -12.18 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           32 |     2283 | 2024-05-01 | Insilio           | L   | 0.591      | -            | -                | -                | -         |    -6.84 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           31 |     2315 | 2024-04-30 | fnatic            | L   | 0.583      | -            | -                | -                | -         |    -0.35 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           30 |     2320 | 2024-04-29 | Endpoint          | L   | 0.579      | -            | -                | -                | -         |    -7.58 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           29 |     2323 | 2024-04-29 | VP.Prodigy        | L   | 0.579      | -            | -                | -                | -         |    -8.55 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           28 |     2330 | 2024-04-29 | LEON              | W   | 0.578      | -            | -                | -                | 0 (0.000) |     5.45 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           27 |     2334 | 2024-04-29 | Enterprise        | W   | 0.577      | 0.384        | 0.040 (0.009)    | 0.622 (0.138)    | 0 (0.000) |    10.46 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           26 |     2351 | 2024-04-28 | brazylijski luz   | L   | 0.571      | -            | -                | -                | -         |    -9.14 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           25 |     2415 | 2024-04-25 | Metizport         | W   | 0.553      | 0.384        | 0.039 (0.008)    | 0.427 (0.091)    | -         |    11.43 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           24 |     2422 | 2024-04-25 | Grannys Knockers  | L   | 0.552      | -            | -                | -                | -         |   -10.73 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           23 |     2444 | 2024-04-24 | AMKAL             | L   | 0.545      | -            | -                | -                | -         |    -2.71 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           22 |     2465 | 2024-04-23 | Illuminar         | L   | 0.538      | -            | -                | -                | -         |   -14.33 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           21 |     2478 | 2024-04-22 | Zero Tenacity     | L   | 0.531      | -            | -                | -                | -         |    -3.93 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           20 |     2488 | 2024-04-21 | Young Ninjas      | W   | 0.527      | -            | -                | -                | -         |     6.40 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           19 |     2491 | 2024-04-21 | PARIVISION        | L   | 0.526      | -            | -                | -                | -         |    -4.40 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           18 |     2527 | 2024-04-20 | Permitta          | W   | 0.518      | 0.500        | -                | 0.799 (0.207)    | -         |    10.35 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           17 |     2596 | 2024-04-18 | Young Ninjas      | L   | 0.507      | -            | -                | -                | -         |    -9.84 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           16 |     2630 | 2024-04-18 | Enterprise        | L   | 0.504      | -            | -                | -                | -         |    -6.62 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           15 |     2827 | 2024-04-10 | B8                | W   | 0.452      | 0.384        | 0.168 (0.029)    | 0.879 (0.153)    | -         |    10.85 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           14 |     2970 | 2024-04-05 | SINNERS           | L   | 0.419      | -            | -                | -                | -         |    -3.36 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           13 |     3113 | 2024-04-01 | Sashi             | W   | 0.391      | 0.384        | 0.187 (0.028)    | 0.973 (0.146)    | -         |    10.24 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           12 |     3221 | 2024-03-25 | Sashi             | L   | 0.346      | -            | -                | -                | -         |    -1.76 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           11 |     3482 | 2024-03-12 | Nemiga            | W   | 0.260      | 0.372        | 0.325 (0.031)    | -                | -         |     7.05 | BTN, ERSIN, ragga, s0und, XELLOW     |
|           10 |     3504 | 2024-03-11 | RUBY              | W   | 0.253      | 0.372        | 0.097 (0.009)    | -                | -         |     5.07 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            9 |     3543 | 2024-03-09 | INGLORIOUS        | W   | 0.239      | -            | -                | -                | -         |     1.22 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            8 |     3569 | 2024-03-08 | FAVBET            | W   | 0.233      | -            | -                | -                | -         |     2.92 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            7 |     3716 | 2024-03-03 | TSM               | L   | 0.199      | -            | -                | -                | -         |    -4.47 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            6 |     3962 | 2024-02-20 | ex-Guild Eagles   | L   | 0.119      | -            | -                | -                | -         |    -1.96 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            5 |     3984 | 2024-02-19 | Monte             | L   | 0.113      | -            | -                | -                | -         |    -0.97 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            4 |     3989 | 2024-02-19 | Astralis          | L   | 0.111      | -            | -                | -                | -         |    -0.03 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            3 |     4289 | 2024-02-03 | 500               | L   | 0.006      | -            | -                | -                | -         |    -0.13 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            2 |     4291 | 2024-02-03 | Jake Bube         | W   | 0.006      | -            | -                | -                | -         |     0.01 | BTN, ERSIN, ragga, s0und, XELLOW     |
|            1 |     4300 | 2024-02-03 | North Macedonia   | L   | 0.005      | -            | -                | -                | -         |    -0.13 | BTN, ERSIN, ragga, s0und, XELLOW     |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($4,587.03)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      1.000 | $2,500.00      | $2,500.00       |
| 2024-05-02 |      0.599 | $1,000.00      | $599.33         |
| 2024-03-25 |      0.346 | $4,300.00      | $1,487.69       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
